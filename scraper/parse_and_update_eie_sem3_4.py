import os
import re
import json
import glob
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r"E:\result of All eie"
data_js_path = r"E:\BU_RESULT_WEBSITE\lib\data.js"

print("Parsing downloaded EIE Semester III & IV HTML files...")

# Map roll_no -> { 3: sgpa3, 4: sgpa4 }
student_sgpa_map = {}

def parse_folder(folder_path, sem_num):
    files = glob.glob(os.path.join(folder_path, "*.html"))
    print(f"Parsing {len(files)} files in {folder_path} (Sem {sem_num})...")
    for fpath in files:
        fname = os.path.basename(fpath)
        # Extract roll number from filename (e.g. 231351139001_EIE_sem_III.html)
        m = re.match(r'(\d+)_', fname)
        if not m:
            continue
        roll = m.group(1)

        with open(fpath, 'r', encoding='utf-8') as f:
            html = f.read()

        soup = BeautifulSoup(html, 'html.parser')
        text = soup.get_text(separator=' ')

        # Try to extract SGPA using regex
        sgpa_m = re.search(r'SGPA\s*[:\-]?\s*([0-9]+\.[0-9]+)', text)
        if not sgpa_m:
            # Fallback search in html table cells
            sgpa_m = re.search(r'SGPA\s*</th[^>]*>\s*<th[^>]*>\s*([0-9]+\.[0-9]+)', html, re.I)
        
        if sgpa_m:
            sgpa_val = float(sgpa_m.group(1))
            if roll not in student_sgpa_map:
                student_sgpa_map[roll] = {}
            student_sgpa_map[roll][sem_num] = sgpa_val
            print(f"  Roll: {roll} | Sem {sem_num} SGPA: {sgpa_val}")
        else:
            print(f"  [WARNING] Could not parse SGPA for Roll: {roll} in Sem {sem_num}")

parse_folder(os.path.join(base_dir, "EIE_sem_III"), 3)
parse_folder(os.path.join(base_dir, "EIE_sem_IV"), 4)

print("\nUpdating lib/data.js with Sem 3 & 4 data...")

# Read lib/data.js
with open(data_js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Update students in STUDENTS array
updated_count = 0
for roll, sem_dict in student_sgpa_map.items():
    # Find student block by rollNo
    # Pattern to match student entry in JS
    pattern = rf'(\{{\s*"rollNo":\s*"{roll}".*?"semesters":\s*\[)(.*?)(\]\s*,)'
    match = re.search(pattern, js_content, re.DOTALL)

    if match:
        prefix = match.group(1)
        existing_sems_str = match.group(2)
        suffix = match.group(3)

        # Parse existing sems
        try:
            existing_sems = json.loads("[" + existing_sems_str + "]")
        except:
            existing_sems = []

        # Convert to dict by sem number
        sem_map = {s['sem']: s['sgpa'] for s in existing_sems}

        # Add or update sems 3 and 4
        for snum, sgpa_v in sem_dict.items():
            sem_map[snum] = sgpa_v

        # Rebuild semesters array sorted by sem number
        new_sems = [{'sem': s, 'sgpa': sem_map[s]} for s in sorted(sem_map.keys())]
        new_sems_json = json.dumps(new_sems, indent=8)

        # Calculate new average CGPA from all available semesters
        avg_cgpa = round(sum(s['sgpa'] for s in new_sems) / len(new_sems), 2)

        # Replace semesters in student block
        new_sem_block = prefix + "\n" + "\n".join("        " + line for line in new_sems_json.splitlines()[1:-1]) + "\n      " + suffix
        
        # Also update "cgpa": X.XX for this student
        cgpa_pattern = rf'("rollNo":\s*"{roll}".*?"cgpa":\s*)([0-9.]+)'
        js_content = re.sub(cgpa_pattern, rf'\g<1>{avg_cgpa}', js_content, flags=re.DOTALL)
        
        # Replace semesters
        js_content = js_content[:match.start()] + new_sem_block + js_content[match.end():]
        updated_count += 1
        print(f"  [UPDATED] {roll} -> Sems: {[s['sem'] for s in new_sems]} | New CGPA: {avg_cgpa}")

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\nSuccessfully updated {updated_count} students in lib/data.js!")
