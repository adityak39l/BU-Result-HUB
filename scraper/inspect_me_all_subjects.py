import os
import re
from bs4 import BeautifulSoup

dirs = [
    (r"E:\result of All eie\ME_sem_III", "Sem 3"),
    (r"E:\result of All eie\ME_sem_IV", "Sem 4"),
    (r"E:\result of All eie\ME_sem_V", "Sem 5"),
    (r"E:\result of All eie\ME_sem_VI", "Sem 6")
]

for dpath, sname in dirs:
    if not os.path.exists(dpath): continue
    print(f"\n================ Subjects in {sname} ================")
    sample_file = os.path.join(dpath, os.listdir(dpath)[0])
    with open(sample_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    for tr in soup.find_all('tr'):
        tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
        if len(tds) == 13:
            sub = tds[0].strip()
            if sub and not any(x in sub for x in ['NAME OF PAPER', 'Max.Min.', 'PRACTICAL', 'THEORY', 'Credit Max']):
                print(f"  {sub} -> Ext: {tds[2]} | Int: {tds[4]} | Tot: {tds[10]} | Cr: {tds[11]} | Gr: {tds[12]}")
