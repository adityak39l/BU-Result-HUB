import requests
from bs4 import BeautifulSoup
import urllib3
import re

urllib3.disable_warnings()

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

url = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"

# 1. Initial GET
r1 = s.get(url, verify=False)
soup1 = BeautifulSoup(r1.text, 'html.parser')

def get_tokens(soup):
    return {
        '__VIEWSTATE': soup.find('input', id='__VIEWSTATE')['value'] if soup.find('input', id='__VIEWSTATE') else '',
        '__VIEWSTATEGENERATOR': soup.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup.find('input', id='__VIEWSTATEGENERATOR') else '',
        '__EVENTVALIDATION': soup.find('input', id='__EVENTVALIDATION')['value'] if soup.find('input', id='__EVENTVALIDATION') else ''
    }

# 2. Select Session 2024-25
tokens = get_tokens(soup1)
data_sess = {
    **tokens,
    '__EVENTTARGET': 'ddlSession',
    '__EVENTARGUMENT': '',
    '__LASTFOCUS': '',
    'ddlSession': '2024-25'
}
r2 = s.post(url, data=data_sess, verify=False)
soup2 = BeautifulSoup(r2.text, 'html.parser')

ddl_course = soup2.find('select', id='ddlCourse')
courses = {}
if ddl_course:
    for opt in ddl_course.find_all('option'):
        val = opt.get('value')
        txt = opt.text.strip()
        if val:
            courses[val] = txt

print(f"Courses loaded for Session 2024-25 ({len(courses)} courses):")
for val, txt in courses.items():
    if 'B.Tech' in txt or any(k in txt for k in ['Computer', 'Electronics', 'Biomedical', 'Mechanical']):
        print(f"  {val} -> {txt}")

def query_student(sess_val, course_val, roll_val):
    # Step A: GET
    rA = s.get(url, verify=False)
    spA = BeautifulSoup(rA.text, 'html.parser')
    tokA = get_tokens(spA)
    
    # Step B: Select Session
    dataB = {
        **tokA,
        '__EVENTTARGET': 'ddlSession',
        'ddlSession': sess_val
    }
    rB = s.post(url, data=dataB, verify=False)
    spB = BeautifulSoup(rB.text, 'html.parser')
    tokB = get_tokens(spB)
    
    # Step C: Submit Result
    dataC = {
        **tokB,
        'ddlSession': sess_val,
        'ddlCourse': course_val,
        'txtUniqueID': roll_val,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }
    rC = s.post(url, data=dataC, verify=False)
    spC = BeautifulSoup(rC.text, 'html.parser')
    name = spC.find('span', id='lblCandidateName')
    if name and name.text.strip():
        return True, name.text.strip(), rC.text
    return False, None, rC.text

test_rolls = ["231371028012", "231351139009"]
print("\n--- Testing rolls on Session 2024-25 ---")
for roll in test_rolls:
    for c_val, c_txt in courses.items():
        if 'B.Tech' in c_txt:
            ok, name, html = query_student('2024-25', c_val, roll)
            if ok:
                print(f"===> MATCH (2024-25): Roll {roll} -> {name} in {c_txt} (Code: {c_val})")
                with open(f"E:\\result of All eie\\{roll}_{c_val}_2024-25.html", "w", encoding="utf-8") as f:
                    f.write(html)

# Also check Session 2023-24
print("\n--- Testing rolls on Session 2023-24 ---")
for roll in test_rolls:
    for c_val, c_txt in courses.items():
        if 'B.Tech' in c_txt:
            ok, name, html = query_student('2023-24', c_val, roll)
            if ok:
                print(f"===> MATCH (2023-24): Roll {roll} -> {name} in {c_txt} (Code: {c_val})")
                with open(f"E:\\result of All eie\\{roll}_{c_val}_2023-24.html", "w", encoding="utf-8") as f:
                    f.write(html)
