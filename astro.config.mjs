import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Único lugar para configurar el dominio.
// Para el sitio público definitivo usa: 'https://plazaliberacion.com'
const site = 'https://plazaliberacion.com';

// Modo "server" para poder desplegar endpoints dinámicos en Cloudflare
// Workers. Las páginas estáticas individuales (HTML) se prerrenderizan
// mediante `export const prerender = true` para preservar SEO y reducir
// el consumo de CPU en el borde.
//
// El sitemap sólo debe contener URL canónicas: se normalizan a barra final
// y se eliminan duplicados (la portada sigue siendo `https://.../`).
const seenSitemapUrls = new Set();

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) => !/\/404(?:\.html|\/)?$/.test(new URL(page).pathname),
      serialize: (item) => {
        const url = new URL(item.url);
        if (!url.pathname.endsWith('/')) url.pathname += '/';
        const canonical = url.href;
        if (seenSitemapUrls.has(canonical)) return undefined;
        seenSitemapUrls.add(canonical);
        return { ...item, url: canonical };
      }
    })
  ],
  vite: { plugins: [tailwindcss()] }
});
