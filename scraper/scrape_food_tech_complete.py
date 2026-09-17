import os
import re
import json
import time
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

URL_ARCHIVE = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
URL_CURRENT = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

START_ROLL = 231401140001
END_ROLL = 231401140030

# Ensure dedicated semester folders exist
os.makedirs("scraper/data/sem3", exist_ok=True)
os.makedirs("scraper/data/sem4", exist_ok=True)
os.makedirs("scraper/data/sem5", exist_ok=True)
os.makedirs("scraper/data/sem6", exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def parse_marksheet_table(soup, sem_num):
    info = {
        "rollNo": "",
        "enrollNo": "",
        "name": "",
        "fatherName": "",
        "motherName": "",
        "examCategory": "REGULAR",
        "courseName": f"B.TECH (FOOD ENGG. AND TECHNOLOGY) SEMESTER {sem_num}",
        "sem": sem_num,
        "sgpa": 0.0,
        "resultStatus": "PASSED",
        "subjects": []
    }

    # Extract student personal info
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

def fetch_archive_sem(roll_str, sem_code, sem_num, vs1, vsg1, ev1, max_retries=3):
    p2_data = urllib.parse.urlencode({
        '__EVENTTARGET': '',
        '__EVENTARGUMENT': '',
        '__VIEWSTATE': vs1,
        '__VIEWSTATEGENERATOR': vsg1,
        '__EVENTVALIDATION': ev1,
        'ddlSession': '2024-25',
        'ddlCourse': sem_code,
        'txtUniqueID': roll_str,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }).encode('utf-8')
    
    for attempt in range(1, max_retries + 1):
        try:
            req = urllib.request.Request(URL_ARCHIVE, data=p2_data, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as resp:
                html = resp.read().decode('utf-8')
                soup = BeautifulSoup(html, 'html.parser')
                data = parse_marksheet_table(soup, sem_num)
                return data
        except Exception as e:
            if attempt == max_retries:
                print(f"    [Error] Sem {sem_num} Roll {roll_str}: {e}", flush=True)
            time.sleep(1)
    return None

def fetch_current_sem(roll_str, sem_code, sem_num, vs, vsg, ev, max_retries=3):
    p_data = urllib.parse.urlencode({
        '__EVENTTARGET': '',
        '__EVENTARGUMENT': '',
        '__VIEWSTATE': vs,
        '__VIEWSTATEGENERATOR': vsg,
        '__EVENTVALIDATION': ev,
        'ddlCourse': sem_code,
        'txtUniqueID': roll_str,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }).encode('utf-8')
    
    for attempt in range(1, max_retries + 1):
        try:
            req = urllib.request.Request(URL_CURRENT, data=p_data, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as resp:
                html = resp.read().decode('utf-8')
                soup = BeautifulSoup(html, 'html.parser')
                data = parse_marksheet_table(soup, sem_num)
                return data
        except Exception as e:
            if attempt == max_retries:
                print(f"    [Error] Sem {sem_num} Roll {roll_str}: {e}", flush=True)
            time.sleep(1)
    return None

def main():
    print("=================================================================", flush=True)
    print("  BU JHANSI FOOD TECHNOLOGY (FT) SCRAPER - SEM III, IV, V, VI", flush=True)
    print(f"  Roll Range: {START_ROLL} to {END_ROLL}", flush=True)
    print("=================================================================\n", flush=True)

    # -------------------------------------------------------------
    # STEP 1: Scrape Sem 3 & Sem 4 from Portal 1 (Session 2024-25)
    # -------------------------------------------------------------
    print(">>> STEP 1: Initializing Portal 1 (Session 2024-25 Archive)...", flush=True)
    req0 = urllib.request.Request(URL_ARCHIVE, headers=headers)
    with urllib.request.urlopen(req0, timeout=30) as resp0:
        soup0 = BeautifulSoup(resp0.read().decode('utf-8'), 'html.parser')
    vs0 = soup0.find('input', {'name': '__VIEWSTATE'})['value']
    vsg0 = soup0.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    ev0 = soup0.find('input', {'name': '__EVENTVALIDATION'})['value']

    p1_data = urllib.parse.urlencode({
        '__EVENTTARGET': 'ddlSession',
        '__EVENTARGUMENT': '',
        '__VIEWSTATE': vs0,
        '__VIEWSTATEGENERATOR': vsg0,
        '__EVENTVALIDATION': ev0,
        'ddlSession': '2024-25',
        'txtUniqueID': '',
        'ddlResultType': '0'
    }).encode('utf-8')

    req1 = urllib.request.Request(URL_ARCHIVE, data=p1_data, headers=headers)
    with urllib.request.urlopen(req1, timeout=30) as resp1:
        soup1 = BeautifulSoup(resp1.read().decode('utf-8'), 'html.parser')
    vs1 = soup1.find('input', {'name': '__VIEWSTATE'})['value']
    vsg1 = soup1.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    ev1 = soup1.find('input', {'name': '__EVENTVALIDATION'})['value']
    print(">>> Portal 1 (Session 2024-25) Initialized Successfully!\n", flush=True)

    # -------------------------------------------------------------
    # STEP 2: Scrape Sem 5 & Sem 6 from Portal 2 (Session 2025-26)
    # -------------------------------------------------------------
    print(">>> STEP 2: Initializing Portal 2 (Session 2025-26 Current)...", flush=True)
    req2 = urllib.request.Request(URL_CURRENT, headers=headers)
    with urllib.request.urlopen(req2, timeout=30) as resp2:
        soup2 = BeautifulSoup(resp2.read().decode('utf-8'), 'html.parser')
    vs2 = soup2.find('input', {'name': '__VIEWSTATE'})['value']
    vsg2 = soup2.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    ev2 = soup2.find('input', {'name': '__EVENTVALIDATION'})['value']
    print(">>> Portal 2 (Session 2025-26) Initialized Successfully!\n", flush=True)

    sem3_list = []
    sem4_list = []
    sem5_list = []
    sem6_list = []

    for roll in range(START_ROLL, END_ROLL + 1):
        roll_str = str(roll)
        print(f"--- Processing Roll: {roll_str} ---", flush=True)

        # Sem 3 (Code: 1140203)
        d3 = fetch_archive_sem(roll_str, '1140203', 3, vs1, vsg1, ev1)
        if d3:
            print(f"  [Sem 3] {d3['name']} | SGPA: {d3['sgpa']} | {len(d3['subjects'])} Subs | Status: {d3['resultStatus']}", flush=True)
            sem3_list.append(d3)
        else:
            print(f"  [Sem 3] Not Found / Enrolled", flush=True)

        # Sem 4 (Code: 1140204)
        d4 = fetch_archive_sem(roll_str, '1140204', 4, vs1, vsg1, ev1)
        if d4:
            print(f"  [Sem 4] {d4['name']} | SGPA: {d4['sgpa']} | {len(d4['subjects'])} Subs | Status: {d4['resultStatus']}", flush=True)
            sem4_list.append(d4)
        else:
            print(f"  [Sem 4] Not Found / Enrolled", flush=True)

        # Sem 5 (Code: 1140205)
        d5 = fetch_current_sem(roll_str, '1140205', 5, vs2, vsg2, ev2)
        if d5:
            print(f"  [Sem 5] {d5['name']} | SGPA: {d5['sgpa']} | {len(d5['subjects'])} Subs | Status: {d5['resultStatus']}", flush=True)
            sem5_list.append(d5)
        else:
            print(f"  [Sem 5] Not Found / Enrolled", flush=True)

        # Sem 6 (Code: 1140206)
        d6 = fetch_current_sem(roll_str, '1140206', 6, vs2, vsg2, ev2)
        if d6:
            print(f"  [Sem 6] {d6['name']} | SGPA: {d6['sgpa']} | {len(d6['subjects'])} Subs | Status: {d6['resultStatus']}", flush=True)
            sem6_list.append(d6)
        else:
            print(f"  [Sem 6] Not Found / Enrolled", flush=True)

        time.sleep(0.2)

    # -------------------------------------------------------------
    # STEP 3: Save to individual semester folders
    # -------------------------------------------------------------
    print("\n>>> STEP 3: Saving Raw Results into Dedicated Semester Folders...", flush=True)

    with open("scraper/data/sem3/ft_sem3.json", "w", encoding="utf-8") as f:
        json.dump(sem3_list, f, indent=2, ensure_ascii=False)
    print(f"  [SAVED] scraper/data/sem3/ft_sem3.json ({len(sem3_list)} students)", flush=True)

    with open("scraper/data/sem4/ft_sem4.json", "w", encoding="utf-8") as f:
        json.dump(sem4_list, f, indent=2, ensure_ascii=False)
    print(f"  [SAVED] scraper/data/sem4/ft_sem4.json ({len(sem4_list)} students)", flush=True)

    with open("scraper/data/sem5/ft_sem5.json", "w", encoding="utf-8") as f:
        json.dump(sem5_list, f, indent=2, ensure_ascii=False)
    print(f"  [SAVED] scraper/data/sem5/ft_sem5.json ({len(sem5_list)} students)", flush=True)

    with open("scraper/data/sem6/ft_sem6.json", "w", encoding="utf-8") as f:
        json.dump(sem6_list, f, indent=2, ensure_ascii=False)
    print(f"  [SAVED] scraper/data/sem6/ft_sem6.json ({len(sem6_list)} students)", flush=True)

    print("\n=================================================================", flush=True)
    print(f"  SCRAPING COMPLETE: Sem3={len(sem3_list)}, Sem4={len(sem4_list)}, Sem5={len(sem5_list)}, Sem6={len(sem6_list)}", flush=True)
    print("=================================================================", flush=True)

if __name__ == "__main__":
    main()
