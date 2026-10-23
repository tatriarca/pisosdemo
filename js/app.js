/* Natura Pisos demo — lógica del sitio. No necesitas editar este archivo:
   todo el contenido editable está en js/config.js */
(function () {
  "use strict";
  var S = window.SITE;
  var WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function waLink(text) {
    return "https://api.whatsapp.com/send?phone=" + S.whatsapp + "&text=" + encodeURIComponent(text || S.whatsappTexto);
  }
  function resolve(key) { return (S.fotos && S.fotos[key]) || key; }
  function isUnsplash(u) { return /images\.unsplash\.com/.test(u); }
  function sized(url, w) {
    return isUnsplash(url) ? url.split("?")[0] + "?auto=format&fit=crop&q=75&w=" + w : url;
  }
  function srcset(url) {
    if (!isUnsplash(url)) return "";
    return [480, 800, 1200, 1800].map(function (w) { return sized(url, w) + " " + w + "w"; }).join(", ");
  }
  /* ---- Fotos automáticas por nombre de archivo ----
     El sitio primero busca  images/<carpeta>/<nombre>.jpg  ; si no existe usa la foto de stock. */
  function slug(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function chain(folder, name, key, w) {
    var c = [];
    if (name && S.fotosLocales !== false) c.push("images/" + folder + "/" + name + "." + (S.extension || "jpg"));
    c.push(sized(resolve(key), w || 1200));
    return c;
  }
  function img(key, alt, sizes, folder, name) {
    var c = chain(folder, name, key, 800), first = c.shift();
    return '<img src="' + esc(first) + '"' + (c.length ? ' data-next="' + esc(c.join("|")) + '"' : "") +
      ' alt="' + esc(alt) + '" loading="lazy" decoding="async" width="800" height="600">';
  }
  function setMeta(sel, attr, val) { var el = document.querySelector(sel); if (el) el.setAttribute(attr, val); }
  function pageFile() { var p = location.pathname.split("/").pop(); return p || "index.html"; }

  /* ---------- header / footer / WhatsApp flotante ---------- */
  var MENU = [
    ["Inicio", "index.html"], ["Nosotros", "nosotros.html"], ["Productos", "productos.html"],
    ["Servicios", "servicios.html"], ["Folletos", "folletos.html"], ["Contacto", "contacto.html"]
  ];
  function currentKey() {
    var f = pageFile(); return f === "linea.html" ? "productos.html" : f;
  }
  function buildChrome() {
    var cur = currentKey();
    var nav = MENU.map(function (m) {
      return '<a href="' + m[1] + '"' + (m[1] === cur ? ' aria-current="page"' : "") + ">" + m[0] + "</a>";
    }).join("");
    var h = document.getElementById("site-header");
    if (h) h.innerHTML =
      '<div class="header" id="hdr"><div class="container inner">' +
      '<a class="brand" href="index.html" aria-label="' + esc(S.marca) + ' — Inicio"><img src="' + esc(S.logo) + '" alt="' + esc(S.marca) + '" width="180" height="44"></a>' +
      '<nav class="nav" id="nav" aria-label="Menú principal">' + nav + "</nav>" +
      '<div class="head-actions"><a class="head-tel" href="tel:' + S.telefonoLink + '">' + esc(S.telefono) + "</a>" +
      '<a class="btn wa sm" href="' + waLink() + '" target="_blank" rel="noopener">' + WA_ICON + "WhatsApp</a>" +
      '<button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button></div>' +
      "</div></div>";

    var f = document.getElementById("site-footer");
    if (f) {
      var redes = Object.keys(S.redes).map(function (k) {
        return '<li><a href="' + esc(S.redes[k]) + '" target="_blank" rel="noopener">' + k + "</a></li>";
      }).join("");
      f.innerHTML =
        '<footer class="footer"><div class="container"><div class="cols">' +
        '<div><a class="brand" href="index.html"><img src="' + esc(S.logoClaro || S.logo) + '" alt="' + esc(S.marca) + '" width="160" height="46" loading="lazy"></a>' +
        "<p>" + esc(S.slogan) + ".</p></div>" +
        "<div><h4>Menú</h4><ul>" + MENU.map(function (m) { return '<li><a href="' + m[1] + '">' + m[0] + "</a></li>"; }).join("") + "</ul></div>" +
        "<div><h4>Síguenos</h4><ul>" + redes + "</ul></div>" +
        '<div><h4>Contacto</h4><ul><li><a href="tel:' + S.telefonoLink + '">' + esc(S.telefono) + "</a></li>" +
        '<li><a href="' + waLink() + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
        '<li><a href="mailto:' + esc(S.correo) + '">' + esc(S.correo) + "</a></li>" +
        "<li>" + esc(S.direccion) + "</li></ul></div></div>" +
        '<div class="legal"><span>© ' + new Date().getFullYear() + " " + esc(S.marca) + ". Todos los derechos reservados.</span><span>Sitio de demostración</span></div>" +
        "</div></footer>";
    }

    var fab = document.createElement("a");
    fab.className = "wa-fab"; fab.href = waLink(); fab.target = "_blank"; fab.rel = "noopener";
    fab.setAttribute("aria-label", "Escríbenos por WhatsApp");
    fab.innerHTML = WA_ICON + '<span class="tip">¿Te ayudamos? Escríbenos</span>';
    document.body.appendChild(fab);

    var hdr = document.getElementById("hdr"), burger = document.getElementById("burger"), navEl = document.getElementById("nav");
    function onScroll() { if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 8); }
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    if (burger) {
      burger.addEventListener("click", function () {
        var open = navEl.classList.toggle("open");
        burger.setAttribute("aria-expanded", open);
      });
      navEl.addEventListener("click", function (e) { if (e.target.tagName === "A") { navEl.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
    }
  }

  /* ---------- imágenes con data-img ---------- */
  function applyImages() {
    document.querySelectorAll("[data-img]").forEach(function (el) {
      var k = el.getAttribute("data-img");
      var c = chain("secciones", k, k, parseInt(el.getAttribute("data-w") || "1600", 10));
      el.src = c.shift();
      if (c.length) el.setAttribute("data-next", c.join("|"));
    });
    document.querySelectorAll("[data-wa-text]").forEach(function (el) {
      el.href = waLink(el.getAttribute("data-wa-text"));
      el.target = "_blank"; el.rel = "noopener";
    });
  }

  /* ---------- tarjetas de líneas ---------- */
  function lineCard(l, i) {
    return '<a class="card line-card reveal" data-d="' + (i % 3) + '" href="linea.html?l=' + l.id + '" aria-label="' + esc(l.nombre) + '">' +
      '<div class="ph">' + img(l.foto, l.nombre + " — pisos de madera", null, "lineas", l.id) + "</div>" +
      '<div class="body"><h3>' + esc(l.nombre) + '</h3><span class="link-arrow">Ver productos</span></div></a>';
  }
  function renderLineas() {
    var el = document.getElementById("grid-lineas"); if (!el) return;
    var limit = parseInt(el.getAttribute("data-limit") || "0", 10);
    var list = limit ? S.lineas.slice(0, limit) : S.lineas;
    el.innerHTML = list.map(lineCard).join("");
  }

  /* ---------- página de línea ---------- */
  function renderLinea() {
    var root = document.getElementById("linea-root"); if (!root) return;
    var id = new URLSearchParams(location.search).get("l") || S.lineas[0].id;
    var l = S.lineas.filter(function (x) { return x.id === id; })[0] || S.lineas[0];
    var url = S.dominio + "/linea.html?l=" + l.id;
    var title = l.nombre + " | Pisos de madera — " + S.marca;
    var desc = l.resumen;
    document.title = title;
    setMeta('meta[name="description"]', "content", desc);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", sized(resolve(l.foto), 1200));

    document.getElementById("linea-h1").textContent = l.nombre;
    document.getElementById("linea-lead").textContent = l.resumen;
    document.getElementById("crumb-linea").textContent = l.nombre;
    var hero = document.getElementById("linea-hero");
    var hc = chain("lineas", l.id, l.foto, 1800);
    hero.src = hc.shift(); if (hc.length) hero.setAttribute("data-next", hc.join("|"));
    hero.alt = l.nombre + " — pisos de madera";
    document.getElementById("linea-wa").href = waLink("Hola, me interesa la " + l.nombre + ". ¿Me pueden dar más información?");

    document.getElementById("linea-chips").innerHTML = S.lineas.map(function (x) {
      return '<a class="chip" href="linea.html?l=' + x.id + '"' + (x.id === l.id ? ' aria-current="page" style="background:var(--ink);color:#fff;border-color:var(--ink)"' : "") + ">" + esc(x.nombre) + "</a>";
    }).join("");

    document.getElementById("linea-grid").innerHTML = l.productos.map(function (p, i) {
      var msg = "Hola, me interesa el piso " + p[0] + " de la " + l.nombre + ". ¿Me pueden dar precio y disponibilidad?";
      return '<article class="card reveal" data-d="' + (i % 3) + '"><div class="ph">' + img(p[1], "Piso de madera " + p[0] + " — " + l.nombre, null, "productos", slug(p[0])) + "</div>" +
        '<div class="body"><h3>' + esc(p[0]) + '</h3><p class="meta">' + esc(p[2]) + "</p>" +
        '<div class="row"><a class="btn wa sm" target="_blank" rel="noopener" href="' + waLink(msg) + '">' + WA_ICON + "Cotizar por WhatsApp</a></div></div></article>";
    }).join("");

    var ld = {
      "@context": "https://schema.org", "@type": "ItemList", name: l.nombre, description: l.resumen,
      itemListElement: l.productos.map(function (p, i) {
        return { "@type": "ListItem", position: i + 1, item: { "@type": "Product", name: p[0], description: p[2], category: l.nombre, image: sized(resolve(p[1]), 800), brand: { "@type": "Brand", name: S.marca } } };
      })
    };
    var s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(ld); document.head.appendChild(s);
  }

  /* ---------- servicios / folletos ---------- */
  function renderServicios() {
    var el = document.getElementById("grid-servicios"); if (!el) return;
    el.innerHTML = S.servicios.map(function (s, i) {
      var n = i < 9 ? "0" + (i + 1) : i + 1;
      return '<div class="svc reveal" data-d="' + (i % 3) + '"><span class="n">' + n + "</span><h3>" + esc(s.titulo) + "</h3><p>" + esc(s.texto) + "</p></div>";
    }).join("");
  }
  function renderFolletos() {
    var el = document.getElementById("grid-folletos"); if (!el) return;
    el.innerHTML = S.folletos.map(function (f, i) {
      var real = f.archivo && f.archivo !== "#";
      return '<article class="card reveal" data-d="' + (i % 3) + '"><div class="ph">' + img(f.foto, "Folleto " + f.titulo, null, "folletos", slug(f.titulo)) + "</div>" +
        '<div class="body"><h3>' + esc(f.titulo) + '</h3><p class="meta">PDF · Descarga gratuita</p>' +
        '<div class="row"><a class="btn sm" ' + (real ? 'href="' + esc(f.archivo) + '" download' : 'href="' + waLink("Hola, me gustaría recibir el folleto: " + f.titulo) + '" target="_blank" rel="noopener"') + ">" + (real ? "Descargar" : "Solicitar por WhatsApp") + "</a></div></div></article>";
    }).join("");
  }

  /* ---------- formulario → WhatsApp ---------- */
  function contactForm() {
    var f = document.getElementById("form-contacto"); if (!f) return;
    var sel = document.getElementById("c-interes");
    if (sel) sel.innerHTML = '<option value="">Selecciona una línea…</option>' + S.lineas.map(function (l) { return "<option>" + esc(l.nombre) + "</option>"; }).join("") + "<option>Otro / no estoy seguro</option>";
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var g = function (id) { return (document.getElementById(id).value || "").trim(); };
      var msg = "Hola, soy " + g("c-nombre") + ".\nInterés: " + (g("c-interes") || "información general") +
        (g("c-m2") ? "\nMetros cuadrados aprox.: " + g("c-m2") : "") +
        "\nMensaje: " + g("c-mensaje") + "\nMi teléfono: " + g("c-tel");
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* ---------- animaciones al hacer scroll ---------- */
  function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* Si una foto no carga, se muestra un fondo de madera en lugar de un hueco */
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (!t || t.tagName !== "IMG" || t.closest(".brand")) return;
    var n = t.getAttribute("data-next");
    if (n) {                                   // probar la siguiente opción (foto de stock)
      var a = n.split("|"), nx = a.shift();
      t.removeAttribute("srcset");
      if (a.length) t.setAttribute("data-next", a.join("|")); else t.removeAttribute("data-next");
      t.src = nx;
    } else {
      t.style.opacity = "0";
    }
  }, true);

  /* ---------- inicio ---------- */
  function init() {
    buildChrome(); applyImages();
    renderLineas(); renderLinea(); renderServicios(); renderFolletos(); contactForm();
    reveal();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
