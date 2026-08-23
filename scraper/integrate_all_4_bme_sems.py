import os
import re
import json
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DIR_SEM_III = r"E:\result of All eie\BME_SEM_III"
DIR_SEM_IV = r"E:\result of All eie\BME_SEM_IV"
DIR_SEM_V = r"E:\result of All eie\BME_sem_V"
DIR_SEM_VI = r"E:\result of All eie\BME_sem_VI"

DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"

SKIP_NAMES = {
    'NAME OF PAPER', 'PRACTICAL', 'THEORY', 'Credit Max:', 'RESULT :',
    'NAME OF PAPERTheory/Lab.InternalTotalPr./Disst.Tour/FT/GP/Sem.GRANDCreditGrdPnt/GRADEMax.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.'
}

def parse_max_marks(max_min_str, default_val):
    if not max_min_str: return default_val
    if len(max_min_str) == 5: # e.g. "10040" -> 100
        try: return int(max_min_str[:3])
        except: pass
    elif len(max_min_str) == 4: # e.g. "5020" -> 50, "7530" -> 75, "2510" -> 25
        try: return int(max_min_str[:2])
        except: pass
    elif len(max_min_str) == 3: # e.g. "208" -> 20
        try: return int(max_min_str[:2])
        except: pass
    return default_val

def parse_bme_marksheet(file_path):
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

# Gather all 4 semesters data
all_bme = {} # roll -> { '3': data, '4': data, '5': data, '6': data }

def load_directory(dir_path, sem_str):
    if not os.path.exists(dir_path): return
    for f in os.listdir(dir_path):
        if f.endswith('.html'):
            p = os.path.join(dir_path, f)
            res = parse_bme_marksheet(p)
            roll = res['roll']
            if not roll:
                # Extract roll from filename
                m = re.search(r'(\d{12})', f)
                if m: roll = m.group(1)
            if roll:
                if roll not in all_bme: all_bme[roll] = {}
                all_bme[roll][sem_str] = res

load_directory(DIR_SEM_III, '3')
load_directory(DIR_SEM_IV, '4')
load_directory(DIR_SEM_V, '5')
load_directory(DIR_SEM_VI, '6')

print(f"Collected complete semester data for {len(all_bme)} BME students.")

# Read existing lib/data.js
with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    data_content = f.read()

start_idx = data_content.find('export const STUDENTS = [')
prefix = data_content[:start_idx + len('export const STUDENTS = ')]
json_str = data_content[start_idx + len('export const STUDENTS = '):].strip().rstrip(';')

students = json.loads(json_str)

# Update each BME student
for s in students:
    if s['branch'] == 'BME' and s['rollNo'] in all_bme:
        roll = s['rollNo']
        entry = all_bme[roll]
        
        # Build semesters array
        sems_map = {}
        for sem_str, d in entry.items():
            if d['sgpa'] > 0:
                sems_map[int(sem_str)] = d['sgpa']
                
        # Preserve any existing sems not in entry
        for ex in s.get('semesters', []):
            if ex['sem'] not in sems_map and ex['sgpa'] > 0:
                sems_map[ex['sem']] = ex['sgpa']
                
        s['semesters'] = [{"sem": k, "sgpa": v} for k, v in sorted(sems_map.items())]
        
        # Build semesterSubjects dictionary
        if 'semesterSubjects' not in s or not isinstance(s['semesterSubjects'], dict):
            s['semesterSubjects'] = {}
            
        for sem_str, d in entry.items():
            if d['subjects']:
                s['semesterSubjects'][sem_str] = d['subjects']
                
        # Set currentSemSubjects to latest available semester
        latest_sem_str = str(max([int(k) for k in s['semesterSubjects'].keys()]))
        s['currentSemSubjects'] = s['semesterSubjects'][latest_sem_str]
        
        # Set batch
        s['batch'] = "2024-25 / 2025-26"
        
        # Calculate CGPA
        all_sgpas = [x['sgpa'] for x in s['semesters']]
        if all_sgpas:
            s['cgpa'] = round(sum(all_sgpas) / len(all_sgpas), 2)
            
        # Update details from Sem 3 or 5
        for sem_k in ['3', '5', '4', '6']:
            if sem_k in entry:
                if entry[sem_k]['name']: s['name'] = entry[sem_k]['name']
                if entry[sem_k]['father'] and entry[sem_k]['father'] != 'N/A': s['fatherName'] = entry[sem_k]['father']
                if entry[sem_k]['mother'] and entry[sem_k]['mother'] != 'N/A': s['motherName'] = entry[sem_k]['mother']
                if entry[sem_k]['enroll'] and entry[sem_k]['enroll'] != 'N/A': s['enrollNo'] = entry[sem_k]['enroll']

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

print("Successfully integrated ALL 4 Semesters (Sem 3, 4, 5, 6) for BME in lib/data.js!")
