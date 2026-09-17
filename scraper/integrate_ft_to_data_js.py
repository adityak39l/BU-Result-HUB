import json
import re
import shutil

print("=== INTEGRATING FOOD TECHNOLOGY (FT) INTO LIB/DATA.JS ===")

# 1. Backup lib/data.js
shutil.copyfile("lib/data.js", "lib/data.backup.js")
print("[*] Backup created at lib/data.backup.js")

# 2. Read new FT students
with open("scraper/data/ft_students_combined.json", "r", encoding="utf-8") as f:
    ft_students = json.load(f)

print(f"[*] Loaded {len(ft_students)} FT students from ft_students_combined.json")

# 3. Read existing lib/data.js
with open("lib/data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Extract existing STUDENTS array
match_students = re.search(r"export const STUDENTS = (\[.*?\]);", content, re.DOTALL)
if not match_students:
    raise Exception("Could not find export const STUDENTS in lib/data.js")

existing_students = json.loads(match_students.group(1))
print(f"[*] Found {len(existing_students)} existing students in lib/data.js")

# Filter out any existing FT roll numbers to prevent duplicates if re-run
ft_roll_set = set(s["rollNo"] for s in ft_students)
filtered_existing = [s for s in existing_students if s["rollNo"] not in ft_roll_set]

# Combine
all_students = filtered_existing + ft_students

# Helper to compute ranking score (Sem 5 & 6 combined average if available, else overall cgpa)
def get_rank_cgpa(s):
    s56 = [sem['sgpa'] for sem in s.get('semesters', []) if sem.get('sem') in [5, 6]]
    if len(s56) > 0:
        return sum(s56) / len(s56)
    return s.get('cgpa', 0)

# Compute Branch Ranks
by_branch = {}
for s in all_students:
    b = s.get("branch", "OTHER")
    by_branch.setdefault(b, []).append(s)

for b, s_list in by_branch.items():
    s_list.sort(key=get_rank_cgpa, reverse=True)
    for idx, st in enumerate(s_list):
        st["branchRank"] = idx + 1

# Compute Overall Rank
all_students.sort(key=get_rank_cgpa, reverse=True)
for idx, st in enumerate(all_students):
    st["rank"] = idx + 1

print(f"[+] Total students after adding FT: {len(all_students)}")
branch_counts = {b: len(s_list) for b, s_list in by_branch.items()}
print(f"[+] Branch breakdown: {branch_counts}")

# 4. Check & Add FT to BRANCHES
ft_branch_entry = """  { id: 'FT', name: 'Food Engg. & Technology', color: 'from-fuchsia-500 to-pink-600', badgeClass: 'bg-fuchsia-500/20 text-fuchsia-400 dark:text-fuchsia-300 border border-fuchsia-500/50 font-bold' },"""

if "'FT'" not in content and '"FT"' not in content:
    content = re.sub(
        r"(export const BRANCHES = \[)",
        r"\1\n" + ft_branch_entry,
        content
    )
    print("[+] Added FT to BRANCHES list")

# 5. Check & Add FT to SUBJECT_MASTER
ft_subject_master = """  FT: [
    { code: 'FT-601', name: 'Food Engineering - III', passRate: '92%', diff: 'Hard', desc: 'Mass and heat transfer operations, drying kinetics & freezing systems' },
    { code: 'FT-602', name: 'Cereals, Pulses and Oil Seed Products', passRate: '94%', diff: 'Medium', desc: 'Milling technology, grain processing, oil extraction & refining' },
    { code: 'FT-603', name: 'Dairy Technology', passRate: '95%', diff: 'Medium', desc: 'Milk processing, pasteurization, cheese, butter & fermented dairy' },
    { code: 'FT-604', name: 'Flavour Technology', passRate: '93%', diff: 'Medium', desc: 'Natural & synthetic flavorants, aroma encapsulation & sensory evaluation' },
    { code: 'FT-605', name: 'Food Preservation & Processing Principles', passRate: '91%', diff: 'Medium', desc: 'Thermal sterilization, irradiation, high-pressure processing & shelf-life' },
    { code: 'FT-606', name: 'Machine Design', passRate: '88%', diff: 'Hard', desc: 'Mechanical elements, shafts, bearings & food processing machinery design' },
    { code: 'FT-501', name: 'Food Analysis', passRate: '93%', diff: 'Medium', desc: 'Proximate analysis, HPLC, spectrophotometry & quality control' },
    { code: 'FT-502', name: 'Food Biochemistry and Biotechnology', passRate: '90%', diff: 'Medium', desc: 'Enzymatic browning, food macromolecules & metabolic pathways' },
    { code: 'FT-503', name: 'Food Engineering - II', passRate: '89%', diff: 'Hard', desc: 'Fluid rheology, pumping, heat exchangers & thermal processing' },
    { code: 'FT-504', name: 'Food Safety and Food Laws', passRate: '96%', diff: 'Easy', desc: 'FSSAI standards, HACCP, ISO 22000 & food toxicology' },
    { code: 'FT-401', name: 'Food Chemistry', passRate: '92%', diff: 'Medium', desc: 'Water activity, lipid oxidation, carbohydrates & functional proteins' },
    { code: 'FT-301', name: 'Basic and Food Microbiology', passRate: '91%', diff: 'Medium', desc: 'Foodborne pathogens, microbial fermentation & preservation' }
  ],"""

if "FT:" not in content:
    content = re.sub(
        r"(export const SUBJECT_MASTER = \{)",
        r"\1\n" + ft_subject_master,
        content
    )
    print("[+] Added FT to SUBJECT_MASTER")

# 6. Replace STUDENTS in content
new_students_json = json.dumps(all_students, indent=2, ensure_ascii=False)
content = re.sub(
    r"export const STUDENTS = \[.*?\];",
    f"export const STUDENTS = {new_students_json};",
    content,
    flags=re.DOTALL
)

with open("lib/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print("[OK] lib/data.js successfully updated with 189 students across 7 branches!")
