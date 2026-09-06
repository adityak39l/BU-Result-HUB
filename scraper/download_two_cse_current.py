import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys
import re

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

DIR_V = r"E:\result of All eie\CSE_sem_V"
DIR_VI = r"E:\result of All eie\CSE_sem_VI"

os.makedirs(DIR_V, exist_ok=True)
os.makedirs(DIR_VI, exist_ok=True)

targets = [
    {
        "roll": "231371028012",
        "course_code": "1030205",
        "course_name": "B.Tech (Computer Science & Engg) V Semester",
        "target_dir": DIR_V,
        "sem": 5,
        "filenames": ["231371028012.html", "231371028012_CSE_sem_V.html"]
    },
    {
        "roll": "231351139009",
        "course_code": "1030205",
        "course_name": "B.Tech (Computer Science & Engg) V Semester",
        "target_dir": DIR_V,
        "sem": 5,
        "filenames": ["231351139009.html", "231351139009_CSE_sem_V.html"]
    },
    {
        "roll": "231371028012",
        "course_code": "1030206",
        "course_name": "B.Tech (Computer Science & Engg) VI Semester",
        "target_dir": DIR_VI,
        "sem": 6,
        "filenames": ["231371028012.html", "231371028012_CSE_sem_VI.html"]
    },
    {
        "roll": "231351139009",
        "course_code": "1030206",
        "course_name": "B.Tech (Computer Science & Engg) VI Semester",
        "target_dir": DIR_VI,
        "sem": 6,
        "filenames": ["231351139009.html", "231351139009_CSE_sem_VI.html"]
    }
]

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

print("1. Connecting to portal...")
r1 = s.get(BASE_URL, verify=False, timeout=15)
soup1 = BeautifulSoup(r1.text, 'html.parser')

vs = soup1.find('input', id='__VIEWSTATE')['value'] if soup1.find('input', id='__VIEWSTATE') else ''
vsg = soup1.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup1.find('input', id='__VIEWSTATEGENERATOR') else ''
ev = soup1.find('input', id='__EVENTVALIDATION')['value'] if soup1.find('input', id='__EVENTVALIDATION') else ''

print("2. Downloading marksheets...")

for t in targets:
    roll = t['roll']
    course_code = t['course_code']
    course_name = t['course_name']
    target_dir = t['target_dir']
    
    post_data = {
        '__VIEWSTATE': vs,
        '__VIEWSTATEGENERATOR': vsg,
        '__EVENTVALIDATION': ev,
        'ddlCourse': course_code,
        'txtUniqueID': roll,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }
    
    resp = s.post(BASE_URL, data=post_data, verify=False, timeout=20)
    html = resp.text
    
    soup = BeautifulSoup(html, 'html.parser')
    name_tag = soup.find('span', id='lblCandidateName')
    father_tag = soup.find('span', id='lblFatherName')
    mother_tag = soup.find('span', id='lblMotherName')
    enroll_tag = soup.find('span', id='lblEnrollmentNo')
    
    # Save to all target filenames
    for fn in t['filenames']:
        fp = os.path.join(target_dir, fn)
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"  [SAVED] {fp}")
        
    print(f"  -> Roll: {roll} | Name: {name_tag.text if name_tag else 'N/A'} | Father: {father_tag.text if father_tag else 'N/A'} | Sem: {t['sem']}")

print("\nDone downloading marksheets!")
