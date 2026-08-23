from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

sample_path = r"E:\result of All eie\BME_SEM_III\231371028003.html"
with open(sample_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
name = soup.find('span', id='lblCandidateName')
roll = soup.find('span', id='lblRollNo')
enroll = soup.find('span', id='lblEnrollmentNo')
father = soup.find('span', id='lblFatherName')
mother = soup.find('span', id='lblMotherName')
sgpa = soup.find('span', id='lblSGPA')
cgpa = soup.find('span', id='lblCGPA')

print(f"Candidate: {name.text if name else 'N/A'}")
print(f"Roll No: {roll.text if roll else 'N/A'}")
print(f"Enroll No: {enroll.text if enroll else 'N/A'}")
print(f"Father: {father.text if father else 'N/A'}")
print(f"Mother: {mother.text if mother else 'N/A'}")
print(f"SGPA: {sgpa.text if sgpa else 'N/A'}")
print(f"CGPA: {cgpa.text if cgpa else 'N/A'}")

print("\n=== Marksheet Rows ===")
for tr in soup.find_all('tr'):
    tds = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
    if len(tds) >= 8:
        print(tds)
