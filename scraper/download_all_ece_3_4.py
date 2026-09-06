import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
SESSION = "2024-25"

DIR_SEM_III = r"E:\result of All eie\ECE_sem_III"
DIR_SEM_IV = r"E:\result of All eie\ECE_sem_IV"

os.makedirs(DIR_SEM_III, exist_ok=True)
os.makedirs(DIR_SEM_IV, exist_ok=True)

# Generate roll numbers: 231361031001 to 231361031085 + Lateral 241361031501 to 241361031515
rolls = [f"231361031{i:03d}" for i in range(1, 86)]
lateral_rolls = [f"2413610315{i:02d}" for i in range(1, 16)]
all_rolls = rolls + lateral_rolls

COURSES = [
    ("1031203", "B.Tech (Electronics & Communication) III Semester", DIR_SEM_III, 3),
    ("1031204", "B.Tech (Electronics & Communication) IV Semester", DIR_SEM_IV, 4)
]

def get_session_and_tokens():
    s = requests.Session()
    s.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
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
    
    return {
        'session': s,
        'viewstate': soup2.find('input', id='__VIEWSTATE')['value'],
        'viewstategen': soup2.find('input', id='__VIEWSTATEGENERATOR')['value'],
        'eventval': soup2.find('input', id='__EVENTVALIDATION')['value']
    }

print("1. Initializing session on BU Jhansi portal with Session 2024-25...")
tokens = get_session_and_tokens()
print("   Session initialized successfully!\n")

def fetch_single_ece(roll, course_code, course_name, target_dir, sem_num, tokens):
    file_path = os.path.join(target_dir, f"{roll}.html")
    
    s = requests.Session()
    s.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    
    post_data = {
        '__VIEWSTATE': tokens['viewstate'],
        '__VIEWSTATEGENERATOR': tokens['viewstategen'],
        '__EVENTVALIDATION': tokens['eventval'],
        'ddlSession': SESSION,
        'ddlCourse': course_code,
        'txtUniqueID': roll,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }
    
    for attempt in range(3):
        try:
            resp = s.post(BASE_URL, data=post_data, verify=False, timeout=25)
            html = resp.text
            
            soup = BeautifulSoup(html, 'html.parser')
            name_tag = soup.find('span', id='lblCandidateName')
            father_tag = soup.find('span', id='lblFatherName')
            
            if name_tag and name_tag.text.strip():
                name = name_tag.text.strip()
                father = father_tag.text.strip() if father_tag else 'N/A'
                
                # Save raw HTML
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(html)
                    
                return {"status": "FOUND", "roll": roll, "sem": sem_num, "name": name, "father": father, "path": file_path}
            else:
                return {"status": "NOT_FOUND", "roll": roll, "sem": sem_num}
        except Exception as e:
            time.sleep(1.5)
            if attempt == 2:
                return {"status": "ERROR", "roll": roll, "sem": sem_num, "error": str(e)}
    return {"status": "NOT_FOUND", "roll": roll, "sem": sem_num}

all_found = []

for course_code, course_name, target_dir, sem_num in COURSES:
    print(f"=================== Downloading {course_name} (Sem {sem_num}) ===================")
    
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(fetch_single_ece, roll, course_code, course_name, target_dir, sem_num, tokens): roll for roll in all_rolls}
        
        for future in as_completed(futures):
            res = future.result()
            if res['status'] == 'FOUND':
                print(f"  [FOUND] Roll: {res['roll']} | Sem: {res['sem']} | Name: {res['name']:<26} | Father: {res['father']}")
                all_found.append(res)
            elif res['status'] == 'ERROR':
                print(f"  [ERROR] Roll: {res['roll']} | Sem: {res['sem']} | Error: {res['error']}")

print("\n=================== DOWNLOAD SUMMARY ===================")
sem3_found = [x for x in all_found if x['sem'] == 3]
sem4_found = [x for x in all_found if x['sem'] == 4]
print(f"Total Sem III Marksheets Found & Saved: {len(sem3_found)}")
print(f"Total Sem IV  Marksheets Found & Saved: {len(sem4_found)}")
