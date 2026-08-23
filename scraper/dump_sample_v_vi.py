import os
from bs4 import BeautifulSoup
import sys
sys.stdout.reconfigure(encoding='utf-8')

# Dump raw table rows for 2 sample files to verify column mapping
samples = [
    (5, r"E:\result of All eie\CSE_sem_V\231381030050_CSE_sem_V.html"),
    (6, r"E:\result of All eie\CSE_sem_VI\231381030050_CSE_sem_VI.html"),
    (5, r"E:\result of All eie\CSE_sem_V\231381030001_CSE_sem_V.html"),
    (6, r"E:\result of All eie\CSE_sem_VI\231381030001_CSE_sem_VI.html"),
]

for sem, path in samples:
    print(f"\n{'='*70}")
    print(f"SEM {sem}: {os.path.basename(path)}")
    print(f"{'='*70}")
    with open(path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    name = soup.find('span', id='lblCandidateName')
    roll = soup.find('span', id='lblRollNo')
    sgpa_text = ''
    for span in soup.find_all('span'):
        if 'SGPA' in span.text:
            sgpa_text = span.text.strip()
            break
    print(f"Name: {name.text if name else '?'} | Roll: {roll.text if roll else '?'}")
    print(f"SGPA hint: {sgpa_text[:80]}")
    print()
    
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n',' ').replace('\r','') for td in tr.find_all('td')]
        if len(tds) >= 6:
            for i, t in enumerate(tds):
                print(f"  [{i:02d}] {t[:40]}")
            print(f"  --- ({len(tds)} cols)")
