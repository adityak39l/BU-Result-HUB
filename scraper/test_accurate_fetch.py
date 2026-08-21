import os
import time
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

url = 'https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded'
}

def fetch_result(roll_str, sem_code, retries=3):
    for attempt in range(retries):
        try:
            req_init = urllib.request.Request(url, headers={'User-Agent': headers['User-Agent']})
            html_init = urllib.request.urlopen(req_init, timeout=15).read().decode('utf-8')
            soup_init = BeautifulSoup(html_init, 'html.parser')

            viewstate = soup_init.find('input', {'name': '__VIEWSTATE'})['value']
            eventval = soup_init.find('input', {'name': '__EVENTVALIDATION'})['value']
            gen_tag = soup_init.find('input', {'name': '__VIEWSTATEGENERATOR'})
            generator = gen_tag['value'] if gen_tag else ''

            form_data = {
                '__VIEWSTATE': viewstate,
                '__VIEWSTATEGENERATOR': generator,
                '__EVENTVALIDATION': eventval,
                'ddlCourse': sem_code,
                'ddlResultType': '',
                'txtUniqueID': roll_str,
                'btnGetResult': 'View Result'
            }

            data_encoded = urllib.parse.urlencode(form_data).encode('utf-8')
            req_post = urllib.request.Request(url, data=data_encoded, headers=headers)
            res_html = urllib.request.urlopen(req_post, timeout=15).read().decode('utf-8')
            
            soup_r = BeautifulSoup(res_html, 'html.parser')
            name_tag = soup_r.find('span', id='lblCandidateName')
            if name_tag and name_tag.text.strip():
                return res_html, name_tag.text.strip()
            
            # Check if there is an error message
            err_tag = soup_r.find('span', id='lblError')
            err_msg = err_tag.text.strip() if err_tag else "No candidate name"
            return None, err_msg
        except Exception as e:
            if attempt == retries - 1:
                return None, str(e)
            time.sleep(1)
    return None, "Failed retries"

# Let's test a batch of rolls
print("Testing roll 1 to 20 for Sem V:")
for r in range(231381030001, 231381030020):
    html, res = fetch_result(str(r), '1030205')
    print(f"  {r}: {res}")
