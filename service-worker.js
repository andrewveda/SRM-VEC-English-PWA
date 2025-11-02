const CACHE_NAME = "vec-english-dashboard-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./style.css",
];

// These are dynamic data endpoints to cache optionally
const DYNAMIC_ENDPOINTS = [
  "https://script.google.com/macros/s/AKfycbzPmoVR2sfZFgrh7YGxag018JF3HtIkDq3AG65Tt_psWgWLGvbERINZw7lP9wuupbVd/exec", // USER_DATA_URL
  "https://script.google.com/macros/s/AKfycbwB2ax4j0XVtl9pGp5b-JOQE4_fT5JRW9z2_4ziZjAhLjuKLpywUHHavv6I163njiYk/exec", // ANALYTICS_URL
];

/* ===== INSTALL ===== */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Pre-caching assets...");
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

/* ===== ACTIVATE ===== */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  console.log("Service Worker: Activated and old caches cleared.");
  self.clients.claim();
});

/* ===== FETCH HANDLER ===== */
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Handle API requests separately
  if (DYNAMIC_ENDPOINTS.some((endpoint) => url.href.startsWith(endpoint))) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Handle other requests (HTML, CSS, JS, etc.)
  if (req.mode === "navigate") {
    event.respondWith(networkFirst(req));
  } else {
    event.respondWith(cacheFirst(req));
  }
});

/* ===== STRATEGIES ===== */
async function cacheFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);
  if (cached) return cached;

  try {
    const fresh = await fetch(req);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (err) {
    return cached || offlineFallback();
  }
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(req);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(req);
    return cached || offlineFallback();
  }
}

/* ===== OFFLINE FALLBACK PAGE ===== */
async function offlineFallback() {
  return new Response(
    `
    <html>
      <head><title>Offline</title></head>
      <body style="font-family: sans-serif; text-align: center; padding: 2rem;">
        <h1>📡 You’re Offline</h1>
        <p>Your progress will sync when back online.</p>
        <button onclick="location.reload()">🔄 Retry</button>
      </body>
    </html>
    `,
    { headers: { "Content-Type": "text/html" } }
  );
}

/* ===== OPTIONAL: BACKGROUND SYNC (queued analytics) ===== */
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-analytics") {
    event.waitUntil(flushAnalyticsQueue());
  }
});

async function flushAnalyticsQueue() {
  const stored = await self.registration.periodicSync?.getTags?.() || [];
  console.log("Flushing analytics queue:", stored.length);
}
