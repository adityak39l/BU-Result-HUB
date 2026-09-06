import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys

urllib3.disable_warnings()

BASE_URL_CURRENT = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

s = requests.Session()
s.headers.update({'User-Agent': 'Mozilla/5.0'})
r1 = s.get(BASE_URL_CURRENT, verify=False)
soup1 = BeautifulSoup(r1.text, 'html.parser')

viewstate = soup1.find('input', id='__VIEWSTATE')['value']
viewstategen = soup1.find('input', id='__VIEWSTATEGENERATOR')['value']
eventval = soup1.find('input', id='__EVENTVALIDATION')['value']

courses = [
    ("1034205", "ME Sem V", r"E:\result of All eie\ME_sem_V"),
    ("1034206", "ME Sem VI", r"E:\result of All eie\ME_sem_VI")
]

all_rolls = ['231391034002', '231391034003', '231391034004', '231391034005', '231391034006', '231391034007', '231391034008', '231391034009', '231391034010', '231391034011', '231391034012', '231391034013', '231391034015', '231391034016', '231391034017', '231391034018', '231391034020', '231391034021', '231391034023', '231391034024', '241391034501']

for code, name, tdir in courses:
    os.makedirs(tdir, exist_ok=True)
    existing_files = os.listdir(tdir)
    existing_rolls = set(f.split('.')[0].split('_')[0] for f in existing_files if f.endswith('.html'))
    print(f"\nChecking {name} (Already has {len(existing_rolls)} files)...")
    
    for roll in all_rolls:
        post_data = {
            '__VIEWSTATE': viewstate,
            '__VIEWSTATEGENERATOR': viewstategen,
            '__EVENTVALIDATION': eventval,
            'ddlCourse': code,
            'txtUniqueID': roll,
            'ddlResultType': '',
            'btnGetResult': 'View Result'
        }
        resp = s.post(BASE_URL_CURRENT, data=post_data, verify=False, timeout=20)
        soup = BeautifulSoup(resp.text, 'html.parser')
        name_tag = soup.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            candidate_name = name_tag.text.strip()
            dest_file = os.path.join(tdir, f"{roll}_{name.replace(' ', '_')}.html")
            with open(dest_file, 'w', encoding='utf-8') as f:
                f.write(resp.text)
            print(f"  [FOUND] {roll} -> {candidate_name} (Saved to {dest_file})")
        else:
            if roll in existing_rolls:
                print(f"  [NOT FOUND on portal currently, but exists locally] {roll}")
            else:
                print(f"  [NOT FOUND] {roll}")
