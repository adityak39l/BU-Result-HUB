import requests
from bs4 import BeautifulSoup
import urllib3
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"

s = requests.Session()
s.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

r1 = s.get(BASE_URL, verify=False)
soup1 = BeautifulSoup(r1.text, 'html.parser')

d1 = {
    '__VIEWSTATE': soup1.find('input', id='__VIEWSTATE')['value'],
    '__VIEWSTATEGENERATOR': soup1.find('input', id='__VIEWSTATEGENERATOR')['value'],
    '__EVENTVALIDATION': soup1.find('input', id='__EVENTVALIDATION')['value'],
    '__EVENTTARGET': 'ddlSession',
    'ddlSession': '2024-25'
}
r2 = s.post(BASE_URL, data=d1, verify=False)
soup2 = BeautifulSoup(r2.text, 'html.parser')

vs = soup2.find('input', id='__VIEWSTATE')['value']
vsg = soup2.find('input', id='__VIEWSTATEGENERATOR')['value']
ev = soup2.find('input', id='__EVENTVALIDATION')['value']

print("Checking BME Sem VI on portal for all rolls...")
for i in range(1, 12):
    roll = f"2313710280{i:02d}"
    post_data = {
        '__VIEWSTATE': vs,
        '__VIEWSTATEGENERATOR': vsg,
        '__EVENTVALIDATION': ev,
        'ddlSession': '2024-25',
        'ddlCourse': '1028206', # BME Sem VI
        'txtUniqueID': roll,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }
    resp = s.post(BASE_URL, data=post_data, verify=False)
    sp = BeautifulSoup(resp.text, 'html.parser')
    name_tag = sp.find('span', id='lblCandidateName')
    if name_tag and name_tag.text.strip():
        print(f"  [FOUND] Roll: {roll} | Name: {name_tag.text.strip()}")
    else:
        print(f"  [NOT FOUND] Roll: {roll}")
