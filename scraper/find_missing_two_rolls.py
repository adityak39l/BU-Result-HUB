import requests
from bs4 import BeautifulSoup
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

urls = [
    "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx",
    "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
]

rolls = ["231371028012", "231351139009"]

# Let's inspect available courses on frmViewCampusCurrentResult.aspx
r = session.get("https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx", verify=False)
soup = BeautifulSoup(r.text, 'html.parser')

ddl = soup.find('select', id=re.compile(r'ddlCourse', re.I))
courses = {}
if ddl:
    for opt in ddl.find_all('option'):
        val = opt.get('value', '').strip()
        txt = opt.text.strip()
        if val:
            courses[val] = txt

print("Found courses on frmViewCampusCurrentResult.aspx:")
for k, v in courses.items():
    if any(term in v for term in ['Computer', 'Electronics', '1030', '1139', '1028']):
        print(f"  {k}: {v}")

def check_and_download(url, roll, course_code, out_path):
    try:
        res = session.get(url, verify=False, timeout=15)
        sp = BeautifulSoup(res.text, 'html.parser')
        
        form_data = {}
        for inp in sp.find_all('input'):
            name = inp.get('name')
            val = inp.get('value', '')
            if name:
                form_data[name] = val
                
        form_data['ddlCourse'] = course_code
        form_data['txtUniqueID'] = roll
        form_data['btnGetResult'] = 'View Result'
        
        # If year/session needed on frmViewCampusResult.aspx
        if 'ddlSession' in res.text:
            form_data['ddlSession'] = '2024-2025'
            
        post_res = session.post(url, data=form_data, verify=False, timeout=20)
        post_soup = BeautifulSoup(post_res.text, 'html.parser')
        
        name_tag = post_soup.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            c_name = name_tag.text.strip()
            print(f"[SUCCESS] Roll {roll} with course {course_code} -> Found: {c_name}")
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(post_res.text)
            return True, c_name
        else:
            # Check if there is any result table
            if 'lblRollNo' in post_res.text or 'lblCandidateName' in post_res.text:
                print(f"[CHECK] Roll {roll} with course {course_code} -> Has tags but empty name")
            return False, None
    except Exception as e:
        print(f"[ERROR] {roll} with {course_code}: {e}")
        return False, None

# Test both rolls against CSE Sem V (1030205) and CSE Sem VI (1030206), plus any matching course codes
test_courses = ['1030205', '1030206']
# Also check if other course codes exist
for k, v in courses.items():
    if k not in test_courses:
        test_courses.append(k)

for roll in rolls:
    print(f"\n--- Checking Roll {roll} ---")
    for c_code in test_courses:
        c_name_desc = courses.get(c_code, c_code)
        # Try Current Result
        found, name = check_and_download("https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx", roll, c_code, f"E:\\result of All eie\\test_{roll}_{c_code}.html")
        if found:
            print(f"===> MATCH on CurrentResult: {roll} | Course: {c_code} ({c_name_desc}) | Name: {name}")
            
        # Try Old/Campus Result
        found_old, name_old = check_and_download("https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA", roll, c_code, f"E:\\result of All eie\\test_old_{roll}_{c_code}.html")
        if found_old:
            print(f"===> MATCH on OldCampusResult: {roll} | Course: {c_code} ({c_name_desc}) | Name: {name_old}")
