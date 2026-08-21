import requests
from bs4 import BeautifulSoup
import urllib3
import re
import sys

urllib3.disable_warnings()

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

rolls = ["231371028012", "231351139009"]

# All possible course codes for Semester 5 and Semester 6 in BU Jhansi
sem5_6_courses = [
    ("1030205", "B.Tech CSE V Sem"),
    ("1030206", "B.Tech CSE VI Sem"),
    ("1028205", "B.Tech BME V Sem"),
    ("1028206", "B.Tech BME VI Sem"),
    ("1139205", "B.Tech EIE V Sem"),
    ("1139206", "B.Tech EIE VI Sem"),
    ("1031205", "B.Tech ECE V Sem"),
    ("1031206", "B.Tech ECE VI Sem"),
    ("1034205", "B.Tech ME V Sem"),
    ("1034206", "B.Tech ME VI Sem"),
    ("1029205", "B.Tech BT V Sem"),
    ("1029206", "B.Tech BT VI Sem"),
    ("1140205", "B.Tech Food V Sem"),
    ("1140206", "B.Tech Food VI Sem"),
]

# 1. Check frmViewCampusCurrentResult.aspx
print("=== 1. Checking frmViewCampusCurrentResult.aspx ===", flush=True)
url_curr = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

for roll in rolls:
    for code, desc in sem5_6_courses:
        r1 = s.get(url_curr, verify=False, timeout=10)
        sp1 = BeautifulSoup(r1.text, 'html.parser')
        d = {
            '__VIEWSTATE': sp1.find('input', id='__VIEWSTATE')['value'] if sp1.find('input', id='__VIEWSTATE') else '',
            '__VIEWSTATEGENERATOR': sp1.find('input', id='__VIEWSTATEGENERATOR')['value'] if sp1.find('input', id='__VIEWSTATEGENERATOR') else '',
            '__EVENTVALIDATION': sp1.find('input', id='__EVENTVALIDATION')['value'] if sp1.find('input', id='__EVENTVALIDATION') else '',
            'ddlCourse': code,
            'txtUniqueID': roll,
            'btnGetResult': 'View Result'
        }
        r2 = s.post(url_curr, data=d, verify=False, timeout=10)
        sp2 = BeautifulSoup(r2.text, 'html.parser')
        name = sp2.find('span', id='lblCandidateName')
        if name and name.text.strip():
            print(f"===> [FOUND ON CURRENT] {roll} -> {name.text.strip()} | {desc} (Code: {code})", flush=True)
            with open(f"E:\\result of All eie\\{roll}_{code}_CURRENT.html", "w", encoding="utf-8") as f:
                f.write(r2.text)

# 2. Check frmViewCampusResult.aspx (Old) with all sessions
print("\n=== 2. Checking frmViewCampusResult.aspx across all sessions ===", flush=True)
url_old = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"

sessions_to_check = ['2025-26', '2024-25', '2023-24', '2022-23']

for sess in sessions_to_check:
    print(f"\nChecking Session: {sess}...", flush=True)
    for roll in rolls:
        for code, desc in sem5_6_courses:
            r1 = s.get(url_old, verify=False, timeout=10)
            sp1 = BeautifulSoup(r1.text, 'html.parser')
            d1 = {
                '__VIEWSTATE': sp1.find('input', id='__VIEWSTATE')['value'] if sp1.find('input', id='__VIEWSTATE') else '',
                '__VIEWSTATEGENERATOR': sp1.find('input', id='__VIEWSTATEGENERATOR')['value'] if sp1.find('input', id='__VIEWSTATEGENERATOR') else '',
                '__EVENTVALIDATION': sp1.find('input', id='__EVENTVALIDATION')['value'] if sp1.find('input', id='__EVENTVALIDATION') else '',
                '__EVENTTARGET': 'ddlSession',
                'ddlSession': sess
            }
            r2 = s.post(url_old, data=d1, verify=False, timeout=10)
            sp2 = BeautifulSoup(r2.text, 'html.parser')
            d2 = {
                '__VIEWSTATE': sp2.find('input', id='__VIEWSTATE')['value'] if sp2.find('input', id='__VIEWSTATE') else '',
                '__VIEWSTATEGENERATOR': sp2.find('input', id='__VIEWSTATEGENERATOR')['value'] if sp2.find('input', id='__VIEWSTATEGENERATOR') else '',
                '__EVENTVALIDATION': sp2.find('input', id='__EVENTVALIDATION')['value'] if sp2.find('input', id='__EVENTVALIDATION') else '',
                'ddlSession': sess,
                'ddlCourse': code,
                'txtUniqueID': roll,
                'ddlResultType': '',
                'btnGetResult': 'View Result'
            }
            r3 = s.post(url_old, data=d2, verify=False, timeout=10)
            sp3 = BeautifulSoup(r3.text, 'html.parser')
            name = sp3.find('span', id='lblCandidateName')
            if name and name.text.strip():
                print(f"===> [FOUND ON OLD {sess}] {roll} -> {name.text.strip()} | {desc} (Code: {code})", flush=True)
                with open(f"E:\\result of All eie\\{roll}_{code}_OLD_{sess}.html", "w", encoding="utf-8") as f:
                    f.write(r3.text)

print("\nFinished checking all Sem 5 & Sem 6 possibilities!", flush=True)
