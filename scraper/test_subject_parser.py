from bs4 import BeautifulSoup
import glob, os, re, json

def parse_marksheet(fpath):
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    roll = None
    roll_span = soup.find('span', id='lblRollNo')
    if roll_span: roll = roll_span.text.strip()
    
    name = None
    name_span = soup.find('span', id='lblCandidateName')
    if name_span: name = name_span.text.strip()
    
    if not roll or not name:
        return None
        
    sgpa = None
    page_text = soup.get_text(separator=' ')
    sgpa_m = re.search(r'SGPA\s*[:\-]?\s*([0-9]+\.[0-9]+)', page_text)
    if sgpa_m:
        sgpa = float(sgpa_m.group(1))
        
    subjects = []
    # Parse rows of table with subject data
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        if len(tds) >= 6:
            sub_name = tds[0].strip()
            if not sub_name or any(k in sub_name for k in ['NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'NAME OF STUDENT', 'NAME OF FATHER', 'NAME OF MOTHER', 'EXAM CATEGORY', 'NAME OF COURSE', 'INSTITUTE', 'Credit Max', 'RESULT', 'Result Declared', 'Max. Min.']):
                continue
            
            # Extract internal, external, total, grade, credit
            # Common structure:
            # tds[0]: Sub Name
            # Theory/Lab Marks: tds[1]=Max/Min, tds[2]=Obt
            # Internal Marks: tds[3]=Max/Min, tds[4]=Obt
            # Total: tds[5]=Max/Min, tds[6]=Obt
            # Grand Total: tds[9]=Max/Min, tds[10]=Obt
            # Credit: tds[11]
            # Grade/Point: tds[12] (e.g. 8.00A)
            
            # Let's inspect raw tds
            subjects.append({
                'raw': tds,
                'name': sub_name
            })
            
    return {
        'roll': roll,
        'name': name,
        'sgpa': sgpa,
        'subjects': subjects
    }

sample3 = parse_marksheet(r"E:\result of All eie\EIE_sem_III\231351139003_EIE_sem_III.html")
print("Sem 3 Sample parsed:")
print("Roll:", sample3['roll'], "Name:", sample3['name'], "SGPA:", sample3['sgpa'])
for s in sample3['subjects']:
    print("  ", s['name'], "->", s['raw'])
