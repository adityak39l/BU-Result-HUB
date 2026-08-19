"""
Parse a single EIE marksheet HTML and print the student object
to be manually added to lib/data.js
"""
import sys, re
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

html_path = r"E:\result of All eie\EIE_sem_5\241351139501_EIE_sem_5.html"

with open(html_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

def get_text(tag):
    return tag.get_text(separator=' ').strip() if tag else ''

# Extract basic info from labels
labels = {}
for span in soup.find_all('span'):
    sid = span.get('id','')
    txt = span.get_text(strip=True)
    if sid:
        labels[sid] = txt

roll_no   = labels.get('lblRollNo','').strip()
name      = labels.get('lblStudentName','').strip()
father    = labels.get('lblFatherName','').strip()
mother    = labels.get('lblMotherName','').strip()
category  = labels.get('lblCategory','').strip()
program   = labels.get('lblProgram','').strip()
institute = labels.get('lblInstitute','').strip()

# Parse marks table from innerhtml hidden div or directly from page
# The result table is in the long VIEWSTATE content but also rendered in tblMarksheet
marks_table = soup.find('table', id='tblMarksheet')

# Parse subject rows from the rendered HTML text block (innerhtml)
# The long innerhtml in __VIEWSTATE text actually rendered as content
# Look for the marks table rows
subjects = []
rows = soup.find_all('tr')

for row in rows:
    tds = row.find_all('td')
    if len(tds) >= 6:
        sub_name = tds[0].get_text(strip=True)
        # Skip header / hr rows
        if not sub_name or sub_name in ['', 'PRACTICAL'] or 'hr' in sub_name.lower():
            continue
        # Try to extract grand total and credit/grade
        try:
            # Grand total obtained is at index ~5 (tds[9] or similar depending on colspan)
            # Get all text values from tds
            td_texts = [td.get_text(separator=' ', strip=True) for td in tds]
            subjects.append(td_texts)
        except:
            pass

# Better approach: parse from the innerhtml attribute in the span
result_span = soup.find('span', {'id': re.compile(r'grdResult')})
if not result_span:
    # Try to find the marks table div with innerhtml 
    result_div = soup.find(attrs={'innerhtml': True})

# Actually parse from the long hidden span which has innerHTML
# It's in a td with specific class or just read from page text
# The page renders all data, let's just find it from page text
page_text = soup.get_text(separator='\n')

# Extract SGPA
sgpa_match = re.search(r'SGPA\s*[:\-]?\s*([0-9]+\.[0-9]+)', page_text)
sgpa = float(sgpa_match.group(1)) if sgpa_match else 0.0

# Extract result
result_match = re.search(r'RESULT\s*:\s*([A-Z ]+)', page_text)
result_status = result_match.group(1).strip() if result_match else 'PROMOTED'

print(f"\n{'='*60}")
print(f"Student Data Extracted from: {html_path}")
print(f"{'='*60}")
print(f"Roll No  : {roll_no}")
print(f"Name     : {name}")
print(f"Father   : {father}")
print(f"Mother   : {mother}")
print(f"Category : {category}")
print(f"Program  : {program}")
print(f"Institute: {institute}")
print(f"SGPA V   : {sgpa}")
print(f"Result   : {result_status}")

# Now extract subject data more carefully from the rendered table 
# Find the long HTML content in the span that holds marks
inner_span = soup.find('span', class_=re.compile(r'.*')) 
# Actually, look at the 'innerhtml' attribute applied in data 
# The marks are embedded in the VIEWSTATE as rendered HTML. Let's parse that rendered block.

print("\n--- Raw Subjects from page ---")
# Get the content from the 'tblMarksheet' or adjacent tables
result_html_block = None
for span in soup.find_all(string=re.compile(r'POWER ELECTRONICS|INTEGRATED CIRCUITS|CONTROL SYSTEM|MICROPROCESSOR|INSTRUMENTATION')):
    print(f"Found: {span[:80]}")
