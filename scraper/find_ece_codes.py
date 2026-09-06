import requests
from bs4 import BeautifulSoup
import urllib3
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

r = s.get(BASE_URL, verify=False, timeout=15)
soup = BeautifulSoup(r.text, 'html.parser')

course_dd = soup.find('select', id='ddlCourse')
if course_dd:
    print("Available ECE Courses in Current Result Portal:")
    for opt in course_dd.find_all('option'):
        txt = opt.text.strip()
        val = opt.get('value', '')
        if 'electronics & communication' in txt.lower() or '10312' in val:
            print(f"  Code: {val:<12} | Name: {txt}")
