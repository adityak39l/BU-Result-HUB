import os
import re
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DIR_V = r"E:\result of All eie\BME_sem_V"
DIR_VI = r"E:\result of All eie\BME_sem_VI"

print("=== INSPECTING BME SEM V FILES ===")
for f in os.listdir(DIR_V):
    if f.endswith('.html'):
        p = os.path.join(DIR_V, f)
        with open(p, 'r', encoding='utf-8') as fl: html = fl.read()
        soup = BeautifulSoup(html, 'html.parser')
        name = soup.find('span', id='lblCandidateName').text.strip() if soup.find('span', id='lblCandidateName') else 'N/A'
        
        # Extract rows
        subs = []
        for tr in soup.find_all('tr'):
            tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
            if len(tds) == 13 and tds[0] and 'NAME OF' not in tds[0]:
                subs.append(tds[0])
        print(f"File: {f} | Name: {name:<25} | Subject count: {len(subs)}")

print("\n=== INSPECTING BME SEM VI FILES ===")
for f in os.listdir(DIR_VI):
    if f.endswith('.html'):
        p = os.path.join(DIR_VI, f)
        with open(p, 'r', encoding='utf-8') as fl: html = fl.read()
        soup = BeautifulSoup(html, 'html.parser')
        name = soup.find('span', id='lblCandidateName').text.strip() if soup.find('span', id='lblCandidateName') else 'N/A'
        
        subs = []
        for tr in soup.find_all('tr'):
            tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
            if len(tds) == 13 and tds[0] and 'NAME OF' not in tds[0]:
                subs.append(tds[0])
        print(f"File: {f} | Name: {name:<25} | Subject count: {len(subs)}")
