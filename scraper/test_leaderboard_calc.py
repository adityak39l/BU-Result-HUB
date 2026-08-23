import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'E:\BU_RESULT_WEBSITE\lib\data.js', 'r', encoding='utf-8') as f:
    js = f.read()

start = js.find('export const STUDENTS = [')
jstr = js[start + len('export const STUDENTS = '):].strip().rstrip(';')
sts = json.loads(jstr)

cse_56 = [s for s in sts if s['branch'] == 'CSE' and any(sem['sem'] in [5,6] for sem in s['semesters'])]

def avg_56(s):
    sems = [x['sgpa'] for x in s['semesters'] if x['sem'] in [5,6]]
    return round(sum(sems)/len(sems), 2) if sems else 0

cse_56.sort(key=avg_56, reverse=True)

print(f"Total CSE students with Sem V or VI: {len(cse_56)}")
print('=== TOP 10 CSE LEADERBOARD FOR BATCH 2025-26 (Avg of Sem V & VI) ===')
for i, s in enumerate(cse_56[:10], 1):
    sems = [(x['sem'], x['sgpa']) for x in s['semesters']]
    name = s['name']
    roll = s['rollNo']
    avg_val = avg_56(s)
    print(f"#{i:02d} {name:<30} {roll} | Sem 5+6 Avg: {avg_val:.2f} | Sems: {sems}")
