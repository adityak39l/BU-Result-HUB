import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'E:\BU_RESULT_WEBSITE\lib\data.js', 'r', encoding='utf-8') as f:
    js = f.read()

start = js.find('export const STUDENTS = [')
jstr = js[start + len('export const STUDENTS = '):].strip().rstrip(';')
students = json.loads(jstr)

cse_students = [s for s in students if s['branch'] == 'CSE']
print(f"Total CSE Students: {len(cse_students)}")

has_sem_5 = 0
has_sem_6 = 0
has_all_4 = 0

for s in cse_students:
    sems = [x['sem'] for x in s['semesters']]
    sub_keys = list(s.get('semesterSubjects', {}).keys())
    if 5 in sems: has_sem_5 += 1
    if 6 in sems: has_sem_6 += 1
    if 3 in sems and 4 in sems and 5 in sems and 6 in sems: has_all_4 += 1

print(f"CSE with Sem 5: {has_sem_5}")
print(f"CSE with Sem 6: {has_sem_6}")
print(f"CSE with All 4 (3,4,5,6): {has_all_4}")

# Check first 5 CSE students
for s in cse_students[:5]:
    print(f"\nStudent: {s['name']} ({s['rollNo']})")
    print(f"  Semesters in data: {s['semesters']}")
    print(f"  SemesterSubjects keys: {list(s['semesterSubjects'].keys())}")
    for sem in ['5', '6']:
        subs = s['semesterSubjects'].get(sem, [])
        print(f"  Sem {sem} subjects count: {len(subs)}")
        if subs:
            print(f"    Sample: {subs[0]['name']} | {subs[0]['internalStr']} | {subs[0]['externalStr']} | {subs[0]['totalStr']} | Grade: {subs[0]['grade']}")
