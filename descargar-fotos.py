#!/usr/bin/env python3
"""
Descarga las fotos de stock del demo a la carpeta images/stock/ y actualiza
js/config.js para que el sitio use las fotos locales (funciona sin internet
y carga más rápido).

Uso (en Terminal, dentro de la carpeta del sitio):
    python3 descargar-fotos.py

Después puedes reemplazar cualquier foto poniendo tu archivo con el mismo nombre
en images/stock/, o cambiando la ruta en js/config.js.
"""
import os
import re
import subprocess
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
CONFIG = os.path.join(BASE, "js", "config.js")
OUT = os.path.join(BASE, "images", "stock")
WIDTH = 1800

with open(CONFIG, encoding="utf-8") as f:
    text = f.read()

urls = sorted(set(re.findall(r'"(https://images\.unsplash\.com/photo-[0-9a-z-]+)"', text)))
if not urls:
    print("No se encontraron fotos de Unsplash en js/config.js (¿ya las descargaste?).")
    sys.exit(0)

os.makedirs(OUT, exist_ok=True)
print("Descargando %d fotos…" % len(urls))
failed = 0
for u in urls:
    name = u.rsplit("/", 1)[1] + ".jpg"
    dest = os.path.join(OUT, name)
    if not os.path.exists(dest) or os.path.getsize(dest) < 5000:
        full = "%s?auto=format&fit=crop&q=78&w=%d" % (u, WIDTH)
        r = subprocess.run(["curl", "-L", "-f", "-s", "-S", "-o", dest, full])
        if r.returncode != 0 or not os.path.exists(dest) or os.path.getsize(dest) < 5000:
            print("  ✗ falló:", u)
            failed += 1
            if os.path.exists(dest):
                os.remove(dest)
            continue
    print("  ✓", name)
    text = text.replace('"%s"' % u, '"images/stock/%s"' % name)

with open(CONFIG, "w", encoding="utf-8") as f:
    f.write(text)

print("\nListo. Fotos descargadas: %d, con error: %d." % (len(urls) - failed, failed))
if failed:
    print("Las que fallaron siguen cargando desde internet; vuelve a correr el script para reintentar.")
