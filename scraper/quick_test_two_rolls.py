import requests
from bs4 import BeautifulSoup
import urllib3
import re
import os
import sys

urllib3.disable_warnings()

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

url_current = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"
url_old = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"

rolls = ["231371028012", "231351139009"]

# Let's get all courses from current portal
r = s.get(url_current, verify=False)
soup = BeautifulSoup(r.text, 'html.parser')
ddl = soup.find('select', id='ddlCourse')
courses = []
for opt in ddl.find_all('option'):
    val = opt.get('value')
    txt = opt.text.strip()
    if val:
        courses.append((val, txt))

print(f"Total courses found: {len(courses)}", flush=True)

# For each roll, test all courses
for roll in rolls:
    print(f"\n=================== TESTING ROLL {roll} ===================", flush=True)
    for c_code, c_name in courses:
        # Get fresh form tokens
        r_page = s.get(url_current, verify=False, timeout=10)
        p_soup = BeautifulSoup(r_page.text, 'html.parser')
        data = {
            '__VIEWSTATE': p_soup.find('input', id='__VIEWSTATE')['value'] if p_soup.find('input', id='__VIEWSTATE') else '',
            '__VIEWSTATEGENERATOR': p_soup.find('input', id='__VIEWSTATEGENERATOR')['value'] if p_soup.find('input', id='__VIEWSTATEGENERATOR') else '',
            '__EVENTVALIDATION': p_soup.find('input', id='__EVENTVALIDATION')['value'] if p_soup.find('input', id='__EVENTVALIDATION') else '',
            'ddlCourse': c_code,
            'txtUniqueID': roll,
            'btnGetResult': 'View Result'
        }
        res = s.post(url_current, data=data, verify=False, timeout=10)
        res_soup = BeautifulSoup(res.text, 'html.parser')
        name_tag = res_soup.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            print(f"===> MATCH FOUND on Current Portal: Roll {roll} -> {name_tag.text.strip()} | Course: {c_code} ({c_name})", flush=True)
            with open(f"E:\\result of All eie\\{roll}_{c_code}.html", "w", encoding="utf-8") as f:
                f.write(res.text)

print("\nDone searching Current Portal!", flush=True)
