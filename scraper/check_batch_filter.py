import json, sys
sys.stdout.reconfigure(encoding='utf-8')
with open(r'E:\BU_RESULT_WEBSITE\lib\data.js','r',encoding='utf-8') as f:
    js = f.read()
start = js.find('export const STUDENTS = [')
jstr = js[start+len('export const STUDENTS = '):].strip().rstrip(';')
sts = json.loads(jstr)
cse = [s for s in sts if s['branch']=='CSE']

print('Sample CSE batch fields:')
for s in cse[:8]:
    sems = [x['sem'] for x in s['semesters']]
    print(f"  {s['name'][:30]:30} batch={s['batch']!r} sems={sems}")

print()
has56 = [s for s in cse if any(x['sem'] in [5,6] for x in s['semesters'])]
print(f'CSE with Sem 5 or 6: {len(has56)}')

batches = set(s['batch'] for s in cse)
print(f'All CSE batch values: {batches}')

# What does the year filter see for 2025-26?
print('\nStudents that would match batch 2025-26 filter:')
count = 0
for s in cse:
    yr = '2025-26'
    match_batch = s.get('batch','') and '2025' in s.get('batch','')
    match_sems = s.get('semesters') and any(sem['sem'] in [5,6] for sem in s['semesters'])
    if match_batch or match_sems:
        sems = [x['sem'] for x in s['semesters']]
        print(f"  {s['name'][:30]:30} batch={s['batch']!r} sems={sems}")
        count += 1
print(f'Total: {count}')
