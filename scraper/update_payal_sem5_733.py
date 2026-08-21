import json
import re

data_js_path = r"E:\BU_RESULT_WEBSITE\lib\data.js"

with open(data_js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

students_start = js_content.find("export const STUDENTS = [")
students_body = js_content[students_start + len("export const STUDENTS = ["):js_content.rfind("];")]

student_chunks = re.findall(r'(\{\s*"rollNo":\s*"\d+".*?\n  \}(?=,\s*\{|\s*$))', students_body, re.DOTALL)
all_students = []

# Updated Sem 5 subjects for Payal Jha to reflect 7.33 SGPA
sem5_cse_payal_733 = [
    {
        "code": "CSE-501",
        "name": "COMPILER DESIGN",
        "internalStr": "Int: 38 / 50",
        "externalStr": "Ext: 68 / 100",
        "totalStr": "Tot: 106 / 150",
        "grade": "B+",
        "credit": 3
    },
    {
        "code": "CSE-502",
        "name": "COMPUTER GRAPHICS",
        "internalStr": "Int: 40 / 50",
        "externalStr": "Ext: 72 / 100",
        "totalStr": "Tot: 112 / 150",
        "grade": "A",
        "credit": 3
    },
    {
        "code": "CSE-503",
        "name": "DATABASE MANAGEMENT SYSTEM",
        "internalStr": "Int: 39 / 50",
        "externalStr": "Ext: 70 / 100",
        "totalStr": "Tot: 109 / 150",
        "grade": "B+",
        "credit": 3
    },
    {
        "code": "CSE-504",
        "name": "WEB TECHNOLOGY",
        "internalStr": "Int: 41 / 50",
        "externalStr": "Ext: 74 / 100",
        "totalStr": "Tot: 115 / 150",
        "grade": "A",
        "credit": 3
    },
    {
        "code": "CSE-505",
        "name": "COMPILER DESIGN LAB",
        "internalStr": "Int: 20 / 25",
        "externalStr": "Ext: 41 / 50",
        "totalStr": "Tot: 61 / 75",
        "grade": "A",
        "credit": 1
    },
    {
        "code": "CSE-506",
        "name": "COMPUTER GRAPHICS LAB",
        "internalStr": "Int: 21 / 25",
        "externalStr": "Ext: 42 / 50",
        "totalStr": "Tot: 63 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "CSE-507",
        "name": "WEB TECHNOLOGY LAB",
        "internalStr": "Int: 21 / 25",
        "externalStr": "Ext: 43 / 50",
        "totalStr": "Tot: 64 / 75",
        "grade": "A+",
        "credit": 1
    },
    {
        "code": "GP-501",
        "name": "GENERAL PROFICIENCY",
        "internalStr": "-",
        "externalStr": "-",
        "totalStr": "Tot: 42 / 50",
        "grade": "A",
        "credit": 0
    }
]

for chunk in student_chunks:
    try:
        st = json.loads(chunk)
        if st.get("rollNo") == "231351139009":
            st["semesters"] = [
                {"sem": 3, "sgpa": 7.57},
                {"sem": 4, "sgpa": 8.10},
                {"sem": 5, "sgpa": 7.33},
                {"sem": 6, "sgpa": 8.25}
            ]
            st["cgpa"] = round((7.57 + 8.10 + 7.33 + 8.25) / 4, 2)
            st["semesterSubjects"]["5"] = sem5_cse_payal_733
            print(f"Updated PAYAL JHA: Sem 5 SGPA = 7.33, CGPA = {st['cgpa']}")
        all_students.append(st)
    except Exception as e:
        print(f"Error: {e}")

branches_block = js_content[:students_start]
formatted_students = ",\n".join("  " + json.dumps(s, indent=4).replace("\n", "\n  ") for s in all_students)

final_js = branches_block + "export const STUDENTS = [\n" + formatted_students + "\n];\n"

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(final_js)

print("lib/data.js updated with exact 7.33 SGPA for PAYAL JHA in Semester 5!")
