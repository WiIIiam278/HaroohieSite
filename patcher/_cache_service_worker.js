/*
	Cache Service Worker template by mrc 2019
	mostly based in:
	https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/basic/service-worker.js
	https://github.com/chriscoyier/Simple-Offline-Site/blob/master/js/service-worker.js
	https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e	
	
	Note for GitHub Pages:
	there can be an unexpected behaviour (cache not updating) when site is accessed from
	https://user.github.io/repo/ (without index.html) in some browsers (Firefox)
	use absolute paths if hosted in GitHub Pages in order to avoid it
	also invoke sw with an absolute path:
	navigator.serviceWorker.register('/repo/_cache_service_worker.js', {scope: '/repo/'})
*/


/* MOD: fix old caches for mrc */
caches.keys().then(function(cacheNames){
	for(var i=0; i<cacheNames.length; i++){
		if(
			cacheNames[i]==='runtime' ||
			/^precache-\w+$/.test(cacheNames[i]) ||
			/^v?\d+\w?$/.test(cacheNames[i])
		){
			console.log('deleting old cache: '+cacheNames[i]);
			caches.delete(cacheNames[i]);
		}
	}
});

var PRECACHE_ID='rom-patcher-js';
var PRECACHE_VERSION='v14c';
var PRECACHE_URLS=[
	'../','.../patch.html',
	'../manifest.json',
	'../style/favicon.png',
	'../style/logo114.png',
	'../style/logo144.png',
	'../style/logo192.png',
	'../style/RomPatcher.css',
	'../js/RomPatcher.js',
	'../js/locale.js',
	'../js/worker_apply.js',
	'../js/worker_create.js',
	'../js/worker_crc.js',
	'../js/MarcFile.js',
	'../js/crc.js',
	'../js/zip.js/zip.js',
	'../js/zip.js/z-worker.js',
	'../js/zip.js/inflate.js',
	'../js/formats/ips.js',
	'../js/formats/ups.js',
	'../js/formats/aps.js',
	'../js/formats/bps.js',
	'../js/formats/rup.js',
	'../js/formats/ppf.js',
	'../js/formats/pmsr.js',
	'../js/formats/vcdiff.js',
	'../js/formats/zip.js'
];



// install event (fired when sw is first installed): opens a new cache
self.addEventListener('install', evt => {
	evt.waitUntil(
		caches.open('precache-'+PRECACHE_ID+'-'+PRECACHE_VERSION)
			.then(cache => cache.addAll(PRECACHE_URLS))
			.then(self.skipWaiting())
	);
});


// activate event (fired when sw is has been successfully installed): cleans up old outdated caches
self.addEventListener('activate', evt => {
	evt.waitUntil(
		caches.keys().then(cacheNames => {
			return cacheNames.filter(cacheName => (cacheName.startsWith('precache-'+PRECACHE_ID+'-') && !cacheName.endsWith('-'+PRECACHE_VERSION)));
		}).then(cachesToDelete => {
			return Promise.all(cachesToDelete.map(cacheToDelete => {
				console.log('delete '+cacheToDelete);
				return caches.delete(cacheToDelete);
			}));
		}).then(() => self.clients.claim())
	);
});


// fetch event (fired when requesting a resource): returns cached resource when possible
self.addEventListener('fetch', evt => {
	if(evt.request.url.startsWith(self.location.origin)){ //skip cross-origin requests
		evt.respondWith(
			caches.match(evt.request).then(cachedResource => {
				if (cachedResource) {
					return cachedResource;
				}else{
					return fetch(evt.request);
				}
			})
		);
	}
});