import os
import re
from bs4 import BeautifulSoup

dirs = [r"E:\result of All eie\ME_sem_III", r"E:\result of All eie\ME_sem_IV"]

for d in dirs:
    for f in os.listdir(d):
        if f.endswith('.html'):
            p = os.path.join(d, f)
            with open(p, 'r', encoding='utf-8') as fh:
                html = fh.read()
            soup = BeautifulSoup(html, 'html.parser')
            roll = soup.find('span', id='lblRollNo')
            roll_str = roll.text.strip() if roll else f.split('.')[0]
            
            # regex for enroll no
            m = re.search(r'ENROLL(?:\s*NO\.?|\s*NUMBER)?\s*[:\s]+(BU\d+)', html, re.IGNORECASE)
            enroll = m.group(1) if m else "N/A"
            if enroll == "N/A":
                m2 = re.search(r'(BU\d{10})', html)
                enroll = m2.group(1) if m2 else "N/A"
            print(f"{roll_str} -> Enrollment: {enroll}")
            break
