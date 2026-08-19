import requests
from bs4 import BeautifulSoup
import os
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

# Target save locations
base_dir = r"E:\result of All eie"
folder_sem5 = os.path.join(base_dir, "ME_sem_V")
folder_sem6 = os.path.join(base_dir, "ME_sem_VI")

os.makedirs(folder_sem5, exist_ok=True)
os.makedirs(folder_sem6, exist_ok=True)

url = "https://exam.bujhansi.ac.in/frmViewCampusCurrentResult.aspx"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Origin": "https://exam.bujhansi.ac.in",
    "Referer": url
}

# Roll number range: 231391034001 to 231391034030
start_roll = 231391034001
end_roll = 231391034030

semesters_config = [
    {"name": "ME_sem_V", "course_val": "1034205", "folder": folder_sem5},
    {"name": "ME_sem_VI", "course_val": "1034206", "folder": folder_sem6}
]

def fetch_single_result(session, roll_str, course_val, max_retries=4):
    for attempt in range(1, max_retries + 1):
        try:
            resp_get = session.get(url, headers=headers, timeout=25)
            soup = BeautifulSoup(resp_get.text, 'html.parser')

            viewstate = soup.find('input', {'name': '__VIEWSTATE'})['value']
            eventvalidation = soup.find('input', {'name': '__EVENTVALIDATION'})['value']
            viewstategenerator = soup.find('input', {'name': '__VIEWSTATEGENERATOR'})['value']

            # KEY FIX: ddlResultType MUST BE empty string '' (Main Result)
            payload = {
                '__EVENTTARGET': '',
                '__EVENTARGUMENT': '',
                '__VIEWSTATE': viewstate,
                '__VIEWSTATEGENERATOR': viewstategenerator,
                '__EVENTVALIDATION': eventvalidation,
                'ddlCourse': course_val,
                'ddlResultType': '',
                'txtUniqueID': roll_str,
                'btnGetResult': 'View Result'
            }

            resp_post = session.post(url, data=payload, headers=headers, timeout=25)
            if "ROLL NUMBER" in resp_post.text.upper():
                return resp_post.text
            elif "NO RESULT FOUND" in resp_post.text.upper() or "NOT FOUND" in resp_post.text.upper():
                return None
        except Exception as e:
            if attempt < max_retries:
                time.sleep(1.2)
            else:
                return None
    return None

def run_me_fetcher():
    session = requests.Session()
    print(f"Target Save Directory: {base_dir}")
    print(f"Starting auto-fetch for ME Roll Numbers {start_roll} to {end_roll}...\n")

    for config in semesters_config:
        sem_name = config["name"]
        course_val = config["course_val"]
        target_folder = config["folder"]

        print(f"\n================ FETCHING {sem_name} (Course Code: {course_val}) ================")

        for roll in range(start_roll, end_roll + 1):
            roll_str = str(roll)
            file_name = f"{roll_str}_{sem_name}.html"
            file_path = os.path.join(target_folder, file_name)

            print(f"Fetching {roll_str} [{sem_name}]...", end=" ")

            html_result = fetch_single_result(session, roll_str, course_val)
            if html_result:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(html_result)
                print(f"[SUCCESS] Saved {file_name}")
            else:
                print(f"[NO RECORD FOUND]")

    print(f"\nAll ME results fetched and saved in target location: {base_dir}")

if __name__ == "__main__":
    run_me_fetcher()
