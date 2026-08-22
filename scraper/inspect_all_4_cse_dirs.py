import os
import glob
import re

dir3 = r"E:\result of All eie\CSE_sem_III"
dir4 = r"E:\result of All eie\CSE_sem_IV"
dir5 = r"E:\result of All eie\CSE_sem_V"
dir6 = r"E:\result of All eie\CSE_sem_VI"

f3 = glob.glob(os.path.join(dir3, "*.html"))
f4 = glob.glob(os.path.join(dir4, "*.html"))
f5 = glob.glob(os.path.join(dir5, "*.html"))
f6 = glob.glob(os.path.join(dir6, "*.html"))

print(f"Files in CSE_sem_III: {len(f3)}")
print(f"Files in CSE_sem_IV:  {len(f4)}")
print(f"Files in CSE_sem_V:   {len(f5)}")
print(f"Files in CSE_sem_VI:  {len(f6)}")

# Sample file from each
for d, name in [(dir3, "Sem III"), (dir4, "Sem IV"), (dir5, "Sem V"), (dir6, "Sem VI")]:
    flist = glob.glob(os.path.join(d, "*.html"))
    if flist:
        print(f"Sample from {name}: {os.path.basename(flist[0])} (Size: {os.path.getsize(flist[0])} bytes)")
