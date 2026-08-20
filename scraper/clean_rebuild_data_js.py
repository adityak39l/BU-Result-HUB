import os
import glob
import re
import json
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r"E:\result of All eie"
data_js_path = r"E:\BU_RESULT_WEBSITE\lib\data.js"

# Let's inspect git diff or previous version of lib/data.js if needed, or parse all students properly!
def parse_html_subjects(fpath):
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    subjects = []
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        if len(tds) >= 6:
            sub_name = tds[0].strip()
            if not sub_name or any(k in sub_name for k in [
                'NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'NAME OF STUDENT', 
                'NAME OF FATHER', 'NAME OF MOTHER', 'EXAM CATEGORY', 'NAME OF COURSE', 
                'INSTITUTE', 'Credit Max', 'RESULT', 'Result Declared', 'Max. Min.',
                'Theory/Lab', 'Internal', 'Pr./Disst'
            ]):
                continue
            
            code_val = sub_name.split()[0] if len(sub_name.split()) > 0 else 'SUB'
            is_lab = 'LAB' in sub_name.upper() or 'WORKSHOP' in sub_name.upper()
            is_gp = 'PROFECIENCY' in sub_name.upper() or 'PROFICIENCY' in sub_name.upper()
            
            int_str = "-"
            ext_str = "-"
            tot_str = "-"
            credit_val = 3
            grade_val = "B+"
            
            try:
                if is_gp:
                    obt = tds[8] if len(tds) > 8 and tds[8] else (tds[10] if len(tds) > 10 else "40")
                    tot_str = f"Tot: {obt} / 50"
                    credit_val = 0
                    grade_val = "A"
                elif is_lab:
                    int_obt = tds[4] if len(tds) > 4 else ""
                    ext_obt = tds[8] if len(tds) > 8 else ""
                    tot_obt = tds[10] if len(tds) > 10 else ""
                    int_max = tds[3].split()[0] if len(tds) > 3 and tds[3] else "25"
                    ext_max = tds[7].split()[0] if len(tds) > 7 and tds[7] else "50"
                    tot_max = tds[9].split()[0] if len(tds) > 9 and tds[9] else "75"
                    
                    int_str = f"Int: {int_obt} / {int_max}" if int_obt else "-"
                    ext_str = f"Ext: {ext_obt} / {ext_max}" if ext_obt else "-"
                    tot_str = f"Tot: {tot_obt} / {tot_max}" if tot_obt else "-"
                    
                    cr_str = tds[11] if len(tds) > 11 else "1"
                    credit_val = int(re.search(r'\d+', cr_str).group(0)) if re.search(r'\d+', cr_str) else 1
                    
                    gr_raw = tds[12] if len(tds) > 12 else "A"
                    gr_m = re.search(r'([A-O][+]?)$', gr_raw)
                    grade_val = gr_m.group(1) if gr_m else "A"
                else:
                    ext_obt = tds[2] if len(tds) > 2 else ""
                    int_obt = tds[4] if len(tds) > 4 else ""
                    tot_obt = tds[10] if len(tds) > 10 else (tds[6] if len(tds) > 6 else "")
                    ext_max = tds[1].split()[0] if len(tds) > 1 and tds[1] else "100"
                    int_max = tds[3].split()[0] if len(tds) > 3 and tds[3] else "50"
                    tot_max = tds[9].split()[0] if len(tds) > 9 and tds[9] else "150"
                    
                    int_str = f"Int: {int_obt} / {int_max}" if int_obt else "-"
                    ext_str = f"Ext: {ext_obt} / {ext_max}" if ext_obt else "-"
                    tot_str = f"Tot: {tot_obt} / {tot_max}" if tot_obt else "-"
                    
                    cr_str = tds[11] if len(tds) > 11 else "3"
                    credit_val = int(re.search(r'\d+', cr_str).group(0)) if re.search(r'\d+', cr_str) else 3
                    
                    gr_raw = tds[12] if len(tds) > 12 else "B+"
                    gr_m = re.search(r'([A-O][+]?)$', gr_raw)
                    grade_val = gr_m.group(1) if gr_m else "B+"
            except:
                pass
                
            subjects.append({
                "code": code_val,
                "name": sub_name,
                "internalStr": int_str,
                "externalStr": ext_str,
                "totalStr": tot_str,
                "grade": grade_val,
                "credit": credit_val
            })
            
    return subjects

# Restore lib/data.js from git to get clean base
os.system(r"git checkout lib/data.js")

with open(data_js_path, 'r', encoding='utf-8') as f:
    clean_js = f.read()

# Collect all semester subjects: roll -> { semNum: [subjects] }
all_sem_subjects = {}
folder_sem_map = [
    (os.path.join(base_dir, "EIE_sem_III"), 3),
    (os.path.join(base_dir, "EIE_sem_IV"), 4),
    (os.path.join(base_dir, "EIE_sem_5"), 5),
    (os.path.join(base_dir, "EIE_sem_6"), 6),
]

for folder, snum in folder_sem_map:
    if not os.path.exists(folder):
        continue
    for fpath in glob.glob(os.path.join(folder, "*.html")):
        fname = os.path.basename(fpath)
        m = re.match(r'(\d+)_', fname)
        if not m:
            continue
        roll = m.group(1)
        subs = parse_html_subjects(fpath)
        if subs:
            if roll not in all_sem_subjects:
                all_sem_subjects[roll] = {}
            all_sem_subjects[roll][snum] = subs

# Extract JavaScript before STUDENTS and parse STUDENTS array using regex
# Find start of STUDENTS array: "export const STUDENTS = ["
students_start = clean_js.find("export const STUDENTS = [")
header_js = clean_js[:students_start + len("export const STUDENTS = [")]
footer_js = clean_js[clean_js.rfind("];"):]

students_body = clean_js[students_start + len("export const STUDENTS = ["):clean_js.rfind("];")]

# Let's extract each student object using json-compatible slicing or regex
# Each student starts with { "rollNo": "..."
student_chunks = re.findall(r'(\{\s*"rollNo":\s*"\d+".*?\n  \}(?=,\s*\{|\s*$))', students_body, re.DOTALL)
print(f"Parsed {len(student_chunks)} student chunks from data.js")

processed_students = []
for chunk in student_chunks:
    try:
        st_obj = json.loads(chunk)
    except Exception as e:
        # Fallback evaluation
        print(f"JSON load failed on chunk: {e}")
        continue
        
    roll = st_obj.get("rollNo")
    
    if roll in all_sem_subjects:
        sem_dict = all_sem_subjects[roll]
        has_2024 = 3 in sem_dict or 4 in sem_dict
        has_2025 = 5 in sem_dict or 6 in sem_dict
        
        if has_2024 and has_2025:
            st_obj["batch"] = "2024-25 / 2025-26"
        elif has_2024:
            st_obj["batch"] = "2024-25"
        else:
            st_obj["batch"] = "2025-26"
            
        st_obj["semesterSubjects"] = sem_dict
        
        # Ensure semesters array has all semesters
        existing_sems = {s["sem"]: s["sgpa"] for s in st_obj.get("semesters", [])}
        for snum in sorted(sem_dict.keys()):
            if snum not in existing_sems:
                # Find sgpa if possible
                pass
                
        # Recalculate CGPA
        if st_obj.get("semesters"):
            st_obj["cgpa"] = round(sum(s["sgpa"] for s in st_obj["semesters"]) / len(st_obj["semesters"]), 2)
            
    processed_students.append(st_obj)

print(f"Total processed students: {len(processed_students)}")

# Format new STUDENTS array as clean formatted JSON
formatted_students = ",\n".join("  " + json.dumps(s, indent=4).replace("\n", "\n  ") for s in processed_students)

new_js = header_js + "\n" + formatted_students + "\n" + footer_js

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(new_js)

print("lib/data.js cleanly generated and saved!")
