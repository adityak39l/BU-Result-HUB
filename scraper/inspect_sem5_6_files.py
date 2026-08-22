import os
import glob
from bs4 import BeautifulSoup

for d, sem_name in [(r"E:\result of All eie\CSE_sem_V", "Sem V"), (r"E:\result of All eie\CSE_sem_VI", "Sem VI")]:
    print(f"\n=== Inspecting {sem_name} ({d}) ===")
    files = glob.glob(os.path.join(d, "*.html"))
    for f in files[:5]:
        with open(f, 'r', encoding='utf-8') as fh:
            soup = BeautifulSoup(fh.read(), 'html.parser')
        roll = soup.find('span', id='lblRollNo')
        name = soup.find('span', id='lblCandidateName')
        course = soup.find('span', id='lblCourseName')
        print(f"File: {os.path.basename(f)} | Roll: {roll.text.strip() if roll else 'None'} | Name: {name.text.strip() if name else 'None'} | Course: {course.text.strip() if course else 'None'}")
