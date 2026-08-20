from bs4 import BeautifulSoup
import glob, os, re, json

def parse_html_subjects(fpath):
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    subjects = []
    for tr in soup.find_all('tr'):
        tds = [td.text.strip().replace('\n', ' ') for td in tr.find_all(['td', 'th'])]
        if len(tds) >= 6:
            sub_name = tds[0].strip()
            if not sub_name or any(k in sub_name for k in [
                'NAME OF PAPER', 'ROLL NUMBER', 'ENROLL NO', 'NAME OF STUDENT', 
                'NAME OF FATHER', 'NAME OF MOTHER', 'EXAM CATEGORY', 'NAME OF COURSE', 
                'INSTITUTE', 'Credit Max', 'RESULT', 'Result Declared', 'Max. Min.',
                'Theory/Lab', 'Internal', 'Pr./Disst'
            ]):
                continue
            
            # Extract code (first word of name or short code)
            code_val = sub_name.split()[0] if len(sub_name.split()) > 0 else 'SUB'
            
            # Detect whether theory, lab, or proficiency
            is_lab = 'LAB' in sub_name.upper() or 'WORKSHOP' in sub_name.upper()
            is_gp = 'PROFECIENCY' in sub_name.upper() or 'PROFICIENCY' in sub_name.upper()
            
            int_str = "-"
            ext_str = "-"
            tot_str = "-"
            credit_val = 3
            grade_val = "B+"
            
            # Extract values based on td positions
            try:
                if is_gp:
                    # General proficiency
                    obt = tds[8] if len(tds) > 8 and tds[8] else (tds[10] if len(tds) > 10 else "40")
                    max_m = tds[7] if len(tds) > 7 and tds[7] else "50 20"
                    tot_str = f"Tot: {obt} / 50"
                    credit_val = 0
                    grade_val = "A"
                elif is_lab:
                    int_obt = tds[4] if len(tds) > 4 else ""
                    ext_obt = tds[8] if len(tds) > 8 else ""
                    tot_obt = tds[10] if len(tds) > 10 else ""
                    int_max = tds[3].split()[0] if len(tds) > 3 and tds[3] else "25"
                    ext_max = tds[7].split()[0] if len(tds) > 7 and tds[7] else "50"
                    tot_max = tds[9].split()[0] if len(tds) > 9 and tds[9] else "75"
                    
                    int_str = f"Int: {int_obt} / {int_max}" if int_obt else "-"
                    ext_str = f"Ext: {ext_obt} / {ext_max}" if ext_obt else "-"
                    tot_str = f"Tot: {tot_obt} / {tot_max}" if tot_obt else "-"
                    
                    cr_str = tds[11] if len(tds) > 11 else "1"
                    credit_val = int(re.search(r'\d+', cr_str).group(0)) if re.search(r'\d+', cr_str) else 1
                    
                    gr_raw = tds[12] if len(tds) > 12 else "A"
                    gr_m = re.search(r'([A-O][+]?)$', gr_raw)
                    grade_val = gr_m.group(1) if gr_m else "A"
                else:
                    # Theory
                    ext_obt = tds[2] if len(tds) > 2 else ""
                    int_obt = tds[4] if len(tds) > 4 else ""
                    tot_obt = tds[10] if len(tds) > 10 else (tds[6] if len(tds) > 6 else "")
                    ext_max = tds[1].split()[0] if len(tds) > 1 and tds[1] else "100"
                    int_max = tds[3].split()[0] if len(tds) > 3 and tds[3] else "50"
                    tot_max = tds[9].split()[0] if len(tds) > 9 and tds[9] else "150"
                    
                    int_str = f"Int: {int_obt} / {int_max}" if int_obt else "-"
                    ext_str = f"Ext: {ext_obt} / {ext_max}" if ext_obt else "-"
                    tot_str = f"Tot: {tot_obt} / {tot_max}" if tot_obt else "-"
                    
                    cr_str = tds[11] if len(tds) > 11 else "3"
                    credit_val = int(re.search(r'\d+', cr_str).group(0)) if re.search(r'\d+', cr_str) else 3
                    
                    gr_raw = tds[12] if len(tds) > 12 else "B+"
                    gr_m = re.search(r'([A-O][+]?)$', gr_raw)
                    grade_val = gr_m.group(1) if gr_m else "B+"
            except Exception as ex:
                pass
                
            subjects.append({
                "code": code_val,
                "name": sub_name,
                "internalStr": int_str,
                "externalStr": ext_str,
                "totalStr": tot_str,
                "grade": grade_val,
                "credit": credit_val
            })
            
    return subjects

# Test on Sem 3 and Sem 4 files
s3 = parse_html_subjects(r"E:\result of All eie\EIE_sem_III\231351139003_EIE_sem_III.html")
print(f"Sem 3 Subjects ({len(s3)}):")
for sub in s3:
    print(" ", sub)

s4 = parse_html_subjects(r"E:\result of All eie\EIE_sem_IV\231351139003_EIE_sem_IV.html")
print(f"\nSem 4 Subjects ({len(s4)}):")
for sub in s4:
    print(" ", sub)
