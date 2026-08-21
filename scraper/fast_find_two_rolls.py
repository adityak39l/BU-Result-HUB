import requests
from bs4 import BeautifulSoup
import urllib3
import sys

urllib3.disable_warnings()

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

url_old = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
url_curr = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

rolls = ["231371028012", "231351139009"]

def check_old_portal(sess, course, roll):
    try:
        r1 = s.get(url_old, verify=False, timeout=10)
        sp1 = BeautifulSoup(r1.text, 'html.parser')
        
        d_sess = {
            '__VIEWSTATE': sp1.find('input', id='__VIEWSTATE')['value'],
            '__VIEWSTATEGENERATOR': sp1.find('input', id='__VIEWSTATEGENERATOR')['value'],
            '__EVENTVALIDATION': sp1.find('input', id='__EVENTVALIDATION')['value'],
            '__EVENTTARGET': 'ddlSession',
            'ddlSession': sess
        }
        r2 = s.post(url_old, data=d_sess, verify=False, timeout=10)
        sp2 = BeautifulSoup(r2.text, 'html.parser')
        
        d_res = {
            '__VIEWSTATE': sp2.find('input', id='__VIEWSTATE')['value'],
            '__VIEWSTATEGENERATOR': sp2.find('input', id='__VIEWSTATEGENERATOR')['value'],
            '__EVENTVALIDATION': sp2.find('input', id='__EVENTVALIDATION')['value'],
            'ddlSession': sess,
            'ddlCourse': course,
            'txtUniqueID': roll,
            'btnGetResult': 'View Result'
        }
        r3 = s.post(url_old, data=d_res, verify=False, timeout=10)
        sp3 = BeautifulSoup(r3.text, 'html.parser')
        name_tag = sp3.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            return True, name_tag.text.strip(), r3.text
        return False, None, None
    except Exception as e:
        return False, str(e), None

def check_curr_portal(course, roll):
    try:
        r1 = s.get(url_curr, verify=False, timeout=10)
        sp1 = BeautifulSoup(r1.text, 'html.parser')
        d = {
            '__VIEWSTATE': sp1.find('input', id='__VIEWSTATE')['value'],
            '__VIEWSTATEGENERATOR': sp1.find('input', id='__VIEWSTATEGENERATOR')['value'],
            '__EVENTVALIDATION': sp1.find('input', id='__EVENTVALIDATION')['value'],
            'ddlCourse': course,
            'txtUniqueID': roll,
            'btnGetResult': 'View Result'
        }
        r2 = s.post(url_curr, data=d, verify=False, timeout=10)
        sp2 = BeautifulSoup(r2.text, 'html.parser')
        name_tag = sp2.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            return True, name_tag.text.strip(), r2.text
        return False, None, None
    except Exception as e:
        return False, str(e), None

# Get all courses from old portal for 2024-25 and 2023-24
r_init = s.get(url_old, verify=False)
sp_init = BeautifulSoup(r_init.text, 'html.parser')
d_s = {
    '__VIEWSTATE': sp_init.find('input', id='__VIEWSTATE')['value'],
    '__VIEWSTATEGENERATOR': sp_init.find('input', id='__VIEWSTATEGENERATOR')['value'],
    '__EVENTVALIDATION': sp_init.find('input', id='__EVENTVALIDATION')['value'],
    '__EVENTTARGET': 'ddlSession',
    'ddlSession': '2024-25'
}
r_courses = s.post(url_old, data=d_s, verify=False)
sp_courses = BeautifulSoup(r_courses.text, 'html.parser')
courses_dict = {}
for opt in sp_courses.find('select', id='ddlCourse').find_all('option'):
    if opt.get('value'):
        courses_dict[opt.get('value')] = opt.text.strip()

print(f"Loaded {len(courses_dict)} courses from old portal.")

# Test specific courses for each roll
target_courses = [k for k, v in courses_dict.items() if 'B.Tech' in v or any(w in v for w in ['Computer', 'Electronics', 'Biomedical', 'Instrumentation', 'Mechanical'])]

print(f"Target B.Tech courses to search ({len(target_courses)} courses):")
for k in target_courses:
    print(f"  {k} -> {courses_dict[k]}")

for roll in rolls:
    print(f"\n================ SEARCHING FOR {roll} ================")
    # 1. Current portal
    for c in target_courses:
        ok, name, html = check_curr_portal(c, roll)
        if ok:
            print(f"[CURRENT PORTAL FOUND] Roll: {roll} -> {name} | Course: {courses_dict.get(c, c)} ({c})")
            with open(f"E:\\result of All eie\\{roll}_{c}_CURRENT.html", "w", encoding="utf-8") as f:
                f.write(html)
                
    # 2. Old portal Sessions
    for sess in ['2024-25', '2023-24', '2022-23']:
        for c in target_courses:
            ok, name, html = check_old_portal(sess, c, roll)
            if ok:
                print(f"[OLD PORTAL {sess} FOUND] Roll: {roll} -> {name} | Course: {courses_dict.get(c, c)} ({c})")
                with open(f"E:\\result of All eie\\{roll}_{c}_OLD_{sess}.html", "w", encoding="utf-8") as f:
                    f.write(html)

print("\n=== ALL SEARCHES COMPLETED ===")
