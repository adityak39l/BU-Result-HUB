import os
import re
from bs4 import BeautifulSoup

dirs = [r"E:\result of All eie\ME_sem_III", r"E:\result of All eie\ME_sem_IV"]

for d in dirs:
    print(f"Checking {d}")
    for f in sorted(os.listdir(d)):
        if f.endswith('.html'):
            p = os.path.join(d, f)
            with open(p, 'r', encoding='utf-8') as fh:
                html = fh.read()
            soup = BeautifulSoup(html, 'html.parser')
            roll = f.split('.')[0]
            
            # look for BU enrollment
            m = re.search(r'BU\d{10}', html)
            enroll = m.group(0) if m else "N/A"
            print(f"  {roll} -> {enroll}")
    break
