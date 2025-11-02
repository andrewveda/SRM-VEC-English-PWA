const CACHE_NAME = 'srm-vec-english-clean-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
];

// 1️⃣ Install: cache core files fresh
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // activate immediately
});

// 2️⃣ Activate: clear *everything* except current cache
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.map(name => {
        if (name !== CACHE_NAME) return caches.delete(name);
      }));
      await clients.claim(); // take control instantly
    })()
  );
});

// 3️⃣ Fetch: network-first with cache fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // cache clone if OK and not an Apps Script call
        if (
          response &&
          response.status === 200 &&
          !event.request.url.includes('script.google.com')
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then(r => r || caches.match('./index.html')))
  );
});

// 4️⃣ Background sync for analytics (optional)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-analytics') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  try {
    const pending = JSON.parse(localStorage.getItem('pendingSync') || '[]');
    for (const data of pending) {
      await fetch('https://script.google.com/macros/s/AKfycbxA0lRkERWFt2cYfmm04IQioaG4-21k5VFF5CFKP30zyVaJXM5_27PL3v8JIZEweK3u/exec', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
    localStorage.removeItem('pendingSync');
  } catch (err) {
    console.error('Background sync failed:', err);
  }
}

// 5️⃣ Message handler — allow manual skip waiting
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
