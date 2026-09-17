import os
import json
import re

def load_json(filepath):
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def main():
    print("=== MERGING FOOD TECHNOLOGY (FT) SEMESTER DATA ===")
    
    sem3_data = load_json("scraper/data/sem3/ft_sem3.json")
    sem4_data = load_json("scraper/data/sem4/ft_sem4.json")
    sem5_data = load_json("scraper/data/sem5/ft_sem5.json")
    sem6_data = load_json("scraper/data/sem6/ft_sem6.json")
    
    print(f"Loaded: Sem 3 ({len(sem3_data)}), Sem 4 ({len(sem4_data)}), Sem 5 ({len(sem5_data)}), Sem 6 ({len(sem6_data)})")
    
    # Collect all unique roll numbers
    all_rolls = sorted(list(set(
        [s['rollNo'] for s in sem3_data] +
        [s['rollNo'] for s in sem4_data] +
        [s['rollNo'] for s in sem5_data] +
        [s['rollNo'] for s in sem6_data]
    )))
    
    print(f"Total Unique FT Students: {len(all_rolls)}")
    
    # Index by rollNo
    s3_by_roll = {s['rollNo']: s for s in sem3_data}
    s4_by_roll = {s['rollNo']: s for s in sem4_data}
    s5_by_roll = {s['rollNo']: s for s in sem5_data}
    s6_by_roll = {s['rollNo']: s for s in sem6_data}
    
    combined_students = []
    
    for roll in all_rolls:
        d3 = s3_by_roll.get(roll)
        d4 = s4_by_roll.get(roll)
        d5 = s5_by_roll.get(roll)
        d6 = s6_by_roll.get(roll)
        
        # Primary info from latest available sem
        primary = d6 or d5 or d4 or d3
        
        semesters = []
        semesterSubjects = {}
        
        for sem_num, d in [(3, d3), (4, d4), (5, d5), (6, d6)]:
            if d:
                semesters.append({
                    "sem": sem_num,
                    "sgpa": d["sgpa"],
                    "status": d.get("resultStatus", "PASSED")
                })
                semesterSubjects[str(sem_num)] = d.get("subjects", [])
                
        # Calculate overall CGPA (average of all available semester SGPAs)
        if len(semesters) > 0:
            cgpa = round(sum(s['sgpa'] for s in semesters) / len(semesters), 2)
        else:
            cgpa = primary.get("sgpa", 7.0)
            
        # Latest available sem subjects
        latest_subs = (d6 and d6.get("subjects")) or (d5 and d5.get("subjects")) or (d4 and d4.get("subjects")) or (d3 and d3.get("subjects")) or []
        
        student_obj = {
            "rollNo": primary["rollNo"],
            "enrollNo": primary.get("enrollNo", ""),
            "name": primary["name"],
            "fatherName": primary.get("fatherName", ""),
            "motherName": primary.get("motherName", ""),
            "branch": "FT",
            "batch": "2023-2027",
            "cgpa": cgpa,
            "semesters": semesters,
            "semesterSubjects": semesterSubjects,
            "currentSemSubjects": latest_subs
        }
        
        combined_students.append(student_obj)
        
    # Sort FT students by CGPA descending for branchRank
    # For branchRank, calculate Sem 5 & 6 combined average if available, else overall cgpa
    def get_sort_cgpa(s):
        s56 = [sem['sgpa'] for sem in s['semesters'] if sem['sem'] in [5, 6]]
        if len(s56) > 0:
            return sum(s56) / len(s56)
        return s['cgpa']
        
    combined_students.sort(key=get_sort_cgpa, reverse=True)
    
    for idx, s in enumerate(combined_students):
        s["branchRank"] = idx + 1
        
    # Save combined JSON
    with open("scraper/data/ft_students_combined.json", "w", encoding="utf-8") as f:
        json.dump(combined_students, f, indent=2, ensure_ascii=False)
        
    print(f"\n[OK] Saved scraper/data/ft_students_combined.json with {len(combined_students)} students.")
    
    # Print leaderboard
    print("\n--- FOOD TECHNOLOGY TOP STUDENTS ---")
    for s in combined_students:
        sems_str = ", ".join([f"Sem {sm['sem']}: {sm['sgpa']}" for sm in s['semesters']])
        print(f"Rank #{s['branchRank']}: {s['name']} ({s['rollNo']}) | CGPA: {s['cgpa']} | {sems_str}")

if __name__ == "__main__":
    main()
