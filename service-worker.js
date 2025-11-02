const CACHE_NAME = 'srm-vec-english-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache dynamic content (except API calls)
          if (!event.request.url.includes('script.google.com')) {
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
          }

          return response;
        }).catch(() => {
          // If both cache and network fail, show offline page
          return caches.match('./index.html');
        });
      })
  );
});

// Background sync for offline data
self.addEventListener('sync', event => {
  if (event.tag === 'sync-analytics') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  try {
    const pending = await getStoredData('pendingSync');
    if (pending && pending.length > 0) {
      for (const data of pending) {
        await fetch('https://script.google.com/macros/s/AKfycbxA0lRkERWFt2cYfmm04IQioaG4-21k5VFF5CFKP30zyVaJXM5_27PL3v8JIZEweK3u/exec', {
          method: 'POST',
          body: JSON.stringify(data)
        });
      }
      // Clear pending sync after successful upload
      await clearStoredData('pendingSync');
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Helper functions for IndexedDB (future enhancement)
async function getStoredData(key) {
  // For now, using localStorage through message passing
  return null;
}

async function clearStoredData(key) {
  // For now, using localStorage through message passing
  return null;
}

// Listen for messages from main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
