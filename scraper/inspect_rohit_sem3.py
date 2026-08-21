from bs4 import BeautifulSoup

with open(r"E:\result of All eie\EIE_sem_III\231351139011_EIE_sem_III.html", 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("Candidate Name:", soup.find('span', id='lblCandidateName'))
print("Roll:", soup.find('span', id='lblRollNo'))
print("Course:", soup.find('span', id='lblCourseName'))
print("Father:", soup.find('span', id='lblFatherName'))
print("Text:", soup.get_text()[:400])
