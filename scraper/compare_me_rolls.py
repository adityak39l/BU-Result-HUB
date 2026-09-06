import os

dirs = {
    "ME_sem_III": r"E:\result of All eie\ME_sem_III",
    "ME_sem_IV": r"E:\result of All eie\ME_sem_IV",
    "ME_sem_V": r"E:\result of All eie\ME_sem_V",
    "ME_sem_VI": r"E:\result of All eie\ME_sem_VI"
}

all_rolls = set()
for dname, dpath in dirs.items():
    if os.path.exists(dpath):
        files = os.listdir(dpath)
        rolls = [f.split('.')[0].split('_')[0] for f in files if f.endswith('.html')]
        print(f"{dname}: {len(rolls)} files -> {sorted(rolls)}")
        all_rolls.update(rolls)

print(f"\nTotal Unique ME Roll Numbers found across all 4 semesters: {len(all_rolls)}")
print(f"Sorted rolls: {sorted(list(all_rolls))}")
