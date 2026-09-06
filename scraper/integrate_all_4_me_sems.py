import os
import re
import json
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DIR_SEM_III = r"E:\result of All eie\ME_sem_III"
DIR_SEM_IV = r"E:\result of All eie\ME_sem_IV"
DIR_SEM_V = r"E:\result of All eie\ME_sem_V"
DIR_SEM_VI = r"E:\result of All eie\ME_sem_VI"

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

def parse_marksheet(file_path):
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
    
    m_bu = re.search(r'(BU\d{10})', html)
    if m_bu:
        enroll = m_bu.group(1).strip()
        
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

all_me = {}

def ingest_sem_directory(dir_path, sem_str):
    if not os.path.exists(dir_path): return
    for f in os.listdir(dir_path):
        if f.endswith('.html'):
            p = os.path.join(dir_path, f)
            res = parse_marksheet(p)
            roll = res['roll']
            if not roll:
                m = re.search(r'(\d{12})', f)
                if m: roll = m.group(1)
            if roll:
                if roll not in all_me:
                    all_me[roll] = {
                        "roll": roll,
                        "name": res['name'],
                        "father": res['father'],
                        "mother": res['mother'],
                        "enroll": res['enroll'],
                        "semesters": {},
                        "semesterSubjects": {}
                    }
                if res['name']: all_me[roll]['name'] = res['name']
                if res['father'] and res['father'] != 'N/A': all_me[roll]['father'] = res['father']
                if res['mother'] and res['mother'] != 'N/A': all_me[roll]['mother'] = res['mother']
                if res['enroll'] and res['enroll'] != 'N/A': all_me[roll]['enroll'] = res['enroll']
                
                if res['sgpa'] > 0:
                    all_me[roll]['semesters'][int(sem_str)] = res['sgpa']
                if res['subjects']:
                    all_me[roll]['semesterSubjects'][sem_str] = res['subjects']

ingest_sem_directory(DIR_SEM_III, '3')
ingest_sem_directory(DIR_SEM_IV, '4')
ingest_sem_directory(DIR_SEM_V, '5')
ingest_sem_directory(DIR_SEM_VI, '6')

print(f"Total Unique ME Students with 4-Semester Data: {len(all_me)}")

new_me_students = []
for roll, data in all_me.items():
    sem_list = [{"sem": k, "sgpa": v} for k, v in sorted(data['semesters'].items())]
    all_sgpas = [x['sgpa'] for x in sem_list]
    cgpa = round(sum(all_sgpas) / len(all_sgpas), 2) if all_sgpas else 0.0
    
    latest_sem_str = str(max([int(k) for k in data['semesterSubjects'].keys()])) if data['semesterSubjects'] else '5'
    current_subs = data['semesterSubjects'].get(latest_sem_str, [])
    
    s_obj = {
        "id": roll,
        "rollNo": roll,
        "name": data['name'],
        "branch": "ME",
        "cgpa": cgpa,
        "rank": 1,
        "branchRank": 1,
        "batch": "2024-25 / 2025-26",
        "fatherName": data['father'] if data['father'] else "N/A",
        "motherName": data['mother'] if data['mother'] else "N/A",
        "enrollNo": data['enroll'] if data['enroll'] else "N/A",
        "semesters": sem_list,
        "semesterSubjects": data['semesterSubjects'],
        "currentSemSubjects": current_subs
    }
    new_me_students.append(s_obj)

# Read existing data.js
with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    js_content = f.read()

start_idx = js_content.find('export const STUDENTS = [')
json_str = js_content[start_idx + len('export const STUDENTS = '):].strip().rstrip(';')

existing_students = json.loads(json_str)

non_me_students = [s for s in existing_students if s['branch'] != 'ME']
combined_students = non_me_students + new_me_students

def get_effective_cgpa(student):
    sems56 = [x['sgpa'] for x in student.get('semesters', []) if x['sem'] in [5, 6]]
    if sems56:
        return round(sum(sems56) / len(sems56), 2)
    return student.get('cgpa', 0.0)

combined_students.sort(key=get_effective_cgpa, reverse=True)
for idx, s in enumerate(combined_students, 1):
    s['rank'] = idx

for b_name in ['CSE', 'ECE', 'EIE', 'BME', 'ME']:
    b_studs = [s for s in combined_students if s['branch'] == b_name]
    b_studs.sort(key=get_effective_cgpa, reverse=True)
    for b_idx, s in enumerate(b_studs, 1):
        s['branchRank'] = b_idx

NEW_HEADER = """export const BRANCHES = [
  { id: 'ECE', name: 'Electronics & Communication Engg.', color: 'from-violet-500 to-purple-600', badgeClass: 'bg-violet-500/20 text-violet-600 dark:text-violet-300 border border-violet-500/40 font-bold' },
  { id: 'CSE', name: 'Computer Science & Engineering', color: 'from-emerald-500 to-teal-600', badgeClass: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 font-bold' },
  { id: 'EIE', name: 'Electronics & Instrumentation Engg.', color: 'from-cyan-500 to-blue-600', badgeClass: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-bold' },
  { id: 'BME', name: 'Biomedical Engineering', color: 'from-rose-500 to-pink-600', badgeClass: 'bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/40 font-bold' },
  { id: 'ME', name: 'Mechanical Engineering', color: 'from-amber-500 to-orange-600', badgeClass: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/40 font-bold' },
];

export const SUBJECT_MASTER = {
  CSE: [
    { code: 'CSE-601', name: 'Operating System', passRate: '92%', diff: 'Medium', desc: 'Process management, concurrency & memory virtualization' },
    { code: 'CSE-602', name: 'Computer Networks', passRate: '90%', diff: 'Hard', desc: 'OSI/TCP-IP models, routing protocols & socket programming' },
    { code: 'CSE-603', name: 'Artificial Intelligence', passRate: '94%', diff: 'Medium', desc: 'Heuristic search, knowledge representation & logic' },
    { code: 'CSE-501', name: 'Compiler Design', passRate: '86%', diff: 'Hard', desc: 'Lexical analysis, parsing, syntax directed translation' },
    { code: 'CSE-502', name: 'Computer Graphics', passRate: '95%', diff: 'Easy', desc: 'Raster scan graphics, transformation & 3D rendering' }
  ],
  ECE: [
    { code: 'ECE-601', name: 'Microwave Engineering', passRate: '89%', diff: 'Hard', desc: 'Waveguides, transmission lines & Smith chart analysis' },
    { code: 'ECE-602', name: 'Digital Communication', passRate: '91%', diff: 'Medium', desc: 'PCM, DPCM, PSK/QAM modulation & Shannon theorem' },
    { code: 'ECE-603', name: 'VLSI Technology & Design', passRate: '93%', diff: 'Hard', desc: 'CMOS inverter design, stick diagrams & VHDL/Verilog' },
    { code: 'ECE-501', name: 'Microcontroller & Embedded Systems', passRate: '92%', diff: 'Medium', desc: '8051, timers, interrupts & interfacing' },
    { code: 'ECE-502', name: 'Antenna & Wave Propagation', passRate: '87%', diff: 'Hard', desc: 'Radiation patterns, dipole arrays & ionospheric propagation' }
  ],
  EIE: [
    { code: 'EIE-601', name: 'Electrical Machines', passRate: '88%', diff: 'Hard', desc: 'Complex magnetic circuit & transformer theory' },
    { code: 'EIE-602', name: 'Microcontroller', passRate: '94%', diff: 'Medium', desc: '8051 & ARM Architecture assembly' },
    { code: 'EIE-603', name: 'Communication Engineering', passRate: '91%', diff: 'Medium', desc: 'Analog and digital modulation' },
    { code: 'EIE-501', name: 'Power Electronics', passRate: '85%', diff: 'Hard', desc: 'SCR, TRIAC and Converter circuits' },
    { code: 'EIE-502', name: 'Integrated Circuits', passRate: '96%', diff: 'Easy', desc: 'Op-amp linear & non-linear applications' }
  ],
  BME: [
    { code: 'BME-601', name: 'Physiological Control System', passRate: '90%', diff: 'Medium', desc: 'Biological feedback system modeling' },
    { code: 'BME-602', name: 'Microcontroller & Applications', passRate: '92%', diff: 'Medium', desc: 'Embedded systems in medical devices' },
    { code: 'BME-603', name: 'Biomedical Signal Processing', passRate: '86%', diff: 'Hard', desc: 'ECG/EEG filtering & FFT algorithms' }
  ],
  ME: [
    { code: 'ME-601', name: 'Machine Design-II', passRate: '88%', diff: 'Hard', desc: 'Stress analysis, gear design & mechanical transmission' },
    { code: 'ME-602', name: 'Fluid Machinery', passRate: '90%', diff: 'Hard', desc: 'Turbines, pumps & fluid dynamic systems' },
    { code: 'ME-603', name: 'I.C. Engine', passRate: '92%', diff: 'Medium', desc: 'Combustion cycles, fuel injection & engine performance' },
    { code: 'ME-604', name: 'Refrigeration & Air Conditioning', passRate: '91%', diff: 'Medium', desc: 'Vapour compression & absorption refrigeration' },
    { code: 'ME-501', name: 'Heat & Mass Transfer', passRate: '86%', diff: 'Hard', desc: 'Conduction, convection, radiation & heat exchangers' },
    { code: 'ME-502', name: 'Dynamics of Machine', passRate: '89%', diff: 'Hard', desc: 'Vibrations, balancing & gyroscopic forces' }
  ]
};

export const STUDENTS = """

updated_js = NEW_HEADER + json.dumps(combined_students, indent=2) + ";\n"
with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(updated_js)

print(f"Successfully integrated clean Header and {len(new_me_students)} ME students into lib/data.js!")
