'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9bf16e24f94fb584c2934e4cce128741",
"index.html": "aad05b0b631b4a23cf5aec0401bdebf9",
"/": "f3717a5df55efd03f2d0837cc18a3e4f",
"main.dart.js": "6fda14f1b9242b8c4bed7a95b2755b85",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d10fce8bac7ae911ac3b0422c4309926",
"assets/AssetManifest.json": "6e378fc12ae74354003044be54df5dc3",
"assets/NOTICES": "378e4caefdb7d1e2d78b05171a5cb633",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "e7580b691389fe412e5e417bbb0a08cf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/1.5x/account_safety_icon.png": "c10333508932ff36815352412c968dc9",
"assets/assets/images/1.5x/reward_feedback_icon.png": "20f2a7e662a82261fe2858fab0ae790f",
"assets/assets/images/1.5x/order_sms_notify_icon.png": "2f8f438f3cbaab0b89f768eb87ae4519",
"assets/assets/images/1.5x/my_chat_box.png": "fee972b83c2e0b7271181bb77d0952d3",
"assets/assets/images/1.5x/trade_flow_icon.png": "14851ae0e890b0840716b9532e381565",
"assets/assets/images/1.5x/app_version_icon.png": "8e3f739c91a80a578cff2170a63ff0af",
"assets/assets/images/1.5x/collection_payment_account_icon.png": "1599133543e6c60ff410cca252108b5b",
"assets/assets/images/1.5x/others_chat_box.png": "989ecf8be5d8c413b152d1fe7489be17",
"assets/assets/images/1.5x/total_property_icon.png": "c4b186686d8d6abfa28123b020ba93e2",
"assets/assets/images/logo_lockup_flutter_vertical.png": "ba4b1a14585b212fa1fcb6fce41e647c",
"assets/assets/images/dart_dark.png": "bbe3eec92e8132c1fe26422c853b913a",
"assets/assets/images/2.0x/app_default_bg.png": "6c58291c28d8247584eb491d89750f1a",
"assets/assets/images/2.0x/pwd_icon.png": "de6941117514b1d1a14a5765def5870c",
"assets/assets/images/2.0x/mail.png": "062a1ccdf71b34b2405343c0183afb6f",
"assets/assets/images/2.0x/img_text_tutorial_unselect.png": "f26b81e41cdbdc34502c0f1320d4824d",
"assets/assets/images/2.0x/wx.png": "37780c6783fefdee4fe408fbfbff5984",
"assets/assets/images/2.0x/mine_selected.png": "ec03d62cd48e9333b1d91357b053b844",
"assets/assets/images/2.0x/choice_img_enable_icon.png": "d7ec2efcac599e58fcd8f57fad890094",
"assets/assets/images/2.0x/rmb.png": "eefeef72e6e9bc0b2599f2d0c80340c8",
"assets/assets/images/2.0x/main_selected.png": "bb3e53b9f77602177984d2d35cee93c7",
"assets/assets/images/2.0x/close_eye.png": "d05cc7be160adfaca7227f3625a67697",
"assets/assets/images/2.0x/customer_service.png": "7dcb7b83e6c7d34e6c2ab1d98bcc71b2",
"assets/assets/images/2.0x/order_selected.png": "adc2dc5fd7cf76a61c94f776e3e23d04",
"assets/assets/images/2.0x/video_tutorial_unselect.png": "177c488cb40019a6c5533bac4a5d9f93",
"assets/assets/images/2.0x/trading_unselect.png": "37ae1bc492bec9eaa9d114759b289733",
"assets/assets/images/2.0x/tutorial.png": "2258b4cf4ffb3791bcb534532053099d",
"assets/assets/images/2.0x/main_unselect.png": "1d8c72150be4dc6a86983d7970f4f777",
"assets/assets/images/2.0x/open_eye.png": "a68761d0460ce005a38a0d34f6911ea0",
"assets/assets/images/2.0x/trading_selected.png": "3f8837e5a71128a113c9fa8f4b274c87",
"assets/assets/images/2.0x/qq.png": "380c8bb753a282e1b8d78dc8480b7dfe",
"assets/assets/images/2.0x/success.png": "30a4fc53a79f94a57b1fce0f321609d1",
"assets/assets/images/2.0x/video_tutorial_selected.png": "1271c24b4b15386c97b6ab9491be4693",
"assets/assets/images/2.0x/order_unselect.png": "eadbde06074321fa1405f2d057b5dd64",
"assets/assets/images/2.0x/waiting.png": "c73796c1a8fb537287cb842786e0ba75",
"assets/assets/images/2.0x/bank.png": "2ad93a41cd9b5dda78ef2fede97c2179",
"assets/assets/images/2.0x/face_auth_suc.png": "e446ad4eab784a61f5637a0fb280fb20",
"assets/assets/images/2.0x/open.png": "36b7403bea0afb65216364b53aec9a7e",
"assets/assets/images/2.0x/account_icon.png": "e30f404e7382489faac820d63f6f4a14",
"assets/assets/images/2.0x/phone_icon.png": "62811954266a8a972107756825b5e57a",
"assets/assets/images/2.0x/img_text_tutorial_selected.png": "d733dd6827eb1c0225af0bf98d204a94",
"assets/assets/images/2.0x/collection_payment_account.png": "ac9351ba4e94572d7bfd4e86e1d7c099",
"assets/assets/images/2.0x/mine_unselect.png": "6a5319faf3ec50348d3e7499e32ef981",
"assets/assets/images/2.0x/fail.png": "2a2d58af2217d9cbb5231939f7cca8a3",
"assets/assets/images/2.0x/zfb.png": "e5b24e3311a55de3ff19ef52802abede",
"assets/assets/images/2.0x/scan.png": "64034cef677cb634f3c58a36efa12c1b",
"assets/assets/images/2.0x/choice_img_disable_icon.png": "a07ef638ff6aaae4259a92a4ff500631",
"assets/assets/images/android12splash.png": "1b156e18a51eec7a6c707e7f32f323fb",
"assets/assets/images/logo_lockup_flutter_vertical_wht.png": "0bdc069af57528e88f6c6b891ad57b8d",
"assets/assets/images/dart.png": "735531cda11c098d9eed28ead619ab41",
"currencytrade/index.html": "f3717a5df55efd03f2d0837cc18a3e4f",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
