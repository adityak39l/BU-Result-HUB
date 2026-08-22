import os
import glob
import re
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_files = glob.glob(r"E:\result of All eie\**\*.html", recursive=True)

print(f"Inspecting {len(all_files)} marksheets for failing / low marks cases...")

failing_rows = []

for fp in all_files:
    with open(fp, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    roll = soup.find('span', id='lblRollNo')
    if not roll or not roll.text.strip():
        continue
    roll_num = roll.text.strip()
    name = soup.find('span', id='lblCandidateName').text.strip() if soup.find('span', id='lblCandidateName') else 'Unknown'
    
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        if len(tds) >= 11:
            name_cell = tds[0]
            if not name_cell or any(k in name_cell for k in ['NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'INSTITUTE', 'Theory/Lab', 'Max.', 'Credit Max:']):
                continue
            
            # Theory marks: tds[2], Sessional: tds[4], Total: tds[10], Grade: tds[12]
            th_ext = tds[2]
            sess_int = tds[4]
            total_val = tds[10]
            grade_raw = tds[12] if len(tds)>12 else ''
            
            # Check if theory < 40
            if th_ext and th_ext.isdigit() and int(th_ext) < 40:
                failing_rows.append({
                    "roll": roll_num,
                    "name": name,
                    "file": os.path.basename(fp),
                    "subject": name_cell,
                    "theory": th_ext,
                    "sessional": sess_int,
                    "total": total_val,
                    "grade": grade_raw
                })

print(f"\nFound {len(failing_rows)} cases where Theory External < 40:")
for fr in failing_rows[:30]:
    print(f"  Roll: {fr['roll']} ({fr['name']}) | Sub: {fr['subject']} | Th: {fr['theory']} | Sess: {fr['sessional']} | Tot: {fr['total']} | HTML Grade: {fr['grade']}")
