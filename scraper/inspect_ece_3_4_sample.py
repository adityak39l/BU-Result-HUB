from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

sample_3 = r"E:\result of All eie\ECE_sem_III\231361031001.html"
sample_4 = r"E:\result of All eie\ECE_sem_IV\231361031001.html"

for sem, p in [(3, sample_3), (4, sample_4)]:
    print(f"\n=== ECE SEMESTER {sem} SAMPLE ROWS ===")
    with open(p, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    for tr in soup.find_all('tr'):
        tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
        if len(tds) == 13 and tds[0] and 'NAME OF' not in tds[0]:
            print(f"Sub: {tds[0]:<45} | tds[1..12]: {tds[1:]}")
