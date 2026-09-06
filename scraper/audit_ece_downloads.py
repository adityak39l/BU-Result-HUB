import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys
import time

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

DIR_SEM_V = r"E:\result of All eie\ECE_sem_V"
DIR_SEM_VI = r"E:\result of All eie\ECE_sem_VI"

v_files = set(os.listdir(DIR_SEM_V))
vi_files = set(os.listdir(DIR_SEM_VI))

print(f"Current downloaded files in Sem V: {len(v_files)}")
print(f"Current downloaded files in Sem VI: {len(vi_files)}")

# 1. Check all rolls from 1 to 80
all_rolls = [f"231361031{i:03d}" for i in range(1, 81)]
lateral_rolls = [f"2413610315{i:02d}" for i in range(1, 16)]
all_test_rolls = all_rolls + lateral_rolls

missing_in_v = [r for r in all_test_rolls if f"{r}.html" not in v_files]
missing_in_vi = [r for r in all_test_rolls if f"{r}.html" not in vi_files]

print("\nRolls to re-verify against live portal for Sem V:", len(missing_in_v))
print("Rolls to re-verify against live portal for Sem VI:", len(missing_in_vi))

def get_session_and_tokens():
    s = requests.Session()
    s.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    r1 = s.get(BASE_URL, verify=False, timeout=25)
    soup1 = BeautifulSoup(r1.text, 'html.parser')
    vs = soup1.find('input', id='__VIEWSTATE')['value'] if soup1.find('input', id='__VIEWSTATE') else ''
    vsg = soup1.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup1.find('input', id='__VIEWSTATEGENERATOR') else ''
    ev = soup1.find('input', id='__EVENTVALIDATION')['value'] if soup1.find('input', id='__EVENTVALIDATION') else ''
    return s, vs, vsg, ev

s, vs, vsg, ev = get_session_and_tokens()

def safe_check(roll, course_code, target_dir, label):
    global s, vs, vsg, ev
    post_data = {
        '__VIEWSTATE': vs,
        '__VIEWSTATEGENERATOR': vsg,
        '__EVENTVALIDATION': ev,
        'ddlCourse': course_code,
        'txtUniqueID': roll,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }
    for attempt in range(3):
        try:
            resp = s.post(BASE_URL, data=post_data, verify=False, timeout=25)
            sp = BeautifulSoup(resp.text, 'html.parser')
            name_tag = sp.find('span', id='lblCandidateName')
            if name_tag and name_tag.text.strip():
                print(f"  [{label} MISSED -> FOUND!] Roll: {roll} | Name: {name_tag.text.strip()}")
                with open(os.path.join(target_dir, f"{roll}.html"), 'w', encoding='utf-8') as f:
                    f.write(resp.text)
            return
        except Exception as e:
            time.sleep(2)
            try:
                s, vs, vsg, ev = get_session_and_tokens()
            except:
                pass

print("\n--- Re-verifying Missing Rolls for Sem V ---")
for roll in missing_in_v:
    safe_check(roll, '1031205', DIR_SEM_V, 'SEM_V')

print("\n--- Re-verifying Missing Rolls for Sem VI ---")
for roll in missing_in_vi:
    safe_check(roll, '1031206', DIR_SEM_VI, 'SEM_VI')

print("\n--- Re-Verification Complete ---")
print(f"Final Sem V count: {len(os.listdir(DIR_SEM_V))}")
print(f"Final Sem VI count: {len(os.listdir(DIR_SEM_VI))}")
