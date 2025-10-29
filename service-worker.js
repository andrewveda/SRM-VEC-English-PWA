const CACHE_NAME = 'srm-vec-english-v1';
const urlsToCache = [
  '/', // main page
  '/index.html',
  '/quests/wh-questions-2.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/styles.css',
  '/script.js'
];

// Install and pre-cache core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate and clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// Fetch from cache, fallback to network, then update cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        }).catch(() => response);
        return response || fetchPromise;
      })
  );
});
