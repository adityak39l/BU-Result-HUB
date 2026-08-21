from bs4 import BeautifulSoup

with open(r"E:\result of All eie\EIE_sem_IV\231351139011_EIE_sem_IV.html", 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("Candidate Name:", soup.find('span', id='lblCandidateName'))
print("Roll:", soup.find('span', id='lblRollNo'))
print("Course:", soup.find('span', id='lblCourseName'))
print("Error msg:", soup.find('span', id=lambda x: x and 'msg' in x.lower()))
