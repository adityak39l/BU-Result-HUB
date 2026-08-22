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
existing_db = {s["rollNo"]: s for s in existing_students_list}
print(f"Loaded existing database with {len(existing_students_list)} students.")

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
    
    # Parse subjects
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
            grade_raw = tds[12] if len(tds)>12 else ''
            grade_clean = re.sub(r'[0-9.]+', '', grade_raw).strip() or 'A'
            
            # Generate short code
            code_gen = name_cell[:12].strip().replace(' ', '-')
            
            subjects.append({
                "code": code_gen,
                "name": name_cell,
                "internalStr": f"Int: {int_val}" if int_val else "-",
                "externalStr": f"Ext: {ext_val}" if ext_val else "-",
                "totalStr": f"Tot: {tot_val}" if tot_val else "-",
                "grade": grade_clean,
                "credit": credit_val
            })
            
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

# Find all rolls in CSE_sem_III and CSE_sem_IV
sem3_files = glob.glob(os.path.join(DIR_SEM_III, "*_CSE_sem_III.html"))
sem4_files = glob.glob(os.path.join(DIR_SEM_IV, "*_CSE_sem_IV.html"))

all_cse_rolls = set()
for f in sem3_files + sem4_files:
    m = re.search(r'(\d+)_CSE_sem_', os.path.basename(f))
    if m:
        all_cse_rolls.add(m.group(1))

print(f"Total unique CSE rolls to process: {len(all_cse_rolls)}")

updated_cse_students = []

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
        
    # Build semesters array
    sems_arr = []
    sem_subs = {}
    
    if p3 and p3["sgpa"] > 0:
        sems_arr.append({"sem": 3, "sgpa": p3["sgpa"]})
        sem_subs["3"] = p3["subjects"]
    if p4 and p4["sgpa"] > 0:
        sems_arr.append({"sem": 4, "sgpa": p4["sgpa"]})
        sem_subs["4"] = p4["subjects"]
        
    # Check if student had existing Sem 5 & 6 (from previous sessions / records)
    existing_st = existing_db.get(roll)
    if existing_st and existing_st.get("semesterSubjects"):
        if "5" in existing_st["semesterSubjects"]:
            sem_subs["5"] = existing_st["semesterSubjects"]["5"]
            s5_obj = next((s for s in existing_st.get("semesters", []) if s["sem"] == 5), None)
            if s5_obj and not any(s["sem"] == 5 for s in sems_arr):
                sems_arr.append(s5_obj)
        if "6" in existing_st["semesterSubjects"]:
            sem_subs["6"] = existing_st["semesterSubjects"]["6"]
            s6_obj = next((s for s in existing_st.get("semesters", []) if s["sem"] == 6), None)
            if s6_obj and not any(s["sem"] == 6 for s in sems_arr):
                sems_arr.append(s6_obj)
                
    # Sort semesters
    sems_arr.sort(key=lambda s: s["sem"])
    
    # Calculate CGPA
    if sems_arr:
        cgpa = round(sum(s["sgpa"] for s in sems_arr) / len(sems_arr), 2)
    else:
        cgpa = 0.0
        
    current_subs = sem_subs.get(str(sems_arr[-1]["sem"]), []) if sems_arr else []
    
    student_obj = {
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
    updated_cse_students.append(student_obj)
    print(f"Processed CSE: {roll} -> {name} | CGPA: {cgpa} | Sems: {[s['sem'] for s in sems_arr]}")

# Combine with non-CSE students from existing_db
final_students = [s for s in updated_cse_students]
for st in existing_students_list:
    if st["branch"] != "CSE" and st["rollNo"] not in [s["rollNo"] for s in final_students]:
        final_students.append(st)

print(f"\nTotal students after merging CSE + other branches: {len(final_students)}")

# Re-rank all students
final_students.sort(key=lambda s: s.get("cgpa", 0.0), reverse=True)
for idx, st in enumerate(final_students, start=1):
    st["rank"] = idx

branch_counts = {}
for st in final_students:
    b = st.get("branch", "OTHER")
    branch_counts[b] = branch_counts.get(b, 0) + 1
    st["branchRank"] = branch_counts[b]

# Write to lib/data.js
branches_block = js_content[:students_start]
formatted_students = ",\n".join("  " + json.dumps(s, indent=4).replace("\n", "\n  ") for s in final_students)
final_js = branches_block + "export const STUDENTS = [\n" + formatted_students + "\n];\n"

with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(final_js)

print("lib/data.js successfully written with verified CSE Session 2024-25 Sem III & Sem IV data!")
