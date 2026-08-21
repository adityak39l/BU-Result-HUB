import requests
from bs4 import BeautifulSoup
import urllib3
import re

urllib3.disable_warnings()

s = requests.Session()
s.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

url = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

for roll in ["231371028012", "231351139009"]:
    for code in ["1030205", "1030206", "1028205", "1028206", "1139205", "1139206"]:
        r_page = s.get(url, verify=False, timeout=10)
        p_soup = BeautifulSoup(r_page.text, 'html.parser')
        data = {
            '__VIEWSTATE': p_soup.find('input', id='__VIEWSTATE')['value'] if p_soup.find('input', id='__VIEWSTATE') else '',
            '__VIEWSTATEGENERATOR': p_soup.find('input', id='__VIEWSTATEGENERATOR')['value'] if p_soup.find('input', id='__VIEWSTATEGENERATOR') else '',
            '__EVENTVALIDATION': p_soup.find('input', id='__EVENTVALIDATION')['value'] if p_soup.find('input', id='__EVENTVALIDATION') else '',
            'ddlCourse': code,
            'txtUniqueID': roll,
            'btnGetResult': 'View Result'
        }
        res = s.post(url, data=data, verify=False, timeout=10)
        soup = BeautifulSoup(res.text, 'html.parser')
        name_tag = soup.find('span', id='lblCandidateName')
        print(f"Roll: {roll} | Course: {code} | Status: {res.status_code} | Name Tag: {name_tag.text.strip() if name_tag else 'NONE'}")
        # Look for any text inside tables or error labels
        err_tag = soup.find('span', id=re.compile(r'lbl(Error|Msg|Message)', re.I))
        if err_tag:
            print(f"   Error tag: {err_tag.text.strip()}")
