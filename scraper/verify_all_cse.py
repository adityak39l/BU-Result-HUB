import json, sys
sys.stdout.reconfigure(encoding='utf-8')
with open(r'E:\BU_RESULT_WEBSITE\lib\data.js','r',encoding='utf-8') as f:
    js = f.read()
start = js.find('export const STUDENTS = [')
jstr = js[start+len('export const STUDENTS = '):].strip().rstrip(';')
sts = json.loads(jstr)

# Verify Shiwani Devi (topper)
s = next(x for x in sts if x['rollNo']=='231381030050')
print(f"Name: {s['name']} | CGPA: {s['cgpa']} | Rank: #{s['rank']} | BranchRank: #{s['branchRank']}")
print(f"Semesters: {[(x['sem'], x['sgpa']) for x in s['semesters']]}")
for sem in [3,4,5,6]:
    subs = s['semesterSubjects'].get(str(sem), [])
    print(f"\nSem {sem}: {len(subs)} subjects")
    for sub in subs:
        name_s = sub['name'][:45]
        print(f"  {name_s:<45} | {sub['internalStr']:14} | {sub['externalStr']:14} | {sub['totalStr']:17} | Grade:{sub['grade']:3} | Cr:{sub['credit']}")

print("\n\n=== ALL CSE STUDENTS SUMMARY ===")
cse = [x for x in sts if x['branch']=='CSE']
print(f"Total CSE: {len(cse)}")
for st in cse:
    sems = [x['sem'] for x in st['semesters']]
    print(f"  #{st['rank']:03d} #{st['branchRank']:02d}CSE {st['name'][:30]:30} {st['rollNo']} CGPA:{st['cgpa']:.2f} Sems:{sems}")
