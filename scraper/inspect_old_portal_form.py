import requests
from bs4 import BeautifulSoup
import urllib3

urllib3.disable_warnings()

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

url = "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA"

r = s.get(url, verify=False)
soup = BeautifulSoup(r.text, 'html.parser')

print("Inputs on frmViewCampusResult.aspx:")
for inp in soup.find_all(['input', 'select']):
    print(f"  {inp.name} -> {inp.get('id')} / {inp.get('name')}")
    if inp.name == 'select':
        for opt in inp.find_all('option'):
            print(f"     Option: {opt.get('value')} -> {opt.text.strip()}")
