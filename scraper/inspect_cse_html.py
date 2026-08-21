import os
import glob
import re
from bs4 import BeautifulSoup
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

sem_v_dir = r"E:\result of All eie\CSE_sem_V"
sem_vi_dir = r"E:\result of All eie\CSE_sem_VI"

v_files = glob.glob(os.path.join(sem_v_dir, "*.html"))
vi_files = glob.glob(os.path.join(sem_vi_dir, "*.html"))

print(f"CSE Sem V HTML files count: {len(v_files)}")
print(f"CSE Sem VI HTML files count: {len(vi_files)}")

# Sample inspection on a few files
for fpath in v_files[:3]:
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    # Extract candidate name, roll no, father name, sgpa, result
    name_el = soup.find('span', id='lblCandidateName')
    roll_el = soup.find('span', id='lblRollNo')
    sgpa_el = soup.find('span', id='lblSGPA') or soup.find('span', id='lblSemesterGrade')
    res_el = soup.find('span', id='lblResult')
    
    print(f"\nFile: {os.path.basename(fpath)}")
    print(f"  Roll: {roll_el.text.strip() if roll_el else 'N/A'}")
    print(f"  Name: {name_el.text.strip() if name_el else 'N/A'}")
    print(f"  Result text: {res_el.text.strip() if res_el else 'N/A'}")

    # Inspect all spans
    for sp in soup.find_all('span'):
        sp_id = sp.get('id', '')
        if any(k in sp_id.lower() for k in ['name', 'roll', 'sgpa', 'cgpa', 'result', 'total', 'remark']):
            print(f"    span id='{sp_id}' -> '{sp.text.strip()}'")
