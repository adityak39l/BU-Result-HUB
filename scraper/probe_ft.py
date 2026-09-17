import os
import re
import json
import time
import requests
from bs4 import BeautifulSoup

URL_ARCHIVE = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
URL_CURRENT = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def get_archive_tokens():
    s = requests.Session()
    r = s.get(URL_ARCHIVE, headers=headers, timeout=20)
    soup = BeautifulSoup(r.text, 'html.parser')
    vs = soup.find('input', {'name': '__VIEWSTATE'})['value']
    vsg = soup.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    ev = soup.find('input', {'name': '__EVENTVALIDATION'})['value']

    p1 = {
        '__EVENTTARGET': 'ddlSession',
        '__EVENTARGUMENT': '',
        '__VIEWSTATE': vs,
        '__VIEWSTATEGENERATOR': vsg,
        '__EVENTVALIDATION': ev,
        'ddlSession': '2024-25',
        'txtUniqueID': '',
        'ddlResultType': '0'
    }
    r1 = s.post(URL_ARCHIVE, data=p1, headers=headers, timeout=20)
    soup1 = BeautifulSoup(r1.text, 'html.parser')
    vs1 = soup1.find('input', {'name': '__VIEWSTATE'})['value']
    vsg1 = soup1.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    ev1 = soup1.find('input', {'name': '__EVENTVALIDATION'})['value']
    return s, vs1, vsg1, ev1

def get_current_tokens():
    s = requests.Session()
    r = s.get(URL_CURRENT, headers=headers, timeout=20)
    soup = BeautifulSoup(r.text, 'html.parser')
    vs = soup.find('input', {'name': '__VIEWSTATE'})['value']
    vsg = soup.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']
    ev = soup.find('input', {'name': '__EVENTVALIDATION'})['value']
    return s, vs, vsg, ev

print("Starting probe for Food Technology (231401140001 to 231401140030)...", flush=True)

for roll in range(231401140001, 231401140031):
    roll_str = str(roll)
    
    # Check Sem 3
    try:
        s, vs, vsg, ev = get_archive_tokens()
        p = {
            '__EVENTTARGET': '',
            '__EVENTARGUMENT': '',
            '__VIEWSTATE': vs,
            '__VIEWSTATEGENERATOR': vsg,
            '__EVENTVALIDATION': ev,
            'ddlSession': '2024-25',
            'ddlCourse': '1140203',
            'txtUniqueID': roll_str,
            'ddlResultType': '',
            'btnGetResult': 'View Result'
        }
        res = s.post(URL_ARCHIVE, data=p, headers=headers, timeout=20)
        soup = BeautifulSoup(res.text, 'html.parser')
        name = soup.find(id='lblCandidateName')
        if name and name.text.strip():
            print(f"[FOUND Sem 3] Roll {roll_str} -> {name.text.strip()}", flush=True)
        else:
            # Also test Sem 5
            s2, vs2, vsg2, ev2 = get_current_tokens()
            p2 = {
                '__EVENTTARGET': '',
                '__EVENTARGUMENT': '',
                '__VIEWSTATE': vs2,
                '__VIEWSTATEGENERATOR': vsg2,
                '__EVENTVALIDATION': ev2,
                'ddlCourse': '1140205',
                'txtUniqueID': roll_str,
                'ddlResultType': '',
                'btnGetResult': 'View Result'
            }
            res2 = s2.post(URL_CURRENT, data=p2, headers=headers, timeout=20)
            soup2 = BeautifulSoup(res2.text, 'html.parser')
            name2 = soup2.find(id='lblCandidateName')
            if name2 and name2.text.strip():
                print(f"[FOUND Sem 5] Roll {roll_str} -> {name2.text.strip()}", flush=True)
            else:
                print(f"[NOT FOUND] Roll {roll_str}", flush=True)
    except Exception as e:
        print(f"[ERROR] Roll {roll_str}: {e}", flush=True)

print("Probe finished.", flush=True)
