import re
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

fpath = r"E:\result of All eie\CSE_sem_VI\231381030001_CSE_sem_VI.html"
with open(fpath, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

print("--- ALL TABLE ROWS (Sem VI) ---")
for idx, tr in enumerate(soup.find_all('tr')):
    tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
    print(f"Row {idx}: {tds}")
