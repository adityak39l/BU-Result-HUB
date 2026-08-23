from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

sample_v = r"E:\result of All eie\BME_sem_V\231371028003_BME_sem_V.html"
with open(sample_v, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
print("=== SEM V SAMPLE ROWS ===")
for tr in soup.find_all('tr'):
    tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
    if len(tds) == 13 and tds[0] and 'NAME OF' not in tds[0]:
        print(f"Sub: {tds[0]:<40} | tds[1..12]: {tds[1:]}")
