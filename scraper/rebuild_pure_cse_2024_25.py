import os
import glob
import re
from bs4 import BeautifulSoup
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"
DIR_SEM_III = r"E:\result of All eie\CSE_sem_III"
DIR_SEM_IV = r"E:\result of All eie\CSE_sem_IV"

with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    js_content = f.read()

students_start = js_content.find("export const STUDENTS = [")
json_str = js_content[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

existing_students_list = json.loads(json_str)

def compute_grade(sub):
    int_str = sub.get("internalStr", "")
    ext_str = sub.get("externalStr", "")
    tot_str = sub.get("totalStr", "")
    
    ext_obt = None
    ext_max = 100
    if "Ext:" in ext_str:
        parts = ext_str.replace("Ext:", "").strip().split("/")
        if len(parts) >= 1 and parts[0].strip().isdigit():
            ext_obt = float(parts[0].strip())
        if len(parts) >= 2 and parts[1].strip().isdigit():
            ext_max = float(parts[1].strip())
    elif ext_str.isdigit():
        ext_obt = float(ext_str)

    int_obt = None
    int_max = 50
    if "Int:" in int_str:
        parts = int_str.replace("Int:", "").strip().split("/")
        if len(parts) >= 1 and parts[0].strip().isdigit():
            int_obt = float(parts[0].strip())
        if len(parts) >= 2 and parts[1].strip().isdigit():
            int_max = float(parts[1].strip())

    tot_obt = 0
    tot_max = 150
    if "Tot:" in tot_str:
        parts = tot_str.replace("Tot:", "").strip().split("/")
        if len(parts) >= 1 and parts[0].strip().replace('.','',1).isdigit():
            tot_obt = float(parts[0].strip())
        if len(parts) >= 2 and parts[1].strip().replace('.','',1).isdigit():
            tot_max = float(parts[1].strip())
    else:
        tot_obt = (ext_obt or 0) + (int_obt or 0)

    # Passing Criteria
    if ext_max == 100 and ext_obt is not None and ext_obt < 40:
        return "F"
    if ext_max == 50 and ext_obt is not None and ext_obt < 20:
        return "F"
    if int_max == 50 and int_obt is not None and int_obt < 20:
        return "F"

    pct = (tot_obt / tot_max * 100.0) if tot_max > 0 else 0
    if pct < 40.0:
        return "F"
    elif pct >= 90.0:
        return "O"
    elif pct >= 80.0:
        return "A+"
    elif pct >= 70.0:
        return "A"
    elif pct >= 60.0:
        return "B+"
    elif pct >= 50.0:
        return "B"
    elif pct >= 40.0:
        return "C"
    else:
        return "F"

def parse_marksheet(file_path, sem_num):
    if not os.path.exists(file_path):
        return None
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
    roll_tag = soup.find('span', id='lblRollNo')
    if not roll_tag or not roll_tag.text.strip():
        return None
    roll = roll_tag.text.strip()
    
    name_tag = soup.find('span', id='lblCandidateName')
    name = name_tag.text.strip() if name_tag else ''
    
    father_tag = soup.find('span', id='lblFatherName')
    father = father_tag.text.strip() if father_tag else ''
    
    mother_tag = soup.find('span', id='lblMotherName')
    mother = mother_tag.text.strip() if mother_tag else 'MOTHER'
    
    enroll_tag = soup.find('span', id='lblEnrollmentNo')
    enroll = enroll_tag.text.strip() if enroll_tag else f"BU/{roll[-6:]}"
    
    full_text = soup.get_text()
    sgpa_match = re.search(r'SGPA[\s:]*([0-9.]+)', full_text, re.I)
    sgpa = float(sgpa_match.group(1)) if sgpa_match else 0.0
    
    subjects = []
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        if len(tds) >= 11:
            name_cell = tds[0]
            if not name_cell or any(k in name_cell for k in ['NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'INSTITUTE', 'Theory/Lab', 'Max.', 'Credit Max:']):
                continue
            
            ext_val = tds[2] if tds[2] else (tds[8] if len(tds)>8 else '')
            int_val = tds[4] if len(tds)>4 and tds[4] else (tds[6] if len(tds)>6 else '')
            tot_val = tds[10] if len(tds)>10 and tds[10] else (tds[6] if len(tds)>6 else '')
            credit_val = int(tds[11]) if len(tds)>11 and tds[11].isdigit() else 1
            
            code_gen = name_cell[:12].strip().replace(' ', '-')
            
            sub_dict = {
                "code": code_gen,
                "name": name_cell,
                "internalStr": f"Int: {int_val} / 50" if int_val else "-",
                "externalStr": f"Ext: {ext_val} / 100" if ext_val else "-",
                "totalStr": f"Tot: {tot_val} / 150" if tot_val else "-",
                "grade": "A",
                "credit": credit_val
            }
            sub_dict["grade"] = compute_grade(sub_dict)
            subjects.append(sub_dict)
            
    return {
        "roll": roll,
        "name": name,
        "father": father,
        "mother": mother,
        "enroll": enroll,
        "sem": sem_num,
        "sgpa": sgpa,
        "subjects": subjects
    }

# Find all CSE files in E:\result of All eie\CSE_sem_III and CSE_sem_IV
sem3_files = glob.glob(os.path.join(DIR_SEM_III, "*_CSE_sem_III.html"))
sem4_files = glob.glob(os.path.join(DIR_SEM_IV, "*_CSE_sem_IV.html"))

all_cse_rolls = set()
for f in sem3_files + sem4_files:
    m = re.search(r'(\d+)_CSE_sem_', os.path.basename(f))
    if m:
        all_cse_rolls.add(m.group(1))

print(f"Building pure Session 2024-25 CSE dataset for {len(all_cse_rolls)} students...")

cse_2024_students = []

for roll in sorted(list(all_cse_rolls)):
    f3 = os.path.join(DIR_SEM_III, f"{roll}_CSE_sem_III.html")
    f4 = os.path.join(DIR_SEM_IV, f"{roll}_CSE_sem_IV.html")
    
    p3 = parse_marksheet(f3, 3)
    p4 = parse_marksheet(f4, 4)
    
    if not p3 and not p4:
        continue
        
    primary = p4 if p4 else p3
    name = primary["name"]
    father = primary["father"]
    mother = primary["mother"]
    enroll = primary["enroll"]
    
    if not name:
        continue
        
    sems_arr = []
    sem_subs = {}
    
    if p3 and p3["sgpa"] > 0:
        sems_arr.append({"sem": 3, "sgpa": p3["sgpa"]})
        sem_subs["3"] = p3["subjects"]
    if p4 and p4["sgpa"] > 0:
        sems_arr.append({"sem": 4, "sgpa": p4["sgpa"]})
        sem_subs["4"] = p4["subjects"]
        
    sems_arr.sort(key=lambda s: s["sem"])
    cgpa = round(sum(s["sgpa"] for s in sems_arr) / len(sems_arr), 2) if sems_arr else 0.0
    
    # Latest semester is Sem 4 (or Sem 3)
    latest_sem = sems_arr[-1]["sem"] if sems_arr else 3
    current_subs = sem_subs.get(str(latest_sem), [])
    
    st_obj = {
        "rank": 1,
        "branchRank": 1,
        "rollNo": roll,
        "enrollNo": enroll,
        "name": name,
        "fatherName": father,
        "motherName": mother,
        "branch": "CSE",
        "batch": "2024-25",
        "cgpa": cgpa,
        "semesters": sems_arr,
        "semesterSubjects": sem_subs,
        "currentSemSubjects": current_subs
    }
    cse_2024_students.append(st_obj)
    print(f"CSE (Batch 2024-25): {roll} -> {name} | CGPA: {cgpa} | Sems: {[s['sem'] for s in sems_arr]}")

# Keep other branches from existing_students_list
other_students = [s for s in existing_students_list if s["branch"] != "CSE"]
all_final = cse_2024_students + other_students

# Recalculate overall ranks
all_final.sort(key=lambda s: s.get("cgpa", 0.0), reverse=True)
for idx, st in enumerate(all_final, start=1):
    st["rank"] = idx

# Recalculate branch ranks
branch_counts = {}
for st in all_final:
    b = st.get("branch", "OTHER")
    branch_counts[b] = branch_counts.get(b, 0) + 1
    st["branchRank"] = branch_counts[b]

print(f"\nTotal merged students: {len(all_final)} (CSE: {len(cse_2024_students)}, Other: {len(other_students)})")

# Save to lib/data.js
branches_block = js_content[:students_start]
formatted_students = ",\n".join("  " + json.dumps(s, indent=4).replace("\n", "\n  ") for s in all_final)
final_js = branches_block + "export const STUDENTS = [\n" + formatted_students + "\n];\n"

with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(final_js)

print("lib/data.js successfully written with pure Session 2024-25 (Sem III & Sem IV) CSE dataset!")
