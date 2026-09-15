# Plaza de la Liberación — sitio Astro

Sitio monolingüe (es-MX), una sola página, diseñado específicamente para Plaza de la Liberación en Guadalajara.

## Stack
- Astro 7.3.2
- Tailwind CSS 4.3.3 vía @tailwindcss/vite 4.3.3
- TypeScript 6.0.3 (dentro del rango ^5 || ^6 soportado por @astrojs/check 0.9.10)
- @astrojs/cloudflare 14.3.1
- @astrojs/sitemap 3.7.4, habilitado solo cuando `site` tiene valor
- pnpm 10.11.1
- Node 22.16.0 LTS

## Dominio
Configura el dominio **solo** en `astro.config.mjs`, variable `site`. Si está vacío, el proyecto compila sin canonical absoluto ni sitemap.

## Comandos
```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Fotografías
Las fotografías incluidas son imágenes reales de Plaza de la Liberación obtenidas de Wikimedia Commons. Consulta `IMAGE-CREDITS.md` para autoría/licencia.
