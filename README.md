# Plaza de la Liberación — sitio Astro

Sitio monolingüe (es-MX), una sola página, diseñado específicamente para Plaza de la Liberación en Guadalajara, Jalisco, México.

## Dominio

**`plazaliberacion.com`** — configurado en `astro.config.mjs` como `site: 'https://plazaliberacion.com'`. Es el único lugar donde debe modificarse; el resto del sitio lo lee desde `src/lib/seo.ts`.

## Stack

- Astro 7.3.2 (output `static`)
- Tailwind CSS 4.3.3 vía `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3 (dentro del rango ^5 || ^6 soportado por `@astrojs/check` 0.9.10)
- `@astrojs/cloudflare` 14.3.1 (adapter para Cloudflare Pages/Workers)
- `@astrojs/sitemap` 3.7.4
- PWA: `public/manifest.webmanifest` + `public/sw.js` (cache-first para recursos estáticos)
- pnpm 10.11.1 / Node 22.16.0 LTS

## Comandos

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## SEO y datos estructurados

- **Title / Description / Canonical / OG / Twitter / hreflang** inyectados desde `src/layouts/BaseLayout.astro`.
- **JSON-LD** inyectado en `<head>`:
  - `TouristAttraction` con `@id`, `image`, `isAccessibleForFree`, `geo`, `address`, `hasMap`, `sameAs`, `containedInPlace`.
  - `WebSite` y `WebPage` enlazados por `@id`.
  - `BreadcrumbList` con la jerarquía Plaza de la Liberación → Guadalajara → Jalisco → México.
  - `FAQPage` con 7 preguntas frecuentes para featured snippets.
- **HTML semántico**: H1 único, jerarquía H2 con ciudad, lugares cercanos e historia.
- **Anchor linking**: cada texto clave (全称, 简称, 城市, 省, 国家) está enlazado semánticamente en el primer párrafo y en las secciones About / Location / Landmarks / History.
- **Mapa**: iframe de Google Maps con `referrerpolicy="strict-origin-when-cross-origin"` y enlace directo a `maps.app.goo.gl`.
- **Outbound authority links**: SECTURJAL, Ayuntamiento de Guadalajara.

## Reseñas de Google Maps (cumplimiento de TOS)

- La calificación agregada (4.7/5) y el número de reseñas (14,441) se muestran sólo como **resumen numérico** en la UI.
- El **texto** de las reseñas individuales **NO** se reproduce ni se inyecta en JSON-LD (esto infringiría los TOS de Google Maps).
- Cada mención de las reseñas declara explícitamente: **"同步自 Google 地图用户评价，同步时间 2026 年 9 月；版权归原作者与 Google 地图所有"**, con un enlace directo al listado oficial en Google Maps.
- La última sincronización declarada es **2026 年 9 月**.

## PWA

- `public/manifest.webmanifest` declara el sitio como aplicación instalable.
- `public/sw.js` registra una estrategia cache-first sin tracking ni almacenamiento personal.
- El registro se inyecta inline al final del `<body>` (`BaseLayout.astro`).

## Fotografías

Las fotografías son SVG vectoriales originales que sirven como placeholders. Antes del lanzamiento público se recomienda sustituirlas por imágenes reales de Plaza de la Liberación obtenidas de Wikimedia Commons. **本网站所展示的所有图片产权及版权均归原摄影者所有.** Consulta `IMAGE-CREDITS.md` para autoría/licencia.

## Variables de la entidad

Toda la información del sitio (nombre, dirección, coordenadas, fuentes oficiales, etc.) se centraliza en `src/lib/seo.ts`. Si necesitas actualizar un dato, cambia ahí y todos los componentes, JSON-LD y meta-tags se regenerarán automáticamente.