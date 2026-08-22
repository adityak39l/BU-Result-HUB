import os
import glob
import re
from bs4 import BeautifulSoup
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

DIR_SEM_III = r"E:\result of All eie\CSE_sem_III"
DIR_SEM_IV = r"E:\result of All eie\CSE_sem_IV"
DIR_SEM_V = r"E:\result of All eie\CSE_sem_V"
DIR_SEM_VI = r"E:\result of All eie\CSE_sem_VI"

def parse_marksheet_robust(file_path, sem_num):
    if not os.path.exists(file_path):
        return None
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
    roll_tag = soup.find('span', id='lblRollNo')
    if not roll_tag or not roll_tag.text.strip():
        return None
    roll = roll_tag.text.strip()
    
    name_tag = soup.find('span', id='lblCandidateName')
    name = name_tag.text.strip() if name_tag else ''
    
    father_tag = soup.find('span', id='lblFatherName')
    father = father_tag.text.strip() if father_tag else ''
    
    mother_tag = soup.find('span', id='lblMotherName')
    mother = mother_tag.text.strip() if mother_tag else 'MOTHER'
    
    enroll_tag = soup.find('span', id='lblEnrollmentNo')
    enroll = enroll_tag.text.strip() if enroll_tag else f"BU/{roll[-6:]}"
    
    full_text = soup.get_text()
    sgpa_match = re.search(r'SGPA[\s:]*([0-9.]+)', full_text, re.I)
    sgpa = float(sgpa_match.group(1)) if sgpa_match else 0.0
    
    subjects = []
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        if len(tds) >= 11:
            name_cell = tds[0]
            if not name_cell or any(k in name_cell for k in ['NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'INSTITUTE', 'Theory/Lab', 'Max.', 'Credit Max:']):
                continue
            
            # Check if this is a theory row or practical row
            # If tds[1] is theory max/min (e.g. 10040)
            is_theory = bool(tds[1] and '100' in tds[1])
            is_lab = 'LAB' in name_cell.upper() or 'PRACTICAL' in name_cell.upper()
            is_gp = 'GENERAL' in name_cell.upper() or 'PROFECIENCY' in name_cell.upper() or 'PROFICIENCY' in name_cell.upper()
            
            ext_val = ""
            int_val = ""
            tot_val = ""
            ext_max = 100
            int_max = 50
            tot_max = 150
            
            if is_theory:
                ext_val = tds[2]
                int_val = tds[4]
                tot_val = tds[10] if (len(tds) > 10 and tds[10]) else tds[6]
                ext_max = 100
                int_max = 50
                tot_max = 150
            elif is_lab:
                ext_val = tds[8] if len(tds) > 8 else ""
                int_val = tds[4] if len(tds) > 4 else ""
                tot_val = tds[10] if len(tds) > 10 else ""
                # Lab max marks can be 75 or 100
                ext_max = 50 if (len(tds) > 7 and '50' in tds[7]) else (70 if (len(tds) > 7 and '70' in tds[7]) else 50)
                int_max = 25 if (len(tds) > 3 and '25' in tds[3]) else (30 if (len(tds) > 3 and '30' in tds[3]) else 25)
                tot_max = ext_max + int_max
            elif is_gp:
                ext_val = "-"
                int_val = "-"
                tot_val = tds[8] if (len(tds) > 8 and tds[8]) else (tds[10] if len(tds) > 10 else "")
                tot_max = 50
            else:
                ext_val = tds[2] if tds[2] else (tds[8] if len(tds) > 8 else "")
                int_val = tds[4] if len(tds) > 4 else ""
                tot_val = tds[10] if len(tds) > 10 else tds[6]
                
            # Grade from marksheet
            grade_cell = tds[12] if len(tds) > 12 else (tds[-1] if len(tds) > 0 else "")
            # Grade cell format: "7.00B+", "8.00A", "0.00F", "A+", etc.
            grade_match = re.search(r'([A-Z\+]+)$', grade_cell)
            official_grade = grade_match.group(1) if grade_match else ""
            
            # Passing Criteria Rule
            grade = "A"
            ext_num = float(ext_val) if (ext_val and ext_val.replace('.','',1).isdigit()) else None
            int_num = float(int_val) if (int_val and int_val.replace('.','',1).isdigit()) else None
            tot_num = float(tot_val) if (tot_val and tot_val.replace('.','',1).isdigit()) else 0
            
            if is_theory:
                if ext_num is not None and ext_num < 40:
                    grade = "F"
                elif int_num is not None and int_num < 20:
                    grade = "F"
                elif official_grade in ['O', 'A+', 'A', 'B+', 'B', 'C', 'F']:
                    grade = official_grade
                else:
                    pct = (tot_num / tot_max * 100) if tot_max > 0 else 0
                    if pct >= 90: grade = "O"
                    elif pct >= 80: grade = "A+"
                    elif pct >= 70: grade = "A"
                    elif pct >= 60: grade = "B+"
                    elif pct >= 50: grade = "B"
                    elif pct >= 40: grade = "C"
                    else: grade = "F"
            elif is_lab:
                if official_grade in ['O', 'A+', 'A', 'B+', 'B', 'C', 'F']:
                    grade = official_grade
                elif (tot_num / tot_max * 100) < 40:
                    grade = "F"
                else:
                    pct = (tot_num / tot_max * 100) if tot_max > 0 else 0
                    if pct >= 90: grade = "O"
                    elif pct >= 80: grade = "A+"
                    elif pct >= 70: grade = "A"
                    elif pct >= 60: grade = "B+"
                    elif pct >= 50: grade = "B"
                    else: grade = "C"
            else:
                grade = official_grade if official_grade in ['O', 'A+', 'A', 'B+', 'B', 'C', 'F'] else "A"
                
            credit_val = int(tds[11]) if (len(tds) > 11 and tds[11].isdigit()) else (1 if is_lab else (0 if is_gp else 3))
            
            sub_dict = {
                "code": name_cell[:12].strip().replace(' ', '-'),
                "name": name_cell,
                "internalStr": f"Int: {int_val} / {int_max}" if int_val and int_val != "-" else "-",
                "externalStr": f"Ext: {ext_val} / {ext_max}" if ext_val and ext_val != "-" else "-",
                "totalStr": f"Tot: {tot_val} / {tot_max}" if tot_val else "-",
                "grade": grade,
                "credit": credit_val
            }
            subjects.append(sub_dict)
            
    return {
        "roll": roll,
        "name": name,
        "father": father,
        "mother": mother,
        "enroll": enroll,
        "sem": sem_num,
        "sgpa": sgpa,
        "subjects": subjects
    }

# Test sample student 231381030001 across all 4 sems
p3 = parse_marksheet_robust(os.path.join(DIR_SEM_III, "231381030001_CSE_sem_III.html"), 3)
p4 = parse_marksheet_robust(os.path.join(DIR_SEM_IV, "231381030001_CSE_sem_IV.html"), 4)
p5 = parse_marksheet_robust(os.path.join(DIR_SEM_V, "231381030001_CSE_sem_V.html"), 5)
p6 = parse_marksheet_robust(os.path.join(DIR_SEM_VI, "231381030001_CSE_sem_VI.html"), 6)

print(f"Student: 231381030001 ({p3['name']})")
print(f"Sem 3 SGPA: {p3['sgpa']} | Total subjects: {len(p3['subjects'])}")
for s in p3['subjects'][:3]:
    print(f"  {s['name']}: {s['externalStr']}, {s['internalStr']}, {s['totalStr']}, Grade: {s['grade']}")

print(f"\nSem 4 SGPA: {p4['sgpa']} | Total subjects: {len(p4['subjects'])}")
for s in p4['subjects'][:3]:
    print(f"  {s['name']}: {s['externalStr']}, {s['internalStr']}, {s['totalStr']}, Grade: {s['grade']}")

print(f"\nSem 5 SGPA: {p5['sgpa']} | Total subjects: {len(p5['subjects'])}")
for s in p5['subjects'][:3]:
    print(f"  {s['name']}: {s['externalStr']}, {s['internalStr']}, {s['totalStr']}, Grade: {s['grade']}")

print(f"\nSem 6 SGPA: {p6['sgpa']} | Total subjects: {len(p6['subjects'])}")
for s in p6['subjects'][:3]:
    print(f"  {s['name']}: {s['externalStr']}, {s['internalStr']}, {s['totalStr']}, Grade: {s['grade']}")
