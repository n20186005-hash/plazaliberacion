# Plaza de la Liberación, Guadalajara

Independent nonprofit tourism and public-education guide in Spanish, with a fixed-place weather forecast. No government or venue affiliation. Sources, dated Maps reference and operational limits are visible on the page.

## Preserved native architecture

Astro server output with its existing Cloudflare adapter and a prerendered homepage. `/api/weather` remains a dynamic Worker endpoint; do not replace this architecture with a static fallback. A thin wrapper around the native Astro adapter handles HTTP/www canonical redirects and noindex errors before static asset resolution; the dynamic API still runs through that adapter. Existing PWA caches static guide assets, bypasses API requests and avoids home-page fallbacks for unknown URLs.

Exact package versions, frozen lock, Node 22.16.0 and pnpm 10.11.1 remain unchanged; Wrangler 4.131.2. Existing build allowlist unchanged. Install with `pnpm install --frozen-lockfile`, run `pnpm run check` and `pnpm run build`. The adapter emits `dist/server/wrangler.json`; use the repository's normal Wrangler deploy discovery, with dry-run for local preparation. A dry-run is not deployment. Project name is plazaliberacion; no new domain bindings.

Image provenance is in IMAGE-CREDITS.md. Weather data: Open-Meteo, CC BY 4.0, summarized for the guide with visible credit. Private performance exports and run-specific validation evidence remain outside this public repository.
