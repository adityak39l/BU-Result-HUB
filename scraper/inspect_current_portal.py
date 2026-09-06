import requests
from bs4 import BeautifulSoup
import urllib3
import os
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

print("1. Fetching initial page from:", BASE_URL)
r = s.get(BASE_URL, verify=False, timeout=15)
soup = BeautifulSoup(r.text, 'html.parser')

print("Page Title:", soup.title.string if soup.title else "No Title")

# Find form fields and dropdowns
for select in soup.find_all('select'):
    print(f"\nSelect element: id={select.get('id')} name={select.get('name')}")
    for opt in select.find_all('option'):
        val = opt.get('value', '')
        txt = opt.text.strip()
        if any(w in txt.lower() for w in ['computer', 'cse', 'b.tech', '2024', '2025', 'sem']):
            print(f"   Option: {val} -> {txt}")
        elif len(select.find_all('option')) <= 10:
            print(f"   Option: {val} -> {txt}")
