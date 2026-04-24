import os
import urllib.request
import urllib.parse
import gzip

def download_file(url, out_path):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    if os.path.exists(out_path): return
    headers = {'User-Agent': 'Mozilla/5.0', 'Accept-Encoding': 'gzip'}
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            if data.startswith(b'\x1f\x8b'):
                data = gzip.decompress(data)
            with open(out_path, 'wb') as f:
                f.write(data)
        print("Success:", out_path)
    except Exception as e:
        print(f"Failed {url}: {e}")

configs = [
    {
        'dir': 'c:/Proeti/aqulroa-games/games/knight-war',
        'base': 'https://app-389452.games.s3.yandex.net/389452/7fl2e7cv6e07myydp8wsdaf2h1xoipht/',
        'files': [
            'Build/War The Knights Battle Arena Swords 3D.loader.js',
            'Build/War The Knights Battle Arena Swords 3D.data.unityweb',
            'Build/War The Knights Battle Arena Swords 3D.framework.js.unityweb',
            'Build/War The Knights Battle Arena Swords 3D.wasm.unityweb',
            'background.jpg'
        ]
    },
    {
        'dir': 'c:/Proeti/aqulroa-games/games/bravl-starsik',
        'base': 'https://app-462102.games.s3.yandex.net/462102/hh0quk4nkr9enqiov878d89wqvzjvex7/',
        'files': [
            'Build/65469d8543560fc07c8f5ccad80219fb.loader.js',
            'Build/3c8a4fa855f16e639cf80965845306f0.data.br',
            'Build/ad96db16173bf19769dc7aa796aa488e.framework.js.br',
            'Build/95e17debef3b23deea663a0c407d1822.wasm.br',
            'Images/background.png'
        ]
    }
]

for cfg in configs:
    for f in cfg['files']:
        url = cfg['base'] + urllib.parse.quote(f)
        out = os.path.join(cfg['dir'], f)
        print("Downloading", f)
        download_file(url, out)
        
    print("Done", cfg['dir'])
