import json

with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'r', encoding='utf-8') as f:
    js = f.read()

students_start = js.find("export const STUDENTS = [")
json_str = js[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

students = json.loads(json_str)

cse_students = [s for s in students if s.get("branch") == "CSE"]
print(f"Total CSE students in lib/data.js: {len(cse_students)}")

missing_sem5_count = 0
missing_sem6_count = 0
missing_sem3_count = 0
missing_sem4_count = 0

for s in cse_students:
    sems = [x["sem"] for x in s.get("semesters", [])]
    sub_keys = list(s.get("semesterSubjects", {}).keys())
    
    if 3 not in sems or "3" not in sub_keys:
        missing_sem3_count += 1
    if 4 not in sems or "4" not in sub_keys:
        missing_sem4_count += 1
    if 5 not in sems or "5" not in sub_keys:
        missing_sem5_count += 1
    if 6 not in sems or "6" not in sub_keys:
        missing_sem6_count += 1

print(f"Missing Sem 3: {missing_sem3_count}")
print(f"Missing Sem 4: {missing_sem4_count}")
print(f"Missing Sem 5: {missing_sem5_count}")
print(f"Missing Sem 6: {missing_sem6_count}")

print("\nSample 10 CSE Students details:")
for s in cse_students[:10]:
    print(f"Roll: {s['rollNo']} | Name: {s['name']}")
    print(f"  Semesters array: {s['semesters']}")
    print(f"  SemesterSubjects keys: {list(s.get('semesterSubjects', {}).keys())}")
    for k in ['3', '4', '5', '6']:
        subs = s.get('semesterSubjects', {}).get(k, [])
        print(f"    Sem {k} subjects count: {len(subs)}")
    print()
