import os
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

fpath = r"E:\result of All eie\CSE_sem_V\231381030016_CSE_sem_V.html"
with open(fpath, 'r', encoding='utf-8') as f:
    html = f.read()
soup = BeautifulSoup(html, 'html.parser')

print("Page title:", soup.title.text if soup.title else "No title")
error_el = soup.find('span', id='lblError')
if error_el:
    print("lblError:", error_el.text)

# Check if marksheet table exists
tables = soup.find_all('table')
print(f"Total tables: {len(tables)}")
for i, t in enumerate(tables):
    txt = t.text.strip()[:100].replace('\n', ' ')
    print(f"Table {i}: {txt}")
