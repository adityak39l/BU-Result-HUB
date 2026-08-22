import json
import re

with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'r', encoding='utf-8') as f:
    js = f.read()

students_start = js.find("export const STUDENTS = [")
json_str = js[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

students = json.loads(json_str)

cse_students = [s for s in students if s.get("branch") == "CSE"]
print(f"Total CSE students: {len(cse_students)}")

batch_counts = {}
for s in cse_students:
    b = s.get("batch", "NO_BATCH")
    batch_counts[b] = batch_counts.get(b, 0) + 1

print(f"CSE batch counts: {batch_counts}")

# Check sample CSE student
print(f"Sample CSE student: {cse_students[0]['rollNo']} - {cse_students[0]['name']} | Batch: {cse_students[0]['batch']}")
print(f"Semesters: {cse_students[0]['semesters']}")
print(f"SemesterSubjects keys: {list(cse_students[0].get('semesterSubjects', {}).keys())}")
