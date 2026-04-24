import os
import urllib.request
import gzip

base_urls = {
    'knight-war': 'https://app-389452.games.s3.yandex.net/389452/7fl2e7cv6e07myydp8wsdaf2h1xoipht/',
    'bravl-starsik': 'https://app-462102.games.s3.yandex.net/462102/hh0quk4nkr9enqiov878d89wqvzjvex7/'
}

headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in base_urls.items():
    directory = f'c:/Proeti/aqulroa-games/games/{name}'
    os.makedirs(directory, exist_ok=True)
    try:
        req = urllib.request.Request(url + 'index.html', headers=headers)
        with urllib.request.urlopen(req) as response:
            data = response.read()
            if data.startswith(b'\x1f\x8b'):
                data = gzip.decompress(data)
            
            with open(os.path.join(directory, 'index.html'), 'wb') as f:
                f.write(data)
        print(f"Downloaded and decompressed index.html for {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
