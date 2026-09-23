const CACHE='hora-santa-v33';
const ASSETS=['./','./index.html','./styles.css?v=24','./app.js?v=22','./manifest.webmanifest','./assets/images/eucaristia-adoracao.png','./assets/images/rosario-santa-maria.png','./assets/images/adorar-agora.png','./assets/images/simbolos-selos.png','./assets/images/layout-hora-santa.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
