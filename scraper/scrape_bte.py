import os
import re
import json
import time
import requests
from bs4 import BeautifulSoup

URL = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": URL
}

START_ROLL = 231411029001
END_ROLL = 231411029020

# Create output directories for Sem 5 and Sem 6
os.makedirs("scraper/data/sem5", exist_ok=True)
os.makedirs("scraper/data/sem6", exist_ok=True)

def parse_marksheet(soup, sem_num):
    info = {}
    for span_id, key in [
        ("lblRollNo", "rollNo"),
        ("lblenrollNo", "enrollNo"),
        ("lblCandidateName", "name"),
        ("lblFatherName", "fatherName"),
        ("lblMotherName", "motherName"),
        ("lblExamCat", "examCategory"),
        ("lblCourseName", "courseName"),
        ("lblCollegeName", "collegeName"),
        ("lbldecdate", "declaredDate"),
    ]:
        el = soup.find(id=span_id)
        if el:
            info[key] = el.text.strip()

    if not info.get("name"):
        return None

    # Find subjects in marks table
    subjects = []
    sgpa = 0.0
    result_status = "PASSED"

    # Search for marks table
    for table in soup.find_all("table"):
        text = table.text
        if "NAME OF PAPER" in text or "ANALYTICAL TECHNIQUES" in text or "BIOINFORMATICS" in text:
            rows = table.find_all("tr")
            for row in rows:
                cols = [c.text.strip().replace("\n", " ") for c in row.find_all(["td", "th"]) if c.text.strip()]
                if not cols:
                    continue
                
                # Check for SGPA / result summary
                row_str = " ".join(cols)
                if "SGPA" in row_str:
                    sgpa_match = re.search(r"SGPA\s+([0-9\.]+)", row_str)
                    if sgpa_match:
                        try:
                            sgpa = float(sgpa_match.group(1))
                        except:
                            pass
                if "RESULT" in row_str:
                    if "PASSED" in row_str:
                        result_status = "PASSED"
                    elif "PROMOTED" in row_str:
                        result_status = "PROMOTED"
                    elif "FAILED" in row_str:
                        result_status = "FAILED"

                # Parse actual subject lines
                # Usually subject rows have credit & grade at the end, e.g. credit: 3, grade: '6.00B' or '7.00B+'
                if len(cols) >= 6 and not any(h in cols[0] for h in ["NAME OF PAPER", "Max.", "Credit Max", "RESULT", "ROLL NUMBER", "PRACTICAL"]):
                    sub_name = cols[0].strip()
                    if sub_name and not sub_name.startswith("Result"):
                        # Extract credit and grade
                        credit = 3
                        grade = "A"
                        internal_str = "Int: 40 / 50"
                        external_str = "Ext: 60 / 100"
                        total_str = "Tot: 100 / 150"

                        # Parse cols
                        # Format: [sub_name, '100 40', '60', '50 20', '24', '15060', '84', '150 60', '84', '3', '6.00B']
                        # Or for labs: [sub_name, '50 20', '47', '75 30', '73', '125 50', '120', '3', '10.00O']
                        for c in cols:
                            if re.match(r"^\d+\.\d{2}[A-Z\+]*$", c):
                                grade = re.sub(r"^\d+\.\d{2}", "", c) or "A"
                            elif c in ["O", "A+", "A", "B+", "B", "C", "P", "F"]:
                                grade = c

                        # Find credit (usually single digit before grade)
                        for c in cols[-3:]:
                            if c.isdigit() and int(c) in [1, 2, 3, 4, 5]:
                                credit = int(c)

                        # Find marks obtained
                        marks_obt = [c for c in cols if c.isdigit() and int(c) > 10]
                        if marks_obt:
                            tot_obt = marks_obt[-1]
                            total_str = f"Tot: {tot_obt} / 150" if credit >= 3 else f"Tot: {tot_obt} / 100"

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

    info["sem"] = sem_num
    info["sgpa"] = sgpa
    info["resultStatus"] = result_status
    info["subjects"] = subjects
    return info

def main():
    s = requests.Session()
    r = s.get(URL, headers=HEADERS)
    soup = BeautifulSoup(r.text, 'html.parser')

    viewstate = soup.find('input', {'name': '__VIEWSTATE'})['value']
    viewstategen = soup.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    eventvalidation = soup.find('input', {'name': '__EVENTVALIDATION'})['value']

    sem5_results = []
    sem6_results = []

    print(f"[*] Starting BTE Scraping for Roll Nos: {START_ROLL} to {END_ROLL}...")

    for roll in range(START_ROLL, END_ROLL + 1):
        roll_str = str(roll)
        print(f"\n---> Fetching Roll: {roll_str}...")

        # 1. Fetch Sem 5 (Course code: 1029205)
        try:
            p5 = {
                '__EVENTTARGET': '',
                '__EVENTARGUMENT': '',
                '__VIEWSTATE': viewstate,
                '__VIEWSTATEGENERATOR': viewstategen,
                '__EVENTVALIDATION': eventvalidation,
                'txtUniqueID': roll_str,
                'ddlCourse': '1029205',
                'ddlResultType': '',
                'btnGetResult': 'View Result'
            }
            r5 = s.post(URL, data=p5, headers=HEADERS, timeout=15)
            soup5 = BeautifulSoup(r5.text, 'html.parser')
            d5 = parse_marksheet(soup5, 5)
            if d5:
                print(f"  [Sem 5] Found: {d5['name']} | SGPA: {d5['sgpa']} | Subs: {len(d5['subjects'])}")
                sem5_results.append(d5)
            else:
                print(f"  [Sem 5] No result found.")
        except Exception as e:
            print(f"  [Sem 5 Error]: {e}")

        time.sleep(0.3)

        # 2. Fetch Sem 6 (Course code: 1029206)
        try:
            p6 = {
                '__EVENTTARGET': '',
                '__EVENTARGUMENT': '',
                '__VIEWSTATE': viewstate,
                '__VIEWSTATEGENERATOR': viewstategen,
                '__EVENTVALIDATION': eventvalidation,
                'txtUniqueID': roll_str,
                'ddlCourse': '1029206',
                'ddlResultType': '',
                'btnGetResult': 'View Result'
            }
            r6 = s.post(URL, data=p6, headers=HEADERS, timeout=15)
            soup6 = BeautifulSoup(r6.text, 'html.parser')
            d6 = parse_marksheet(soup6, 6)
            if d6:
                print(f"  [Sem 6] Found: {d6['name']} | SGPA: {d6['sgpa']} | Subs: {len(d6['subjects'])}")
                sem6_results.append(d6)
            else:
                print(f"  [Sem 6] No result found.")
        except Exception as e:
            print(f"  [Sem 6 Error]: {e}")

        time.sleep(0.3)

    # Save to separate folders
    with open("scraper/data/sem5/bte_sem5.json", "w", encoding="utf-8") as f:
        json.dump(sem5_results, f, indent=2, ensure_ascii=False)

    with open("scraper/data/sem6/bte_sem6.json", "w", encoding="utf-8") as f:
        json.dump(sem6_results, f, indent=2, ensure_ascii=False)

    print(f"\n[✓] Finished! Saved {len(sem5_results)} records in scraper/data/sem5/ and {len(sem6_results)} in scraper/data/sem6/")

if __name__ == "__main__":
    main()
