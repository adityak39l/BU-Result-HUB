import os
import glob
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

sample_roll = "231381030001"

dirs = [
    (3, r"E:\result of All eie\CSE_sem_III", f"{sample_roll}_CSE_sem_III.html"),
    (4, r"E:\result of All eie\CSE_sem_IV", f"{sample_roll}_CSE_sem_IV.html"),
    (5, r"E:\result of All eie\CSE_sem_V", f"{sample_roll}_CSE_sem_V.html"),
    (6, r"E:\result of All eie\CSE_sem_VI", f"{sample_roll}_CSE_sem_VI.html"),
]

for sem, d, filename in dirs:
    path = os.path.join(d, filename)
    print(f"\n=======================================================")
    print(f"SEMESTER {sem} HTML INSPECTION: {path}")
    print(f"File exists: {os.path.exists(path)}")
    print(f"=======================================================")
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    print(f"lblCandidateName: {soup.find('span', id='lblCandidateName')}")
    print(f"lblRollNo: {soup.find('span', id='lblRollNo')}")
    print(f"lblCourseName: {soup.find('span', id='lblCourseName')}")
    print(f"lblSession: {soup.find('span', id='lblSession')}")
    
    table = soup.find('table', id=lambda x: x and 'grd' in x.lower()) or soup.find('table', {'class': lambda x: x and 'grid' in x.lower()}) or soup.find_all('table')[-1]
    
    print("\nTable Rows in HTML:")
    for tr in soup.find_all('tr'):
        cells = [c.get_text(strip=True) for c in tr.find_all(['td', 'th'])]
        if len(cells) >= 4:
            print(" | ".join(cells))
