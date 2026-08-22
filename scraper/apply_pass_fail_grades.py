import json
import re
import os
import glob
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"

with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    js_content = f.read()

students_start = js_content.find("export const STUDENTS = [")
json_str = js_content[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

students = json.loads(json_str)
print(f"Loaded {len(students)} students from lib/data.js")

def compute_grade_and_credit_point(sub):
    # sub has: name, internalStr, externalStr, totalStr, grade, credit
    # Let's extract numerical values
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

    # RULE 1: If theory exam out of 100 has < 40 marks -> FAIL (Grade 'F')
    if ext_max == 100 and ext_obt is not None and ext_obt < 40:
        return "F"
        
    # RULE 2: If theory/sessional exam out of 50 has < 20 marks -> FAIL (Grade 'F')
    if ext_max == 50 and ext_obt is not None and ext_obt < 20:
        return "F"
    if int_max == 50 and int_obt is not None and int_obt < 20:
        return "F"

    # RULE 3: If total marks percentage < 40% -> FAIL (Grade 'F')
    pct = (tot_obt / tot_max * 100.0) if tot_max > 0 else 0
    if pct < 40.0:
        return "F"

    # Standard Percentage to Grade
    if pct >= 90.0:
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

# Grade points
GRADE_POINTS = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "F": 0
}

updated_f_count = 0

for st in students:
    sem_subs = st.get("semesterSubjects", {})
    for sem_key, subs in sem_subs.items():
        for sub in subs:
            old_grade = sub.get("grade", "")
            new_grade = compute_grade_and_credit_point(sub)
            if new_grade == "F" and old_grade != "F":
                updated_f_count += 1
                # print(f"Assigned 'F' to {st['name']} ({st['rollNo']}) in {sub['name']} [Ext: {sub['externalStr']}, Int: {sub['internalStr']}]")
            sub["grade"] = new_grade

    # Also update currentSemSubjects
    if "currentSemSubjects" in st:
        for sub in st["currentSemSubjects"]:
            sub["grade"] = compute_grade_and_credit_point(sub)

print(f"\nApplied grading rule! Total newly flagged 'F' subject grades: {updated_f_count}")

# Write updated data back to lib/data.js
branches_block = js_content[:students_start]
formatted_students = ",\n".join("  " + json.dumps(s, indent=4).replace("\n", "\n  ") for s in students)
final_js = branches_block + "export const STUDENTS = [\n" + formatted_students + "\n];\n"

with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(final_js)

print("lib/data.js updated with exact passing/failing grading criteria!")
