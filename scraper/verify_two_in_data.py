import json
import re

with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'r', encoding='utf-8') as f:
    js = f.read()

for roll in ["231371028012", "231351139009"]:
    m = re.search(r'\{\s*"rollNo":\s*"' + roll + r'".*?\n  \}(?=,\s*\{|\s*\];)', js, re.DOTALL)
    if m:
        st = json.loads(m.group(0))
        print(f"Roll: {roll} | Name: {st.get('name')} | Branch: {st.get('branch')} | CGPA: {st.get('cgpa')}")
        print(f"Semesters: {st.get('semesters')}")
        print(f"SemesterSubjects keys: {list(st.get('semesterSubjects', {}).keys())}\n")
    else:
        print(f"Roll: {roll} NOT found!")
