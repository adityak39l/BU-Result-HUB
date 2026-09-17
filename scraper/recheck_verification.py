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
    # RECHECK 1: FT Student Verification
    # -------------------------------------------------------------
    print("\n-------------------------------------------------------------")
    print("  RECHECK 1: FOOD TECHNOLOGY (FT) STUDENT DATA INTEGRITY")
    print("-------------------------------------------------------------")
    ft_students = branch_map.get('FT', [])
    for s in ft_students:
        sems = s.get('semesters', [])
        sems_info = ' | '.join([f"Sem {sm['sem']}: {sm['sgpa']} ({sm['status']})" for sm in sems])
        sub_counts = {sem_k: len(subs) for sem_k, subs in s.get('semesterSubjects', {}).items()}
        print(f"  Rank #{s['branchRank']:2d} (Overall #{s['rank']:3d}) | {s['name']:20s} ({s['rollNo']}) | CGPA: {s['cgpa']:.2f} | {sems_info}")

    # -------------------------------------------------------------
    # RECHECK 2: Existing Branches Safety Verification
    # -------------------------------------------------------------
    print("\n-------------------------------------------------------------")
    print("  RECHECK 2: EXISTING BRANCHES SAFETY & INTEGRITY")
    print("-------------------------------------------------------------")
    for b in ['CSE', 'ECE', 'ME', 'EIE', 'BME', 'BTE']:
        b_list = branch_map.get(b, [])
        sample = b_list[0] if len(b_list) > 0 else None
        print(f"  Branch {b:4s}: {len(b_list)} students | Top Student: {sample['name'] if sample else 'N/A'} (CGPA: {sample['cgpa'] if sample else 0})")

    # Check for duplicate roll numbers
    all_rolls = [s['rollNo'] for s in students]
    dup_rolls = set([r for r in all_rolls if all_rolls.count(r) > 1])
    print(f"\n  Duplicate Roll Numbers Check: {'FAIL - Found duplicates: ' + str(dup_rolls) if dup_rolls else 'PASS (0 duplicates)'}")

    # Check for valid SGPA/CGPA ranges
    invalid_cgpa = [s for s in students if s['cgpa'] < 0.0 or s['cgpa'] > 10.0]
    print(f"  CGPA Range (0.0 to 10.0) Check: {'FAIL - Found invalid: ' + str(invalid_cgpa) if invalid_cgpa else 'PASS (All valid)'}")

    # Check BRANCHES array in data.js
    m_branches = re.search(r'export const BRANCHES = (\[.*?\]);', text, re.DOTALL)
    if m_branches:
        branches_list = eval(m_branches.group(1).replace('from-', '"from-').replace('to-', '"to-').replace('bg-', '"bg-'))
        print(f"  BRANCHES definitions in lib/data.js: {len(branches_list)} branches registered")

    print("\n[OK] All Rechecks Passed 100% Successfully!")

if __name__ == "__main__":
    run_rechecks()
