// Pallankuzhi Service Worker v6.0
// © 2026 Quixote Club. All Rights Reserved.
const CACHE_NAME = 'pallankuzhi-v6';
const ASSETS_TO_CACHE = [
  '.',
  'index.html',
  'manifest.json',
  'ads.txt',
  'icons/icon-48.png',
  'icons/icon-72.png',
  'icons/icon-96.png',
  'icons/icon-144.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // Only cache assets that exist — icons may be placeholders
      Promise.allSettled(ASSETS_TO_CACHE.map(url => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Network first for everything — always get latest game version
self.addEventListener('fetch', event => {
  // Skip non-GET and cross-origin (Firebase, fonts, CDN) — let them go direct
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
