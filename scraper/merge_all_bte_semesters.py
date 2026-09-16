import json
import re
import shutil

# 1. Backup lib/data.js
shutil.copyfile("lib/data.js", "lib/data.backup.js")
print("[*] Backup created at lib/data.backup.js")

# 2. Load all 4 semesters data
with open("scraper/data/sem3/bte_sem3.json", "r", encoding="utf-8") as f:
    sem3_list = json.load(f)

with open("scraper/data/sem4/bte_sem4.json", "r", encoding="utf-8") as f:
    sem4_list = json.load(f)

with open("scraper/data/sem5/bte_sem5.json", "r", encoding="utf-8") as f:
    sem5_list = json.load(f)

with open("scraper/data/sem6/bte_sem6.json", "r", encoding="utf-8") as f:
    sem6_list = json.load(f)

sem3_map = {s["rollNo"]: s for s in sem3_list}
sem4_map = {s["rollNo"]: s for s in sem4_list}
sem5_map = {s["rollNo"]: s for s in sem5_list}
sem6_map = {s["rollNo"]: s for s in sem6_list}

all_rolls = sorted(list(set(
    list(sem3_map.keys()) + list(sem4_map.keys()) +
    list(sem5_map.keys()) + list(sem6_map.keys())
)))

bte_students = []
for roll in all_rolls:
    s3 = sem3_map.get(roll)
    s4 = sem4_map.get(roll)
    s5 = sem5_map.get(roll)
    s6 = sem6_map.get(roll)

    ref = s6 or s5 or s4 or s3

    sems = []
    sgpas = []
    sem_subs = {}

    for sem_num, s_data in [(3, s3), (4, s4), (5, s5), (6, s6)]:
        if s_data:
            sems.append({"sem": sem_num, "sgpa": s_data["sgpa"]})
            sgpas.append(s_data["sgpa"])
            sem_subs[str(sem_num)] = s_data["subjects"]

    cgpa = round(sum(sgpas) / len(sgpas), 2) if sgpas else 0.0

    student_obj = {
        "id": roll,
        "rollNo": roll,
        "name": ref["name"],
        "branch": "BTE",
        "cgpa": cgpa,
        "batch": "2024-25 / 2025-26",
        "fatherName": ref["fatherName"],
        "motherName": ref["motherName"],
        "enrollNo": ref["enrollNo"],
        "semesters": sems,
        "semesterSubjects": sem_subs
    }
    bte_students.append(student_obj)

# 3. Read existing lib/data.js
with open("lib/data.js", "r", encoding="utf-8") as f:
    content = f.read()

match_students = re.search(r"export const STUDENTS = (\[.*?\]);", content, re.DOTALL)
if not match_students:
    raise Exception("Could not find STUDENTS in lib/data.js")

existing_students = json.loads(match_students.group(1))

# Filter out old BTE students and append new full 4-sem BTE students
bte_roll_set = set(s["rollNo"] for s in bte_students)
non_bte_students = [s for s in existing_students if s.get("branch") != "BTE"]

all_students = non_bte_students + bte_students

# Re-compute branchRank
by_branch = {}
for s in all_students:
    b = s.get("branch", "OTHER")
    by_branch.setdefault(b, []).append(s)

for b, s_list in by_branch.items():
    s_list.sort(key=lambda x: float(x.get("cgpa", 0)), reverse=True)
    for idx, st in enumerate(s_list):
        st["branchRank"] = idx + 1

# Re-compute overall rank
all_students.sort(key=lambda x: float(x.get("cgpa", 0)), reverse=True)
for idx, st in enumerate(all_students):
    st["rank"] = idx + 1

# 4. Update BTE in SUBJECT_MASTER with all subjects
bte_subject_master = """  BTE: [
    { code: 'BTE-601', name: 'Bioinformatics', passRate: '91%', diff: 'Medium', desc: 'Biological databases, BLAST algorithms, sequence alignment & phylogenetics' },
    { code: 'BTE-602', name: 'Plant Biotechnology', passRate: '93%', diff: 'Medium', desc: 'Tissue culture, micropropagation & transgenic plant development' },
    { code: 'BTE-603', name: 'Fermentation Biotechnology', passRate: '90%', diff: 'Medium', desc: 'Bioreactor kinetics, media sterilization & downstream extraction' },
    { code: 'BTE-604', name: 'Genetic Engineering', passRate: '88%', diff: 'Hard', desc: 'Recombinant DNA technology, restriction cloning & PCR vectors' },
    { code: 'BTE-605', name: 'Bioprocess Engineering - II', passRate: '89%', diff: 'Medium', desc: 'Aeration, agitation, scale-up theory & effluent bio-treatment' },
    { code: 'BTE-501', name: 'Analytical Techniques in Biotechnology', passRate: '92%', diff: 'Medium', desc: 'Spectroscopy, chromatography, electrophoresis & centrifugation' },
    { code: 'BTE-502', name: 'Bioprocess Engineering - I', passRate: '90%', diff: 'Medium', desc: 'Stoichiometry of cell growth, yield coefficients & bioreactor design' },
    { code: 'BTE-504', name: 'Chemical Reaction Engineering', passRate: '88%', diff: 'Hard', desc: 'Isothermal reactor design, kinetics & catalyst deactivation' },
    { code: 'BTE-401', name: 'Immunology', passRate: '89%', diff: 'Medium', desc: 'Antigen-antibody interactions, immune response & ELISA assays' },
    { code: 'BTE-402', name: 'Genetics and Molecular Biology', passRate: '91%', diff: 'Medium', desc: 'Mendelian genetics, DNA replication, transcription & translation' },
    { code: 'BTE-403', name: 'Protein and Enzyme Engineering', passRate: '90%', diff: 'Hard', desc: 'Enzyme kinetics, protein folding, allostery & directed evolution' },
    { code: 'BTE-301', name: 'Biochemistry', passRate: '93%', diff: 'Medium', desc: 'Biomolecules, metabolic pathways, glycolysis & Krebs cycle' },
    { code: 'BTE-302', name: 'Applied Microbiology', passRate: '92%', diff: 'Medium', desc: 'Microbial culture, aseptic techniques, staining & industrial applications' },
    { code: 'BTE-303', name: 'Fluid Flow and Solid Handling', passRate: '87%', diff: 'Hard', desc: 'Fluid statics, Bernoulli theorem, pumps & particle sedimentation' }
  ],"""

if "BTE:" in content:
    content = re.sub(r"  BTE: \[.*?\],", bte_subject_master, content, flags=re.DOTALL)

# Replace STUDENTS in content
new_students_json = json.dumps(all_students, indent=2, ensure_ascii=False)
content = re.sub(
    r"export const STUDENTS = \[.*?\];",
    f"export const STUDENTS = {new_students_json};",
    content,
    flags=re.DOTALL
)

with open("lib/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"[OK] Successfully integrated {len(bte_students)} BTE students with 4 full semesters!")
for s in bte_students:
    sems_str = ", ".join([f"Sem {x['sem']}: {x['sgpa']}" for x in s['semesters']])
    print(f"  Roll: {s['rollNo']} | {s['name']} | Overall CGPA: {s['cgpa']} ({sems_str})")
