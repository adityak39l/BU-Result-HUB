import os
import re
import json
import time
import requests
from bs4 import BeautifulSoup

URL = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
START_ROLL = 231411029001
END_ROLL = 231411029020

os.makedirs("scraper/data/sem3", exist_ok=True)
os.makedirs("scraper/data/sem4", exist_ok=True)

def get_session_and_tokens():
    s = requests.Session()
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": URL
    }
    r = s.get(URL, headers=headers, timeout=20)
    soup = BeautifulSoup(r.text, 'html.parser')

    vs = soup.find('input', {'name': '__VIEWSTATE'})['value']
    vsg = soup.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    ev = soup.find('input', {'name': '__EVENTVALIDATION'})['value']

    # Postback to activate session 2024-25
    p1 = {
        '__EVENTTARGET': 'ddlSession',
        '__EVENTARGUMENT': '',
        '__VIEWSTATE': vs,
        '__VIEWSTATEGENERATOR': vsg,
        '__EVENTVALIDATION': ev,
        'ddlSession': '2024-25',
        'txtUniqueID': '',
        'ddlResultType': '0'
    }
    r1 = s.post(URL, data=p1, headers=headers, timeout=20)
    soup1 = BeautifulSoup(r1.text, 'html.parser')

    vs1 = soup1.find('input', {'name': '__VIEWSTATE'})['value']
    vsg1 = soup1.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    ev1 = soup1.find('input', {'name': '__EVENTVALIDATION'})['value']

    return s, headers, vs1, vsg1, ev1

def parse_marksheet_table(soup, sem_num):
    info = {
        "rollNo": "",
        "enrollNo": "",
        "name": "",
        "fatherName": "",
        "motherName": "",
        "examCategory": "REGULAR",
        "courseName": f"B.TECH (BIOTECHNOLOGY ENGG) SEMESTER {sem_num}",
        "sem": sem_num,
        "sgpa": 0.0,
        "resultStatus": "PASSED",
        "subjects": []
    }

    for span_id, key in [
        ("lblRollNo", "rollNo"),
        ("lblenrollNo", "enrollNo"),
        ("lblCandidateName", "name"),
        ("lblFatherName", "fatherName"),
        ("lblMotherName", "motherName"),
        ("lblExamCat", "examCategory"),
        ("lblCourseName", "courseName"),
    ]:
        el = soup.find(id=span_id)
        if el and el.text.strip():
            info[key] = el.text.strip()

    if not info["name"] or not info["rollNo"]:
        return None

    tables = soup.find_all("table")
    if len(tables) < 4:
        return None

    t3 = tables[3]
    rows = t3.find_all("tr", recursive=False)

    subjects = []
    for r_idx, row in enumerate(rows):
        cells = [c.text.strip().replace("\n", " ") for c in row.find_all(["td", "th"], recursive=False)]
        row_text = " ".join(cells)

        if "SGPA" in row_text:
            sgpa_match = re.search(r"SGPA\s+([0-9\.]+)", row_text)
            if sgpa_match:
                try:
                    info["sgpa"] = float(sgpa_match.group(1))
                except:
                    pass

        if "RESULT" in row_text:
            if "PASSED" in row_text:
                info["resultStatus"] = "PASSED"
            elif "PROMOTED" in row_text:
                info["resultStatus"] = "PROMOTED"
            elif "BACK" in row_text:
                info["resultStatus"] = "BACK PAPER"
            elif "FAILED" in row_text:
                info["resultStatus"] = "FAILED"

        if len(cells) >= 11:
            sub_name = cells[0].strip()
            if sub_name and not any(h in sub_name for h in ["NAME OF PAPER", "Max.", "Credit Max", "RESULT", "ROLL NUMBER", "PRACTICAL", "Result Declared"]):
                ext_marks = ""
                int_marks = ""
                tot_marks = ""
                credit = 3
                grade = "A"

                if cells[2] and cells[2].isdigit():
                    ext_marks = cells[2]
                if cells[4] and cells[4].isdigit():
                    int_marks = cells[4]

                if not ext_marks and len(cells) > 8 and cells[8] and cells[8].isdigit():
                    ext_marks = cells[8]
                if not int_marks and len(cells) > 4 and cells[4] and cells[4].isdigit():
                    int_marks = cells[4]

                for c_idx in [10, 6, 8, 4, 2]:
                    if len(cells) > c_idx and cells[c_idx] and cells[c_idx].isdigit():
                        tot_marks = cells[c_idx]
                        break

                for c in cells[-3:]:
                    c_clean = c.strip()
                    if c_clean.isdigit() and int(c_clean) in [1, 2, 3, 4, 5]:
                        credit = int(c_clean)
                    elif re.match(r"^\d+\.\d{2}[A-Z\+]*$", c_clean):
                        grade = re.sub(r"^\d+\.\d{2}", "", c_clean) or "A"
                    elif c_clean in ["O", "A+", "A", "B+", "B", "C", "P", "F"]:
                        grade = c_clean

                internal_str = f"Int: {int_marks} / 50" if int_marks else "Int: --"
                external_str = f"Ext: {ext_marks} / 100" if ext_marks else "Ext: --"
                total_max = "150" if credit >= 3 else ("100" if "LAB" in sub_name or "PRACTICAL" in sub_name else "50")
                total_str = f"Tot: {tot_marks} / {total_max}" if tot_marks else "Tot: --"

                code_slug = re.sub(r"[^A-Z0-9]", "-", sub_name.upper())[:12]
                subjects.append({
                    "code": code_slug,
                    "name": sub_name,
                    "internalStr": internal_str,
                    "externalStr": external_str,
                    "totalStr": total_str,
                    "grade": grade,
                    "credit": credit
                })

    info["subjects"] = subjects
    return info

def fetch_with_retry(roll_str, sem_code, sem_num, max_retries=3):
    for attempt in range(1, max_retries + 1):
        try:
            s, headers, vs, vsg, ev = get_session_and_tokens()
            p2 = {
                '__EVENTTARGET': '',
                '__EVENTARGUMENT': '',
                '__VIEWSTATE': vs,
                '__VIEWSTATEGENERATOR': vsg,
                '__EVENTVALIDATION': ev,
                'ddlSession': '2024-25',
                'ddlCourse': sem_code,
                'txtUniqueID': roll_str,
                'ddlResultType': '',
                'btnGetResult': 'View Result'
            }
            r = s.post(URL, data=p2, headers=headers, timeout=25)
            soup = BeautifulSoup(r.text, 'html.parser')
            data = parse_marksheet_table(soup, sem_num)
            return data
        except Exception as e:
            print(f"  Attempt {attempt} error roll {roll_str} (Sem {sem_num}): {e}")
            time.sleep(1)
    return None

def main():
    sem3_all = []
    sem4_all = []

    print(f"[*] Scraping Session 2024-25 BTE (Rolls {START_ROLL} to {END_ROLL})...")

    for roll in range(START_ROLL, END_ROLL + 1):
        roll_str = str(roll)
        print(f"\nProcessing Roll: {roll_str}")

        # Sem 3 (Code: 1029203)
        d3 = fetch_with_retry(roll_str, '1029203', 3)
        if d3:
            print(f"  [Sem 3] {d3['name']} | SGPA: {d3['sgpa']} | {len(d3['subjects'])} subjects")
            sem3_all.append(d3)
        else:
            print(f"  [Sem 3] Not found or not enrolled.")

        time.sleep(0.3)

        # Sem 4 (Code: 1029204)
        d4 = fetch_with_retry(roll_str, '1029204', 4)
        if d4:
            print(f"  [Sem 4] {d4['name']} | SGPA: {d4['sgpa']} | {len(d4['subjects'])} subjects")
            sem4_all.append(d4)
        else:
            print(f"  [Sem 4] Not found or not enrolled.")

        time.sleep(0.3)

    # Save to separate folders
    with open("scraper/data/sem3/bte_sem3.json", "w", encoding="utf-8") as f:
        json.dump(sem3_all, f, indent=2, ensure_ascii=False)

    with open("scraper/data/sem4/bte_sem4.json", "w", encoding="utf-8") as f:
        json.dump(sem4_all, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] Completed! Sem 3: {len(sem3_all)} records | Sem 4: {len(sem4_all)} records")

if __name__ == "__main__":
    main()
