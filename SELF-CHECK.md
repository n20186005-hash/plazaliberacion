# Self-check status

The project structure and source are prepared, but the execution environment used for packaging could not resolve `registry.npmjs.org` (DNS `EAI_AGAIN`). Because of that network failure, a clean `pnpm install --frozen-lockfile`, `pnpm check`, and `pnpm build` could not be truthfully completed here.

Do **not** treat this note as a successful CI attestation. Run the commands in `README.md` on a networked machine before production deployment.

## Layout snapshot

```
h:\GitHub\plazaliberacion\
├── astro.config.mjs          # site=https://plazaliberacion.com, output=static
├── package.json
├── pnpm-lock.yaml
├── README.md
├── IMAGE-CREDITS.md
├── SELF-CHECK.md
├── tsconfig.json
├── wrangler.jsonc
├── public\
│   ├── icons\                 # favicon + PWA icons (SVG)
│   ├── images\                # SVG placeholders de la plaza y sus alrededores
│   ├── manifest.webmanifest   # PWA manifest
│   ├── sw.js                  # Service Worker
│   └── robots.txt
└── src\
    ├── components\
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── AboutSection.astro
    │   ├── ReviewsBlock.astro
    │   ├── LocationSection.astro
    │   ├── LandmarksSection.astro
    │   ├── HistorySection.astro
    │   ├── FAQSection.astro
    │   ├── SourcesSection.astro
    │   └── Footer.astro
    ├── layouts\
    │   └── BaseLayout.astro   # TDK + OG + JSON-LD (TouristAttraction/WebSite/WebPage/Breadcrumb/FAQ)
    ├── lib\
    │   └── seo.ts             # Single source of truth
    ├── pages\
    │   └── index.astro
    ├── styles\
    │   └── global.css
    └── env.d.ts
```