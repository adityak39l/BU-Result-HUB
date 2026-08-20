import re

with open(r'E:\BU_RESULT_WEBSITE\lib\data.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Let's check where the syntax breaks
# Find all students blocks and ensure valid JS syntax
# In integrate_all_semester_subjects.py, we inserted indented_sem_sub before currentSemSubjects.
# If "currentSemSubjects": [ was matched, let's see what was replaced.
lines = js.splitlines()
print(f"Total lines: {len(lines)}")
for i, l in enumerate(lines[1905:1925], 1906):
    print(f"{i}: {l}")
