// Force reset for all users — 28 Nov 2025
const CACHE_NAME = "vec-english-cache-v3";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignore OPTIONS (CORS preflight)
  if (req.method === "OPTIONS") return;

  // Supabase should never be cached
  if (url.origin.includes("supabase.co")) {
    event.respondWith(fetch(req));
    return;
  }

  // Non-GET must bypass cache
  if (req.method !== "GET") {
    event.respondWith(fetch(req));
    return;
  }

  // Navigation fallback
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Cache-first for static files
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req).then((res) => {
        // Cache only known static assets
        if (
          FILES_TO_CACHE.includes(req.url) ||
          req.url.startsWith(self.location.origin)
        ) {
          caches.open(CACHE_NAME).then((cache) => cache.put(req, res.clone()));
        }
        return res;
      });
    })
  );
});
