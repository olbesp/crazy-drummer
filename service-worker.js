"use strict";var precacheConfig=[["/crazy-drummer/index.html","44c83adb79b9448d02021984acd2edd4"],["/crazy-drummer/static/css/main.5edc184d.css","caaffac565908974ca105da17263fb90"],["/crazy-drummer/static/js/main.1b9aeea3.js","a7b7034e6b555f16621b34cfce5e3b75"],["/crazy-drummer/static/media/bark.210dd8b4.mp3","210dd8b470695241d3635ed5c2b7f9c5"],["/crazy-drummer/static/media/glass.626d1f99.mp3","626d1f999ab64d282f7f130b8e95ffa3"],["/crazy-drummer/static/media/hat1.6406ec92.mp3","6406ec92e980a552c667892c78718677"],["/crazy-drummer/static/media/hat1.9d320f4a.mp3","9d320f4ae62ba687fa36178099ee0ae7"],["/crazy-drummer/static/media/hat1.e97efe8e.mp3","e97efe8e686fc98d1cb1573014b6bf7d"],["/crazy-drummer/static/media/hat1.f2bc0c88.mp3","f2bc0c8872e20459033f830cc793e1ff"],["/crazy-drummer/static/media/hat2.4d6e82c9.mp3","4d6e82c91af21ff2b5f58e3db9c98caa"],["/crazy-drummer/static/media/hat2.577f1217.mp3","577f12177f0908faafd0efd6ce116ca3"],["/crazy-drummer/static/media/hat2.80472631.mp3","80472631f6b65277c9f8f6874224d2ed"],["/crazy-drummer/static/media/hat2.9f3674cf.mp3","9f3674cf3e404ade24d5a3b279614107"],["/crazy-drummer/static/media/hat3.28e35667.mp3","28e35667e9b5ab39897223066580f8ff"],["/crazy-drummer/static/media/hat3.4d803827.mp3","4d803827104e7d0cbef851f6ba030725"],["/crazy-drummer/static/media/hat3.5478b3f5.mp3","5478b3f516095cff11fd1aa0c29998a4"],["/crazy-drummer/static/media/hat3.ef494787.mp3","ef494787f62dc5b70bcdd69fcd7d34ba"],["/crazy-drummer/static/media/hat4.2605f7ec.mp3","2605f7ec3755d74ee19e770f4c32ee04"],["/crazy-drummer/static/media/hat4.797b2b00.mp3","797b2b007a2308b43f37d7766340f784"],["/crazy-drummer/static/media/hat4.97bdb26d.mp3","97bdb26d36c72c52b93b2dd83f59cb7e"],["/crazy-drummer/static/media/hat4.e8cd1699.mp3","e8cd1699f6740b30540580d676c36adb"],["/crazy-drummer/static/media/kick.393bdb03.mp3","393bdb038c0ef40c2d20c248d972a3e0"],["/crazy-drummer/static/media/kick.49b9143d.mp3","49b9143d923a67e551ec7287011a8e3f"],["/crazy-drummer/static/media/kick.7460eecd.mp3","7460eecd3bad39cc389c0484b6bafd74"],["/crazy-drummer/static/media/kick.c7ba4d8a.mp3","c7ba4d8a076f1c084d4ced3a28a1b0b1"],["/crazy-drummer/static/media/scream.5eeee4e3.mp3","5eeee4e39c3a6d62a01ca9b1fcb21a04"],["/crazy-drummer/static/media/sheep.c06ece7a.mp3","c06ece7a8bbfdc4d10b6e4c447f54ebb"],["/crazy-drummer/static/media/snare1.0833bef8.mp3","0833bef8cf83d4e53ead46afe5535d37"],["/crazy-drummer/static/media/snare1.df6698ad.mp3","df6698ad5bd52e45215e8fca4c10012e"],["/crazy-drummer/static/media/snare1.e0a46c03.mp3","e0a46c035ca8605843ed1da38b1b89d7"],["/crazy-drummer/static/media/snare1.e5445023.mp3","e544502369429e43da364a93bac4ffe4"],["/crazy-drummer/static/media/snare2.164f38fc.mp3","164f38fc0f4f21d68a9fce0eb04c49ed"],["/crazy-drummer/static/media/snare2.28e9da1b.mp3","28e9da1b6006fe4b6b8e7e2590558fac"],["/crazy-drummer/static/media/snare2.c61fc427.mp3","c61fc427f2283151c4e59d85c0338137"],["/crazy-drummer/static/media/snare2.f088c477.mp3","f088c477f1c3ac2a29a51f5f91c435a2"],["/crazy-drummer/static/media/snare3.43e643bc.mp3","43e643bce589245ee0b65380ad8327a3"],["/crazy-drummer/static/media/snare3.74f26990.mp3","74f26990d11783b7ce2a37f5a4fcc1a3"],["/crazy-drummer/static/media/snare3.aeff9b1d.mp3","aeff9b1db558930b3463430731e01828"],["/crazy-drummer/static/media/snare3.c97a0d94.mp3","c97a0d94d740e88e406a4ab0289c6da9"],["/crazy-drummer/static/media/stick.2fc8690b.mp3","2fc8690ba74228d289974a3c51c98989"],["/crazy-drummer/static/media/stick.9aa1d96b.mp3","9aa1d96b33c93031d09abb39d000189b"],["/crazy-drummer/static/media/stick.9d7d4049.mp3","9d7d4049423679fe263b7b812cf1e8bb"],["/crazy-drummer/static/media/stick.a9adb5ae.mp3","a9adb5ae507ae549433a970bc2c3e604"],["/crazy-drummer/static/media/wrong.093eed4f.mp3","093eed4f4091d0792b60b33a1d98448c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=a),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,r,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(r)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var r=new URL(a).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,a){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],r=e[1],c=new URL(a,self.location),t=createCacheKey(c,hashParamName,r,/\.\w{8}\./);return[c.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!a.has(r)){var c=new Request(r,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+r+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(r,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!a.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,c),a=urlsToCacheKeys.has(r));var t="/crazy-drummer/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL(t,self.location).toString(),a=urlsToCacheKeys.has(r)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});