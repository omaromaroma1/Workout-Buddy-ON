/* RepRise service worker — offline app shell + demo-image caching */
var CACHE = 'reprise-v4';
var IMG_CACHE = 'reprise-img-v1';
var ASSETS = [
  './',
  'index.html',
  'css/styles.css',
  'js/exercises.js',
  'js/app.js',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(ASSETS.map(function (a) { return c.add(a).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE && k !== IMG_CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // Demo photos from the CDN: cache-first into a separate, capped cache (works offline after first view).
  if (url.hostname.indexOf('jsdelivr.net') !== -1) {
    e.respondWith(
      caches.open(IMG_CACHE).then(function (cache) {
        return cache.match(req).then(function (hit) {
          if (hit) return hit;
          return fetch(req).then(function (res) {
            if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
            return res;
          }).catch(function () { return hit; });
        });
      })
    );
    return;
  }

  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(function () { return caches.match('index.html').then(function (r) { return r || caches.match('./'); }); }));
    return;
  }

  e.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        if (res && res.status === 200) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
        return res;
      });
    })
  );
});
