import os
import re
from bs4 import BeautifulSoup
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

DIR_SEM_III = r"E:\result of All eie\BME_SEM_III"
DIR_SEM_IV = r"E:\result of All eie\BME_SEM_IV"

SKIP_NAMES = {
    'NAME OF PAPER', 'PRACTICAL', 'THEORY', 'Credit Max:', 'RESULT :',
    'NAME OF PAPERTheory/Lab.InternalTotalPr./Disst.Tour/FT/GP/Sem.GRANDCreditGrdPnt/GRADEMax.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.Max.Min.MarksObt.'
}

def parse_marksheet_file(file_path):
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
    m_sgpa = re.search(r'SGPA\s*([0-9.]+)', html)
    if m_sgpa:
        try:
            sgpa = float(m_sgpa.group(1))
        except:
            pass
            
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
            
            grade = grade_str[-2:] if len(grade_str) >= 2 and grade_str[-2] in ['A', 'B'] and grade_str[-1] == '+' else (grade_str[-1:] if grade_str else 'A')
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
            subjects.append({
                "code": "GENERAL-PROF",
                "name": "GENERAL PROFECIENCY",
                "internalStr": "-",
                "externalStr": "-",
                "totalStr": f"Tot: {gp_marks} / 50",
                "grade": "O" if int(gp_marks) >= 45 else ("A+" if int(gp_marks) >= 40 else "A"),
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

print("=== PARSING BME SEM III ===")
for f in os.listdir(DIR_SEM_III):
    if f.endswith('.html'):
        res = parse_marksheet_file(os.path.join(DIR_SEM_III, f))
        print(f"Roll: {res['roll']} | Name: {res['name']:<25} | SGPA: {res['sgpa']:.2f} | Subjects: {len(res['subjects'])}")

print("\n=== PARSING BME SEM IV ===")
for f in os.listdir(DIR_SEM_IV):
    if f.endswith('.html'):
        res = parse_marksheet_file(os.path.join(DIR_SEM_IV, f))
        print(f"Roll: {res['roll']} | Name: {res['name']:<25} | SGPA: {res['sgpa']:.2f} | Subjects: {len(res['subjects'])}")
