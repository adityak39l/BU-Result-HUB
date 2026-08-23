import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'E:\BU_RESULT_WEBSITE\lib\data.js', 'r', encoding='utf-8') as f:
    js = f.read()

start = js.find('export const STUDENTS = [')
jstr = js[start + len('export const STUDENTS = '):].strip().rstrip(';')
students = json.loads(jstr)

def get_sem56_avg(s):
    sems56 = [x['sgpa'] for x in s.get('semesters', []) if x['sem'] in [5, 6]]
    if sems56:
        return round(sum(sems56) / len(sems56), 2)
    return s.get('cgpa', 0)

branches = ['CSE', 'EIE', 'BME', 'ME']

print("=== ALL BRANCHES TOPPERS & RANKINGS (SEM V + VI COMBINED) ===")
for b in branches:
    b_students = [s for s in students if s['branch'] == b]
    b_students.sort(key=get_sem56_avg, reverse=True)
    print(f"\n📁 Department: {b} (Total {len(b_students)} students)")
    for i, s in enumerate(b_students[:5], 1):
        avg56 = get_sem56_avg(s)
        sems = [(x['sem'], x['sgpa']) for x in s.get('semesters', [])]
        print(f"  #{i:02d} {s['name']:<28} | Roll: {s['rollNo']} | Sem 5+6 Avg: {avg56:.2f} | Sems: {sems}")
