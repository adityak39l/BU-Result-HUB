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

DIR_SEM_III = r"E:\result of All eie\CSE_sem_III"
DIR_SEM_IV = r"E:\result of All eie\CSE_sem_IV"

os.makedirs(DIR_SEM_III, exist_ok=True)
os.makedirs(DIR_SEM_IV, exist_ok=True)

# Build list of roll numbers: 231381030001 to 231381030070 + special rolls
rolls = [f"231381030{i:03d}" for i in range(1, 71)]
extra_rolls = ["231371028012", "231351139009"]
for r in extra_rolls:
    if r not in rolls:
        rolls.append(r)

COURSES = [
    ("1030203", "B.Tech (Computer Science & Engg) III Semester", DIR_SEM_III, "CSE_sem_III"),
    ("1030204", "B.Tech (Computer Science & Engg) IV Semester", DIR_SEM_IV, "CSE_sem_IV")
]

# Helper to get form state after selecting session
def get_session_form():
    s = requests.Session()
    s.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    r1 = s.get(BASE_URL, verify=False, timeout=15)
    soup1 = BeautifulSoup(r1.text, 'html.parser')
    
    d1 = {
        '__VIEWSTATE': soup1.find('input', id='__VIEWSTATE')['value'] if soup1.find('input', id='__VIEWSTATE') else '',
        '__VIEWSTATEGENERATOR': soup1.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup1.find('input', id='__VIEWSTATEGENERATOR') else '',
        '__EVENTVALIDATION': soup1.find('input', id='__EVENTVALIDATION')['value'] if soup1.find('input', id='__EVENTVALIDATION') else '',
        '__EVENTTARGET': 'ddlSession',
        'ddlSession': SESSION
    }
    r2 = s.post(BASE_URL, data=d1, verify=False, timeout=15)
    soup2 = BeautifulSoup(r2.text, 'html.parser')
    
    return {
        'session': s,
        'viewstate': soup2.find('input', id='__VIEWSTATE')['value'] if soup2.find('input', id='__VIEWSTATE') else '',
        'viewstategen': soup2.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup2.find('input', id='__VIEWSTATEGENERATOR') else '',
        'eventval': soup2.find('input', id='__EVENTVALIDATION')['value'] if soup2.find('input', id='__EVENTVALIDATION') else ''
    }

print("Initializing session on BU Jhansi portal...")
form_state = get_session_form()
print("Session initialized successfully!")

def fetch_single_result(roll, course_code, course_name, target_dir, sem_label):
    file_path = os.path.join(target_dir, f"{roll}_{sem_label}.html")
    
    # We create a new request or use shared session
    s = requests.Session()
    s.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    
    post_data = {
        '__VIEWSTATE': form_state['viewstate'],
        '__VIEWSTATEGENERATOR': form_state['viewstategen'],
        '__EVENTVALIDATION': form_state['eventval'],
        'ddlSession': SESSION,
        'ddlCourse': course_code,
        'txtUniqueID': roll,
        'ddlResultType': '',
        'btnGetResult': 'View Result'
    }
    
    try:
        resp = s.post(BASE_URL, data=post_data, verify=False, timeout=20)
        html = resp.text
        
        # Save HTML
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(html)
            
        soup = BeautifulSoup(html, 'html.parser')
        name_tag = soup.find('span', id='lblCandidateName')
        father_tag = soup.find('span', id='lblFatherName')
        
        if name_tag and name_tag.text.strip():
            name = name_tag.text.strip()
            father = father_tag.text.strip() if father_tag else 'N/A'
            return {"status": "FOUND", "roll": roll, "sem": sem_label, "name": name, "father": father, "path": file_path}
        else:
            return {"status": "NOT_FOUND", "roll": roll, "sem": sem_label, "path": file_path}
    except Exception as e:
        return {"status": "ERROR", "roll": roll, "sem": sem_label, "error": str(e)}

print(f"\nStarting download for {len(rolls)} rolls across Sem III and Sem IV...")

all_results = []
# Run parallel queries
tasks = []
with ThreadPoolExecutor(max_workers=5) as executor:
    for roll in rolls:
        for c_code, c_name, out_dir, sem_lbl in COURSES:
            tasks.append(executor.submit(fetch_single_result, roll, c_code, c_name, out_dir, sem_lbl))
            
    for future in as_completed(tasks):
        res = future.result()
        all_results.append(res)
        if res["status"] == "FOUND":
            print(f"✅ [{res['sem']}] {res['roll']} -> {res['name']} (Father: {res['father']})")
        elif res["status"] == "ERROR":
            print(f"⚠️ [{res['sem']}] {res['roll']} -> Error: {res['error']}")

found_list = [r for r in all_results if r["status"] == "FOUND"]
print(f"\n==========================================")
print(f"DOWNLOAD COMPLETE!")
print(f"Total found marksheets: {len(found_list)}")
print(f"Target Directories:")
print(f"  Sem III: {DIR_SEM_III}")
print(f"  Sem IV:  {DIR_SEM_IV}")
print(f"==========================================")
