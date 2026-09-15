import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Único lugar para configurar el dominio.
// Para el sitio público definitivo usa: 'https://plazaliberacion.com'
const site = 'https://plazaliberacion.com';

// Modo "server" para poder desplegar endpoints dinámicos en Cloudflare
// Workers. Las páginas estáticas individuales (HTML) se prerenderizan
// mediante `export const prerender = true` para preservar SEO y reducir
// el consumo de CPU en el borde.
export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] }
});