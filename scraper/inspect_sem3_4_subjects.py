from bs4 import BeautifulSoup
import os

with open(r"E:\result of All eie\EIE_sem_III\231351139003_EIE_sem_III.html", "r", encoding="utf-8") as f:
    soup3 = BeautifulSoup(f.read(), "html.parser")

print("=== Sem III Subjects (AJAY 231351139003) ===")
for tr in soup3.find_all("tr"):
    tds = [td.text.strip().replace("\n", " ") for td in tr.find_all(["td", "th"])]
    if len(tds) >= 4 and not any(k in tds[0] for k in ["ROLL", "ENROLL", "NAME", "INSTITUTE", "EXAM"]):
        print("  ", tds)

with open(r"E:\result of All eie\EIE_sem_IV\231351139003_EIE_sem_IV.html", "r", encoding="utf-8") as f:
    soup4 = BeautifulSoup(f.read(), "html.parser")

print("\n=== Sem IV Subjects (AJAY 231351139003) ===")
for tr in soup4.find_all("tr"):
    tds = [td.text.strip().replace("\n", " ") for td in tr.find_all(["td", "th"])]
    if len(tds) >= 4 and not any(k in tds[0] for k in ["ROLL", "ENROLL", "NAME", "INSTITUTE", "EXAM"]):
        print("  ", tds)
