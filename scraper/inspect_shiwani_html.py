import os
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

roll = "231381030050"
dirs = [
    (3, r"E:\result of All eie\CSE_sem_III", f"{roll}_CSE_sem_III.html"),
    (4, r"E:\result of All eie\CSE_sem_IV", f"{roll}_CSE_sem_IV.html"),
    (5, r"E:\result of All eie\CSE_sem_V", f"{roll}_CSE_sem_V.html"),
    (6, r"E:\result of All eie\CSE_sem_VI", f"{roll}_CSE_sem_VI.html"),
]

for sem, d, filename in dirs:
    path = os.path.join(d, filename)
    print(f"\n=======================================================")
    print(f"SHIWANI DEVI ({roll}) SEMESTER {sem} RAW HTML: {path}")
    print(f"Exists: {os.path.exists(path)}")
    print(f"=======================================================")
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    print(f"CandidateName: {soup.find('span', id='lblCandidateName')}")
    print(f"CourseName: {soup.find('span', id='lblCourseName')}")
    
    for tr in soup.find_all('tr'):
        cells = [c.get_text(strip=True) for c in tr.find_all(['td', 'th'])]
        if len(cells) >= 4:
            print(" | ".join(cells))
