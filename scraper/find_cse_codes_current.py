import requests
from bs4 import BeautifulSoup
import urllib3
import sys

urllib3.disable_warnings()
sys.stdout.reconfigure(encoding='utf-8')

urls = [
    ("Current Result Portal", "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"),
    ("Campus Result Portal", "https://exam.bujhansi.ac.in/frmViewCampusResult.aspx?cd=MwA4ADAA")
]

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

for name, url in urls:
    print(f"\n=================== {name} ({url}) ===================")
    try:
        r = s.get(url, verify=False, timeout=15)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        # Check if session dropdown exists
        session_dd = soup.find('select', id='ddlSession')
        if session_dd:
            print("ddlSession options:", [opt.text.strip() for opt in session_dd.find_all('option')])
        
        course_dd = soup.find('select', id='ddlCourse')
        if course_dd:
            print("CSE related courses in ddlCourse:")
            for opt in course_dd.find_all('option'):
                txt = opt.text.strip()
                val = opt.get('value', '')
                if 'computer' in txt.lower() or '10302' in val:
                    print(f"  Code: {val:<12} | Name: {txt}")
    except Exception as e:
        print("Error:", e)
