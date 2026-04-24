import urllib.request
import re

url2 = 'https://yandex.ru/games/app/bravl-starsik-3d-462102'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'}

req = urllib.request.Request(url2, headers=headers)
html = urllib.request.urlopen(req).read().decode('utf-8')

urls = re.findall(r'https?://app-462102\.games\.s3\.yandex\.net[^\s\"\']+', html)
for u in set(urls):
    print(u)
