import os
from bs4 import BeautifulSoup

def inspect_sample(path):
    print(f"\n================ Inspecting {path} ================")
    with open(path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    print("Name:", soup.find('span', id='lblCandidateName').text.strip() if soup.find('span', id='lblCandidateName') else 'N/A')
    print("Roll:", soup.find('span', id='lblRollNo').text.strip() if soup.find('span', id='lblRollNo') else 'N/A')
    print("Father:", soup.find('span', id='lblFatherName').text.strip() if soup.find('span', id='lblFatherName') else 'N/A')
    print("Enroll:", soup.find('span', id='lblEnrollmentNo').text.strip() if soup.find('span', id='lblEnrollmentNo') else 'N/A')
    print("Course:", soup.find('span', id='lblCourseName').text.strip() if soup.find('span', id='lblCourseName') else 'N/A')
    
    # Check tables
    tables = soup.find_all('table')
    print(f"Total tables: {len(tables)}")
    for idx, t in enumerate(tables):
        rows = t.find_all('tr')
        if len(rows) > 1:
            print(f"\n--- Table {idx} ({len(rows)} rows) ---")
            for r in rows[:6]:
                cols = [c.text.strip() for c in r.find_all(['th', 'td'])]
                print("  ", cols)

inspect_sample(r"E:\result of All eie\ME_sem_III\231391034002.html")
inspect_sample(r"E:\result of All eie\ME_sem_IV\231391034002.html")
