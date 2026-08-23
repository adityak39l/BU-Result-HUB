import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'E:\BU_RESULT_WEBSITE\lib\data.js', 'r', encoding='utf-8') as f:
    js = f.read()

start = js.find('export const STUDENTS = [')
jstr = js[start + len('export const STUDENTS = '):].strip().rstrip(';')
students = json.loads(jstr)

bme_students = [s for s in students if s['branch'] == 'BME']
print(f"Total BME Students: {len(bme_students)}")

for s in bme_students:
    sems = [(x['sem'], x['sgpa']) for x in s['semesters']]
    sub_keys = list(s.get('semesterSubjects', {}).keys())
    print(f"\nStudent: {s['name']:<25} | Roll: {s['rollNo']} | CGPA: {s['cgpa']:.2f}")
    print(f"  Father: {s.get('fatherName', 'N/A')} | Batch: {s.get('batch')}")
    print(f"  Semesters: {sems}")
    print(f"  SemesterSubjects Keys: {sub_keys}")
    for k in sub_keys:
        print(f"    Sem {k}: {len(s['semesterSubjects'][k])} subjects")
