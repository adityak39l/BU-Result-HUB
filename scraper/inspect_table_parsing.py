import os
import glob
import re
from bs4 import BeautifulSoup
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Let's inspect 5 sample files from CSE Sem V and VI, and EIE Sem III and IV
sample_files = [
    r"E:\result of All eie\CSE_sem_V\231381030001_CSE_sem_V.html",
    r"E:\result of All eie\CSE_sem_VI\231381030001_CSE_sem_VI.html",
    r"E:\result of All eie\FOUND_231371028012_1030203_2024-25.html",
    r"E:\result of All eie\FOUND_231371028012_1030204_2024-25.html",
    r"E:\result of All eie\FOUND_231351139009_1030203_2024-25.html",
    r"E:\result of All eie\FOUND_231351139009_1030204_2024-25.html",
    r"E:\result of All eie\EIE_sem_III\231351139001_EIE_sem_III.html",
    r"E:\result of All eie\EIE_sem_IV\231351139001_EIE_sem_IV.html",
]

for p in sample_files:
    if not os.path.exists(p):
        continue
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    roll = soup.find('span', id='lblRollNo')
    name = soup.find('span', id='lblCandidateName')
    father = soup.find('span', id='lblFatherName')
    course = soup.find('span', id='lblCourseName')
    
    print(f"\n=======================================================")
    print(f"FILE: {os.path.basename(p)}")
    print(f"Roll: {roll.text.strip() if roll else 'N/A'} | Name: {name.text.strip() if name else 'N/A'}")
    print(f"Father: {father.text.strip() if father else 'N/A'} | Course: {course.text.strip() if course else 'N/A'}")
    
    # Let's inspect all text containing SGPA / CGPA / Total
    full_text = soup.get_text()
    sgpa_all = re.findall(r'(SGPA|CGPA|Semester Grade|Credit Max|Total|Result)[\s:]*([0-9A-Za-z.+]+)', full_text, re.I)
    print(f"Summary metrics in text: {sgpa_all}")
    
    # Print subject rows
    print("Subject rows in table:")
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        if len(tds) >= 6:
            first_cell = tds[0]
            if not any(k in first_cell for k in ['NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'INSTITUTE', 'Theory/Lab', 'Pr./Disst']):
                print(f"  Row: {tds}")
