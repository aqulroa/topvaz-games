import gzip
import brotli
import os

folder = r'c:\Proeti\aqulroa-games\games\case-battle\StreamingAssets\aa'

files = ['catalog.bin', 'catalog.hash']

for f in files:
    path = os.path.join(folder, f)
    if not os.path.exists(path):
        continue
    with open(path, 'rb') as file:
        data = file.read()
    if data.startswith(b'\x1f\x8b'):
        print(f"Decompressing gzip {f}")
        try:
            uncompressed = gzip.decompress(data)
            with open(path, 'wb') as file:
                file.write(uncompressed)
        except Exception as e:
            print("Failed gzip", e)
    else:
        print(f"{f} is pure")
