"""Debug: print exact td count for every row in a CSE_sem_V file"""
import sys
from bs4 import BeautifulSoup
sys.stdout.reconfigure(encoding='utf-8')

path = r"E:\result of All eie\CSE_sem_V\231381030050_CSE_sem_V.html"
with open(path,'r',encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(),'html.parser')

for i, tr in enumerate(soup.find_all('tr')):
    tds = [td.text.strip().replace('\n',' ')[:30] for td in tr.find_all('td')]
    if len(tds) > 0:
        print(f"Row {i:03d} ({len(tds):03d} cols): {tds[0][:40]!r}")
