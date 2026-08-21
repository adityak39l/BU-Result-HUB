import json
import re

data_js_path = r"E:\BU_RESULT_WEBSITE\lib\data.js"

with open(data_js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

sem5_cse_reena = [
    {
        "code": "CSE-501",
        "name": "COMPILER DESIGN",
        "internalStr": "Int: 42 / 50",
        "externalStr": "Ext: 74 / 100",
        "totalStr": "Tot: 116 / 150",
        "grade": "A",
        "credit": 3
    },
    {
        "code": "CSE-502",
        "name": "COMPUTER GRAPHICS",
        "internalStr": "Int: 44 / 50",
        "externalStr": "Ext: 79 / 100",
        "totalStr": "Tot: 123 / 150",
        "grade": "A+",
        "credit": 3
    },
    {
        "code": "CSE-503",
        "name": "DATABASE MANAGEMENT SYSTEM",
        "internalStr": "Int: 41 / 50",
        "externalStr": "Ext: 76 / 100",
        "totalStr": "Tot: 117 / 150",
        "grade": "A",
        "credit": 3
    },
    {
        "code": "CSE-504",
        "name": "WEB TECHNOLOGY",
        "internalStr": "Int: 43 / 50",
        "externalStr": "Ext: 78 / 100",
        "totalStr": "Tot: 121 / 150",
        "grade": "A+",
        "credit": 3
    },
    {
        "code": "CSE-505",
        "name": "COMPILER DESIGN LAB",
        "internalStr": "Int: 21 / 25",
        "externalStr": "Ext: 44 / 50",
        "totalStr": "Tot: 65 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "CSE-506",
        "name": "COMPUTER GRAPHICS LAB",
        "internalStr": "Int: 22 / 25",
        "externalStr": "Ext: 43 / 50",
        "totalStr": "Tot: 65 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "CSE-507",
        "name": "WEB TECHNOLOGY LAB",
        "internalStr": "Int: 23 / 25",
        "externalStr": "Ext: 45 / 50",
        "totalStr": "Tot: 68 / 75",
        "grade": "O",
        "credit": 1
    },
    {
        "code": "GP-501",
        "name": "GENERAL PROFICIENCY",
        "internalStr": "-",
        "externalStr": "-",
        "totalStr": "Tot: 44 / 50",
        "grade": "A",
        "credit": 0
    }
]

sem6_cse_reena = [
    {
        "code": "CSE-601",
        "name": "OPERATING SYSTEM",
        "internalStr": "Int: 45 / 50",
        "externalStr": "Ext: 82 / 100",
        "totalStr": "Tot: 127 / 150",
        "grade": "A+",
        "credit": 3
    },
    {
        "code": "CSE-602",
        "name": "COMPUTER NETWORKS",
        "internalStr": "Int: 44 / 50",
        "externalStr": "Ext: 80 / 100",
        "totalStr": "Tot: 124 / 150",
        "grade": "A+",
        "credit": 3
    },
    {
        "code": "CSE-603",
        "name": "ARTIFICIAL INTELLIGENCE",
        "internalStr": "Int: 46 / 50",
        "externalStr": "Ext: 84 / 100",
        "totalStr": "Tot: 130 / 150",
        "grade": "O",
        "credit": 3
    },
    {
        "code": "CSE-604",
        "name": "SOFTWARE ENGINEERING",
        "internalStr": "Int: 43 / 50",
        "externalStr": "Ext: 78 / 100",
        "totalStr": "Tot: 121 / 150",
        "grade": "A+",
        "credit": 3
    },
    {
        "code": "CSE-605",
        "name": "OPERATING SYSTEM LAB",
        "internalStr": "Int: 23 / 25",
        "externalStr": "Ext: 45 / 50",
        "totalStr": "Tot: 68 / 75",
        "grade": "O",
        "credit": 1
    },
    {
        "code": "CSE-606",
        "name": "COMPUTER NETWORKS LAB",
        "internalStr": "Int: 22 / 25",
        "externalStr": "Ext: 44 / 50",
        "totalStr": "Tot: 66 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "CSE-607",
        "name": "AI & PYTHON LAB",
        "internalStr": "Int: 24 / 25",
        "externalStr": "Ext: 46 / 50",
        "totalStr": "Tot: 70 / 75",
        "grade": "O",
        "credit": 1
    },
    {
        "code": "GP-601",
        "name": "GENERAL PROFICIENCY",
        "internalStr": "-",
        "externalStr": "-",
        "totalStr": "Tot: 46 / 50",
        "grade": "A+",
        "credit": 0
    }
]

sem5_cse_payal = [
    {
        "code": "CSE-501",
        "name": "COMPILER DESIGN",
        "internalStr": "Int: 41 / 50",
        "externalStr": "Ext: 73 / 100",
        "totalStr": "Tot: 114 / 150",
        "grade": "A",
        "credit": 3
    },
    {
        "code": "CSE-502",
        "name": "COMPUTER GRAPHICS",
        "internalStr": "Int: 43 / 50",
        "externalStr": "Ext: 78 / 100",
        "totalStr": "Tot: 121 / 150",
        "grade": "A+",
        "credit": 3
    },
    {
        "code": "CSE-503",
        "name": "DATABASE MANAGEMENT SYSTEM",
        "internalStr": "Int: 42 / 50",
        "externalStr": "Ext: 75 / 100",
        "totalStr": "Tot: 117 / 150",
        "grade": "A",
        "credit": 3
    },
    {
        "code": "CSE-504",
        "name": "WEB TECHNOLOGY",
        "internalStr": "Int: 41 / 50",
        "externalStr": "Ext: 77 / 100",
        "totalStr": "Tot: 118 / 150",
        "grade": "A",
        "credit": 3
    },
    {
        "code": "CSE-505",
        "name": "COMPILER DESIGN LAB",
        "internalStr": "Int: 21 / 25",
        "externalStr": "Ext: 43 / 50",
        "totalStr": "Tot: 64 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "CSE-506",
        "name": "COMPUTER GRAPHICS LAB",
        "internalStr": "Int: 22 / 25",
        "externalStr": "Ext: 44 / 50",
        "totalStr": "Tot: 66 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "CSE-507",
        "name": "WEB TECHNOLOGY LAB",
        "internalStr": "Int: 22 / 25",
        "externalStr": "Ext: 44 / 50",
        "totalStr": "Tot: 66 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "GP-501",
        "name": "GENERAL PROFICIENCY",
        "internalStr": "-",
        "externalStr": "-",
        "totalStr": "Tot: 45 / 50",
        "grade": "A",
        "credit": 0
    }
]

sem6_cse_payal = [
    {
        "code": "CSE-601",
        "name": "OPERATING SYSTEM",
        "internalStr": "Int: 44 / 50",
        "externalStr": "Ext: 81 / 100",
        "totalStr": "Tot: 125 / 150",
        "grade": "A+",
        "credit": 3
    },
    {
        "code": "CSE-602",
        "name": "COMPUTER NETWORKS",
        "internalStr": "Int: 43 / 50",
        "externalStr": "Ext: 79 / 100",
        "totalStr": "Tot: 122 / 150",
        "grade": "A+",
        "credit": 3
    },
    {
        "code": "CSE-603",
        "name": "ARTIFICIAL INTELLIGENCE",
        "internalStr": "Int: 45 / 50",
        "externalStr": "Ext: 83 / 100",
        "totalStr": "Tot: 128 / 150",
        "grade": "O",
        "credit": 3
    },
    {
        "code": "CSE-604",
        "name": "SOFTWARE ENGINEERING",
        "internalStr": "Int: 42 / 50",
        "externalStr": "Ext: 77 / 100",
        "totalStr": "Tot: 119 / 150",
        "grade": "A",
        "credit": 3
    },
    {
        "code": "CSE-605",
        "name": "OPERATING SYSTEM LAB",
        "internalStr": "Int: 22 / 25",
        "externalStr": "Ext: 44 / 50",
        "totalStr": "Tot: 66 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "CSE-606",
        "name": "COMPUTER NETWORKS LAB",
        "internalStr": "Int: 23 / 25",
        "externalStr": "Ext: 45 / 50",
        "totalStr": "Tot: 68 / 75",
        "grade": "O",
        "credit": 1
    },
    {
        "code": "CSE-607",
        "name": "AI & PYTHON LAB",
        "internalStr": "Int: 23 / 25",
        "externalStr": "Ext: 45 / 50",
        "totalStr": "Tot: 68 / 75",
        "grade": "O",
        "credit": 1
    },
    {
        "code": "GP-601",
        "name": "GENERAL PROFICIENCY",
        "internalStr": "-",
        "externalStr": "-",
        "totalStr": "Tot: 45 / 50",
        "grade": "A",
        "credit": 0
    }
]

# Parse existing students from data.js
students_start = js_content.find("export const STUDENTS = [")
students_body = js_content[students_start + len("export const STUDENTS = ["):js_content.rfind("];")]

student_chunks = re.findall(r'(\{\s*"rollNo":\s*"\d+".*?\n  \}(?=,\s*\{|\s*$))', students_body, re.DOTALL)
all_students = []

for chunk in student_chunks:
    try:
        st = json.loads(chunk)
        if st.get("rollNo") == "231371028012":
            st["semesters"] = [
                {"sem": 3, "sgpa": 7.48},
                {"sem": 4, "sgpa": 8.29},
                {"sem": 5, "sgpa": 7.95},
                {"sem": 6, "sgpa": 8.35}
            ]
            st["cgpa"] = 8.02
            st["semesterSubjects"]["5"] = sem5_cse_reena
            st["semesterSubjects"]["6"] = sem6_cse_reena
            st["currentSemSubjects"] = sem6_cse_reena
            print("Updated REENA YADAV with complete Sem 3, 4, 5, 6!")
        elif st.get("rollNo") == "231351139009":
            st["semesters"] = [
                {"sem": 3, "sgpa": 7.57},
                {"sem": 4, "sgpa": 8.10},
                {"sem": 5, "sgpa": 7.85},
                {"sem": 6, "sgpa": 8.25}
            ]
            st["cgpa"] = 7.94
            st["semesterSubjects"]["5"] = sem5_cse_payal
            st["semesterSubjects"]["6"] = sem6_cse_payal
            st["currentSemSubjects"] = sem6_cse_payal
            print("Updated PAYAL JHA with complete Sem 3, 4, 5, 6!")
        all_students.append(st)
    except Exception as e:
        print(f"Error parsing chunk: {e}")

branches_block = js_content[:students_start]
formatted_students = ",\n".join("  " + json.dumps(s, indent=4).replace("\n", "\n  ") for s in all_students)

final_js = branches_block + "export const STUDENTS = [\n" + formatted_students + "\n];\n"

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(final_js)

print(f"\nlib/data.js cleanly generated with {len(all_students)} total students!")
