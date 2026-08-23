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
    # Fallback to general cgpa for students without sem 5/6
    return s.get('cgpa', 0)

# Sort all students by Sem V + VI combined average
sorted_all = sorted(students, key=get_sem56_avg, reverse=True)

print("=== TOP 15 OVERALL LEADERBOARD (SEM V + SEM VI COMBINED) ===")
for rank, s in enumerate(sorted_all[:15], 1):
    avg56 = get_sem56_avg(s)
    sems = [(x['sem'], x['sgpa']) for x in s.get('semesters', [])]
    print(f"#{rank:02d} | {s['name']:<28} | Roll: {s['rollNo']} | Branch: {s['branch']:<4} | Sem 5+6 Avg: {avg56:.2f} | Sems: {sems}")

print("\n=== TOP 10 CSE STUDENTS (SEM V + SEM VI COMBINED) ===")
cse_students = [s for s in sorted_all if s['branch'] == 'CSE']
for rank, s in enumerate(cse_students[:10], 1):
    avg56 = get_sem56_avg(s)
    sems = [(x['sem'], x['sgpa']) for x in s.get('semesters', [])]
    print(f"#{rank:02d} (CSE #{rank:02d}) | {s['name']:<28} | Roll: {s['rollNo']} | Sem 5+6 Avg: {avg56:.2f} | Sems: {sems}")
