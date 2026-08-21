from bs4 import BeautifulSoup
import re

for sem, p in [('Sem 3', r"E:\result of All eie\EIE_sem_III\231351139009_EIE_sem_III.html"),
               ('Sem 4', r"E:\result of All eie\EIE_sem_IV\231351139009_EIE_sem_IV.html")]:
    with open(p, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    name = soup.find('span', id='lblCandidateName')
    fname = soup.find('span', id='lblFatherName')
    course = soup.find('span', id='lblCourseName')
    sgpa = re.search(r'SGPA\s*([0-9.]+)', soup.get_text())
    print(f"231351139009 {sem}: Name={name.text if name else 'NONE'}, Father={fname.text if fname else 'NONE'}, Course={course.text if course else 'NONE'}, SGPA={sgpa.group(1) if sgpa else 'NONE'}")
