import os
import time
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Target directories as requested by user
base_dir = r"E:\result of All eie"
sem_iii_dir = os.path.join(base_dir, "EIE_sem_III")
sem_iv_dir = os.path.join(base_dir, "EIE_sem_IV")

os.makedirs(sem_iii_dir, exist_ok=True)
os.makedirs(sem_iv_dir, exist_ok=True)

url = 'https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded'
}

semesters = [
    {'code': '1139203', 'name': 'EIE_sem_III', 'folder': sem_iii_dir},
    {'code': '1139204', 'name': 'EIE_sem_IV', 'folder': sem_iv_dir}
]

start_roll = 231351139001
end_roll = 231351139018

print(f"Starting fetch for EIE III & IV Semester results ({start_roll} to {end_roll})...\n")

for sem in semesters:
    sem_code = sem['code']
    sem_name = sem['name']
    sem_folder = sem['folder']

    print(f"================ FETCHING {sem_name} (Code: {sem_code}) ================")

    for roll_num in range(start_roll, end_roll + 1):
        roll_str = str(roll_num)
        print(f"Fetching {roll_str} [{sem_name}]...", end=" ", flush=True)

        try:
            # 1. Get ViewState tokens
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

            if "ROLL NUMBER" in res_html.upper() or "NAME OF STUDENT" in res_html.upper() or "MARKS" in res_html.upper():
                file_name = f"{roll_str}_{sem_name}.html"
                file_path = os.path.join(sem_folder, file_name)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(res_html)
                
                print(f"[SUCCESS] Saved -> {file_name}")
            else:
                print(f"[NO RESULT]")

            time.sleep(0.3)

        except Exception as e:
            print(f"[ERROR] {e}")

print("\n" + "="*60)
print("All EIE Sem III & IV results downloaded successfully!")
