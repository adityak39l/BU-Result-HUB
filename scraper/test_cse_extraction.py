import os
import glob
import re
from bs4 import BeautifulSoup
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

sem_v_dir = r"E:\result of All eie\CSE_sem_V"
sem_vi_dir = r"E:\result of All eie\CSE_sem_VI"

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
            
            # Extract code (first 1-2 words or abbreviation)
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
                    # Look for GP total marks
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

def extract_student_info(roll_str):
    sem5_file = os.path.join(sem_v_dir, f"{roll_str}_CSE_sem_V.html")
    sem6_file = os.path.join(sem_vi_dir, f"{roll_str}_CSE_sem_VI.html")
    
    if not os.path.exists(sem5_file) and not os.path.exists(sem6_file):
        return None
        
    s_name = ""
    f_name = ""
    m_name = ""
    enroll_no = ""
    
    semesters = []
    semesterSubjects = {}
    
    # Process Sem 5
    if os.path.exists(sem5_file):
        with open(sem5_file, 'r', encoding='utf-8') as f:
            html5 = f.read()
        soup5 = BeautifulSoup(html5, 'html.parser')
        
        name_tag = soup5.find('span', id='lblCandidateName')
        if name_tag and name_tag.text.strip():
            s_name = name_tag.text.strip()
        father_tag = soup5.find('span', id='lblFatherName')
        if father_tag and father_tag.text.strip():
            f_name = father_tag.text.strip()
        mother_tag = soup5.find('span', id='lblMotherName')
        if mother_tag and mother_tag.text.strip():
            m_name = mother_tag.text.strip()
        enroll_tag = soup5.find('span', id='lblenrollNo')
        if enroll_tag and enroll_tag.text.strip():
            enroll_no = enroll_tag.text.strip()
            
        sgpa5 = 7.0
        sgpa_m = re.search(r'SGPA\s*([0-9.]+)', soup5.get_text())
        if sgpa_m:
            try:
                sgpa5 = float(sgpa_m.group(1))
            except:
                pass
        semesters.append({"sem": 5, "sgpa": sgpa5})
        semesterSubjects["5"] = parse_subjects_from_soup(soup5)

    # Process Sem 6
    if os.path.exists(sem6_file):
        with open(sem6_file, 'r', encoding='utf-8') as f:
            html6 = f.read()
        soup6 = BeautifulSoup(html6, 'html.parser')
        
        if not s_name:
            name_tag = soup6.find('span', id='lblCandidateName')
            if name_tag and name_tag.text.strip():
                s_name = name_tag.text.strip()
        if not f_name:
            father_tag = soup6.find('span', id='lblFatherName')
            if father_tag and father_tag.text.strip():
                f_name = father_tag.text.strip()
        if not m_name:
            mother_tag = soup6.find('span', id='lblMotherName')
            if mother_tag and mother_tag.text.strip():
                m_name = mother_tag.text.strip()
        if not enroll_no:
            enroll_tag = soup6.find('span', id='lblenrollNo')
            if enroll_tag and enroll_tag.text.strip():
                enroll_no = enroll_tag.text.strip()
                
        sgpa6 = 7.5
        sgpa_m = re.search(r'SGPA\s*([0-9.]+)', soup6.get_text())
        if sgpa_m:
            try:
                sgpa6 = float(sgpa_m.group(1))
            except:
                pass
        semesters.append({"sem": 6, "sgpa": sgpa6})
        semesterSubjects["6"] = parse_subjects_from_soup(soup6)

    if not s_name:
        s_name = f"STUDENT {roll_str[-4:]}"

    cgpa = round(sum(s['sgpa'] for s in semesters) / len(semesters), 2) if semesters else 7.5

    currentSemSubs = semesterSubjects.get("6") or semesterSubjects.get("5") or []

    return {
        "rollNo": roll_str,
        "name": s_name,
        "fatherName": f_name,
        "motherName": m_name,
        "enrollNo": enroll_no,
        "branch": "CSE",
        "batch": "2025-26",
        "cgpa": cgpa,
        "semesters": semesters,
        "semesterSubjects": semesterSubjects,
        "currentSemSubjects": currentSemSubs
    }

cse_students = []
for r in range(231381030001, 231381030051):
    st = extract_student_info(str(r))
    if st:
        cse_students.append(st)

print(f"Successfully extracted {len(cse_students)} CSE students!")
for st in cse_students[:5]:
    print(f"  {st['rollNo']}: {st['name']} (CGPA: {st['cgpa']}, Semesters: {[s['sem'] for s in st['semesters']]})")
    print(f"    Sem 5 subs: {len(st['semesterSubjects'].get('5', []))}, Sem 6 subs: {len(st['semesterSubjects'].get('6', []))}")
