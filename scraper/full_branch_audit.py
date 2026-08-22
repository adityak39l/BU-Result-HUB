import json
import re
import os
import glob
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DATA_JS_PATH = r"E:\BU_RESULT_WEBSITE\lib\data.js"

with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    js_content = f.read()

students_start = js_content.find("export const STUDENTS = [")
json_str = js_content[students_start + len("export const STUDENTS = "):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1].strip()

students = json.loads(json_str)
print(f"==================================================")
print(f"COMPREHENSIVE AUDIT ACROSS ALL BRANCHES & STUDENTS")
print(f"Total students in database: {len(students)}")
print(f"==================================================\n")

# Group students by branch
branches_summary = {}
for s in students:
    b = s.get("branch", "UNKNOWN")
    branches_summary[b] = branches_summary.get(b, 0) + 1

print(f"Branch-wise Student Count:")
for b, count in sorted(branches_summary.items()):
    print(f"  📌 {b}: {count} students")

print("\n--------------------------------------------------")
print("1. Checking Pass/Fail Grade Accuracy per Branch...")
print("--------------------------------------------------")

total_subjects_audited = 0
total_f_grades = 0
total_passed_grades = 0
grading_errors = []

for s in students:
    roll = s["rollNo"]
    name = s["name"]
    branch = s["branch"]
    sem_subs = s.get("semesterSubjects", {})
    
    for sem_key, subs in sem_subs.items():
        for sub in subs:
            total_subjects_audited += 1
            int_str = sub.get("internalStr", "")
            ext_str = sub.get("externalStr", "")
            tot_str = sub.get("totalStr", "")
            grade = sub.get("grade", "")
            
            ext_obt = None
            ext_max = 100
            if "Ext:" in ext_str:
                parts = ext_str.replace("Ext:", "").strip().split("/")
                if len(parts) >= 1 and parts[0].strip().isdigit():
                    ext_obt = float(parts[0].strip())
                if len(parts) >= 2 and parts[1].strip().isdigit():
                    ext_max = float(parts[1].strip())
            elif ext_str.isdigit():
                ext_obt = float(ext_str)

            int_obt = None
            int_max = 50
            if "Int:" in int_str:
                parts = int_str.replace("Int:", "").strip().split("/")
                if len(parts) >= 1 and parts[0].strip().isdigit():
                    int_obt = float(parts[0].strip())
                if len(parts) >= 2 and parts[1].strip().isdigit():
                    int_max = float(parts[1].strip())

            tot_obt = 0
            tot_max = 150
            if "Tot:" in tot_str:
                parts = tot_str.replace("Tot:", "").strip().split("/")
                if len(parts) >= 1 and parts[0].strip().replace('.','',1).isdigit():
                    tot_obt = float(parts[0].strip())
                if len(parts) >= 2 and parts[1].strip().replace('.','',1).isdigit():
                    tot_max = float(parts[1].strip())
            else:
                tot_obt = (ext_obt or 0) + (int_obt or 0)

            # Verification of Rules
            is_f = False
            if ext_max == 100 and ext_obt is not None and ext_obt < 40:
                is_f = True
            elif ext_max == 50 and ext_obt is not None and ext_obt < 20:
                is_f = True
            elif int_max == 50 and int_obt is not None and int_obt < 20:
                is_f = True
            elif tot_max > 0 and (tot_obt / tot_max * 100.0) < 40.0:
                is_f = True

            if is_f:
                total_f_grades += 1
                if grade != "F":
                    grading_errors.append(f"ERROR: {roll} ({name}) [{branch} Sem {sem_key}] Sub: {sub['name']} has Ext:{ext_obt}/{ext_max}, Int:{int_obt}/{int_max} but grade is '{grade}' instead of 'F'")
            else:
                total_passed_grades += 1
                if grade == "F":
                    grading_errors.append(f"ERROR: {roll} ({name}) [{branch} Sem {sem_key}] Sub: {sub['name']} is passing (Ext:{ext_obt}/{ext_max}, Int:{int_obt}/{int_max}) but marked 'F'")

print(f"Total Subjects Audited: {total_subjects_audited}")
print(f"Total 'F' (Fail/Back) Subject Grades: {total_f_grades}")
print(f"Total Passing Subject Grades: {total_passed_grades}")
print(f"Total Grading Rule Violations Found: {len(grading_errors)}")
for err in grading_errors[:10]:
    print(f"  ❌ {err}")

print("\n--------------------------------------------------")
print("2. Checking Student Info Integrity (Names, Ranks, CGPA)...")
print("--------------------------------------------------")

info_errors = []
for s in students:
    if not s.get("name") or s["name"].strip() == "":
        info_errors.append(f"Missing name for roll {s.get('rollNo')}")
    if not s.get("rollNo"):
        info_errors.append(f"Missing rollNo")
    if not s.get("cgpa") or s["cgpa"] <= 0:
        info_errors.append(f"Invalid CGPA for {s.get('rollNo')}")
    if not s.get("semesters") or len(s["semesters"]) == 0:
        info_errors.append(f"No semesters array for {s.get('rollNo')}")

print(f"Student Metadata Violations: {len(info_errors)}")
for err in info_errors[:10]:
    print(f"  ❌ {err}")

print("\n==================================================")
if len(grading_errors) == 0 and len(info_errors) == 0:
    print("✅ 100% PERFECT AUDIT! ALL BRANCHES ARE ACCURATE & STRICTLY COMPLIANT!")
else:
    print(f"⚠️ FOUND {len(grading_errors) + len(info_errors)} ISSUES!")
print("==================================================")
