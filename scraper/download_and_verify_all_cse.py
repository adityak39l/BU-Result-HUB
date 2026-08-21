import os
import time
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r"E:\result of All eie"
sem_v_dir = os.path.join(base_dir, "CSE_sem_V")
sem_vi_dir = os.path.join(base_dir, "CSE_sem_VI")

os.makedirs(sem_v_dir, exist_ok=True)
os.makedirs(sem_vi_dir, exist_ok=True)

url = 'https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded'
}

def fetch_marksheet(roll_str, sem_code, retries=3):
    for attempt in range(retries):
        try:
            req_init = urllib.request.Request(url, headers={'User-Agent': headers['User-Agent']})
            html_init = urllib.request.urlopen(req_init, timeout=15).read().decode('utf-8')
            soup_init = BeautifulSoup(html_init, 'html.parser')

            viewstate = soup_init.find('input', {'name': '__VIEWSTATE'})['value']
            eventval = soup_init.find('input', {'name': '__EVENTVALIDATION'})['value']
            gen_tag = soup_init.find('input', {'name': '__VIEWSTATEGENERATOR'})
            generator = gen_tag['value'] if gen_tag else ''

            form_data = {
                '__VIEWSTATE': viewstate,
                '__VIEWSTATEGENERATOR': generator,
                '__EVENTVALIDATION': eventval,
                'ddlCourse': sem_code,
                'ddlResultType': '',
                'txtUniqueID': roll_str,
                'btnGetResult': 'View Result'
            }

            data_encoded = urllib.parse.urlencode(form_data).encode('utf-8')
            req_post = urllib.request.Request(url, data=data_encoded, headers=headers)
            res_html = urllib.request.urlopen(req_post, timeout=15).read().decode('utf-8')
            soup_r = BeautifulSoup(res_html, 'html.parser')
            
            name_tag = soup_r.find('span', id='lblCandidateName')
            if name_tag and name_tag.text.strip():
                return res_html, name_tag.text.strip()
            
            # Check error span
            err_tag = soup_r.find('span', id='lblError')
            err_msg = err_tag.text.strip() if err_tag else "No Candidate Found"
            return None, err_msg
        except Exception as e:
            if attempt == retries - 1:
                return None, str(e)
            time.sleep(1)
    return None, "Max retries exceeded"

semesters = [
    {'code': '1030205', 'name': 'CSE_sem_V', 'folder': sem_v_dir},
    {'code': '1030206', 'name': 'CSE_sem_VI', 'folder': sem_vi_dir}
]

start_roll = 231381030001
end_roll = 231381030090

print(f"=== FETCHING AND VERIFYING CSE SEM V & VI (Rolls {start_roll} to {end_roll}) ===\n", flush=True)

for sem in semesters:
    sem_code = sem['code']
    sem_name = sem['name']
    sem_folder = sem['folder']
    
    print(f"\n>>>>>> PROCESSING {sem_name} (Course Code: {sem_code}) <<<<<<", flush=True)
    
    valid_count = 0
    missing_rolls = []
    
    for r in range(start_roll, end_roll + 1):
        roll_str = str(r)
        file_path = os.path.join(sem_folder, f"{roll_str}_{sem_name}.html")
        
        # Check if already cached with valid student name
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                c_html = f.read()
            c_soup = BeautifulSoup(c_html, 'html.parser')
            c_name = c_soup.find('span', id='lblCandidateName')
            if c_name and c_name.text.strip():
                print(f"[{sem_name}] {roll_str} -> (Valid) {c_name.text.strip()}", flush=True)
                valid_count += 1
                continue
            else:
                # Corrupted / invalid form, remove
                os.remove(file_path)
                
        # Fetch fresh from server
        html, res_name = fetch_marksheet(roll_str, sem_code)
        if html and res_name and not "No Candidate Found" in res_name:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"[{sem_name}] {roll_str} -> [DOWNLOADED] {res_name}", flush=True)
            valid_count += 1
        else:
            print(f"[{sem_name}] {roll_str} -> [NOT FOUND / LEFT: {res_name}]", flush=True)
            missing_rolls.append(roll_str)
            
        time.sleep(0.1)
        
    print(f"\n=== SUMMARY FOR {sem_name}: {valid_count} VALID MARKSHEETS SAVED ===", flush=True)

print("\nALL CSE DOWNLOADS & RECHECKS COMPLETE!", flush=True)
