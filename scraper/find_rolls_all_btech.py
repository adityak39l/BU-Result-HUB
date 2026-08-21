import requests
from bs4 import BeautifulSoup
import urllib3
import re
import os

urllib3.disable_warnings()

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

url_curr = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"
url_old = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"

rolls = ["231371028012", "231351139009"]

# Specific B.Tech courses to check
btech_courses = [
    ("1030205", "B.Tech CSE Sem V"),
    ("1030206", "B.Tech CSE Sem VI"),
    ("1030203", "B.Tech CSE Sem III"),
    ("1030204", "B.Tech CSE Sem IV"),
    ("1028205", "B.Tech BME Sem V"),
    ("1028206", "B.Tech BME Sem VI"),
    ("1028203", "B.Tech BME Sem III"),
    ("1028204", "B.Tech BME Sem IV"),
    ("1139205", "B.Tech EIE Sem V"),
    ("1139206", "B.Tech EIE Sem VI"),
    ("1139203", "B.Tech EIE Sem III"),
    ("1139204", "B.Tech EIE Sem IV"),
    ("1031205", "B.Tech ECE Sem V"),
    ("1031206", "B.Tech ECE Sem VI"),
    ("1034205", "B.Tech ME Sem V"),
    ("1034206", "B.Tech ME Sem VI"),
    ("1029205", "B.Tech BT Sem V"),
    ("1029206", "B.Tech BT Sem VI"),
]

print("=== CHECKING frmViewCampusCurrentResult.aspx ===", flush=True)
for roll in rolls:
    for code, desc in btech_courses:
        r_page = s.get(url_curr, verify=False, timeout=10)
        p_soup = BeautifulSoup(r_page.text, 'html.parser')
        data = {
            '__VIEWSTATE': p_soup.find('input', id='__VIEWSTATE')['value'] if p_soup.find('input', id='__VIEWSTATE') else '',
            '__VIEWSTATEGENERATOR': p_soup.find('input', id='__VIEWSTATEGENERATOR')['value'] if p_soup.find('input', id='__VIEWSTATEGENERATOR') else '',
            '__EVENTVALIDATION': p_soup.find('input', id='__EVENTVALIDATION')['value'] if p_soup.find('input', id='__EVENTVALIDATION') else '',
            'ddlCourse': code,
            'txtUniqueID': roll,
            'btnGetResult': 'View Result'
        }
        res = s.post(url_curr, data=data, verify=False, timeout=10)
        res_soup = BeautifulSoup(res.text, 'html.parser')
        name_tag = res_soup.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            print(f"[FOUND CURRENT] Roll {roll} -> {name_tag.text.strip()} | {desc} (Code: {code})", flush=True)
            with open(f"E:\\result of All eie\\{roll}_{code}_current.html", "w", encoding="utf-8") as f:
                f.write(res.text)

print("\n=== CHECKING frmViewCampusResult.aspx (Old) ===", flush=True)
# First inspect sessions available on old portal
r_old = s.get(url_old, verify=False, timeout=10)
old_soup = BeautifulSoup(r_old.text, 'html.parser')
sessions = []
ddl_sess = old_soup.find('select', id=re.compile(r'ddlSession', re.I))
if ddl_sess:
    for opt in ddl_sess.find_all('option'):
        v = opt.get('value')
        if v:
            sessions.append(v)
print(f"Old portal sessions: {sessions}", flush=True)

for sess in sessions:
    for roll in rolls:
        for code, desc in btech_courses:
            # Need postback for ddlSession first if it's ASP.NET AutoPostBack
            r_page = s.get(url_old, verify=False, timeout=10)
            p_soup = BeautifulSoup(r_page.text, 'html.parser')
            
            # Post session
            data_sess = {
                '__VIEWSTATE': p_soup.find('input', id='__VIEWSTATE')['value'] if p_soup.find('input', id='__VIEWSTATE') else '',
                '__VIEWSTATEGENERATOR': p_soup.find('input', id='__VIEWSTATEGENERATOR')['value'] if p_soup.find('input', id='__VIEWSTATEGENERATOR') else '',
                '__EVENTVALIDATION': p_soup.find('input', id='__EVENTVALIDATION')['value'] if p_soup.find('input', id='__EVENTVALIDATION') else '',
                '__EVENTTARGET': 'ddlSession',
                'ddlSession': sess
            }
            res_sess = s.post(url_old, data=data_sess, verify=False, timeout=10)
            sess_soup = BeautifulSoup(res_sess.text, 'html.parser')
            
            data_res = {
                '__VIEWSTATE': sess_soup.find('input', id='__VIEWSTATE')['value'] if sess_soup.find('input', id='__VIEWSTATE') else '',
                '__VIEWSTATEGENERATOR': sess_soup.find('input', id='__VIEWSTATEGENERATOR')['value'] if sess_soup.find('input', id='__VIEWSTATEGENERATOR') else '',
                '__EVENTVALIDATION': sess_soup.find('input', id='__EVENTVALIDATION')['value'] if sess_soup.find('input', id='__EVENTVALIDATION') else '',
                'ddlSession': sess,
                'ddlCourse': code,
                'txtUniqueID': roll,
                'btnGetResult': 'View Result'
            }
            res = s.post(url_old, data=data_res, verify=False, timeout=10)
            res_soup = BeautifulSoup(res.text, 'html.parser')
            name_tag = res_soup.find('span', id='lblCandidateName')
            if name_tag and name_tag.text.strip():
                print(f"[FOUND OLD - {sess}] Roll {roll} -> {name_tag.text.strip()} | {desc} (Code: {code})", flush=True)
                with open(f"E:\\result of All eie\\{roll}_{code}_old_{sess.replace('/', '_')}.html", "w", encoding="utf-8") as f:
                    f.write(res.text)

print("\nAll checks completed!", flush=True)
