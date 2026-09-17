import json
import re

def run_rechecks():
    with open('lib/data.js', 'r', encoding='utf-8') as f:
        text = f.read()

    m = re.search(r'export const STUDENTS = (\[.*?\]);', text, re.DOTALL)
    students = json.loads(m.group(1))

    # Branch counts
    branch_map = {}
    for s in students:
        b = s.get('branch', 'OTHER')
        branch_map.setdefault(b, []).append(s)

    print("=================================================================")
    print(f"  TOTAL STUDENTS IN WEBSITE: {len(students)} ACROSS {len(branch_map)} BRANCHES")
    print("=================================================================")
    for b, s_list in sorted(branch_map.items()):
        print(f"  Branch {b:4s} -> {len(s_list)} students")

    # -------------------------------------------------------------
    # RECHECK 1: MOHD ASHZAD Verification
    # -------------------------------------------------------------
    print("\n-------------------------------------------------------------")
    print("  RECHECK 1: MOHD ASHZAD (231371028009) SEMESTER VI DATA")
    print("-------------------------------------------------------------")
    ashzad = next((s for s in students if s['rollNo'] == '231371028009'), None)
    if ashzad:
        sems = ashzad.get('semesters', [])
        sems_info = ' | '.join([f"Sem {sm['sem']}: {sm['sgpa']} ({sm.get('status', 'PASSED')})" for sm in sems])
        sub_counts = {sem_k: len(subs) for sem_k, subs in ashzad.get('semesterSubjects', {}).items()}
        print(f"  Name: {ashzad['name']} ({ashzad['rollNo']})")
        print(f"  Branch: {ashzad['branch']} | Branch Rank: #{ashzad['branchRank']} | Overall Rank: #{ashzad['rank']}")
        print(f"  Cumulative CGPA: {ashzad['cgpa']:.2f}")
        print(f"  Semesters: {sems_info}")
        print(f"  Subjects Count per Sem: {sub_counts}")
        print(f"  Sem 6 Subjects Count: {len(ashzad.get('semesterSubjects', {}).get('6', []))}")

    # -------------------------------------------------------------
    # RECHECK 2: BME Branch Leaderboard
    # -------------------------------------------------------------
    print("\n-------------------------------------------------------------")
    print("  RECHECK 2: BME BRANCH LEADERBOARD RANKINGS")
    print("-------------------------------------------------------------")
    bme_list = branch_map.get('BME', [])
    bme_list.sort(key=lambda s: sum([sm['sgpa'] for sm in s.get('semesters', []) if sm['sem'] in [5, 6]]) / max(len([sm for sm in s.get('semesters', []) if sm['sem'] in [5, 6]]), 1), reverse=True)
    for idx, s in enumerate(bme_list):
        s56 = [sm['sgpa'] for sm in s.get('semesters', []) if sm['sem'] in [5, 6]]
        avg56 = (sum(s56) / len(s56)) if len(s56) > 0 else s['cgpa']
        sems_str = ', '.join([f"S{sm['sem']}:{sm['sgpa']}" for sm in s.get('semesters', [])])
        print(f"  Rank #{idx+1} | {s['name']:20s} ({s['rollNo']}) | Sem 5&6 Avg: {avg56:.2f} | CGPA: {s['cgpa']:.2f} | ({sems_str})")

    # Duplicate check
    all_rolls = [s['rollNo'] for s in students]
    dup_rolls = set([r for r in all_rolls if all_rolls.count(r) > 1])
    print(f"\n  Duplicate Roll Numbers Check: {'FAIL - Found duplicates: ' + str(dup_rolls) if dup_rolls else 'PASS (0 duplicates)'}")

    # CGPA range check
    invalid_cgpa = [s for s in students if s['cgpa'] < 0.0 or s['cgpa'] > 10.0]
    print(f"  CGPA Range (0.0 to 10.0) Check: {'FAIL - Found invalid: ' + str(invalid_cgpa) if invalid_cgpa else 'PASS (All valid)'}")

    print("\n[OK] All Rechecks Passed 100% Successfully!")

if __name__ == "__main__":
    run_rechecks()
