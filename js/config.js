/* =====================================================================
   CONFIGURACIÓN DEL SITIO  —  aquí se cambia casi todo
   ---------------------------------------------------------------------
   1) LOGO .......... cambia SITE.logo (ruta a tu archivo en /images)
   2) FOTOS ......... cambia las rutas en SITE.fotos. Puedes usar:
                        - un archivo local:  "images/mi-foto.jpg"
                        - o una URL completa: "https://..."
   3) WHATSAPP ...... cambia SITE.whatsapp (lada país + número, sin + ni espacios)
   4) PRODUCTOS ..... edita SITE.lineas (cada producto lleva su propio
                      botón de WhatsApp con mensaje personalizado)
   ===================================================================== */

var SITE = {
  marca: "Natura Pisos",
  slogan: "Pisos de madera para espacios con carácter",
  dominio: "https://www.tudominio.com",          // ← dominio final (SEO, sitemap)

  /* ---------- LOGO ----------
     Reemplaza images/logo.svg por tu logo (SVG o PNG con fondo transparente)
     o cambia la ruta aquí. Se muestra a 44 px de alto en el menú. */
  logo: "images/logo.svg",
  logoClaro: "images/logo.svg",                  // versión para fondo oscuro (footer). Puede ser la misma.

  /* ---------- CONTACTO ---------- */
  whatsapp: "5215518784444",                     // 52 + 1 + 10 dígitos
  whatsappTexto: "Hola, quisiera mayor información.",
  telefono: "(55) 5014-7964",
  telefonoLink: "+525550147964",
  correo: "ventas@naturapisos.mx",
  direccion: "Ciudad de México, México",
  horario: "Lunes a viernes 9:00 – 18:00 · Sábados 10:00 – 14:00",

  redes: {
    Instagram: "https://www.instagram.com/naturapisos/",
    Facebook: "https://www.facebook.com/NaturaPisosMx",
    Pinterest: "https://www.pinterest.com/",
    LinkedIn: "https://mx.linkedin.com/company/natura-pisos"
  },

  /* ---------- FOTOS PROPIAS (automático) ----------
     Solo guarda tu foto con el nombre correcto dentro de la carpeta correcta
     (ver images/LISTA-DE-NOMBRES.txt) y el sitio la usa sola. Sin tocar código.
     extension: formato de tus fotos (jpg por defecto).  fotosLocales:false las desactiva. */
  fotosLocales: true,
  extension: "jpg",

  /* ---------- FOTOS DE STOCK (respaldo) ----------
     Todas son fotos de stock (Unsplash, licencia libre) solo para el demo.
     Para cambiar una foto: reemplaza su valor por "images/tu-foto.jpg". */
  fotos: {
    // Secciones del sitio
    hero:       "https://images.unsplash.com/photo-1709746837880-f96b4f588ce5",
    nosotros:   "https://images.unsplash.com/photo-1630699376289-b62375a35505",
    servicios:  "https://images.unsplash.com/photo-1598718544285-7180f670198b",
    contacto:   "https://images.unsplash.com/photo-1648624219254-1adcd4e49bc6",
    folletos:   "https://images.unsplash.com/photo-1573869908170-64b53a60d8da",
    cta:        "https://images.unsplash.com/photo-1697462247834-7d55761daea3",

    // Banco de fotos para productos (se referencian por nombre en SITE.lineas)
    sala1:      "https://images.unsplash.com/photo-1709746837880-f96b4f588ce5",
    sala3:      "https://images.unsplash.com/photo-1585128792020-803d29415281",
    sala4:      "https://images.unsplash.com/photo-1598718544285-7180f670198b",
    sala5:      "https://images.unsplash.com/photo-1697462247834-7d55761daea3",
    madera1:    "https://images.unsplash.com/photo-1573869908170-64b53a60d8da",
    madera2:    "https://images.unsplash.com/photo-1575204015311-0fe377370780",
    madera3:    "https://images.unsplash.com/photo-1531315788127-40f75965cbe8",
    superficie: "https://images.unsplash.com/photo-1732442170580-9dee8affccdd",
    luz:        "https://images.unsplash.com/photo-1562582664-8a8803c031ca",
    espiga:     "https://images.unsplash.com/photo-1761053130711-2515ef532bb5",
    parquet2:   "https://images.unsplash.com/photo-1607403219525-6c60fa4f20fa",
    parquetW:   "https://images.unsplash.com/photo-1630699376289-b62375a35505",
    panel:      "https://images.unsplash.com/photo-1548268364-3acee266b695",
    slats:      "https://images.unsplash.com/photo-1487266659293-c4762f375955",
    mesa:       "https://images.unsplash.com/photo-1560185008-b033106af5c3",
    silla:      "https://images.unsplash.com/photo-1590938272761-c11f74452660",
    asiento:    "https://images.unsplash.com/photo-1586374574216-20c5d3a466ee",
    puerta:     "https://images.unsplash.com/photo-1648624219254-1adcd4e49bc6",
    bloques:    "https://images.unsplash.com/photo-1629976828074-c248d94c82ea",
    tablones:   "https://images.unsplash.com/photo-1693722232694-86c5e27b6c2b"
  },

  /* ---------- SERVICIOS ---------- */
  servicios: [
    { titulo: "Colocación", texto: "Instalación profesional con cuadrillas certificadas, adhesivos y sistemas flotantes o pegados según tu proyecto." },
    { titulo: "Asesoramiento", texto: "Te ayudamos a elegir la línea, tono y formato ideales para tu espacio, uso y presupuesto." },
    { titulo: "Toma de medidas", texto: "Visitamos tu obra para medir con precisión y calcular el material exacto, con el desperdicio correcto." },
    { titulo: "Toma de humedad", texto: "Medimos la humedad del contrapiso antes de instalar para proteger tu inversión a largo plazo." },
    { titulo: "Post venta", texto: "Seguimiento, mantenimiento y garantía después de la instalación. Estamos contigo cuando nos necesites." },
    { titulo: "Stock en existencia", texto: "Líneas seleccionadas disponibles para entrega inmediata y proyectos con tiempos ajustados." }
  ],

  /* ---------- FOLLETOS ----------
     archivo: ruta al PDF (ej. "folletos/naturals.pdf"). Mientras esté en "#" el botón no descarga. */
  folletos: [
    { titulo: "Catálogo general 2026", foto: "madera1", archivo: "#" },
    { titulo: "Línea Naturals", foto: "sala1", archivo: "#" },
    { titulo: "Línea Herringbone", foto: "espiga", archivo: "#" },
    { titulo: "Pisos SPC y LVT", foto: "puerta", archivo: "#" },
    { titulo: "Fachadas y paneles", foto: "slats", archivo: "#" },
    { titulo: "Guía de mantenimiento", foto: "luz", archivo: "#" }
  ],

  /* ---------- PRODUCTOS ----------
     Cada línea: id, nombre, foto (clave de SITE.fotos), resumen, productos.
     Cada producto: [ "Nombre", "claveFoto", "Detalle corto" ]
     → El botón de WhatsApp de cada producto se genera solo con su nombre. */
  lineas: [
    { id: "naturals", nombre: "Línea Naturals", foto: "sala1",
      resumen: "Madera de ingeniería con acabado natural y veta visible. Calidez auténtica para sala, recámara y áreas sociales.",
      productos: [
        ["Natural Oak", "sala1", "Roble · Ingeniería 14 mm"],
        ["Honey Oak", "sala3", "Roble miel · Ingeniería 14 mm"],
        ["Ash Grey", "madera3", "Fresno gris · Ingeniería 14 mm"],
        ["Smoked Oak", "sala4", "Roble ahumado · Ingeniería 14 mm"]
      ] },
    { id: "basics", nombre: "Línea Basics", foto: "madera1",
      resumen: "La opción accesible para proyectos residenciales: buen desempeño, tonos versátiles y fácil instalación.",
      productos: [
        ["Basic Natural", "madera1", "Ingeniería 12 mm"],
        ["Basic Caramel", "madera2", "Ingeniería 12 mm"],
        ["Basic Sand", "luz", "Ingeniería 12 mm"],
        ["Basic Coffee", "madera3", "Ingeniería 12 mm"]
      ] },
    { id: "herringbone", nombre: "Línea Herringbone", foto: "espiga",
      resumen: "Diseño en espiga clásico para espacios elegantes. Un piso que se vuelve el protagonista del proyecto.",
      productos: [
        ["Herringbone Natural", "espiga", "Espiga · 14 mm"],
        ["Herringbone Walnut", "parquet2", "Espiga · 14 mm"],
        ["Herringbone Grey", "parquetW", "Espiga · 14 mm"],
        ["Herringbone Honey", "sala4", "Espiga · 14 mm"]
      ] },
    { id: "strips", nombre: "Línea Strips", foto: "superficie",
      resumen: "Duelas angostas en madera sólida de aspecto tradicional, ideales para un look clásico y atemporal.",
      productos: [
        ["Strip Natural Oak", "superficie", "Duela angosta · Sólido"],
        ["Strip Maple", "madera1", "Duela angosta · Sólido"],
        ["Strip Cherry", "madera3", "Duela angosta · Sólido"],
        ["Strip Teak", "madera2", "Duela angosta · Sólido"]
      ] },
    { id: "slims", nombre: "Línea Slims", foto: "luz",
      resumen: "Formato delgado y ligero, perfecto para remodelaciones donde la altura del piso es importante.",
      productos: [
        ["Slim Light", "luz", "Formato delgado · 8 mm"],
        ["Slim Natural", "madera2", "Formato delgado · 8 mm"],
        ["Slim Dark", "asiento", "Formato delgado · 8 mm"],
        ["Slim Cream", "sala3", "Formato delgado · 8 mm"]
      ] },
    { id: "walnuts", nombre: "Línea Walnuts", foto: "asiento",
      resumen: "Tonos profundos de nogal con vetas ricas y contrastadas para ambientes sofisticados.",
      productos: [
        ["American Walnut", "asiento", "Nogal · Ingeniería 14 mm"],
        ["Walnut Smoked", "silla", "Nogal ahumado · Ingeniería 14 mm"],
        ["Walnut Classic", "parquet2", "Nogal clásico · Ingeniería 14 mm"],
        ["Walnut Brushed", "madera3", "Nogal cepillado · Ingeniería 14 mm"]
      ] },
    { id: "sintetico", nombre: "Línea Sintético", foto: "madera3",
      resumen: "Alta resistencia al tráfico y a la humedad con el aspecto de la madera. Para uso residencial y comercial.",
      productos: [
        ["Sintético Roble", "madera3", "Alto tráfico"],
        ["Sintético Nogal", "silla", "Alto tráfico"],
        ["Sintético Gris", "bloques", "Alto tráfico"],
        ["Sintético Miel", "madera2", "Alto tráfico"]
      ] },
    { id: "coextrusion-simple", nombre: "Coextrusión Simple", foto: "mesa",
      resumen: "Deck y recubrimientos exteriores de bajo mantenimiento, con una capa protectora contra sol y lluvia.",
      productos: [
        ["Coex Simple Teak", "mesa", "Exterior · Deck"],
        ["Coex Simple Gris", "bloques", "Exterior · Deck"],
        ["Coex Simple Café", "tablones", "Exterior · Deck"],
        ["Coex Simple Arena", "madera1", "Exterior · Deck"]
      ] },
    { id: "coextrusion-dual", nombre: "Coextrusión Dual", foto: "sala5",
      resumen: "Doble capa de protección y mayor durabilidad. La línea premium para terrazas y áreas exteriores.",
      productos: [
        ["Coex Dual Ipe", "sala5", "Exterior · Doble capa"],
        ["Coex Dual Gris Piedra", "luz", "Exterior · Doble capa"],
        ["Coex Dual Nogal", "asiento", "Exterior · Doble capa"],
        ["Coex Dual Natural", "madera2", "Exterior · Doble capa"]
      ] },
    { id: "fachada", nombre: "Línea Fachada", foto: "slats",
      resumen: "Listones y recubrimientos para fachadas con un acabado cálido, ligero y de gran presencia arquitectónica.",
      productos: [
        ["Fachada Lama Natural", "slats", "Exterior · Listón"],
        ["Fachada Lama Oscura", "panel", "Exterior · Listón"],
        ["Fachada Lama Gris", "bloques", "Exterior · Listón"],
        ["Fachada Lama Miel", "tablones", "Exterior · Listón"]
      ] },
    { id: "panel", nombre: "Línea Panel", foto: "panel",
      resumen: "Paneles decorativos para muros y plafones. Textura y calidez para recibidores, salas y oficinas.",
      productos: [
        ["Panel Acústico Roble", "panel", "Muro · Panel"],
        ["Panel Listón Nogal", "slats", "Muro · Panel"],
        ["Panel Listón Natural", "tablones", "Muro · Panel"],
        ["Panel Liso Gris", "sala3", "Muro · Panel"]
      ] },
    { id: "spc", nombre: "Línea SPC", foto: "puerta",
      resumen: "Piso rígido 100 % resistente al agua con sistema click. Instalación rápida y excelente durabilidad.",
      productos: [
        ["SPC Roble Claro", "puerta", "Click · 5 mm"],
        ["SPC Roble Gris", "luz", "Click · 5 mm"],
        ["SPC Nogal", "silla", "Click · 5 mm"],
        ["SPC Natural", "madera1", "Click · 5 mm"]
      ] },
    { id: "spc-herringbone", nombre: "SPC Herringbone", foto: "parquet2",
      resumen: "El diseño en espiga con la resistencia del SPC. Elegancia y practicidad en un mismo piso.",
      productos: [
        ["SPC Espiga Mist", "parquet2", "Click · Espiga"],
        ["SPC Espiga Natural", "espiga", "Click · Espiga"],
        ["SPC Espiga Gris", "parquetW", "Click · Espiga"],
        ["SPC Espiga Nogal", "silla", "Click · Espiga"]
      ] },
    { id: "lvt", nombre: "Línea LVT", foto: "sala3",
      resumen: "Vinil de lujo con acabados que imitan madera y piedra. Cálido, silencioso y fácil de mantener.",
      productos: [
        ["LVT Oak Sand", "sala3", "Vinil de lujo · 2.5 mm"],
        ["LVT Oak Grey", "sala4", "Vinil de lujo · 2.5 mm"],
        ["LVT Walnut", "asiento", "Vinil de lujo · 2.5 mm"],
        ["LVT Natural", "madera2", "Vinil de lujo · 2.5 mm"]
      ] }
  ]
};
