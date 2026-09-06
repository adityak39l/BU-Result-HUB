import json
import os
import re
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"

with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('export const STUDENTS = [')
json_str = text[start_idx + len('export const STUDENTS = '):].strip().rstrip(';')
students = json.loads(json_str)

me_students = [s for s in students if s['branch'] == 'ME']
print(f"================ PASS 1: STRUCTURE & COMPLETENESS AUDIT (ME: {len(me_students)} Students) ================")

errors_p1 = 0
for s in me_students:
    roll = s['rollNo']
    name = s['name']
    father = s.get('fatherName', '')
    mother = s.get('motherName', '')
    enroll = s.get('enrollNo', '')
    sems = s.get('semesters', [])
    sem_subs = s.get('semesterSubjects', {})
    
    if not name or len(name) < 2:
        print(f"  [ERROR] Invalid name for {roll}: '{name}'")
        errors_p1 += 1
    if not father or father == 'N/A':
        print(f"  [WARN] Missing father for {roll}: '{father}'")
    if not enroll or enroll == 'N/A':
        print(f"  [WARN] Missing enroll for {roll}: '{enroll}'")
    if len(sems) == 0:
        print(f"  [ERROR] No semester SGPA for {roll}")
        errors_p1 += 1
    if len(sem_subs) == 0:
        print(f"  [ERROR] No semester subjects for {roll}")
        errors_p1 += 1
        
    # Check subjects structure
    for sem_k, sub_list in sem_subs.items():
        if len(sub_list) < 5:
            print(f"  [ERROR] Too few subjects for {roll} in Sem {sem_k}: {len(sub_list)}")
            errors_p1 += 1

print(f"Pass 1 Completed with {errors_p1} fatal errors.")

print(f"\n================ PASS 2: MARKS, CREDITS & SGPA ACCURACY AUDIT ================")
errors_p2 = 0

dirs = {
    '3': r"E:\result of All eie\ME_sem_III",
    '4': r"E:\result of All eie\ME_sem_IV",
    '5': r"E:\result of All eie\ME_sem_V",
    '6': r"E:\result of All eie\ME_sem_VI"
}

for s in me_students:
    roll = s['rollNo']
    sem_subs = s.get('semesterSubjects', {})
    
    for sem_num, dpath in dirs.items():
        if not os.path.exists(dpath): continue
        
        # find matching file
        matched_file = None
        for f in os.listdir(dpath):
            if f.startswith(roll) and f.endswith('.html'):
                matched_file = os.path.join(dpath, f)
                break
                
        if matched_file:
            with open(matched_file, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f.read(), 'html.parser')
                
            # Verify name
            cand_name_tag = soup.find('span', id='lblCandidateName')
            if cand_name_tag and cand_name_tag.text.strip():
                if cand_name_tag.text.strip().upper() != s['name'].upper():
                    print(f"  [ERROR] Name mismatch for {roll} in {matched_file}: HTML='{cand_name_tag.text.strip()}' vs DB='{s['name']}'")
                    errors_p2 += 1
                    
            # Verify SGPA
            html_sgpa = 0.0
            for tr in soup.find_all('tr'):
                txt = tr.get_text(separator=' | ', strip=True)
                m = re.search(r'SGPA\s*\|\s*([0-9.]+)', txt)
                if m:
                    html_sgpa = float(m.group(1))
                    break
            
            db_sem_obj = next((x for x in s.get('semesters', []) if str(x['sem']) == sem_num), None)
            if html_sgpa > 0:
                if not db_sem_obj or round(db_sem_obj['sgpa'], 2) != round(html_sgpa, 2):
                    print(f"  [ERROR] SGPA mismatch for {roll} in Sem {sem_num}: HTML={html_sgpa} vs DB={db_sem_obj}")
                    errors_p2 += 1

print(f"Pass 2 Completed with {errors_p2} errors.")

print(f"\n================ MECHANICAL ENGG LEADERBOARD ================")
def get_effective_cgpa(student):
    sems56 = [x['sgpa'] for x in student.get('semesters', []) if x['sem'] in [5, 6]]
    if sems56:
        return round(sum(sems56) / len(sems56), 2)
    return student.get('cgpa', 0.0)

me_sorted = sorted(me_students, key=get_effective_cgpa, reverse=True)
for rank, s in enumerate(me_sorted, 1):
    sems_info = ", ".join([f"S{x['sem']}: {x['sgpa']}" for x in s['semesters']])
    eff = get_effective_cgpa(s)
    print(f"  #{rank:02d} | Roll: {s['rollNo']} | {s['name']:<25} | Comb(S5-6): {eff:<5} | {sems_info}")
