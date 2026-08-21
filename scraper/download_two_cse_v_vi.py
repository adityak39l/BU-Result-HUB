import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

url = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

sem_v_dir = r"E:\result of All eie\CSE_sem_V"
sem_vi_dir = r"E:\result of All eie\CSE_sem_VI"
os.makedirs(sem_v_dir, exist_ok=True)
os.makedirs(sem_vi_dir, exist_ok=True)

rolls = ["231371028012", "231351139009"]
tasks = [
    ("1030205", "B.Tech (Computer Science & Engg) V Semester", sem_v_dir, "CSE_sem_V"),
    ("1030206", "B.Tech (Computer Science & Engg) VI Semester", sem_vi_dir, "CSE_sem_VI")
]

for roll in rolls:
    for code, course_name, out_dir, sem_label in tasks:
        file_path = os.path.join(out_dir, f"{roll}_{sem_label}.html")
        print(f"\nQuerying portal for Roll: {roll} | Course: {course_name} (Code: {code})...")
        
        r1 = s.get(url, verify=False, timeout=15)
        soup1 = BeautifulSoup(r1.text, 'html.parser')
        
        form_data = {
            '__VIEWSTATE': soup1.find('input', id='__VIEWSTATE')['value'] if soup1.find('input', id='__VIEWSTATE') else '',
            '__VIEWSTATEGENERATOR': soup1.find('input', id='__VIEWSTATEGENERATOR')['value'] if soup1.find('input', id='__VIEWSTATEGENERATOR') else '',
            '__EVENTVALIDATION': soup1.find('input', id='__EVENTVALIDATION')['value'] if soup1.find('input', id='__EVENTVALIDATION') else '',
            'ddlCourse': code,
            'txtUniqueID': roll,
            'btnGetResult': 'View Result'
        }
        
        res = s.post(url, data=form_data, verify=False, timeout=20)
        
        # Save the exact response to target location
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(res.text)
            
        print(f"-> Saved response to: {file_path} (Size: {len(res.text)} bytes)")
        
        res_soup = BeautifulSoup(res.text, 'html.parser')
        name_tag = res_soup.find('span', id='lblCandidateName')
        father_tag = res_soup.find('span', id='lblFatherName')
        course_tag = res_soup.find('span', id='lblCourseName')
        
        if name_tag and name_tag.text.strip():
            print(f"   [FOUND RECORD] Student: {name_tag.text.strip()} | Father: {father_tag.text.strip() if father_tag else 'N/A'}")
        else:
            # Check if there is any message/table
            msg = res_soup.find('span', id=lambda x: x and 'msg' in x.lower())
            print(f"   [PORTAL STATUS] No candidate record returned by portal for {roll} in {course_name} (Message: {msg.text.strip() if msg else 'Empty/Unlisted'})")

print("\nAll downloads completed and saved to requested locations!")
