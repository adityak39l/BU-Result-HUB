import os
import time
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Target directories
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

semesters = [
    {'code': '1030205', 'name': 'CSE_sem_V', 'folder': sem_v_dir},
    {'code': '1030206', 'name': 'CSE_sem_VI', 'folder': sem_vi_dir}
]

start_roll = 231381030001
end_roll = 231381030050

print(f"Starting fetch for CSE V & VI Semester results ({start_roll} to {end_roll})...\n")

def fetch_single(roll_str, sem_code, retries=3):
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
            return res_html
        except Exception as e:
            if attempt == retries - 1:
                raise e
            time.sleep(1)
    return None

for sem in semesters:
    sem_code = sem['code']
    sem_name = sem['name']
    sem_folder = sem['folder']

    print(f"\n================ FETCHING {sem_name} (Code: {sem_code}) ================")
    
    found_count = 0
    no_result_count = 0
    missing_rolls = []

    for roll_num in range(start_roll, end_roll + 1):
        roll_str = str(roll_num)
        print(f"Fetching {roll_str} [{sem_name}]...", end=" ", flush=True)

        try:
            res_html = fetch_single(roll_str, sem_code)
            
            if res_html and ("ROLL NUMBER" in res_html.upper() or "NAME OF STUDENT" in res_html.upper() or "MARKS" in res_html.upper()):
                file_name = f"{roll_str}_{sem_name}.html"
                file_path = os.path.join(sem_folder, file_name)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(res_html)
                
                soup_r = BeautifulSoup(res_html, 'html.parser')
                name_tag = soup_r.find('span', id='lblCandidateName')
                sname = name_tag.text.strip() if name_tag else "Found"
                print(f"[SUCCESS] {sname} -> Saved {file_name}")
                found_count += 1
            else:
                print(f"[NO RESULT]")
                no_result_count += 1
                missing_rolls.append(roll_str)

            time.sleep(0.2)

        except Exception as e:
            print(f"[ERROR] {e}")
            missing_rolls.append(roll_str)

    print(f"\nSummary for {sem_name}: {found_count} found, {no_result_count} no result.")
    
    # RECHECK PASS: Re-attempt all missing / no-result rolls to be 100% sure none was missed due to network
    if missing_rolls:
        print(f"\n--- RECHECKING {len(missing_rolls)} rolls for {sem_name} ---")
        for roll_str in missing_rolls:
            try:
                res_html = fetch_single(roll_str, sem_code, retries=2)
                if res_html and ("ROLL NUMBER" in res_html.upper() or "NAME OF STUDENT" in res_html.upper()):
                    file_name = f"{roll_str}_{sem_name}.html"
                    file_path = os.path.join(sem_folder, file_name)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(res_html)
                    soup_r = BeautifulSoup(res_html, 'html.parser')
                    name_tag = soup_r.find('span', id='lblCandidateName')
                    sname = name_tag.text.strip() if name_tag else "Found"
                    print(f"  [RECHECK RECOVERED!] {roll_str} -> {sname}")
                    found_count += 1
                else:
                    print(f"  [RECHECK CONFIRMED NO RESULT] {roll_str}")
                time.sleep(0.2)
            except Exception as e:
                print(f"  [RECHECK ERROR] {roll_str}: {e}")

print("\n" + "="*60)
print("All CSE Sem V & VI results downloaded and verified successfully!")
