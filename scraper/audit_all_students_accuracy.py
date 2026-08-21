import os
import glob
import re
from bs4 import BeautifulSoup
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'r', encoding='utf-8') as f:
    js_content = f.read()

students_start = js_content.find("export const STUDENTS = [")
json_str = js_content[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

try:
    students_list = json.loads(json_str)
    print(f"Successfully loaded JSON! Total students in DB: {len(students_list)}")
except Exception as e:
    # fallback to regex
    student_chunks = re.findall(r'(\{\s*"rank":\s*\d+.*?\}\n  \}(?=,\s*\{|\s*\]))', json_str, re.DOTALL)
    print(f"Regex chunks found: {len(student_chunks)}")
    students_list = [json.loads(c) for c in student_chunks]

db = {s["rollNo"]: s for s in students_list}

all_files = glob.glob(r"E:\result of All eie\**\*.html", recursive=True)
print(f"Total HTML files found: {len(all_files)}")

def parse_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    roll_el = soup.find('span', id='lblRollNo')
    if not roll_el or not roll_el.text.strip():
        return None
    roll = roll_el.text.strip()
    
    name_el = soup.find('span', id='lblCandidateName')
    name = name_el.text.strip() if name_el else ''
    
    father_el = soup.find('span', id='lblFatherName')
    father = father_el.text.strip() if father_el else ''
    
    course_el = soup.find('span', id='lblCourseName')
    course = course_el.text.strip() if course_el else ''
    
    text = soup.get_text()
    sgpa_match = re.search(r'SGPA[\s:]*([0-9.]+)', text, re.I)
    sgpa = float(sgpa_match.group(1)) if sgpa_match else None
    
    sem = None
    if 'III' in course or '3rd' in course: sem = 3
    elif 'IV' in course or '4th' in course: sem = 4
    elif 'V ' in course or 'V Semester' in course or '5th' in course: sem = 5
    elif 'VI' in course or '6th' in course: sem = 6
    elif 'VII' in course or '7th' in course: sem = 7
    elif 'VIII' in course or '8th' in course: sem = 8
    
    return {
        "roll": roll,
        "name": name,
        "father": father,
        "course": course,
        "sem": sem,
        "sgpa": sgpa
    }

mismatches = []
verified = 0

for fp in all_files:
    parsed = parse_html_file(fp)
    if not parsed or not parsed["name"]:
        continue
    
    roll = parsed["roll"]
    if roll not in db:
        mismatches.append(f"Student not found in DB: {roll} ({parsed['name']}) from {os.path.basename(fp)}")
        continue
    
    st = db[roll]
    if st["name"].strip().upper() != parsed["name"].strip().upper():
        mismatches.append(f"Name mismatch for {roll}: DB='{st['name']}' vs HTML='{parsed['name']}'")
    
    if parsed["sem"] and parsed["sgpa"]:
        sem_obj = next((s for s in st.get("semesters", []) if s["sem"] == parsed["sem"]), None)
        if sem_obj:
            if abs(sem_obj["sgpa"] - parsed["sgpa"]) > 0.01:
                # Except if user custom adjusted
                mismatches.append(f"SGPA mismatch for {roll} Sem {parsed['sem']}: DB={sem_obj['sgpa']} vs HTML={parsed['sgpa']}")
        else:
            mismatches.append(f"Sem {parsed['sem']} missing in DB for {roll}")
            
    verified += 1

print(f"\n==========================================")
print(f"VERIFICATION REPORT:")
print(f"Files verified: {verified}")
print(f"Mismatches: {len(mismatches)}")
for m in mismatches:
    print(f"  ❌ {m}")
if len(mismatches) == 0:
    print("✅ PERFECT 100% MATCH ACROSS ALL MARKSHEETS!")
print(f"==========================================")
