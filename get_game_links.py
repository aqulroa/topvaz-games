import urllib.request
import re

url = 'https://yandex.ru/games/play/app/389452'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'}

try:
    req = urllib.request.Request(url, headers=headers)
    html = urllib.request.urlopen(req).read().decode('utf-8')
    with open('yandex_test_play.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Saved to yandex_test_play.html")
    m = re.search(r'(https://[a-zA-Z0-9-]+\.cdn\.games\.yandex\.net/[^\"]+)', html)
    if m:
        print("Found CDN URL:", m.group(1))
    else:
        print("No CDN link matched")
except Exception as e:
    print(e)
