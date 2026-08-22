import json

with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'r', encoding='utf-8') as f:
    js = f.read()

students_start = js.find("export const STUDENTS = [")
json_str = js[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

students = json.loads(json_str)

for s in students[:5]:
    print(f"Roll: {s['rollNo']} | Name: {s['name']} | Branch: {s['branch']} | Batch: {s['batch']}")
    print(f"  Semesters: {s['semesters']}")
    print(f"  SemesterSubjects keys: {list(s.get('semesterSubjects', {}).keys())}")
    print(f"  CurrentSemSubjects first subject: {s.get('currentSemSubjects', [{}])[0].get('name')}\n")
