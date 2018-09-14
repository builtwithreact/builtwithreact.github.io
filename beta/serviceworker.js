importScripts('./static/js/workbox-sw.js');
workbox.skipWaiting();
workbox.clientsClaim();


workbox.routing.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/,
    workbox.strategies.cacheFirst({
        cacheName: 'googleapis',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "images/favicon.ico",
    "revision": "54b202d3dbc23803cbf36254125d944c"
  },
  {
    "url": "images/icon-128x128.png",
    "revision": "7db80cd8819018c03a46a15cbe05771a"
  },
  {
    "url": "images/icon-144x144.png",
    "revision": "690e571f64833d69f90df4b8336fc877"
  },
  {
    "url": "images/icon-152x152.png",
    "revision": "3c910fe1f77e2ab599f88ce4d6437d7a"
  },
  {
    "url": "images/icon-192x192.png",
    "revision": "ce5344a88b2924e4f7583f749ebc408f"
  },
  {
    "url": "images/icon-384x384.png",
    "revision": "31e50649f44b2114db614e4b66bd29a7"
  },
  {
    "url": "images/icon-512x512.png",
    "revision": "1a2f2ff65153b59eaf7e84a0af8ddc6b"
  },
  {
    "url": "images/icon-72x72.png",
    "revision": "54b202d3dbc23803cbf36254125d944c"
  },
  {
    "url": "images/icon-96x96.png",
    "revision": "42c3f8ee6eabd1048fb76789f9a7acad"
  },
  {
    "url": "index.html",
    "revision": "565fc9ce2fc27973b5f91a2615a48d26"
  },
  {
    "url": "static/css/main.b7f10d16.css",
    "revision": "f1cc481b0600835b580a7e5302882d1f"
  },
  {
    "url": "static/js/main.287b2f5d.js",
    "revision": "d5e0da31598630228afe44e2988b800d"
  },
  {
    "url": "static/js/workbox-sw.js",
    "revision": "a89d01bc635a434df4c9696bb6fbcba7"
  },
  {
    "url": "static/media/Sample.4f64ffbb.png",
    "revision": "4f64ffbbc9e82fa3c0ba0b194e3ff22b"
  }
]);