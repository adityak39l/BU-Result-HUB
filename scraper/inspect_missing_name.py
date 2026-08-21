import os
import glob
from bs4 import BeautifulSoup
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

fpath = r"E:\result of All eie\CSE_sem_V\231381030016_CSE_sem_V.html"
if os.path.exists(fpath):
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    print("--- SPANS in 231381030016 ---")
    for sp in soup.find_all('span'):
        print(f"id={sp.get('id')} -> {sp.text.strip()}")
        
    print("\n--- TABLE ROWS in 231381030016 ---")
    for tr in soup.find_all('tr')[:10]:
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        print(tds)
else:
    print(f"File {fpath} does not exist.")
