importScripts("https://sk8dice.app/precache-manifest.a472cd7c45ef1a2b499bedf241603c27.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.core.setCacheNameDetails({ prefix: 'just-breathe' });

workbox.routing.registerRoute(
  /^https:\/\/unpkg.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'basscss',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxEntries: 60,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/fonts.(gstatic|googleapis).com(.*)/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  }),
);

// install new service worker when ok, then reload page.
self.addEventListener('message', (msg) => {
  if (msg.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
