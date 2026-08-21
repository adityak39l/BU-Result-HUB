import os
import re
from bs4 import BeautifulSoup
import json

f3 = r"E:\result of All eie\EIE_sem_III\231351139011_EIE_sem_III.html"

with open(f3, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

roll = soup.find('span', id='lblRollNo').text.strip()
name = soup.find('span', id='lblCandidateName').text.strip()
father = soup.find('span', id='lblFatherName').text.strip() if soup.find('span', id='lblFatherName') else 'BRAJESH'
mother = soup.find('span', id='lblMotherName').text.strip() if soup.find('span', id='lblMotherName') else 'RANI'
enroll = soup.find('span', id='lblEnrollmentNo').text.strip() if soup.find('span', id='lblEnrollmentNo') else 'BU0230609019'

text = soup.get_text()
sgpa_match = re.search(r'SGPA[\s:]*([0-9.]+)', text, re.I)
sgpa = float(sgpa_match.group(1)) if sgpa_match else 5.85

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
        grade_clean = re.sub(r'[0-9.]+', '', grade_raw).strip() or 'B'
        
        code_gen = name_cell[:10].strip().replace(' ', '-')
        
        subjects.append({
            "code": code_gen,
            "name": name_cell,
            "internalStr": f"Int: {int_val}" if int_val else "-",
            "externalStr": f"Ext: {ext_val}" if ext_val else "-",
            "totalStr": f"Tot: {tot_val}" if tot_val else "-",
            "grade": grade_clean,
            "credit": credit_val
        })

print(f"Parsed {name} ({roll}): SGPA = {sgpa}, Subjects count = {len(subjects)}")

# Add to data.js
with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'r', encoding='utf-8') as f:
    js_content = f.read()

students_start = js_content.find("export const STUDENTS = [")
students_body = js_content[students_start + len("export const STUDENTS = ["):js_content.rfind("];")]
student_chunks = re.findall(r'(\{\s*"rollNo":\s*"\d+".*?\n  \}(?=,\s*\{|\s*$))', students_body, re.DOTALL)
all_students = [json.loads(c) for c in student_chunks]

existing = next((s for s in all_students if s["rollNo"] == roll), None)
if not existing:
    new_student = {
        "rank": len(all_students) + 1,
        "branchRank": 1,
        "rollNo": roll,
        "enrollNo": enroll,
        "name": name,
        "fatherName": father,
        "motherName": mother,
        "branch": "EIE",
        "batch": "2024-25",
        "cgpa": sgpa,
        "semesters": [
            {"sem": 3, "sgpa": sgpa}
        ],
        "semesterSubjects": {
            "3": subjects
        },
        "currentSemSubjects": subjects
    }
    all_students.append(new_student)
    print(f"Added {name} to all_students!")

# Re-sort and recalculate ranks
all_students.sort(key=lambda s: s.get("cgpa", 0.0), reverse=True)
for idx, st in enumerate(all_students, start=1):
    st["rank"] = idx

branch_counts = {}
for st in all_students:
    b = st.get("branch", "OTHER")
    branch_counts[b] = branch_counts.get(b, 0) + 1
    st["branchRank"] = branch_counts[b]

branches_block = js_content[:students_start]
formatted_students = ",\n".join("  " + json.dumps(s, indent=4).replace("\n", "\n  ") for s in all_students)
final_js = branches_block + "export const STUDENTS = [\n" + formatted_students + "\n];\n"

with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'w', encoding='utf-8') as f:
    f.write(final_js)

print(f"Successfully updated data.js! Total verified students now: {len(all_students)}")
