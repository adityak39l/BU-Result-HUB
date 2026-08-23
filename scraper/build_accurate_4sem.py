"""
ACCURATE 4-Semester Parser for CSE (Sem III, IV, V, VI)
Verified column mapping from raw HTML dump:

Theory row (13 cols per subject row):
  [0]  Subject Name
  [1]  Ext Max/Min (e.g. "100 40")
  [2]  Ext Marks Obtained
  [3]  Int Max/Min (e.g. "50 20")
  [4]  Int Marks Obtained
  [5]  Theory Total Max/Min (e.g. "150 60")
  [6]  Theory Total Obtained
  [7]  blank
  [8]  blank
  [9]  Grand Total Max/Min (e.g. "150 60")
  [10] Grand Total Obtained
  [11] Credit
  [12] GradePoint+Grade (e.g. "8.00A" or "10.00O")

Lab row (13 cols):
  [0]  Subject Name
  [1]  blank
  [2]  blank
  [3]  Int Max/Min (e.g. "25 10" or "30 12")
  [4]  Int Marks Obtained
  [5]  blank
  [6]  blank
  [7]  Ext Max/Min (e.g. "50 20" or "70 28")
  [8]  Ext Marks Obtained
  [9]  Grand Total Max/Min (e.g. "75 30" or "100 40")
  [10] Grand Total Obtained
  [11] Credit
  [12] GradePoint+Grade

GP row (13 cols):
  [0]  "GENERAL PROFECIENCY"
  [1-6] blanks
  [7]  GP Max/Min (e.g. "50 20")
  [8]  GP Marks Obtained
  [9]  Grand Total Max/Min
  [10] Grand Total Obtained
  [11] blank (no credit)
  [12] blank (no grade usually)
"""

import os
import glob
import re
import json
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"
SEM_DIRS = {
    3: r"E:\result of All eie\CSE_sem_III",
    4: r"E:\result of All eie\CSE_sem_IV",
    5: r"E:\result of All eie\CSE_sem_V",
    6: r"E:\result of All eie\CSE_sem_VI",
}
EIE_DIRS = {
    3: r"E:\result of All eie\EIE_sem_III",
    4: r"E:\result of All eie\EIE_sem_IV",
}

SKIP_NAMES = {
    'NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'INSTITUTE',
    'Theory/Lab', 'Max.', 'Credit Max', 'NAME OF STUDENT',
    'NAME OF FATHER', 'NAME OF MOTHER', 'EXAM CATEGORY',
    'NAME OF COURSE', 'PRACTICAL',
}

def parse_max_from_cell(cell_text):
    """Extract max marks from a cell like '100 40' → 100, or '25 10' → 25"""
    nums = re.findall(r'\d+', cell_text)
    if nums:
        return int(nums[0])
    return None

def parse_grade_from_cell(cell_text):
    """Extract letter grade from '8.00A' or '10.00O' or '0.00F'"""
    m = re.search(r'([A-Z][+]?)$', cell_text.strip())
    if m:
        return m.group(1)
    return ''

def parse_sgpa_from_soup(soup):
    """Find SGPA from various spans/cells in the page"""
    # Try direct span
    for span in soup.find_all('span'):
        t = span.text.strip()
        m = re.search(r'SGPA\s*([0-9]+\.[0-9]+)', t)
        if m:
            return float(m.group(1))
    # Try from all text
    full_text = soup.get_text()
    m = re.search(r'SGPA\s*([0-9]+\.[0-9]+)', full_text)
    if m:
        return float(m.group(1))
    return 0.0

def parse_marksheet(file_path):
    """Parse a single marksheet HTML into structured data"""
    if not os.path.exists(file_path):
        return None
    
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    roll_tag = soup.find('span', id='lblRollNo')
    if not roll_tag:
        return None
    roll = roll_tag.text.strip()
    if not roll:
        return None
    
    name_tag = soup.find('span', id='lblCandidateName')
    name = name_tag.text.strip() if name_tag else ''
    
    father_tag = soup.find('span', id='lblFatherName')
    father = father_tag.text.strip() if father_tag else ''
    
    mother_tag = soup.find('span', id='lblMotherName')
    mother = mother_tag.text.strip() if mother_tag else ''
    
    enroll_tag = soup.find('span', id='lblEnrollmentNo')
    enroll = enroll_tag.text.strip() if enroll_tag else ''
    
    sgpa = parse_sgpa_from_soup(soup)
    
    subjects = []
    
    # Parse subject rows — each row is a <tr> with exactly 13 <td>s (individual subject)
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ').replace('\r', '').strip() for td in tr.find_all('td')]
        
        if len(tds) != 13:
            continue
        
        sub_name = tds[0].strip()
        
        # Skip header/meta rows — exact name match only
        if not sub_name or sub_name in SKIP_NAMES:
            continue
        if 'Credit Max' in sub_name:
            continue
        
        is_gp = ('GENERAL' in sub_name.upper() and ('PROF' in sub_name.upper() or 'PROFI' in sub_name.upper()))
        is_lab = ('LAB' in sub_name.upper())
        is_theory = not is_lab and not is_gp
        
        grade_cell = tds[12].strip()
        official_grade = parse_grade_from_cell(grade_cell)
        
        if is_theory:
            ext_max_raw = tds[1].strip()
            ext_val_raw = tds[2].strip()
            int_max_raw = tds[3].strip()
            int_val_raw = tds[4].strip()
            tot_val_raw = tds[10].strip()  # Grand total obtained
            credit_raw  = tds[11].strip()
            
            ext_max = parse_max_from_cell(ext_max_raw) or 100
            int_max = parse_max_from_cell(int_max_raw) or 50
            tot_max = ext_max + int_max
            
            ext_val = int(ext_val_raw) if ext_val_raw.isdigit() else None
            int_val = int(int_val_raw) if int_val_raw.isdigit() else None
            tot_val = int(tot_val_raw) if tot_val_raw.isdigit() else None
            
            # Grade determination: use official grade from marksheet (most accurate)
            if official_grade in ['O', 'A+', 'A', 'B+', 'B', 'C', 'F']:
                grade = official_grade
            else:
                # Fallback: compute from marks
                if ext_val is not None and ext_val < 40:
                    grade = 'F'
                elif int_val is not None and int_val < 20:
                    grade = 'F'
                elif tot_val is not None:
                    pct = tot_val / tot_max * 100
                    if pct >= 90: grade = 'O'
                    elif pct >= 80: grade = 'A+'
                    elif pct >= 70: grade = 'A'
                    elif pct >= 60: grade = 'B+'
                    elif pct >= 50: grade = 'B'
                    elif pct >= 40: grade = 'C'
                    else: grade = 'F'
                else:
                    grade = 'C'
            
            credit = int(credit_raw) if credit_raw.isdigit() else 3
            
            subjects.append({
                "code": re.sub(r'[^A-Z0-9]', '-', sub_name[:14].upper()).strip('-'),
                "name": sub_name,
                "internalStr": f"Int: {int_val} / {int_max}" if int_val is not None else "-",
                "externalStr": f"Ext: {ext_val} / {ext_max}" if ext_val is not None else "-",
                "totalStr": f"Tot: {tot_val} / {tot_max}" if tot_val is not None else "-",
                "grade": grade,
                "credit": credit,
            })
        
        elif is_lab:
            int_max_raw = tds[3].strip()
            int_val_raw = tds[4].strip()
            ext_max_raw = tds[7].strip()
            ext_val_raw = tds[8].strip()
            tot_max_raw = tds[9].strip()
            tot_val_raw = tds[10].strip()
            credit_raw  = tds[11].strip()
            
            int_max = parse_max_from_cell(int_max_raw) or 25
            int_val = int(int_val_raw) if int_val_raw.isdigit() else None
            ext_max = parse_max_from_cell(ext_max_raw) or 50
            ext_val = int(ext_val_raw) if ext_val_raw.isdigit() else None
            tot_max = parse_max_from_cell(tot_max_raw) or (int_max + ext_max)
            tot_val = int(tot_val_raw) if tot_val_raw.isdigit() else None
            
            if official_grade in ['O', 'A+', 'A', 'B+', 'B', 'C', 'F']:
                grade = official_grade
            else:
                if tot_val is not None and tot_max > 0:
                    pct = tot_val / tot_max * 100
                    if pct >= 90: grade = 'O'
                    elif pct >= 80: grade = 'A+'
                    elif pct >= 70: grade = 'A'
                    elif pct >= 60: grade = 'B+'
                    elif pct >= 50: grade = 'B'
                    elif pct >= 40: grade = 'C'
                    else: grade = 'F'
                else:
                    grade = 'B'
            
            credit = int(credit_raw) if credit_raw.isdigit() else 1
            
            subjects.append({
                "code": re.sub(r'[^A-Z0-9]', '-', sub_name[:14].upper()).strip('-'),
                "name": sub_name,
                "internalStr": f"Int: {int_val} / {int_max}" if int_val is not None else "-",
                "externalStr": f"Ext: {ext_val} / {ext_max}" if ext_val is not None else "-",
                "totalStr": f"Tot: {tot_val} / {tot_max}" if tot_val is not None else "-",
                "grade": grade,
                "credit": credit,
            })
        
        elif is_gp:
            # GP: tds[7] = max/min, tds[8] = marks obtained
            gp_max_raw = tds[7].strip()
            gp_val_raw = tds[8].strip()
            
            gp_max = parse_max_from_cell(gp_max_raw) or 50
            gp_val = int(gp_val_raw) if gp_val_raw.isdigit() else None
            
            if official_grade in ['O', 'A+', 'A', 'B+', 'B', 'C']:
                grade = official_grade
            elif gp_val is not None:
                pct = gp_val / gp_max * 100
                if pct >= 90: grade = 'O'
                elif pct >= 80: grade = 'A+'
                elif pct >= 70: grade = 'A'
                elif pct >= 60: grade = 'B+'
                else: grade = 'B'
            else:
                grade = 'B'
            
            subjects.append({
                "code": "GENERAL-PROF",
                "name": sub_name,
                "internalStr": "-",
                "externalStr": "-",
                "totalStr": f"Tot: {gp_val} / {gp_max}" if gp_val is not None else "-",
                "grade": grade,
                "credit": 0,
            })
    
    return {
        "roll": roll,
        "name": name,
        "father": father,
        "mother": mother,
        "enroll": enroll,
        "sgpa": sgpa,
        "subjects": subjects,
    }


# ─── MAIN BUILD ────────────────────────────────────────────────────────────────

# Load existing data.js to preserve EIE/BME/ME students
with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    js_content = f.read()

students_start = js_content.find("export const STUDENTS = [")
header_block = js_content[:students_start]
json_str = js_content[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()
existing_students = json.loads(json_str)

non_cse_students = [s for s in existing_students if s.get("branch") != "CSE"]

# Collect all CSE roll numbers across all 4 semesters
all_cse_rolls = set()
SEM_FILE_PATTERNS = {
    3: ("CSE_sem_III", r"E:\result of All eie\CSE_sem_III"),
    4: ("CSE_sem_IV",  r"E:\result of All eie\CSE_sem_IV"),
    5: ("CSE_sem_V",   r"E:\result of All eie\CSE_sem_V"),
    6: ("CSE_sem_VI",  r"E:\result of All eie\CSE_sem_VI"),
}

for sem_num, (sem_tag, d) in SEM_FILE_PATTERNS.items():
    for f in glob.glob(os.path.join(d, f"*_{sem_tag}.html")):
        m = re.search(r'^(\d+)_CSE_sem_', os.path.basename(f))
        if m:
            all_cse_rolls.add(m.group(1))

print(f"Total unique CSE rolls found: {len(all_cse_rolls)}")

SEM_SUFFIXES = {3: 'III', 4: 'IV', 5: 'V', 6: 'VI'}

cse_students = []
issues_log = []

for roll in sorted(all_cse_rolls):
    parsed = {}
    for sem_num, (sem_tag, d) in SEM_FILE_PATTERNS.items():
        fp = os.path.join(d, f"{roll}_{sem_tag}.html")
        p = parse_marksheet(fp)
        if p and p['name'] and p['subjects']:
            parsed[sem_num] = p
    
    if not parsed:
        print(f"  !! No data at all for roll {roll}")
        continue
    
    # Use the highest semester data for student info
    primary_sem = max(parsed.keys())
    primary = parsed[primary_sem]
    
    name   = primary['name']
    father = primary['father']
    mother = primary['mother']
    enroll = primary['enroll']
    
    sems_arr = []
    sem_subs = {}
    
    for sem_num in sorted(parsed.keys()):
        p = parsed[sem_num]
        if p['sgpa'] > 0:
            sems_arr.append({"sem": sem_num, "sgpa": round(p['sgpa'], 2)})
            sem_subs[str(sem_num)] = p['subjects']
        elif p['subjects']:
            # SGPA not found in HTML, compute from grade points
            # This shouldn't happen if HTML is valid, but handle gracefully
            issues_log.append(f"  WARN: roll={roll} sem={sem_num} sgpa=0, {len(p['subjects'])} subjects found, skipping sem")
    
    if not sems_arr:
        issues_log.append(f"  WARN: roll={roll} has no sems with valid SGPA!")
        continue
    
    cgpa = round(sum(s['sgpa'] for s in sems_arr) / len(sems_arr), 2)
    latest_sem = max(s['sem'] for s in sems_arr)
    current_subs = sem_subs.get(str(latest_sem), [])
    
    cse_students.append({
        "rank": 1,
        "branchRank": 1,
        "rollNo": roll,
        "enrollNo": enroll,
        "name": name,
        "fatherName": father,
        "motherName": mother,
        "branch": "CSE",
        "batch": "2024-25 / 2025-26",
        "cgpa": cgpa,
        "semesters": sems_arr,
        "semesterSubjects": sem_subs,
        "currentSemSubjects": current_subs,
    })

if issues_log:
    print("\n=== ISSUES LOG ===")
    for line in issues_log:
        print(line)

# Combine and rank
all_students = cse_students + non_cse_students
all_students.sort(key=lambda s: s.get('cgpa', 0.0), reverse=True)
for idx, st in enumerate(all_students, start=1):
    st['rank'] = idx

# Branch rank
branch_rank_counter = {}
for st in all_students:
    b = st.get('branch', 'OTHER')
    branch_rank_counter[b] = branch_rank_counter.get(b, 0) + 1
    st['branchRank'] = branch_rank_counter[b]

print(f"\nTotal students: {len(all_students)} (CSE: {len(cse_students)}, Others: {len(non_cse_students)})")
print("\nTop 10 by CGPA:")
for st in all_students[:10]:
    sems_present = [s['sem'] for s in st['semesters']]
    print(f"  #{st['rank']} {st['name']} ({st['rollNo']}) CGPA:{st['cgpa']} Sems:{sems_present}")

# Write data.js
formatted_students = ",\n".join(
    "  " + json.dumps(s, indent=4, ensure_ascii=False).replace("\n", "\n  ")
    for s in all_students
)
final_js = header_block + "export const STUDENTS = [\n" + formatted_students + "\n];\n"

with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(final_js)

print(f"\n✅ lib/data.js written successfully!")
