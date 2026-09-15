/* Plaza Liberación — Service Worker
 * Estrategia simple de cache-first para activos estáticos.
 * Sin almacenamiento de datos personales. Sin tracking.
 */
const CACHE_VERSION = 'plaza-liberacion-v1';
const PRECACHE_URLS = [
  '/',
  '/manifest.webmanifest',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  '/icons/apple-touch-icon.svg',
  '/icons/favicon.svg',
  '/images/plaza-hero.svg',
  '/images/plaza-fuente.svg',
  '/images/plaza-hidalgo.svg',
  '/images/plaza-degollado.svg',
  '/images/palacio-gobierno.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match('/'));
    })
  );
});