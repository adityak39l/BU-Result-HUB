import os
import re
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

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

for sem, folder in [(5, r"E:\result of All eie\CSE_sem_V"), (6, r"E:\result of All eie\CSE_sem_VI")]:
    print(f"\n=================== CSE SEMESTER {sem} ===================")
    for r in ["231371028012", "231351139009"]:
        fp = os.path.join(folder, f"{r}.html")
        parsed = parse_cse_file(fp)
        print(f"Roll: {parsed['roll']} | Name: {parsed['name']} | SGPA: {parsed['sgpa']:.2f}")
        print(f"Father: {parsed['father']} | Mother: {parsed['mother']} | Enroll: {parsed['enroll']}")
        for s in parsed['subjects']:
            print(f"  - {s['name']:<35} | {s['internalStr']:<15} | {s['externalStr']:<15} | {s['totalStr']:<16} | Grade: {s['grade']}")
