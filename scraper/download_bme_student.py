import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import os
import json

URL = 'https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx'
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

print("=== FETCHING BME SEMESTER VI RESULT FOR ROLL: 231371028009 ===")

req = urllib.request.Request(URL, headers=HEADERS)
with urllib.request.urlopen(req, timeout=30) as resp:
    html = resp.read().decode('utf-8')

soup = BeautifulSoup(html, 'html.parser')
vs = soup.find('input', {'name': '__VIEWSTATE'})['value']
vsg = soup.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
ev = soup.find('input', {'name': '__EVENTVALIDATION'})['value']

post_data = urllib.parse.urlencode({
    '__EVENTTARGET': '',
    '__EVENTARGUMENT': '',
    '__VIEWSTATE': vs,
    '__VIEWSTATEGENERATOR': vsg,
    '__EVENTVALIDATION': ev,
    'ddlCourse': '1028206',
    'txtUniqueID': '231371028009',
    'ddlResultType': '',
    'btnGetResult': 'View Result'
}).encode('utf-8')

post_req = urllib.request.Request(URL, data=post_data, headers=HEADERS)
with urllib.request.urlopen(post_req, timeout=30) as resp2:
    res_html = resp2.read().decode('utf-8')

target_folder = r'E:\result of All eie\BME_sem_VI'
os.makedirs(target_folder, exist_ok=True)
target_path = os.path.join(target_folder, '231371028009_BME_sem_VI.html')

with open(target_path, 'w', encoding='utf-8') as f:
    f.write(res_html)

print(f"\n[OK] Successfully Saved Raw HTML to:\n  {target_path} ({len(res_html)} bytes)\n")

# Parse HTML Marksheet details
sp = BeautifulSoup(res_html, 'html.parser')

fields = {
    'Roll Number': 'lblRollNo',
    'Enrollment Number': 'lblenrollNo',
    'Candidate Name': 'lblCandidateName',
    'Father Name': 'lblFatherName',
    'Mother Name': 'lblMotherName',
    'Exam Category': 'lblExamCat',
    'Course Name': 'lblCourseName',
}

print("--- STUDENT PROFILE DETAILS ---")
for label, span_id in fields.items():
    el = sp.find(id=span_id)
    val = el.text.strip() if el else "Not Found"
    print(f"  {label:20s}: {val}")

tables = sp.find_all('table')
print(f"\nTotal Tables in Marksheet: {len(tables)}")

if len(tables) >= 4:
    print("\n--- MARKSHEET SUBJECT BREAKDOWN TABLE ---")
    rows = tables[3].find_all('tr')
    for r_idx, tr in enumerate(rows):
        cells = [c.text.strip().replace('\n', ' ') for c in tr.find_all(['td', 'th'])]
        print(f"Row {r_idx:2d}: {' | '.join(cells)}")
