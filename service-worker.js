const CACHE_NAME = 'srm-vec-english-v3';

// Core assets + homepage
const CORE_ASSETS = [
  '/SRM-VEC-English-PWA/',
  '/SRM-VEC-English-PWA/index.html',
  '/SRM-VEC-English-PWA/style.css',
  '/SRM-VEC-English-PWA/manifest.json',
  '/SRM-VEC-English-PWA/icons/icon-192.png',
  '/SRM-VEC-English-PWA/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Fetch handler — cache-then-network strategy
self.addEventListener('fetch', event => {
  const { request } = event;

  // This check is fine because request.url is the full URL
  if (request.url.includes('/quests/')) {
    event.respondWith(
      caches.match(request).then(response => {
        const fetchPromise = fetch(request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(request, networkResponse.clone());
              });
            }
            return networkResponse;
          })
          .catch(() => response); // Fallback to cache on network error
        return response || fetchPromise; // Serve from cache first
      })
    );
    return;
  }

  // Default for other requests
  event.respondWith(
    caches.match(request).then(response => {
      const fetchPromise = fetch(request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => response); // Fallback to cache on network error
      return response || fetchPromise; // Serve from cache first
    })
  );
});
