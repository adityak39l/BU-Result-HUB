import requests
from bs4 import BeautifulSoup
import urllib3
import re
import os

urllib3.disable_warnings()

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

url_current = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"
url_old = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"

rolls = ["231371028012", "231351139009"]
courses = [
    ("1030205", "B.Tech CSE Sem V"),
    ("1030206", "B.Tech CSE Sem VI"),
    ("1028205", "B.Tech BME Sem V"),
    ("1028206", "B.Tech BME Sem VI"),
    ("1139205", "B.Tech EIE Sem V"),
    ("1139206", "B.Tech EIE Sem VI"),
    ("1028203", "B.Tech BME Sem III"),
    ("1028204", "B.Tech BME Sem IV"),
    ("1139203", "B.Tech EIE Sem III"),
    ("1139204", "B.Tech EIE Sem IV"),
    ("1030203", "B.Tech CSE Sem III"),
    ("1030204", "B.Tech CSE Sem IV")
]

def query_portal(url, roll, c_code, session_name=None):
    try:
        r = s.get(url, verify=False, timeout=15)
        soup = BeautifulSoup(r.text, 'html.parser')
        form_data = {inp.get('name'): inp.get('value', '') for inp in soup.find_all('input') if inp.get('name')}
        
        form_data['ddlCourse'] = c_code
        form_data['txtUniqueID'] = roll
        form_data['btnGetResult'] = 'View Result'
        if session_name and 'ddlSession' in r.text:
            form_data['ddlSession'] = session_name
            
        res = s.post(url, data=form_data, verify=False, timeout=20)
        res_soup = BeautifulSoup(res.text, 'html.parser')
        name_tag = res_soup.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            return True, name_tag.text.strip(), res.text
        return False, None, res.text
    except Exception as e:
        return False, str(e), None

print("=== CHECKING frmViewCampusCurrentResult.aspx ===")
for roll in rolls:
    for c_code, c_desc in courses:
        ok, name, html = query_portal(url_current, roll, c_code)
        if ok:
            print(f"FOUND CURRENT: Roll {roll} -> {name} in {c_desc} (Code: {c_code})")
            fname = f"E:\\result of All eie\\{roll}_{c_code}.html"
            with open(fname, "w", encoding="utf-8") as f:
                f.write(html)
            # Also save to CSE_sem_V / VI if requested
            if "Sem V" in c_desc:
                with open(f"E:\\result of All eie\\CSE_sem_V\\{roll}_sem_V.html", "w", encoding="utf-8") as f:
                    f.write(html)
            if "Sem VI" in c_desc:
                with open(f"E:\\result of All eie\\CSE_sem_VI\\{roll}_sem_VI.html", "w", encoding="utf-8") as f:
                    f.write(html)

print("\n=== CHECKING frmViewCampusResult.aspx (Old) ===")
for roll in rolls:
    for c_code, c_desc in courses:
        for sess in ["2024-2025", "2023-2024", "2025-2026"]:
            ok, name, html = query_portal(url_old, roll, c_code, session_name=sess)
            if ok:
                print(f"FOUND OLD ({sess}): Roll {roll} -> {name} in {c_desc} (Code: {c_code})")
