import json
import re
import shutil

# 1. Backup lib/data.js
shutil.copyfile("lib/data.js", "lib/data.backup.js")
print("[*] Created backup at lib/data.backup.js")

# 2. Read new BTE students
with open("scraper/data/bte_students_combined.json", "r", encoding="utf-8") as f:
    bte_students = json.load(f)

# 3. Read existing lib/data.js and extract students
with open("lib/data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Parse STUDENTS from data.js
match_students = re.search(r"export const STUDENTS = (\[.*?\]);", content, re.DOTALL)
if not match_students:
    raise Exception("Could not find export const STUDENTS in lib/data.js")

existing_students_json = match_students.group(1)
existing_students = json.loads(existing_students_json)

print(f"[*] Found {len(existing_students)} existing students in lib/data.js")

# Remove any existing BTE roll numbers if re-running
bte_roll_set = set(s["rollNo"] for s in bte_students)
filtered_existing = [s for s in existing_students if s["rollNo"] not in bte_roll_set]

# Combine
all_students = filtered_existing + bte_students

# Compute ranks
# Group by branch for branchRank
by_branch = {}
for s in all_students:
    b = s.get("branch", "OTHER")
    by_branch.setdefault(b, []).append(s)

for b, s_list in by_branch.items():
    s_list.sort(key=lambda x: float(x.get("cgpa", 0)), reverse=True)
    for idx, st in enumerate(s_list):
        st["branchRank"] = idx + 1

# Overall rank
all_students.sort(key=lambda x: float(x.get("cgpa", 0)), reverse=True)
for idx, st in enumerate(all_students):
    st["rank"] = idx + 1

print(f"[+] Total students after adding BTE: {len(all_students)}")

# 4. Check if BTE is in BRANCHES
bte_branch_entry = """  { id: 'BTE', name: 'Biotechnology Engineering', color: 'from-lime-500 to-emerald-600', badgeClass: 'bg-lime-500/20 text-lime-600 dark:text-lime-300 border border-lime-500/40 font-bold' },"""

if "'BTE'" not in content and '"BTE"' not in content:
    # Add BTE to BRANCHES array
    content = re.sub(
        r"(export const BRANCHES = \[)",
        r"\1\n" + bte_branch_entry,
        content
    )
    print("[+] Added BTE to BRANCHES list")

# 5. Check if BTE is in SUBJECT_MASTER
bte_subject_master = """  BTE: [
    { code: 'BTE-601', name: 'Bioinformatics', passRate: '91%', diff: 'Medium', desc: 'Biological databases, BLAST algorithms, sequence alignment & phylogenetics' },
    { code: 'BTE-602', name: 'Plant Biotechnology', passRate: '93%', diff: 'Medium', desc: 'Tissue culture, micropropagation & transgenic plant development' },
    { code: 'BTE-603', name: 'Fermentation Biotechnology', passRate: '90%', diff: 'Medium', desc: 'Bioreactor kinetics, media sterilization & downstream extraction' },
    { code: 'BTE-604', name: 'Genetic Engineering', passRate: '88%', diff: 'Hard', desc: 'Recombinant DNA technology, restriction cloning & PCR vectors' },
    { code: 'BTE-605', name: 'Bioprocess Engineering - II', passRate: '89%', diff: 'Medium', desc: 'Aeration, agitation, scale-up theory & effluent bio-treatment' },
    { code: 'BTE-501', name: 'Analytical Techniques in Biotechnology', passRate: '92%', diff: 'Medium', desc: 'Spectroscopy, chromatography, electrophoresis & centrifugation' },
    { code: 'BTE-502', name: 'Bioprocess Engineering - I', passRate: '90%', diff: 'Medium', desc: 'Stoichiometry of cell growth, yield coefficients & bioreactor design' },
    { code: 'BTE-504', name: 'Chemical Reaction Engineering', passRate: '88%', diff: 'Hard', desc: 'Isothermal reactor design, kinetics & catalyst deactivation' }
  ],"""

if "BTE:" not in content:
    content = re.sub(
        r"(export const SUBJECT_MASTER = \{)",
        r"\1\n" + bte_subject_master,
        content
    )
    print("[+] Added BTE to SUBJECT_MASTER")

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

print("[OK] lib/data.js successfully updated with BTE students and metadata!")
