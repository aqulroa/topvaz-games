import os
import json
import urllib.request
import gzip

base_url = "https://app-434649.cdn.games.yandex.net/434649/zsdciimtcpoegmtyf3hh9fnd6db2o08l/"

def download_file(url, out_path):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Accept-Encoding': 'gzip'})
    try:
        with urllib.request.urlopen(req) as response:
            data = response.read()
            # If server encoded gzip despite our request
            if data.startswith(b'\x1f\x8b'):
                data = gzip.decompress(data)
            with open(out_path, 'wb') as f:
                f.write(data)
            return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

# 1. Start with settings.json
settings_url = base_url + "StreamingAssets/aa/settings.json"
settings_path = r"c:\Proeti\aqulroa-games\games\case-battle\StreamingAssets\aa\settings.json"

if download_file(settings_url, settings_path):
    print("Downloaded settings.json")
    with open(settings_path, 'r', encoding='utf-8') as f:
        settings = json.load(f)
    print(json.dumps(settings, indent=2))
