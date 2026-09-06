import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

DIR_SEM_V = r"E:\result of All eie\ECE_sem_V"
DIR_SEM_VI = r"E:\result of All eie\ECE_sem_VI"

os.makedirs(DIR_SEM_V, exist_ok=True)
os.makedirs(DIR_SEM_VI, exist_ok=True)

# Generate roll numbers: 231361031001 to 231361031090
rolls = [f"231361031{i:03d}" for i in range(1, 91)]

COURSES = [
    ("1031205", "B.Tech (Electronics & Communication) V Semester", DIR_SEM_V, 5),
    ("1031206", "B.Tech (Electronics & Communication) VI Semester", DIR_SEM_VI, 6)
]

def get_base_form_tokens():
    s = requests.Session()
    s.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    r = s.get(BASE_URL, verify=False, timeout=15)
    soup = BeautifulSoup(r.text, 'html.parser')
    return {
        'viewstate': soup.find('input', id='__VIEWSTATE')['value'] if soup.find('input', id='__VIEWSTATE') else '',
        'viewstategen': soup.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup.find('input', id='__VIEWSTATEGENERATOR') else '',
        'eventval': soup.find('input', id='__EVENTVALIDATION')['value'] if soup.find('input', id='__EVENTVALIDATION') else ''
    }

print("1. Initializing connection to BU Jhansi Current Result Portal...")
tokens = get_base_form_tokens()
print("   Connection established successfully!\n")

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
        'ddlCourse': course_code,
        'txtUniqueID': roll,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }
    
    for attempt in range(3):
        try:
            resp = s.post(BASE_URL, data=post_data, verify=False, timeout=20)
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
            time.sleep(1)
            if attempt == 2:
                return {"status": "ERROR", "roll": roll, "sem": sem_num, "error": str(e)}
    return {"status": "NOT_FOUND", "roll": roll, "sem": sem_num}

all_found = []

for course_code, course_name, target_dir, sem_num in COURSES:
    print(f"=================== Downloading {course_name} (Sem {sem_num}) ===================")
    
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(fetch_single_ece, roll, course_code, course_name, target_dir, sem_num, tokens): roll for roll in rolls}
        
        for future in as_completed(futures):
            res = future.result()
            if res['status'] == 'FOUND':
                print(f"  [FOUND] Roll: {res['roll']} | Sem: {res['sem']} | Name: {res['name']:<26} | Father: {res['father']}")
                all_found.append(res)
            elif res['status'] == 'ERROR':
                print(f"  [ERROR] Roll: {res['roll']} | Sem: {res['sem']} | Error: {res['error']}")

print("\n=================== DOWNLOAD SUMMARY ===================")
sem5_found = [x for x in all_found if x['sem'] == 5]
sem6_found = [x for x in all_found if x['sem'] == 6]
print(f"Total Sem V  Marksheets Found & Saved: {len(sem5_found)}")
print(f"Total Sem VI Marksheets Found & Saved: {len(sem6_found)}")
