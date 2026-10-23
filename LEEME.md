# Natura Pisos — sitio demo

Sitio estático (HTML + CSS + JS, sin instalar nada). Abre `index.html` en el navegador o sube la carpeta a cualquier hosting.

## Cómo poner tus fotos (sin tocar código)
1. Abre `images/LISTA-DE-NOMBRES.txt`: ahí está el nombre exacto de cada foto (productos, líneas, secciones, folletos).
2. Guarda tu foto en `.jpg` con ese nombre dentro de su carpeta. Ejemplo: la foto de «Natural Oak» → `images/productos/natural-oak.jpg`.
3. Recarga la página. El sitio usa tu foto solo; si falta alguna, muestra la de stock.

Carpetas: `images/productos/`, `images/lineas/`, `images/secciones/`, `images/folletos/`.
Logo: reemplaza `images/logo.svg`.
Para agregar un producto nuevo: agrega su fila en `js/config.js` (ver abajo); su nombre de foto será el nombre en minúsculas con guiones.

## Qué se cambia y dónde (todo en `js/config.js`)

| Quiero cambiar… | Dónde |
|---|---|
| **Logo** | Reemplaza `images/logo.svg` por tu logo (mismo nombre) o cambia `SITE.logo` |
| **Una foto** | En `SITE.fotos`, cambia la URL por `"images/mi-foto.jpg"` (sube el archivo a la carpeta `images/`) |
| **Número de WhatsApp** | `SITE.whatsapp` (ej. `5215512345678`) — actualiza el botón flotante, el menú, el footer y todos los productos |
| **Mensaje de WhatsApp por producto** | Se genera solo: «Hola, me interesa el piso {nombre} de la {línea}…». Cambia el texto en `js/app.js` (busca `Hola, me interesa el piso`) |
| **Productos / líneas** | `SITE.lineas` — agrega o quita filas `["Nombre", "claveFoto", "Detalle"]` |
| **Servicios, folletos, teléfono, correo, redes** | Mismo archivo |
| **Colores y tipografías** | Variables al inicio de `css/styles.css` |

Para publicar: busca `www.tudominio.com` en todos los archivos (HTML, `sitemap.xml`, `robots.txt`, `config.js`) y reemplázalo por el dominio real.

## Fotos locales (recomendado)
Con internet, el demo ya muestra las fotos de stock. Para guardarlas dentro del sitio (funciona sin internet y carga más rápido), abre Terminal en esta carpeta y corre:

    python3 descargar-fotos.py

Baja las 20 fotos a `images/stock/` y actualiza `js/config.js` solo.

## Notas
- Las fotos del demo son de Unsplash (licencia libre) y cargan desde su CDN; para producción conviene bajarlas a `images/` y comprimirlas (WebP).
- Nombres de modelos, medidas y textos son de ejemplo.
