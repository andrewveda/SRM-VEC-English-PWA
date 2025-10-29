
const CACHE_NAME = 'srm-vec-english-v1';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Install - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

// Fetch - Network-first, then cache fallback. Any successful network responses are cached.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Only handle GET requests
  if (req.method !== 'GET') return;

  event.respondWith(
    fetch(req).then(networkRes => {
      // Clone and store in cache
      caches.open(CACHE_NAME).then(cache => {
        try {
          cache.put(req, networkRes.clone());
        } catch(e) {
          // ignore opaque responses that can't be cached by some browsers
        }
      });
      return networkRes.clone();
    }).catch(() => {
      // On failure (offline), try cache
      return caches.match(req).then(cached => {
        if (cached) return cached;
        // fallback to index.html for navigation requests
        if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
          return caches.match('/index.html');
        }
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
