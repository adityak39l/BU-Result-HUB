import os
import time
import re
import json
import urllib.request
import urllib.parse
import http.cookiejar
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Target directories as requested by user
base_dir = r"E:\result of All eie"
sem_iii_dir = os.path.join(base_dir, "EIE_sem_III")
sem_iv_dir = os.path.join(base_dir, "EIE_sem_IV")
data_js_path = r"E:\BU_RESULT_WEBSITE\lib\data.js"

os.makedirs(sem_iii_dir, exist_ok=True)
os.makedirs(sem_iv_dir, exist_ok=True)

url = 'https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Referer': url
}

semesters = [
    {'code': '1139203', 'name': 'EIE_sem_III', 'folder': sem_iii_dir, 'num': 3},
    {'code': '1139204', 'name': 'EIE_sem_IV', 'folder': sem_iv_dir, 'num': 4}
]

start_roll = 231351139001
end_roll = 231351139018

# Map roll -> { 3: {sgpa, name}, 4: {sgpa, name} }
results_map = {}

print(f"Starting fetch for EIE III & IV Semester results (Session 2024-25, Roll: {start_roll} to {end_roll})...\n")

for sem in semesters:
    sem_code = sem['code']
    sem_name = sem['name']
    sem_folder = sem['folder']
    sem_num = sem['num']

    print(f"================ FETCHING {sem_name} (Code: {sem_code}) ================")

    # Initialize session cookie and initial viewstate
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

    req1 = urllib.request.Request(url, headers={'User-Agent': headers['User-Agent']})
    html1 = opener.open(req1).read().decode('utf-8')
    soup1 = BeautifulSoup(html1, 'html.parser')

    vs1 = soup1.find('input', {'name': '__VIEWSTATE'})['value']
    ev1 = soup1.find('input', {'name': '__EVENTVALIDATION'})['value']
    gen1 = soup1.find('input', {'name': '__VIEWSTATEGENERATOR'})['value'] if soup1.find('input', {'name': '__VIEWSTATEGENERATOR'}) else ''

    # Select Session 2024-25
    form1 = {
        '__EVENTTARGET': 'ddlSession',
        '__EVENTARGUMENT': '',
        '__VIEWSTATE': vs1,
        '__VIEWSTATEGENERATOR': gen1,
        '__EVENTVALIDATION': ev1,
        'ddlSession': '2024-25'
    }

    data1 = urllib.parse.urlencode(form1).encode('utf-8')
    html2 = opener.open(urllib.request.Request(url, data=data1, headers=headers)).read().decode('utf-8')
    soup2 = BeautifulSoup(html2, 'html.parser')

    vs2 = soup2.find('input', {'name': '__VIEWSTATE'})['value']
    ev2 = soup2.find('input', {'name': '__EVENTVALIDATION'})['value']
    gen2 = soup2.find('input', {'name': '__VIEWSTATEGENERATOR'})['value'] if soup2.find('input', {'name': '__VIEWSTATEGENERATOR'}) else ''

    for roll_num in range(start_roll, end_roll + 1):
        roll_str = str(roll_num)
        print(f"Fetching {roll_str} [{sem_name}]...", end=" ", flush=True)

        form2 = {
            '__EVENTTARGET': '',
            '__EVENTARGUMENT': '',
            '__LASTFOCUS': '',
            '__VIEWSTATE': vs2,
            '__VIEWSTATEGENERATOR': gen2,
            '__EVENTVALIDATION': ev2,
            'ddlSession': '2024-25',
            'ddlCourse': sem_code,
            'ddlResultType': '',
            'txtUniqueID': roll_str,
            'btnGetResult': 'View Result'
        }

        try:
            data2 = urllib.parse.urlencode(form2).encode('utf-8')
            res_html = opener.open(urllib.request.Request(url, data=data2, headers=headers)).read().decode('utf-8')

            soup_res = BeautifulSoup(res_html, 'html.parser')
            name_span = soup_res.find('span', id='lblCandidateName')

            if name_span and name_span.text.strip():
                st_name = name_span.text.strip()
                file_name = f"{roll_str}_{sem_name}.html"
                file_path = os.path.join(sem_folder, file_name)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(res_html)

                # Extract SGPA using regex from page text
                page_text = soup_res.get_text(separator=' ')
                sgpa_val = None
                sgpa_m = re.search(r'SGPA\s*[:\-]?\s*([0-9]+\.[0-9]+)', page_text)
                if sgpa_m:
                    sgpa_val = float(sgpa_m.group(1))

                if roll_str not in results_map:
                    results_map[roll_str] = {}
                results_map[roll_str][sem_num] = {'sgpa': sgpa_val, 'name': st_name}

                print(f"[SUCCESS] {st_name} -> SGPA: {sgpa_val}")
            else:
                msg_span = soup_res.find('span', id='Messagebox1_lbl_msg')
                msg_txt = msg_span.text.strip() if msg_span else "No result"
                print(f"[NO RESULT] ({msg_txt})")

            time.sleep(0.3)

        except Exception as e:
            print(f"[ERROR] {e}")

print("\n" + "="*60)
print(f"Summary of extracted EIE Sem III & IV results: {len(results_map)} students found.")
for r, sdata in results_map.items():
    print(f"  Roll: {r} -> {sdata}")

# Now update lib/data.js
print("\nUpdating lib/data.js...")
with open(data_js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

updated_count = 0
for roll_str, sem_dict in results_map.items():
    # Find student entry
    pattern = rf'(\{{\s*"rollNo":\s*"{roll_str}".*?"semesters":\s*\[)(.*?)(\]\s*,)'
    match = re.search(pattern, js_content, re.DOTALL)

    if match:
        prefix = match.group(1)
        existing_sems_str = match.group(2)
        suffix = match.group(3)

        try:
            existing_sems = json.loads("[" + existing_sems_str + "]")
        except:
            existing_sems = []

        sem_map = {s['sem']: s['sgpa'] for s in existing_sems if s.get('sgpa') is not None}

        for snum, sinfo in sem_dict.items():
            if sinfo['sgpa'] is not None:
                sem_map[snum] = sinfo['sgpa']

        new_sems = [{'sem': s, 'sgpa': sem_map[s]} for s in sorted(sem_map.keys())]
        new_sems_json = json.dumps(new_sems, indent=8)

        avg_cgpa = round(sum(s['sgpa'] for s in new_sems) / len(new_sems), 2) if new_sems else 0.0

        new_sem_block = prefix + "\n" + "\n".join("        " + line for line in new_sems_json.splitlines()[1:-1]) + "\n      " + suffix

        cgpa_pattern = rf'("rollNo":\s*"{roll_str}".*?"cgpa":\s*)([0-9.]+)'
        js_content = re.sub(cgpa_pattern, rf'\g<1>{avg_cgpa}', js_content, flags=re.DOTALL)
        js_content = js_content[:match.start()] + new_sem_block + js_content[match.end():]
        updated_count += 1
        print(f"  [UPDATED DATA.JS] Roll: {roll_str} | Sems: {[s['sem'] for s in new_sems]} | CGPA: {avg_cgpa}")

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\nAll done! Updated {updated_count} students in lib/data.js.")
