import requests
from bs4 import BeautifulSoup
import urllib3
urllib3.disable_warnings()

def check_one(portal_type, sess, course, roll):
    s = requests.Session()
    s.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    
    if portal_type == 'curr':
        url = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"
        r1 = s.get(url, verify=False, timeout=15)
        sp1 = BeautifulSoup(r1.text, 'html.parser')
        d = {
            '__VIEWSTATE': sp1.find('input', id='__VIEWSTATE')['value'],
            '__VIEWSTATEGENERATOR': sp1.find('input', id='__VIEWSTATEGENERATOR')['value'],
            '__EVENTVALIDATION': sp1.find('input', id='__EVENTVALIDATION')['value'],
            'ddlCourse': course,
            'txtUniqueID': roll,
            'btnGetResult': 'View Result'
        }
        r2 = s.post(url, data=d, verify=False, timeout=15)
        sp2 = BeautifulSoup(r2.text, 'html.parser')
        name = sp2.find('span', id='lblCandidateName')
        return name.text.strip() if name else None, r2.text
    else:
        url = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"
        r1 = s.get(url, verify=False, timeout=15)
        sp1 = BeautifulSoup(r1.text, 'html.parser')
        d1 = {
            '__VIEWSTATE': sp1.find('input', id='__VIEWSTATE')['value'],
            '__VIEWSTATEGENERATOR': sp1.find('input', id='__VIEWSTATEGENERATOR')['value'],
            '__EVENTVALIDATION': sp1.find('input', id='__EVENTVALIDATION')['value'],
            '__EVENTTARGET': 'ddlSession',
            'ddlSession': sess
        }
        r2 = s.post(url, data=d1, verify=False, timeout=15)
        sp2 = BeautifulSoup(r2.text, 'html.parser')
        d2 = {
            '__VIEWSTATE': sp2.find('input', id='__VIEWSTATE')['value'],
            '__VIEWSTATEGENERATOR': sp2.find('input', id='__VIEWSTATEGENERATOR')['value'],
            '__EVENTVALIDATION': sp2.find('input', id='__EVENTVALIDATION')['value'],
            'ddlSession': sess,
            'ddlCourse': course,
            'txtUniqueID': roll,
            'ddlResultType': '',
            'btnGetResult': 'View Result'
        }
        r3 = s.post(url, data=d2, verify=False, timeout=15)
        sp3 = BeautifulSoup(r3.text, 'html.parser')
        name = sp3.find('span', id='lblCandidateName')
        return name.text.strip() if name else None, r3.text

# Let's test the 2 rolls on the main likely courses:
# 1030205 (CSE 5), 1030206 (CSE 6), 1030203 (CSE 3), 1030204 (CSE 4)
# 1028205 (BME 5), 1028206 (BME 6), 1028203 (BME 3), 1028204 (BME 4)
# 1139205 (EIE 5), 1139206 (EIE 6), 1139203 (EIE 3), 1139204 (EIE 4)

test_targets = [
    ("curr", None, "1030205", "CSE Sem 5 (Current)"),
    ("curr", None, "1030206", "CSE Sem 6 (Current)"),
    ("curr", None, "1028205", "BME Sem 5 (Current)"),
    ("curr", None, "1028206", "BME Sem 6 (Current)"),
    ("curr", None, "1139205", "EIE Sem 5 (Current)"),
    ("curr", None, "1139206", "EIE Sem 6 (Current)"),
    ("old", "2024-25", "1030203", "CSE Sem 3 (2024-25)"),
    ("old", "2024-25", "1030204", "CSE Sem 4 (2024-25)"),
    ("old", "2024-25", "1028203", "BME Sem 3 (2024-25)"),
    ("old", "2024-25", "1028204", "BME Sem 4 (2024-25)"),
    ("old", "2024-25", "1139203", "EIE Sem 3 (2024-25)"),
    ("old", "2024-25", "1139204", "EIE Sem 4 (2024-25)"),
    ("old", "2023-24", "1030203", "CSE Sem 3 (2023-24)"),
    ("old", "2023-24", "1030204", "CSE Sem 4 (2023-24)"),
    ("old", "2023-24", "1028203", "BME Sem 3 (2023-24)"),
    ("old", "2023-24", "1028204", "BME Sem 4 (2023-24)"),
    ("old", "2023-24", "1139203", "EIE Sem 3 (2023-24)"),
    ("old", "2023-24", "1139204", "EIE Sem 4 (2023-24)"),
]

for roll in ["231371028012", "231351139009"]:
    print(f"\n================ Checking Roll {roll} ================")
    for p_type, sess, course, desc in test_targets:
        try:
            name, html = check_one(p_type, sess, course, roll)
            if name:
                print(f"===> [FOUND SUCCESS] {roll} -> Name: {name} in {desc}")
                with open(f"E:\\result of All eie\\FOUND_{roll}_{course}_{sess or 'curr'}.html", "w", encoding="utf-8") as f:
                    f.write(html)
            else:
                print(f"     No match: {desc}")
        except Exception as e:
            print(f"     Error on {desc}: {e}")
