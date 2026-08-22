import requests
from bs4 import BeautifulSoup
import urllib3
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

url = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"

print("Fetching initial page...")
r1 = s.get(url, verify=False, timeout=15)
soup1 = BeautifulSoup(r1.text, 'html.parser')

d1 = {
    '__VIEWSTATE': soup1.find('input', id='__VIEWSTATE')['value'] if soup1.find('input', id='__VIEWSTATE') else '',
    '__VIEWSTATEGENERATOR': soup1.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup1.find('input', id='__VIEWSTATEGENERATOR') else '',
    '__EVENTVALIDATION': soup1.find('input', id='__EVENTVALIDATION')['value'] if soup1.find('input', id='__EVENTVALIDATION') else '',
    '__EVENTTARGET': 'ddlSession',
    'ddlSession': '2024-25'
}

print("Posting ddlSession = 2024-25...")
r2 = s.post(url, data=d1, verify=False, timeout=15)
soup2 = BeautifulSoup(r2.text, 'html.parser')

ddl_course = soup2.find('select', id='ddlCourse')
if ddl_course:
    print("\nAvailable courses for Session 2024-25:")
    for opt in ddl_course.find_all('option'):
        val = opt.get('value', '')
        txt = opt.text.strip()
        if 'Computer' in txt or 'CSE' in txt or '1030' in val:
            print(f"  Code: {val} -> {txt}")
else:
    print("ddlCourse not found!")
