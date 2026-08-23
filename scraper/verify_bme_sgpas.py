import os
import re
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

DIR_SEM_III = r"E:\result of All eie\BME_SEM_III"
DIR_SEM_IV = r"E:\result of All eie\BME_SEM_IV"

def get_sgpa_from_html(soup, html):
    for tr in soup.find_all('tr'):
        txt = tr.get_text(separator=' | ', strip=True)
        m = re.search(r'SGPA\s*\|\s*([0-9.]+)', txt)
        if m:
            return float(m.group(1))
    m2 = re.search(r'SGPA[^\d]*([0-9]+\.[0-9]+)', html)
    if m2:
        return float(m2.group(1))
    return 0.0

print("=== BME SEM III SGPAs ===")
for f in sorted(os.listdir(DIR_SEM_III)):
    if f.endswith('.html'):
        p = os.path.join(DIR_SEM_III, f)
        with open(p, 'r', encoding='utf-8') as fl: html = fl.read()
        soup = BeautifulSoup(html, 'html.parser')
        name = soup.find('span', id='lblCandidateName').text.strip() if soup.find('span', id='lblCandidateName') else 'N/A'
        sgpa = get_sgpa_from_html(soup, html)
        print(f"Roll: {f.replace('.html','')} | Name: {name:<25} | Sem III SGPA: {sgpa:.2f}")

print("\n=== BME SEM IV SGPAs ===")
for f in sorted(os.listdir(DIR_SEM_IV)):
    if f.endswith('.html'):
        p = os.path.join(DIR_SEM_IV, f)
        with open(p, 'r', encoding='utf-8') as fl: html = fl.read()
        soup = BeautifulSoup(html, 'html.parser')
        name = soup.find('span', id='lblCandidateName').text.strip() if soup.find('span', id='lblCandidateName') else 'N/A'
        sgpa = get_sgpa_from_html(soup, html)
        print(f"Roll: {f.replace('.html','')} | Name: {name:<25} | Sem IV SGPA: {sgpa:.2f}")
