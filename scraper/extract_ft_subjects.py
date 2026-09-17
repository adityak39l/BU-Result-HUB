import json

with open('scraper/data/ft_students_combined.json', 'r', encoding='utf-8') as f:
    students = json.load(f)

all_subs = {}
for s in students:
    for sem_str, subs in s.get('semesterSubjects', {}).items():
        sem_num = int(sem_str)
        for sub in subs:
            name = sub['name']
            if name not in all_subs:
                all_subs[name] = {'name': name, 'sem': sem_num, 'credit': sub.get('credit', 3)}

print('=== UNIQUE FOOD TECHNOLOGY SUBJECTS ===')
for name, data in sorted(all_subs.items(), key=lambda x: (x[1]['sem'], x[0])):
    print(f"Sem {data['sem']} | Credit {data['credit']} | {name}")
