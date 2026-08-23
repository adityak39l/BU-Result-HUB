import requests
from bs4 import BeautifulSoup
import urllib3
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
SESSION = "2024-25"

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

print("Fetching initial portal page...")
r1 = s.get(BASE_URL, verify=False, timeout=15)
soup1 = BeautifulSoup(r1.text, 'html.parser')

d1 = {
    '__VIEWSTATE': soup1.find('input', id='__VIEWSTATE')['value'] if soup1.find('input', id='__VIEWSTATE') else '',
    '__VIEWSTATEGENERATOR': soup1.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup1.find('input', id='__VIEWSTATEGENERATOR') else '',
    '__EVENTVALIDATION': soup1.find('input', id='__EVENTVALIDATION')['value'] if soup1.find('input', id='__EVENTVALIDATION') else '',
    '__EVENTTARGET': 'ddlSession',
    'ddlSession': SESSION
}

print(f"Selecting Session: {SESSION}...")
r2 = s.post(BASE_URL, data=d1, verify=False, timeout=15)
soup2 = BeautifulSoup(r2.text, 'html.parser')

course_select = soup2.find('select', id='ddlCourse')
if course_select:
    print("\nAvailable Courses under Session 2024-25:")
    options = course_select.find_all('option')
    for opt in options:
        val = opt.get('value', '')
        txt = opt.text.strip()
        if 'biomedical' in txt.lower() or 'bme' in txt.lower() or 'b.tech' in txt.lower():
            print(f"  Code: {val:<15} | Name: {txt}")
else:
    print("Could not find ddlCourse select element!")
