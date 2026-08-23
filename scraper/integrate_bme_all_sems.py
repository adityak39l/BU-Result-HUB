import os
import re
import json
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DIR_SEM_III = r"E:\result of All eie\BME_SEM_III"
DIR_SEM_IV = r"E:\result of All eie\BME_SEM_IV"
DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"

SKIP_NAMES = {
    'NAME OF PAPER', 'PRACTICAL', 'THEORY', 'Credit Max:', 'RESULT :',
    'NAME OF PAPERTheory/Lab.InternalTotalPr./Disst.Tour/FT/GP/Sem.GRANDCreditGrdPnt/GRADEMax.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.'
}

def parse_bme_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    soup = BeautifulSoup(html, 'html.parser')
    
    # Roll and Name extraction
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
    
    if not roll:
        m = re.search(r'ROLL NUMBER\s*:\s*(\d+)', html)
        if m: roll = m.group(1).strip()
    if not enroll:
        m = re.search(r'ENROLL NO\.\s*:\s*([A-Za-z0-9]+)', html)
        if m: enroll = m.group(1).strip()
    if not name:
        m = re.search(r'NAME OF STUDENT\s*:\s*([A-Za-z\s]+?)(?:NAME OF FATHER|EXAM CATEGORY)', html)
        if m: name = m.group(1).strip()
    if not father:
        m = re.search(r'NAME OF FATHER\s*:\s*([A-Za-z\s]+?)(?:NAME OF MOTHER|NAME OF COURSE)', html)
        if m: father = m.group(1).strip()
    if not mother:
        m = re.search(r'NAME OF MOTHER\s*:\s*([A-Za-z\s]+?)(?:EXAM CATEGORY|INSTITUTE)', html)
        if m: mother = m.group(1).strip()
        
    # SGPA
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
            ext_marks = tds[2].strip()
            int_marks = tds[4].strip()
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
                "internalStr": f"Int: {int_marks} / 50",
                "externalStr": f"Ext: {ext_marks} / 100",
                "totalStr": f"Tot: {tot_marks} / 150",
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
            int_marks = tds[4].strip()
            ext_marks = tds[8].strip()
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
                "internalStr": f"Int: {int_marks} / 20",
                "externalStr": f"Ext: {ext_marks} / 30",
                "totalStr": f"Tot: {tot_marks} / 50",
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

# 1. Parse all Sem III & IV files
bme_data = {} # roll -> { '3': data, '4': data }

for f in os.listdir(DIR_SEM_III):
    if f.endswith('.html'):
        p = os.path.join(DIR_SEM_III, f)
        res = parse_bme_file(p)
        roll = res['roll']
        if roll:
            if roll not in bme_data: bme_data[roll] = {}
            bme_data[roll]['3'] = res

for f in os.listdir(DIR_SEM_IV):
    if f.endswith('.html'):
        p = os.path.join(DIR_SEM_IV, f)
        res = parse_bme_file(p)
        roll = res['roll']
        if roll:
            if roll not in bme_data: bme_data[roll] = {}
            bme_data[roll]['4'] = res

print(f"Parsed Sem III & IV for {len(bme_data)} BME students.")

# 2. Read existing lib/data.js
with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    data_content = f.read()

start_idx = data_content.find('export const STUDENTS = [')
prefix = data_content[:start_idx + len('export const STUDENTS = ')]
json_str = data_content[start_idx + len('export const STUDENTS = '):].strip().rstrip(';')

students = json.loads(json_str)

# 3. Update BME students in data.js
for s in students:
    if s['branch'] == 'BME' and s['rollNo'] in bme_data:
        roll = s['rollNo']
        bme_entry = bme_data[roll]
        
        # Current sems
        existing_sems_map = {x['sem']: x['sgpa'] for x in s.get('semesters', [])}
        
        # Add sem 3 & 4
        if '3' in bme_entry and bme_entry['3']['sgpa'] > 0:
            existing_sems_map[3] = bme_entry['3']['sgpa']
        if '4' in bme_entry and bme_entry['4']['sgpa'] > 0:
            existing_sems_map[4] = bme_entry['4']['sgpa']
            
        new_semesters = [{"sem": k, "sgpa": v} for k, v in sorted(existing_sems_map.items())]
        s['semesters'] = new_semesters
        
        # Semester subjects
        if 'semesterSubjects' not in s or not isinstance(s['semesterSubjects'], dict):
            s['semesterSubjects'] = {}
            
        if '3' in bme_entry and bme_entry['3']['subjects']:
            s['semesterSubjects']['3'] = bme_entry['3']['subjects']
        if '4' in bme_entry and bme_entry['4']['subjects']:
            s['semesterSubjects']['4'] = bme_entry['4']['subjects']
            
        # Update batch tag
        s['batch'] = "2024-25 / 2025-26"
        
        # Update CGPA
        all_sgpas = [x['sgpa'] for x in new_semesters]
        if all_sgpas:
            s['cgpa'] = round(sum(all_sgpas) / len(all_sgpas), 2)
            
        # Update Father/Mother if available
        if '3' in bme_entry:
            if bme_entry['3']['father'] and bme_entry['3']['father'] != 'N/A':
                s['fatherName'] = bme_entry['3']['father']
            if bme_entry['3']['mother'] and bme_entry['3']['mother'] != 'N/A':
                s['motherName'] = bme_entry['3']['mother']
            if bme_entry['3']['enroll'] and bme_entry['3']['enroll'] != 'N/A':
                s['enrollNo'] = bme_entry['3']['enroll']

# 4. Re-rank all students
students.sort(key=lambda x: x['cgpa'], reverse=True)
for idx, s in enumerate(students, 1):
    s['rank'] = idx

# Branch ranks
for b_name in ['CSE', 'EIE', 'BME', 'ME']:
    b_studs = [s for s in students if s['branch'] == b_name]
    b_studs.sort(key=lambda x: x['cgpa'], reverse=True)
    for b_idx, s in enumerate(b_studs, 1):
        s['branchRank'] = b_idx

# 5. Write back to lib/data.js
updated_js = prefix + json.dumps(students, indent=2) + ";\n"
with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(updated_js)

print("Successfully updated lib/data.js with BME Sem III & IV data!")
