import json

with open(r"E:\BU_RESULT_WEBSITE\lib\data.js", 'r', encoding='utf-8') as f:
    js = f.read()

students_start = js.find("export const STUDENTS = [")
json_str = js[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

students = json.loads(json_str)

# Simulate searchStudents filter for Batch 2024-25
def filter_2024_25(s):
    batch = s.get("batch", "")
    sems = [sem["sem"] for sem in s.get("semesters", [])]
    return "2024" in batch or 3 in sems or 4 in sems

batch_2024_list = [s for s in students if filter_2024_25(s)]
cse_in_batch = [s for s in batch_2024_list if s.get("branch") == "CSE"]

print(f"Total students in Batch 2024-25: {len(batch_2024_list)}")
print(f"CSE students in Batch 2024-25: {len(cse_in_batch)}")

print("\nFirst 5 CSE students in Batch 2024-25:")
for s in cse_in_batch[:5]:
    print(f"  {s['rollNo']} -> {s['name']} | CGPA: {s['cgpa']} | Sems: {[x['sem'] for x in s['semesters']]} | Sem 3 Subs: {len(s['semesterSubjects'].get('3', []))} | Sem 4 Subs: {len(s['semesterSubjects'].get('4', []))}")
