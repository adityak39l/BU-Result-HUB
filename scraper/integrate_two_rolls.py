import os
import json
import re
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

data_js_path = r"E:\BU_RESULT_WEBSITE\lib\data.js"

files_to_process = [
    {
        "roll": "231371028012",
        "name": "REENA YADAV",
        "sem3_file": r"E:\result of All eie\FOUND_231371028012_1030203_2024-25.html",
        "sem4_file": r"E:\result of All eie\FOUND_231371028012_1030204_2024-25.html",
    },
    {
        "roll": "231351139009",
        "name": "PAYAL JHA",
        "sem3_file": r"E:\result of All eie\FOUND_231351139009_1030203_2024-25.html",
        "sem4_file": r"E:\result of All eie\FOUND_231351139009_1030204_2024-25.html",
    }
]

def parse_subjects_from_soup(soup):
    subjects = []
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        if len(tds) >= 6:
            sub_name = tds[0].strip()
            if not sub_name or any(k in sub_name for k in [
                'NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'NAME OF STUDENT', 
                'NAME OF FATHER', 'NAME OF MOTHER', 'EXAM CATEGORY', 'NAME OF COURSE', 
                'INSTITUTE', 'Credit Max', 'RESULT', 'Result Declared', 'Max. Min.',
                'Theory/Lab', 'Internal', 'Pr./Disst', 'PRACTICAL'
            ]):
                continue
            
            words = sub_name.split()
            code_val = words[0] if len(words) > 0 else 'SUB'
            is_lab = 'LAB' in sub_name.upper() or 'WORKSHOP' in sub_name.upper()
            is_gp = 'PROFECIENCY' in sub_name.upper() or 'PROFICIENCY' in sub_name.upper()
            
            int_str = "-"
            ext_str = "-"
            tot_str = "-"
            credit_val = 3
            grade_val = "B+"
            
            try:
                if is_gp:
                    obt = ""
                    for cell in reversed(tds):
                        if cell.isdigit():
                            obt = cell
                            break
                    if not obt:
                        obt = "40"
                    tot_str = f"Tot: {obt} / 50"
                    credit_val = 0
                    grade_val = "A"
                elif is_lab:
                    int_obt = tds[4] if len(tds) > 4 and tds[4] else ""
                    ext_obt = tds[8] if len(tds) > 8 and tds[8] else ""
                    tot_obt = tds[10] if len(tds) > 10 and tds[10] else ""
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
                    ext_obt = tds[2] if len(tds) > 2 and tds[2] else ""
                    int_obt = tds[4] if len(tds) > 4 and tds[4] else ""
                    tot_obt = tds[10] if len(tds) > 10 and tds[10] else (tds[6] if len(tds) > 6 else "")
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

new_students = []

for item in files_to_process:
    roll = item["roll"]
    s_name = ""
    f_name = ""
    m_name = ""
    enroll_no = ""
    semesters = []
    semesterSubjects = {}
    
    if os.path.exists(item["sem3_file"]):
        with open(item["sem3_file"], 'r', encoding='utf-8') as f:
            soup3 = BeautifulSoup(f.read(), 'html.parser')
        name_tag = soup3.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            s_name = name_tag.text.strip()
        father_tag = soup3.find('span', id='lblFatherName')
        if father_tag and father_tag.text.strip():
            f_name = father_tag.text.strip()
        mother_tag = soup3.find('span', id='lblMotherName')
        if mother_tag and mother_tag.text.strip():
            m_name = mother_tag.text.strip()
        enroll_tag = soup3.find('span', id='lblenrollNo')
        if enroll_tag and enroll_tag.text.strip():
            enroll_no = enroll_tag.text.strip()
            
        sgpa3 = 7.0
        sgpa_m = re.search(r'SGPA\s*([0-9.]+)', soup3.get_text())
        if sgpa_m:
            try:
                sgpa3 = float(sgpa_m.group(1))
            except:
                pass
        semesters.append({"sem": 3, "sgpa": sgpa3})
        semesterSubjects["3"] = parse_subjects_from_soup(soup3)

    if os.path.exists(item["sem4_file"]):
        with open(item["sem4_file"], 'r', encoding='utf-8') as f:
            soup4 = BeautifulSoup(f.read(), 'html.parser')
        if not s_name:
            name_tag = soup4.find('span', id='lblCandidateName')
            if name_tag and name_tag.text.strip():
                s_name = name_tag.text.strip()
        if not f_name:
            father_tag = soup4.find('span', id='lblFatherName')
            if father_tag and father_tag.text.strip():
                f_name = father_tag.text.strip()
        if not m_name:
            mother_tag = soup4.find('span', id='lblMotherName')
            if mother_tag and mother_tag.text.strip():
                m_name = mother_tag.text.strip()
        if not enroll_no:
            enroll_tag = soup4.find('span', id='lblenrollNo')
            if enroll_tag and enroll_tag.text.strip():
                enroll_no = enroll_tag.text.strip()
                
        sgpa4 = 7.5
        sgpa_m = re.search(r'SGPA\s*([0-9.]+)', soup4.get_text())
        if sgpa_m:
            try:
                sgpa4 = float(sgpa_m.group(1))
            except:
                pass
        semesters.append({"sem": 4, "sgpa": sgpa4})
        semesterSubjects["4"] = parse_subjects_from_soup(soup4)

    cgpa = round(sum(s['sgpa'] for s in semesters) / len(semesters), 2) if semesters else 7.5
    currentSemSubs = semesterSubjects.get("4") or semesterSubjects.get("3") or []

    st_obj = {
        "rollNo": roll,
        "name": s_name or item["name"],
        "fatherName": f_name,
        "motherName": m_name,
        "enrollNo": enroll_no,
        "branch": "CSE",
        "batch": "2024-25",
        "cgpa": cgpa,
        "semesters": semesters,
        "semesterSubjects": semesterSubjects,
        "currentSemSubjects": currentSemSubs
    }
    new_students.append(st_obj)
    print(f"Extracted: {st_obj['rollNo']} -> {st_obj['name']} | Father: {st_obj['fatherName']} | CGPA: {st_obj['cgpa']} | Sems: {[s['sem'] for s in st_obj['semesters']]}")

# Read existing lib/data.js
with open(data_js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Parse existing students
students_start = js_content.find("export const STUDENTS = [")
students_body = js_content[students_start + len("export const STUDENTS = ["):js_content.rfind("];")]

student_chunks = re.findall(r'(\{\s*"rollNo":\s*"\d+".*?\n  \}(?=,\s*\{|\s*$))', students_body, re.DOTALL)
existing_students = []

for chunk in student_chunks:
    try:
        st = json.loads(chunk)
        # Avoid duplicate rolls
        if st.get("rollNo") not in ["231371028012", "231351139009"]:
            existing_students.append(st)
    except:
        pass

all_updated_students = existing_students + new_students
print(f"\nTotal students after adding the 2 students: {len(all_updated_students)}")

branches_block = js_content[:students_start]
formatted_students = ",\n".join("  " + json.dumps(s, indent=4).replace("\n", "\n  ") for s in all_updated_students)

final_js = branches_block + "export const STUDENTS = [\n" + formatted_students + "\n];\n"

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(final_js)

print("lib/data.js successfully updated with REENA YADAV (231371028012) & PAYAL JHA (231351139009)!")
