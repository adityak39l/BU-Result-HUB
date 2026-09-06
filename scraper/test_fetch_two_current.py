import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

rolls = ["231371028012", "231351139009"]
courses = [
    ("1030205", "B.Tech (Computer Science & Engg) V Semester", 5),
    ("1030206", "B.Tech (Computer Science & Engg) VI Semester", 6)
]

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

print("Fetching initial page...")
r1 = s.get(BASE_URL, verify=False, timeout=15)
soup1 = BeautifulSoup(r1.text, 'html.parser')

vs = soup1.find('input', id='__VIEWSTATE')['value'] if soup1.find('input', id='__VIEWSTATE') else ''
vsg = soup1.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup1.find('input', id='__VIEWSTATEGENERATOR') else ''
ev = soup1.find('input', id='__EVENTVALIDATION')['value'] if soup1.find('input', id='__EVENTVALIDATION') else ''

for course_code, course_name, sem_num in courses:
    print(f"\n=================== Testing Course: {course_name} ({course_code}) ===================")
    for roll in rolls:
        post_data = {
            '__VIEWSTATE': vs,
            '__VIEWSTATEGENERATOR': vsg,
            '__EVENTVALIDATION': ev,
            'ddlCourse': course_code,
            'txtUniqueID': roll,
            'ddlResultType': '',
            'btnGetResult': 'View Result'
        }
        
        try:
            resp = s.post(BASE_URL, data=post_data, verify=False, timeout=20)
            html = resp.text
            soup = BeautifulSoup(html, 'html.parser')
            
            name_tag = soup.find('span', id='lblCandidateName')
            father_tag = soup.find('span', id='lblFatherName')
            roll_tag = soup.find('span', id='lblRollNo')
            
            if name_tag and name_tag.text.strip():
                print(f"[FOUND] Roll: {roll} | Name: {name_tag.text.strip()} | Father: {father_tag.text.strip() if father_tag else 'N/A'}")
                # Print subjects
                subs = []
                for tr in soup.find_all('tr'):
                    tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
                    if len(tds) == 13 and tds[0] and 'NAME OF' not in tds[0]:
                        subs.append((tds[0], tds[10], tds[12]))
                print(f"  Subjects ({len(subs)}):", subs[:3], "...")
            else:
                print(f"[NOT FOUND on Current Portal] Roll: {roll} in {course_name}")
        except Exception as e:
            print(f"[ERROR] Roll: {roll} -> {e}")
