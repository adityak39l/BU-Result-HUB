from bs4 import BeautifulSoup
import json

for p in [r"E:\result of All eie\FOUND_231371028012_1030203_2024-25.html",
          r"E:\result of All eie\FOUND_231371028012_1030204_2024-25.html",
          r"E:\result of All eie\FOUND_231351139009_1030203_2024-25.html",
          r"E:\result of All eie\FOUND_231351139009_1030204_2024-25.html"]:
    with open(p, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    name = soup.find('span', id='lblCandidateName').text.strip()
    course = soup.find('span', id='lblCourseName').text.strip()
    print(f"{name} -> Course: {course}")
    for tr in soup.find_all('tr'):
        tds = [td.text.strip() for td in tr.find_all(['td', 'th'])]
        if len(tds) > 5 and not any(k in tds[0] for k in ['NAME', 'ROLL', 'ENROLL', 'INSTITUTE', 'RESULT']):
            print(f"   {tds[0]} | {tds[1] if len(tds)>1 else ''} | {tds[2] if len(tds)>2 else ''}")
