import urllib.request, json
try:
    req = urllib.request.Request('https://api.github.com/repos/adityak39l/BU-Result-HUB/actions/runs?per_page=5', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode())
        for run in data.get('workflow_runs', []):
            print(f"ID: {run['id']} | Event: {run['event']} | Head: {run['head_branch']} ({run['head_sha'][:7]}) | Status: {run['status']} | Conclusion: {run['conclusion']} | Name: {run.get('name')}")
except Exception as e:
    print('Error:', e)
