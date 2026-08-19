import os
import time
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

target_dir = r"E:\result of All eie"
os.makedirs(target_dir, exist_ok=True)

url = 'https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded'
}

semesters = [
    {'code': '1028205', 'name': 'BME_sem_V'},
    {'code': '1028206', 'name': 'BME_sem_VI'}
]

start_roll = 231371028001
end_roll = 231371028018

print(f"Target Save Directory: {target_dir}")
print(f"Starting robust auto-fetch with retry logic for BME Roll Numbers {start_roll} to {end_roll}...")

for sem in semesters:
    sem_code = sem['code']
    sem_name = sem['name']
    sem_folder = os.path.join(target_dir, sem_name)
    os.makedirs(sem_folder, exist_ok=True)

    print(f"\n================ FETCHING {sem_name} (Code: {sem_code}) ================")

    for roll_num in range(start_roll, end_roll + 1):
        roll_str = str(roll_num)
        file_name = f"{roll_str}_{sem_name}.html"
        file_path = os.path.join(sem_folder, file_name)

        # Retry loop up to 4 attempts if timeout occurs
        max_retries = 4
        success = False

        for attempt in range(1, max_retries + 1):
            print(f"Fetching {roll_str} [{sem_name}] (Attempt {attempt}/{max_retries})...", end=" ")

            try:
                # 1. Get initial ASP.NET ViewState tokens
                req_init = urllib.request.Request(url, headers={'User-Agent': headers['User-Agent']})
                html_init = urllib.request.urlopen(req_init, timeout=20).read().decode('utf-8')
                soup_init = BeautifulSoup(html_init, 'html.parser')

                viewstate = soup_init.find('input', {'name': '__VIEWSTATE'})['value']
                eventval = soup_init.find('input', {'name': '__EVENTVALIDATION'})['value']
                generator = soup_init.find('input', {'name': '__VIEWSTATEGENERATOR'})['value'] if soup_init.find('input', {'name': '__VIEWSTATEGENERATOR'}) else ''

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
                res_html = urllib.request.urlopen(req_post, timeout=25).read().decode('utf-8')

                if "ROLL NUMBER" in res_html.upper() or "NAME OF STUDENT" in res_html.upper():
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(res_html)
                    print(f"[SUCCESS] Saved {file_name}")
                    success = True
                    break
                else:
                    print(f"[NO RESULT / ROLL NOT CREATED]")
                    success = True
                    break

            except Exception as e:
                print(f"[RETRY NEEDED: {e}]")
                time.sleep(1.5)

        time.sleep(0.3)

print(f"\nAll BME results re-fetched and saved in target location: {target_dir}")
