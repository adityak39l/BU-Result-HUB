import os
import re
import json
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DIR_SEM_V = r"E:\result of All eie\ECE_sem_V"
DIR_SEM_VI = r"E:\result of All eie\ECE_sem_VI"
DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"

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

def parse_ece_file(file_path):
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
            
        # Seminar / Sessional
        elif 'SEMINAR' in sub_name.upper():
            int_max = parse_max_marks(tds[3].strip(), 50)
            int_marks = tds[4].strip()
            tot_max = parse_max_marks(tds[9].strip(), 50)
            tot_marks = tds[10].strip() if tds[10] else int_marks
            credit_str = tds[11].strip()
            grade_str = tds[12].strip()
            
            try: credit = int(credit_str) if credit_str else 1
            except: credit = 1
            
            grade = 'A+'
            if 'O' in grade_str: grade = 'O'
            elif 'A+' in grade_str: grade = 'A+'
            elif 'A' in grade_str: grade = 'A'
            elif 'B+' in grade_str: grade = 'B+'
            elif 'B' in grade_str: grade = 'B'
            elif 'C' in grade_str: grade = 'C'
            elif 'F' in grade_str: grade = 'F'
            
            subjects.append({
                "code": "SEMINAR",
                "name": sub_name,
                "internalStr": f"Int: {int_marks} / {int_max}",
                "externalStr": "-",
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
            
        # Lab / Project row
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

# 1. Parse all ECE Sem V & VI files
ece_students_map = {} # roll -> { 'name', 'father', 'mother', 'enroll', '5': data, '6': data }

def ingest_directory(dir_path, sem_str):
    if not os.path.exists(dir_path): return
    for f in os.listdir(dir_path):
        if f.endswith('.html'):
            p = os.path.join(dir_path, f)
            res = parse_ece_file(p)
            roll = res['roll']
            if not roll:
                m = re.search(r'(\d{12})', f)
                if m: roll = m.group(1)
            if roll:
                if roll not in ece_students_map:
                    ece_students_map[roll] = {
                        "roll": roll,
                        "name": res['name'],
                        "father": res['father'],
                        "mother": res['mother'],
                        "enroll": res['enroll'],
                        "semesters": {},
                        "semesterSubjects": {}
                    }
                if res['name']: ece_students_map[roll]['name'] = res['name']
                if res['father'] and res['father'] != 'N/A': ece_students_map[roll]['father'] = res['father']
                if res['mother'] and res['mother'] != 'N/A': ece_students_map[roll]['mother'] = res['mother']
                if res['enroll'] and res['enroll'] != 'N/A': ece_students_map[roll]['enroll'] = res['enroll']
                
                if res['sgpa'] > 0:
                    ece_students_map[roll]['semesters'][int(sem_str)] = res['sgpa']
                if res['subjects']:
                    ece_students_map[roll]['semesterSubjects'][sem_str] = res['subjects']

ingest_directory(DIR_SEM_V, '5')
ingest_directory(DIR_SEM_VI, '6')

print(f"Total Unique ECE Students Parsed: {len(ece_students_map)}")

# 2. Build Student Objects
new_ece_students = []
for roll, data in ece_students_map.items():
    sem_list = [{"sem": k, "sgpa": v} for k, v in sorted(data['semesters'].items())]
    all_sgpas = [x['sgpa'] for x in sem_list]
    cgpa = round(sum(all_sgpas) / len(all_sgpas), 2) if all_sgpas else 0.0
    
    latest_sem_str = str(max([int(k) for k in data['semesterSubjects'].keys()])) if data['semesterSubjects'] else '5'
    current_subs = data['semesterSubjects'].get(latest_sem_str, [])
    
    s_obj = {
        "id": roll,
        "rollNo": roll,
        "name": data['name'],
        "branch": "ECE",
        "cgpa": cgpa,
        "rank": 1, # will be recalculated
        "branchRank": 1, # will be recalculated
        "batch": "2025-26",
        "fatherName": data['father'] if data['father'] else "N/A",
        "motherName": data['mother'] if data['mother'] else "N/A",
        "enrollNo": data['enroll'] if data['enroll'] else "N/A",
        "semesters": sem_list,
        "semesterSubjects": data['semesterSubjects'],
        "currentSemSubjects": current_subs
    }
    new_ece_students.append(s_obj)

print(f"Created {len(new_ece_students)} ECE Student Objects.")

# 3. Read existing data.js
with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Update BRANCHES array in data.js if ECE not in it
if "'ECE'" not in js_content and '"ECE"' not in js_content:
    ece_branch_entry = "  { id: 'ECE', name: 'Electronics & Communication Engg.', color: 'from-violet-500 to-purple-600', badgeClass: 'bg-violet-500/20 text-violet-600 dark:text-violet-300 border border-violet-500/40 font-bold' },\n"
    js_content = js_content.replace("export const BRANCHES = [\n", "export const BRANCHES = [\n" + ece_branch_entry)

start_idx = js_content.find('export const STUDENTS = [')
prefix = js_content[:start_idx + len('export const STUDENTS = ')]
json_str = js_content[start_idx + len('export const STUDENTS = '):].strip().rstrip(';')

existing_students = json.loads(json_str)

# Filter out old ECE if any, and combine
non_ece_students = [s for s in existing_students if s['branch'] != 'ECE']
combined_students = non_ece_students + new_ece_students

# 4. Re-rank all students overall and branch-wise
def get_effective_cgpa(student):
    sems56 = [x['sgpa'] for x in student.get('semesters', []) if x['sem'] in [5, 6]]
    if sems56:
        return round(sum(sems56) / len(sems56), 2)
    return student.get('cgpa', 0.0)

combined_students.sort(key=get_effective_cgpa, reverse=True)
for idx, s in enumerate(combined_students, 1):
    s['rank'] = idx

# Branch ranks
for b_name in ['CSE', 'EIE', 'BME', 'ME', 'ECE']:
    b_studs = [s for s in combined_students if s['branch'] == b_name]
    b_studs.sort(key=get_effective_cgpa, reverse=True)
    for b_idx, s in enumerate(b_studs, 1):
        s['branchRank'] = b_idx

# 5. Write back to lib/data.js
updated_js = prefix + json.dumps(combined_students, indent=2) + ";\n"
with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(updated_js)

print(f"Successfully integrated {len(new_ece_students)} ECE students into lib/data.js! Total students in database: {len(combined_students)}")
