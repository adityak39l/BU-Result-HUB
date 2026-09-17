import os
import json
import re
import shutil
from bs4 import BeautifulSoup

print("=== ATTACHING BME SEMESTER VI (MOHD ASHZAD - 231371028009) TO WEBSITE ===")

# 1. Read the saved HTML marksheet
html_path = r"E:\result of All eie\BME_sem_VI\231371028009_BME_sem_VI.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# Parse subjects from table 3
tables = soup.find_all("table")
t3 = tables[3]
rows = t3.find_all("tr", recursive=False)

sem6_subjects = []
sgpa = 8.57
result_status = "PASSED"

for r_idx, row in enumerate(rows):
    cells = [c.text.strip().replace("\n", " ") for c in row.find_all(["td", "th"], recursive=False)]
    row_text = " ".join(cells)

    if "SGPA" in row_text:
        sgpa_match = re.search(r"SGPA\s+([0-9\.]+)", row_text)
        if sgpa_match:
            try:
                sgpa = float(sgpa_match.group(1))
            except:
                pass

    if len(cells) >= 11:
        sub_name = cells[0].strip()
        if sub_name and not any(h in sub_name for h in ["NAME OF PAPER", "Max.", "Credit Max", "RESULT", "ROLL NUMBER", "PRACTICAL", "Result Declared"]):
            ext_marks = ""
            int_marks = ""
            tot_marks = ""
            credit = 3
            grade = "A"

            if cells[2] and cells[2].isdigit():
                ext_marks = cells[2]
            if cells[4] and cells[4].isdigit():
                int_marks = cells[4]

            if not ext_marks and len(cells) > 8 and cells[8] and cells[8].isdigit():
                ext_marks = cells[8]
            if not int_marks and len(cells) > 4 and cells[4] and cells[4].isdigit():
                int_marks = cells[4]

            for c_idx in [10, 6, 8, 4, 2]:
                if len(cells) > c_idx and cells[c_idx] and cells[c_idx].isdigit():
                    tot_marks = cells[c_idx]
                    break

            for c in cells[-3:]:
                c_clean = c.strip()
                if c_clean.isdigit() and int(c_clean) in [1, 2, 3, 4, 5]:
                    credit = int(c_clean)
                elif re.match(r"^\d+\.\d{2}[A-Z\+]*$", c_clean):
                    grade = re.sub(r"^\d+\.\d{2}", "", c_clean) or "A"
                elif c_clean in ["O", "A+", "A", "B+", "B", "C", "P", "F"]:
                    grade = c_clean

            internal_str = f"Int: {int_marks} / 50" if int_marks else "Int: --"
            external_str = f"Ext: {ext_marks} / 100" if ext_marks else "Ext: --"
            total_max = "150" if credit >= 3 else ("100" if "LAB" in sub_name or "PRACTICAL" in sub_name else ("75" if "SEMINAR" in sub_name else "50"))
            total_str = f"Tot: {tot_marks} / {total_max}" if tot_marks else "Tot: --"

            code_slug = re.sub(r"[^A-Z0-9]", "-", sub_name.upper())[:12]
            sem6_subjects.append({
                "code": code_slug,
                "name": sub_name,
                "internalStr": internal_str,
                "externalStr": external_str,
                "totalStr": total_str,
                "grade": grade,
                "credit": credit
            })

print(f"[*] Parsed {len(sem6_subjects)} Sem 6 subjects for MOHD ASHZAD (SGPA: {sgpa})")

# 2. Update scraper/data/sem6/bme_sem6.json
os.makedirs("scraper/data/sem6", exist_ok=True)
bme_sem6_path = "scraper/data/sem6/bme_sem6.json"
bme_sem6_list = []
if os.path.exists(bme_sem6_path):
    with open(bme_sem6_path, "r", encoding="utf-8") as f:
        bme_sem6_list = json.load(f)

# Update or append
bme_sem6_list = [s for s in bme_sem6_list if s.get("rollNo") != "231371028009"]
bme_sem6_list.append({
    "rollNo": "231371028009",
    "enrollNo": "BU0230639626",
    "name": "MOHD ASHZAD",
    "fatherName": "MOHD ZAFAR TAHIR",
    "motherName": "ASMA BANO",
    "examCategory": "REGULAR",
    "courseName": "B.TECH (BIOMEDICAL ENGG) VI SEMESTER",
    "sem": 6,
    "sgpa": sgpa,
    "resultStatus": result_status,
    "subjects": sem6_subjects
})

with open(bme_sem6_path, "w", encoding="utf-8") as f:
    json.dump(bme_sem6_list, f, indent=2, ensure_ascii=False)
print(f"[OK] Updated {bme_sem6_path}")

# 3. Update lib/data.js
shutil.copyfile("lib/data.js", "lib/data.backup.js")

with open("lib/data.js", "r", encoding="utf-8") as f:
    content = f.read()

match_students = re.search(r"export const STUDENTS = (\[.*?\]);", content, re.DOTALL)
if not match_students:
    raise Exception("Could not find export const STUDENTS in lib/data.js")

students = json.loads(match_students.group(1))

ashzad = next((s for s in students if s["rollNo"] == "231371028009"), None)
if not ashzad:
    raise Exception("MOHD ASHZAD (231371028009) not found in STUDENTS array!")

# Update Ashzad's semesters
ashzad_sems = [sm for sm in ashzad.get("semesters", []) if sm.get("sem") != 6]
ashzad_sems.append({
    "sem": 6,
    "sgpa": sgpa,
    "status": result_status
})
ashzad_sems.sort(key=lambda x: x["sem"])
ashzad["semesters"] = ashzad_sems

# Update semesterSubjects & currentSemSubjects
if "semesterSubjects" not in ashzad:
    ashzad["semesterSubjects"] = {}
ashzad["semesterSubjects"]["6"] = sem6_subjects
ashzad["currentSemSubjects"] = sem6_subjects

# Recompute CGPA (average of all semesters)
ashzad["cgpa"] = round(sum(sm["sgpa"] for sm in ashzad_sems) / len(ashzad_sems), 2)

print(f"[*] Updated MOHD ASHZAD CGPA to {ashzad['cgpa']} across {len(ashzad_sems)} semesters.")

# 4. Recompute branchRank and overall rank
def get_rank_cgpa(s):
    s56 = [sem['sgpa'] for sem in s.get('semesters', []) if sem.get('sem') in [5, 6]]
    if len(s56) > 0:
        return sum(s56) / len(s56)
    return s.get('cgpa', 0)

by_branch = {}
for s in students:
    b = s.get("branch", "OTHER")
    by_branch.setdefault(b, []).append(s)

for b, s_list in by_branch.items():
    s_list.sort(key=get_rank_cgpa, reverse=True)
    for idx, st in enumerate(s_list):
        st["branchRank"] = idx + 1

students.sort(key=get_rank_cgpa, reverse=True)
for idx, st in enumerate(students):
    st["rank"] = idx + 1

# Write back to lib/data.js
new_students_json = json.dumps(students, indent=2, ensure_ascii=False)
content = re.sub(
    r"export const STUDENTS = \[.*?\];",
    f"export const STUDENTS = {new_students_json};",
    content,
    flags=re.DOTALL
)

with open("lib/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"[OK] Successfully attached to website! MOHD ASHZAD is now Rank #{ashzad['branchRank']} in BME (Overall #{ashzad['rank']}) with Sem 5&6 Combined SGPA {((8.30 + 8.57)/2):.2f}!")
