import re
import json

with open('temp_yandex.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Try finding iframe src
iframes = re.findall(r'<iframe[^>]*src=[\'"]([^\'"]*)[\'"]', content, re.IGNORECASE)
print("Iframes:", iframes)

# Try finding game URLs from JSON or directly
urls = re.findall(r'(https://[-a-zA-Z0-9\.]+\.yandex\.net/[-a-zA-Z0-9\/\?\=\&\._]*)', content)
print("Yandex URLs:")
for u in list(set(urls)):
    print(u)
