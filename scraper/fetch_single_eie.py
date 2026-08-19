import os
import time
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

url = 'https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded'
}

roll_no = '241351139501'

semesters = [
    {'code': '1139205', 'name': 'EIE_sem_5', 'folder': r'E:\result of All eie\EIE_sem_5'},
    {'code': '1139206', 'name': 'EIE_sem_6', 'folder': r'E:\result of All eie\EIE_sem_6'},
]

print(f"Fetching results for Roll No: {roll_no}")
print("="*60)

for sem in semesters:
    sem_code = sem['code']
    sem_name = sem['name']
    sem_folder = sem['folder']
    os.makedirs(sem_folder, exist_ok=True)

    print(f"\nFetching {sem_name} (Course Code: {sem_code})...", end=" ")

    try:
        # Step 1: Get ViewState tokens
        req_init = urllib.request.Request(url, headers={'User-Agent': headers['User-Agent']})
        html_init = urllib.request.urlopen(req_init, timeout=15).read().decode('utf-8')
        soup_init = BeautifulSoup(html_init, 'html.parser')

        viewstate  = soup_init.find('input', {'name': '__VIEWSTATE'})['value']
        eventval   = soup_init.find('input', {'name': '__EVENTVALIDATION'})['value']
        gen_tag    = soup_init.find('input', {'name': '__VIEWSTATEGENERATOR'})
        generator  = gen_tag['value'] if gen_tag else ''

        # Step 2: POST form
        form_data = {
            '__VIEWSTATE': viewstate,
            '__VIEWSTATEGENERATOR': generator,
            '__EVENTVALIDATION': eventval,
            'ddlCourse': sem_code,
            'ddlResultType': '',
            'txtUniqueID': roll_no,
            'btnGetResult': 'View Result'
        }

        data_encoded = urllib.parse.urlencode(form_data).encode('utf-8')
        req_post = urllib.request.Request(url, data=data_encoded, headers=headers)
        res_html = urllib.request.urlopen(req_post, timeout=15).read().decode('utf-8')

        if "ROLL NUMBER" in res_html.upper() or "NAME OF STUDENT" in res_html.upper():
            file_name = f"{roll_no}_{sem_name}.html"
            file_path = os.path.join(sem_folder, file_name)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(res_html)
            print(f"[SUCCESS] Saved -> {file_path}")
        else:
            print(f"[NO RESULT FOUND] — Result not available for this semester.")

        time.sleep(0.5)

    except Exception as e:
        print(f"[ERROR] {e}")

print("\n" + "="*60)
print("Done!")
