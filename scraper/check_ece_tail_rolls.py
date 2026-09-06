import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
SESSION = "2024-25"

DIR_SEM_III = r"E:\result of All eie\ECE_sem_III"
DIR_SEM_IV = r"E:\result of All eie\ECE_sem_IV"

s = requests.Session()
s.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
r1 = s.get(BASE_URL, verify=False, timeout=20)
soup1 = BeautifulSoup(r1.text, 'html.parser')

d1 = {
    '__VIEWSTATE': soup1.find('input', id='__VIEWSTATE')['value'],
    '__VIEWSTATEGENERATOR': soup1.find('input', id='__VIEWSTATEGENERATOR')['value'],
    '__EVENTVALIDATION': soup1.find('input', id='__EVENTVALIDATION')['value'],
    '__EVENTTARGET': 'ddlSession',
    'ddlSession': SESSION
}
r2 = s.post(BASE_URL, data=d1, verify=False, timeout=20)
soup2 = BeautifulSoup(r2.text, 'html.parser')

vs = soup2.find('input', id='__VIEWSTATE')['value']
vsg = soup2.find('input', id='__VIEWSTATEGENERATOR')['value']
ev = soup2.find('input', id='__EVENTVALIDATION')['value']

test_rolls = [f"2313610310{i:02d}" for i in range(58, 90)] + [f"2413610315{i:02d}" for i in range(1, 16)]

print("Checking tail rolls and lateral entries for Sem 3 and Sem 4...")
for course_code, target_dir, sem_num in [('1031203', DIR_SEM_III, 3), ('1031204', DIR_SEM_IV, 4)]:
    for roll in test_rolls:
        file_path = os.path.join(target_dir, f"{roll}.html")
        if os.path.exists(file_path):
            continue
        post_data = {
            '__VIEWSTATE': vs,
            '__VIEWSTATEGENERATOR': vsg,
            '__EVENTVALIDATION': ev,
            'ddlSession': SESSION,
            'ddlCourse': course_code,
            'txtUniqueID': roll,
            'ddlResultType': '',
            'btnGetResult': 'View Result'
        }
        try:
            resp = s.post(BASE_URL, data=post_data, verify=False, timeout=20)
            soup = BeautifulSoup(resp.text, 'html.parser')
            name_tag = soup.find('span', id='lblCandidateName')
            if name_tag and name_tag.text.strip():
                print(f"  [FOUND] Sem {sem_num} Roll: {roll} | Name: {name_tag.text.strip()}")
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(resp.text)
        except Exception as e:
            print(f"  [ERROR] Roll {roll} -> {e}")

print("Check finished!")
