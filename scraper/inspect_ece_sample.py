from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

sample_v = r"E:\result of All eie\ECE_sem_V\231361031001.html"
with open(sample_v, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
name = soup.find('span', id='lblCandidateName')
father = soup.find('span', id='lblFatherName')
roll = soup.find('span', id='lblRollNo')
enroll = soup.find('span', id='lblEnrollmentNo')

print(f"Name: {name.text if name else 'N/A'}")
print(f"Roll: {roll.text if roll else 'N/A'}")
print(f"Father: {father.text if father else 'N/A'}")
print(f"Enroll: {enroll.text if enroll else 'N/A'}")

print("\n=== ECE SEM V TABLE ROWS ===")
for tr in soup.find_all('tr'):
    tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
    if len(tds) == 13 and tds[0] and 'NAME OF' not in tds[0]:
        print(f"Sub: {tds[0]:<45} | tds[1..12]: {tds[1:]}")
