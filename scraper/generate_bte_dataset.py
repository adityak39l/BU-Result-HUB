import json

with open('scraper/data/sem5/bte_sem5.json', 'r', encoding='utf-8') as f:
    sem5_list = json.load(f)

with open('scraper/data/sem6/bte_sem6.json', 'r', encoding='utf-8') as f:
    sem6_list = json.load(f)

sem5_map = {s['rollNo']: s for s in sem5_list}
sem6_map = {s['rollNo']: s for s in sem6_list}
all_rolls = sorted(list(set(list(sem5_map.keys()) + list(sem6_map.keys()))))

bte_students = []
for roll in all_rolls:
    s5 = sem5_map.get(roll)
    s6 = sem6_map.get(roll)
    ref = s6 if s6 else s5
    
    sems = []
    sgpas = []
    sem_subs = {}
    
    if s5:
        sems.append({'sem': 5, 'sgpa': s5['sgpa']})
        sgpas.append(s5['sgpa'])
        sem_subs['5'] = s5['subjects']
        
    if s6:
        sems.append({'sem': 6, 'sgpa': s6['sgpa']})
        sgpas.append(s6['sgpa'])
        sem_subs['6'] = s6['subjects']
        
    cgpa = round(sum(sgpas)/len(sgpas), 2) if sgpas else 0.0
    
    student_obj = {
        'id': roll,
        'rollNo': roll,
        'name': ref['name'],
        'branch': 'BTE',
        'cgpa': cgpa,
        'batch': '2024-25 / 2025-26',
        'fatherName': ref['fatherName'],
        'motherName': ref['motherName'],
        'enrollNo': ref['enrollNo'],
        'semesters': sems,
        'semesterSubjects': sem_subs
    }
    bte_students.append(student_obj)

# Sort by CGPA descending to determine branchRank
bte_students.sort(key=lambda s: s['cgpa'], reverse=True)
for idx, s in enumerate(bte_students):
    s['branchRank'] = idx + 1

with open('scraper/data/bte_students_combined.json', 'w', encoding='utf-8') as f:
    json.dump(bte_students, f, indent=2, ensure_ascii=False)

print(f"Total BTE Students generated: {len(bte_students)}")
for s in bte_students:
    print(f"Rank {s['branchRank']}: {s['rollNo']} - {s['name']} | CGPA: {s['cgpa']}")
