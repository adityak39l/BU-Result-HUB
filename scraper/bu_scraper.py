"""
Bundelkhand University (BU Jhansi) B.Tech Result Scraper
Extracts semester examination results from exam.bujhansi.ac.in
Official 7 B.Tech Branches: EIE, BME, ECE, CSE, ME, BTE, FTE
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import sys
import argparse

BU_RESULT_URL = "https://exam.bujhansi.ac.in/GetResult.aspx"

# Official 7 B.Tech Branch Codes for BU Jhansi (IET)
BRANCH_MAP = {
  "01": "CSE",  # Computer Science & Engineering
  "02": "ECE",  # Electronics & Communication Engineering
  "03": "EIE",  # Electronics & Instrumentation Engineering
  "04": "BME",  # Biomedical Engineering
  "05": "ME",   # Mechanical Engineering
  "06": "BTE",  # Biotechnology Engineering
  "07": "FTE"   # Food Technology Engineering
}

def fetch_result(roll_no, sem=5):
    """
    Fetches student result HTML from BU Jhansi portal and parses structured data
    """
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": BU_RESULT_URL
    }

    payload = {
        "txtRollNo": str(roll_no),
        "btnSearch": "Search"
    }

    print(f"[*] Fetching result for Roll No: {roll_no} ...")

    try:
        response = requests.post(BU_RESULT_URL, data=payload, headers=headers, timeout=10)
        if response.status_code != 200:
            print(f"[!] Server returned status code {response.status_code}")
            return None

        soup = BeautifulSoup(response.text, 'html.parser')

        # Check if result found
        student_name_el = soup.find(id="lblStudentName") or soup.find(id="lblCandidateName")
        if not student_name_el:
            print(f"[-] No result found for roll number: {roll_no}")
            return None

        student_name = student_name_el.text.strip()
        branch_name = (soup.find(id="lblBranch") or soup.find(id="lblCourse")).text.strip()
        sgpa_str = (soup.find(id="lblSGPA") or soup.find(id="lblSPI")).text.strip()

        try:
            sgpa = float(sgpa_str)
        except ValueError:
            sgpa = 0.0

        # Extract marks table
        subjects = []
        marks_table = soup.find("table", {"id": "dgvMarks"}) or soup.find("table", {"class": "table"})
        
        if marks_table:
            rows = marks_table.find_all("tr")[1:] # Skip header
            for row in rows:
                cols = [c.text.strip() for c in row.find_all(["td", "th"])]
                if len(cols) >= 4:
                    subjects.append({
                        "code": cols[0],
                        "name": cols[1],
                        "marks": cols[2],
                        "grade": cols[3]
                    })

        student_data = {
            "rollNo": str(roll_no),
            "name": student_name,
            "branch": branch_name,
            "sgpa": sgpa,
            "subjects": subjects
        }

        print(f"[+] Successfully parsed: {student_name} | SGPA: {sgpa}")
        return student_data

    except Exception as e:
        print(f"[!] Error fetching roll no {roll_no}: {e}")
        return None

def main():
    parser = argparse.ArgumentParser(description="BU Jhansi B.Tech Result Scraper")
    parser.add_argument("--start", type=int, default=210010501001, help="Start Roll Number")
    parser.add_argument("--end", type=int, default=210010501020, help="End Roll Number")
    parser.add_argument("--output", type=str, default="../lib/scraped_data.json", help="Output JSON path")
    args = parser.parse_args()

    all_results = []
    for roll in range(args.start, args.end + 1):
        data = fetch_result(roll)
        if data:
            all_results.append(data)
        time.sleep(0.5) # Courtesy delay between requests

    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(all_results, f, indent=2, ensure_ascii=False)

    print(f"\n[✓] Scraping Complete! Saved {len(all_results)} records to {args.output}")

if __name__ == "__main__":
    main()
