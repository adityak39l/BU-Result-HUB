import os
import re
import json
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

SKIP_NAMES = {
    'NAME OF PAPER', 'PRACTICAL', 'THEORY', 'Credit Max:', 'RESULT :',
    'NAME OF PAPERTheory/Lab.InternalTotalPr./Disst.Tour/FT/GP/Sem.GRANDCreditGrdPnt/GRADEMax.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.'
}

def parse_max_marks(max_min_str, default_val):
    if not max_min_str: return default_val
    if len(max_min_str) == 5:
        try: return int(max_min_str[:3])
        except: pass
    elif len(max_min_str) == 4:
        try: return int(max_min_str[:2])
        except: pass
    elif len(max_min_str) == 3:
        try: return int(max_min_str[:2])
        except: pass
    return default_val

def parse_cse_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    soup = BeautifulSoup(html, 'html.parser')
    
    name_tag = soup.find('span', id='lblCandidateName')
    roll_tag = soup.find('span', id='lblRollNo')
    enroll_tag = soup.find('span', id='lblEnrollmentNo')
    father_tag = soup.find('span', id='lblFatherName')
    mother_tag = soup.find('span', id='lblMotherName')
    
    name = name_tag.text.strip() if name_tag else ""
    roll = roll_tag.text.strip() if roll_tag else ""
    enroll = enroll_tag.text.strip() if enroll_tag else ""
    father = father_tag.text.strip() if father_tag else ""
    mother = mother_tag.text.strip() if mother_tag else ""
    
    # Extract SGPA
    sgpa = 0.0
    for tr in soup.find_all('tr'):
        txt = tr.get_text(separator=' | ', strip=True)
        m = re.search(r'SGPA\s*\|\s*([0-9.]+)', txt)
        if m:
            sgpa = float(m.group(1))
            break
    if sgpa == 0.0:
        m2 = re.search(r'SGPA[^\d]*([0-9]+\.[0-9]+)', html)
        if m2: sgpa = float(m2.group(1))
        
    subjects = []
    
    for tr in soup.find_all('tr'):
        tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
        if len(tds) != 13:
            continue
            
        sub_name = tds[0].strip()
        if not sub_name or sub_name in SKIP_NAMES:
            continue
        if 'Max.Min.' in sub_name or 'NAME OF PAPER' in sub_name or 'PRACTICAL' in sub_name:
            continue
            
        # Theory row
        if tds[2] != '':
            ext_max = parse_max_marks(tds[1].strip(), 100)
            ext_marks = tds[2].strip()
            int_max = parse_max_marks(tds[3].strip(), 50)
            int_marks = tds[4].strip()
            tot_max = parse_max_marks(tds[9].strip(), ext_max + int_max)
            tot_marks = tds[10].strip()
            credit_str = tds[11].strip()
            grade_str = tds[12].strip()
            
            try: credit = int(credit_str) if credit_str else 4
            except: credit = 4
            
            grade = 'A'
            if 'O' in grade_str: grade = 'O'
            elif 'A+' in grade_str: grade = 'A+'
            elif 'A' in grade_str: grade = 'A'
            elif 'B+' in grade_str: grade = 'B+'
            elif 'B' in grade_str: grade = 'B'
            elif 'C' in grade_str: grade = 'C'
            elif 'F' in grade_str: grade = 'F'
            
            subjects.append({
                "code": sub_name[:12].replace(' ', '-').upper(),
                "name": sub_name,
                "internalStr": f"Int: {int_marks} / {int_max}",
                "externalStr": f"Ext: {ext_marks} / {ext_max}",
                "totalStr": f"Tot: {tot_marks} / {tot_max}",
                "grade": grade,
                "credit": credit
            })
            
        # General Proficiency
        elif 'GENERAL' in sub_name.upper() or 'PROFECIENCY' in sub_name.upper():
            gp_marks = tds[8].strip() if tds[8] else (tds[10].strip() if tds[10] else '40')
            try: gp_val = int(gp_marks)
            except: gp_val = 40
            subjects.append({
                "code": "GENERAL-PROF",
                "name": "GENERAL PROFECIENCY",
                "internalStr": "-",
                "externalStr": "-",
                "totalStr": f"Tot: {gp_val} / 50",
                "grade": "O" if gp_val >= 45 else ("A+" if gp_val >= 40 else "A"),
                "credit": 0
            })
            
        # Lab row
        elif tds[4] != '':
            int_max = parse_max_marks(tds[3].strip(), 25)
            int_marks = tds[4].strip()
            ext_max = parse_max_marks(tds[7].strip(), 50)
            ext_marks = tds[8].strip()
            tot_max = parse_max_marks(tds[9].strip(), int_max + ext_max)
            tot_marks = tds[10].strip()
            credit_str = tds[11].strip()
            grade_str = tds[12].strip()
            
            try: credit = int(credit_str) if credit_str else 1
            except: credit = 1
            
            grade = 'A'
            if 'O' in grade_str: grade = 'O'
            elif 'A+' in grade_str: grade = 'A+'
            elif 'A' in grade_str: grade = 'A'
            elif 'B+' in grade_str: grade = 'B+'
            elif 'B' in grade_str: grade = 'B'
            elif 'C' in grade_str: grade = 'C'
            elif 'F' in grade_str: grade = 'F'
            
            subjects.append({
                "code": sub_name[:12].replace(' ', '-').upper(),
                "name": sub_name,
                "internalStr": f"Int: {int_marks} / {int_max}",
                "externalStr": f"Ext: {ext_marks} / {ext_max}",
                "totalStr": f"Tot: {tot_marks} / {tot_max}",
                "grade": grade,
                "credit": credit
            })
            
    return {
        "name": name,
        "roll": roll,
        "enroll": enroll,
        "father": father,
        "mother": mother,
        "sgpa": sgpa,
        "subjects": subjects
    }

# Parse Sem 5 & Sem 6 files
sem5_reena = parse_cse_file(r"E:\result of All eie\CSE_sem_V\231371028012.html")
sem5_payal = parse_cse_file(r"E:\result of All eie\CSE_sem_V\231351139009.html")
sem6_reena = parse_cse_file(r"E:\result of All eie\CSE_sem_VI\231371028012.html")
sem6_payal = parse_cse_file(r"E:\result of All eie\CSE_sem_VI\231351139009.html")

DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"

with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    data_content = f.read()

start_idx = data_content.find('export const STUDENTS = [')
prefix = data_content[:start_idx + len('export const STUDENTS = ')]
json_str = data_content[start_idx + len('export const STUDENTS = '):].strip().rstrip(';')

students = json.loads(json_str)

for s in students:
    if s['rollNo'] == '231371028012':
        # Reena Yadav
        s['name'] = 'REENA YADAV'
        s['fatherName'] = 'OM PRAKASH YADAV'
        s['motherName'] = 'SONA YADAV'
        s['branch'] = 'CSE'
        s['batch'] = '2024-25 / 2025-26'
        
        # Build semesters
        sems = {item['sem']: item['sgpa'] for item in s.get('semesters', [])}
        sems[5] = sem5_reena['sgpa']
        sems[6] = sem6_reena['sgpa']
        s['semesters'] = [{"sem": k, "sgpa": v} for k, v in sorted(sems.items())]
        
        # Subjects
        if 'semesterSubjects' not in s or not isinstance(s['semesterSubjects'], dict):
            s['semesterSubjects'] = {}
        s['semesterSubjects']['5'] = sem5_reena['subjects']
        s['semesterSubjects']['6'] = sem6_reena['subjects']
        s['currentSemSubjects'] = s['semesterSubjects']['6']
        
        # CGPA
        all_sgpas = [x['sgpa'] for x in s['semesters']]
        s['cgpa'] = round(sum(all_sgpas) / len(all_sgpas), 2)
        print(f"Updated REENA YADAV: Sems={s['semesters']}, CGPA={s['cgpa']}")
        
    elif s['rollNo'] == '231351139009':
        # Payal Jha
        s['name'] = 'PAYAL JHA'
        s['fatherName'] = 'PAWAN KUMAR JHA'
        s['motherName'] = 'RUNA JHA'
        s['branch'] = 'CSE'
        s['batch'] = '2024-25 / 2025-26'
        
        # Build semesters
        sems = {item['sem']: item['sgpa'] for item in s.get('semesters', [])}
        sems[5] = sem5_payal['sgpa']
        sems[6] = sem6_payal['sgpa']
        s['semesters'] = [{"sem": k, "sgpa": v} for k, v in sorted(sems.items())]
        
        # Subjects
        if 'semesterSubjects' not in s or not isinstance(s['semesterSubjects'], dict):
            s['semesterSubjects'] = {}
        s['semesterSubjects']['5'] = sem5_payal['subjects']
        s['semesterSubjects']['6'] = sem6_payal['subjects']
        s['currentSemSubjects'] = s['semesterSubjects']['6']
        
        # CGPA
        all_sgpas = [x['sgpa'] for x in s['semesters']]
        s['cgpa'] = round(sum(all_sgpas) / len(all_sgpas), 2)
        print(f"Updated PAYAL JHA: Sems={s['semesters']}, CGPA={s['cgpa']}")

# Re-calculate overall ranks and branch ranks
students.sort(key=lambda x: x['cgpa'], reverse=True)
for idx, s in enumerate(students, 1):
    s['rank'] = idx

for b_name in ['CSE', 'EIE', 'BME', 'ME']:
    b_studs = [s for s in students if s['branch'] == b_name]
    b_studs.sort(key=lambda x: x['cgpa'], reverse=True)
    for b_idx, s in enumerate(b_studs, 1):
        s['branchRank'] = b_idx

# Write back to lib/data.js
updated_js = prefix + json.dumps(students, indent=2) + ";\n"
with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(updated_js)

print("Successfully updated lib/data.js!")
