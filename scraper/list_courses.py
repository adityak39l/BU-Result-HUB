import requests
from bs4 import BeautifulSoup
import urllib3
urllib3.disable_warnings()

s = requests.Session()
r = s.get("https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx", verify=False)
soup = BeautifulSoup(r.text, 'html.parser')
ddl = soup.find('select', id='ddlCourse')

print("--- Courses on Current Result ---")
for opt in ddl.find_all('option'):
    val = opt.get('value')
    txt = opt.text.strip()
    if 'B.Tech' in txt or '1030' in val or '1139' in val or '1028' in val:
        print(f"Code: {val} -> {txt}")

r2 = s.get("https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA", verify=False)
soup2 = BeautifulSoup(r2.text, 'html.parser')
ddl2 = soup2.find('select', id='ddlCourse')
print("\n--- Courses on Campus Result (Old) ---")
if ddl2:
    for opt in ddl2.find_all('option'):
        val = opt.get('value')
        txt = opt.text.strip()
        if 'B.Tech' in txt or '1030' in val or '1139' in val or '1028' in val:
            print(f"Code: {val} -> {txt}")
