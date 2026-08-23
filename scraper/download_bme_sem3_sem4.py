import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys
import time

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
SESSION = "2024-25"

DIR_SEM_III = r"E:\result of All eie\BME_SEM_III"
DIR_SEM_IV = r"E:\result of All eie\BME_SEM_IV"

os.makedirs(DIR_SEM_III, exist_ok=True)
os.makedirs(DIR_SEM_IV, exist_ok=True)

# Rolls: 231371028001 to 231371028015
rolls = [f"2313710280{i:02d}" for i in range(1, 16)]

COURSES = [
    ("1028203", "B.Tech (Biomedical Engg) III Semester", DIR_SEM_III, 3),
    ("1028204", "B.Tech (Biomedical Engg) IV Semester", DIR_SEM_IV, 4)
]

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
        'viewstate': soup2.find('input', id='__VIEWSTATE')['value'] if soup2.find('input', id='__VIEWSTATE') else '',
        'viewstategen': soup2.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup2.find('input', id='__VIEWSTATEGENERATOR') else '',
        'eventval': soup2.find('input', id='__EVENTVALIDATION')['value'] if soup2.find('input', id='__EVENTVALIDATION') else ''
    }

print("Connecting to BU Jhansi result portal...")
form_state = get_session_form()
print("Connected successfully!\n")

results_summary = []

for course_code, course_name, target_dir, sem_num in COURSES:
    print(f"=== Downloading {course_name} (Code: {course_code}) ===")
    
    for roll in rolls:
        file_path = os.path.join(target_dir, f"{roll}.html")
        
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
            
            soup = BeautifulSoup(html, 'html.parser')
            name_tag = soup.find('span', id='lblCandidateName')
            father_tag = soup.find('span', id='lblFatherName')
            
            # Check if result is valid
            if name_tag and name_tag.text.strip():
                name = name_tag.text.strip()
                father = father_tag.text.strip() if father_tag else 'N/A'
                
                # Save HTML file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(html)
                    
                print(f"  [FOUND] Roll: {roll} | Name: {name:<28} | Sem: {sem_num} -> Saved to {file_path}")
                results_summary.append({
                    "roll": roll,
                    "sem": sem_num,
                    "name": name,
                    "father": father,
                    "file": file_path,
                    "status": "FOUND"
                })
            else:
                print(f"  [NOT FOUND] Roll: {roll} | Sem: {sem_num}")
        except Exception as e:
            print(f"  [ERROR] Roll: {roll} | Sem: {sem_num} -> {e}")
            
        time.sleep(0.3)

print("\n=== DOWNLOAD COMPLETE ===")
found_count = len([x for x in results_summary if x['status'] == 'FOUND'])
print(f"Total Successful Marksheets Saved: {found_count}")
