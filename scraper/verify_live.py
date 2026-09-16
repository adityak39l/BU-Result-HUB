import urllib.request
import json
import time

urls = [
    'https://bu-btech-resulthub.vercel.app/',
    'https://bu-btech-resulthub.vercel.app/leaderboard/',
    'https://bu-btech-resulthub.vercel.app/result/',
    'https://bu-btech-resulthub.vercel.app/student/231411029007/',
    'https://bu-btech-resulthub.vercel.app/student/231411029001/',
    'https://bu-btech-resulthub.vercel.app/student/231411029006/',
    'https://bu-btech-resulthub.vercel.app/about/',
    'https://bu-btech-resulthub.vercel.app/analytics/',
    'https://bu-btech-resulthub.vercel.app/subjects/',
]

print("=== VERIFYING LIVE VERCEL WEBSITE DEPLOYMENT ===")
for u in urls:
    req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Cache-Control': 'no-cache, no-store, must-revalidate'})
    try:
        with urllib.request.urlopen(req) as resp:
            body = resp.read().decode('utf-8', errors='ignore')
            has_bte = 'Biotechnology' in body or 'BTE' in body or 'PRIYAVADA' in body
            has_lime = 'lime-400' in body
            has_sem3 = 'Sem III' in body or 'Sem 3' in body or 'III Semester' in body or '1029203' in body or 'KBT' in body
            print(f"[OK] {u} (Status {resp.status}) -> BTE Present: {has_bte} | Lime Color Present: {has_lime} | Sem3/4 Data: {has_sem3}")
    except Exception as e:
        print(f"[FAIL] {u} -> Error: {e}")
