import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'E:\BU_RESULT_WEBSITE\lib\data.js', 'r', encoding='utf-8') as f:
    js = f.read()

start = js.find('export const STUDENTS = [')
jstr = js[start + len('export const STUDENTS = '):].strip().rstrip(';')
students = json.loads(jstr)
s = next(x for x in students if x['rollNo'] == '231381030050')

print(f"NAME: {s['name']} | ROLL: {s['rollNo']} | CGPA: {s['cgpa']}")
print(f"SEMESTERS: {s['semesters']}")

for sem_k in sorted(s['semesterSubjects'].keys(), key=lambda x: int(x)):
    subs = s['semesterSubjects'][sem_k]
    print(f"\n=== SEMESTER {sem_k} ({len(subs)} subjects) ===")
    for sub in subs:
        name = sub['name']
        i_str = sub['internalStr']
        e_str = sub['externalStr']
        t_str = sub['totalStr']
        gr = sub['grade']
        print(f"  {name:<45} | {i_str:15} | {e_str:15} | {t_str:18} | Grade: {gr}")

# Check currentSemSubjects
print(f"\n=== currentSemSubjects ({len(s.get('currentSemSubjects', []))} subjects) ===")
for sub in s.get('currentSemSubjects', []):
    name = sub['name']
    i_str = sub['internalStr']
    e_str = sub['externalStr']
    t_str = sub['totalStr']
    gr = sub['grade']
    print(f"  {name:<45} | {i_str:15} | {e_str:15} | {t_str:18} | Grade: {gr}")
