import json

with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'r', encoding='utf-8') as f:
    js = f.read()

students_start = js.find("export const STUDENTS = [")
json_str = js[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

students = json.loads(json_str)

shiwani = next(s for s in students if s["rollNo"] == "231381030050")
print(f"Name: {shiwani['name']} | Roll: {shiwani['rollNo']} | Branch: {shiwani['branch']} | CGPA: {shiwani['cgpa']}")
print(f"Semesters: {shiwani['semesters']}")

for sem in [3, 4, 5, 6]:
    print(f"\n--- SEMESTER {sem} SUBJECTS ---")
    subs = shiwani["semesterSubjects"].get(str(sem), [])
    for sub in subs:
        print(f"  {sub['name']}: {sub['internalStr']}, {sub['externalStr']}, {sub['totalStr']}, Grade: {sub['grade']}, Credit: {sub['credit']}")
