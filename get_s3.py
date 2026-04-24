import re

with open('yandex_test.html', 'r', encoding='utf-8') as f:
    html = f.read()

urls = re.findall(r'https?://[a-zA-Z0-9-_\.]+\.yandex\.net[^\s\"\']+', html)
for u in set(urls):
    print(u)
