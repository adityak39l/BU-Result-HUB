import os
import time
import urllib.request
import urllib.parse
import http.cookiejar
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

cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

def get_session():
    req = urllib.request.Request(url, headers={'User-Agent': headers['User-Agent']})
    res = opener.open(req, timeout=20)
    html = res.read().decode('utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    viewstate = soup.find('input', {'name': '__VIEWSTATE'})['value']
    eventval = soup.find('input', {'name': '__EVENTVALIDATION'})['value']
    gen_tag = soup.find('input', {'name': '__VIEWSTATEGENERATOR'})
    generator = gen_tag['value'] if gen_tag else ''
    return viewstate, eventval, generator

def query_student(roll_str, sem_code, viewstate, eventval, generator):
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
    res = opener.open(req_post, timeout=20)
    res_html = res.read().decode('utf-8')
    soup_r = BeautifulSoup(res_html, 'html.parser')
    
    # Extract updated viewstate for next chained request if needed
    vs_tag = soup_r.find('input', {'name': '__VIEWSTATE'})
    ev_tag = soup_r.find('input', {'name': '__EVENTVALIDATION'})
    gen_tag = soup_r.find('input', {'name': '__VIEWSTATEGENERATOR'})
    new_vs = vs_tag['value'] if vs_tag else viewstate
    new_ev = ev_tag['value'] if ev_tag else eventval
    new_gen = gen_tag['value'] if gen_tag else generator
    
    name_tag = soup_r.find('span', id='lblCandidateName')
    if name_tag and name_tag.text.strip():
        return res_html, name_tag.text.strip(), new_vs, new_ev, new_gen
    
    return None, None, new_vs, new_ev, new_gen

semesters = [
    {'code': '1030205', 'name': 'CSE_sem_V', 'folder': sem_v_dir},
    {'code': '1030206', 'name': 'CSE_sem_VI', 'folder': sem_vi_dir}
]

start_roll = 231381030001
end_roll = 231381030090

print(f"=== DOWNLOADING & VERIFYING CSE SEM V & VI (Rolls {start_roll} to {end_roll}) ===\n", flush=True)

for sem in semesters:
    sem_code = sem['code']
    sem_name = sem['name']
    sem_folder = sem['folder']
    
    print(f"\n>>>>>> STARTING {sem_name} (Code {sem_code}) <<<<<<", flush=True)
    
    # Init session
    try:
        vs, ev, gen = get_session()
    except Exception as e:
        print(f"Failed to get initial session: {e}", flush=True)
        time.sleep(2)
        vs, ev, gen = get_session()
        
    found_count = 0
    not_found_count = 0
    
    for r in range(start_roll, end_roll + 1):
        roll_str = str(r)
        
        # Check if already downloaded and valid
        file_path = os.path.join(sem_folder, f"{roll_str}_{sem_name}.html")
        valid_cached = False
        cached_name = ""
        
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                c_html = f.read()
            c_soup = BeautifulSoup(c_html, 'html.parser')
            c_name = c_soup.find('span', id='lblCandidateName')
            if c_name and c_name.text.strip():
                valid_cached = True
                cached_name = c_name.text.strip()
            else:
                # Corrupted / empty form cached, remove it
                os.remove(file_path)
                
        if valid_cached:
            print(f"[{sem_name}] {roll_str} -> (Cached) {cached_name}", flush=True)
            found_count += 1
            continue
            
        # Not cached or was invalid, fetch from server
        try:
            html, s_name, vs, ev, gen = query_student(roll_str, sem_code, vs, ev, gen)
            if html and s_name:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(html)
                print(f"[{sem_name}] {roll_str} -> [FOUND] {s_name}", flush=True)
                found_count += 1
            else:
                print(f"[{sem_name}] {roll_str} -> [NOT FOUND / LEFT]", flush=True)
                not_found_count += 1
        except Exception as e:
            print(f"[{sem_name}] {roll_str} -> [ERROR: {e}], resetting session...", flush=True)
            time.sleep(1)
            try:
                vs, ev, gen = get_session()
                html, s_name, vs, ev, gen = query_student(roll_str, sem_code, vs, ev, gen)
                if html and s_name:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(html)
                    print(f"[{sem_name}] {roll_str} -> [RECOVERED] {s_name}", flush=True)
                    found_count += 1
                else:
                    print(f"[{sem_name}] {roll_str} -> [NOT FOUND]", flush=True)
                    not_found_count += 1
            except Exception as e2:
                print(f"[{sem_name}] {roll_str} -> [FAILED RECOVERY: {e2}]", flush=True)
                not_found_count += 1
                
        time.sleep(0.15)
        
    print(f"\nFinished {sem_name}: {found_count} valid marksheets saved, {not_found_count} not found.\n", flush=True)

print("All downloads and verifications complete!", flush=True)
