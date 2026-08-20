import re
with open(r'E:\BU_RESULT_WEBSITE\lib\data.js', 'r', encoding='utf-8') as f:
    text = f.read()

students = re.findall(r'\{\s*"rollNo":\s*"(\d+)",\s*"name":\s*"([^"]+)",\s*"branch":\s*"([^"]+)",\s*"batch":\s*"([^"]+)"', text)
print(f"Total students: {len(students)}")
batch_counts = {}
for roll, name, branch, batch in students:
    batch_counts[batch] = batch_counts.get(batch, 0) + 1

print("Batch counts:", batch_counts)
print("\nEIE students:", [(r, n, b, bt) for r, n, b, bt in students if b == 'EIE'])
