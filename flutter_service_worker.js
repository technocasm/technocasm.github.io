'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5cdd27c7ab75cefdbbbab3cedebd3a6c",
"index.html": "46cce10eb96829bffae06eff0132d679",
"/": "46cce10eb96829bffae06eff0132d679",
"main.dart.js": "0800303be4f5099a08c7202851977e30",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "09337a852f874dba80ef69556953144a",
".git/config": "a29b5af11626fb49cbf68dc6e7693111",
".git/objects/61/b1818150930533d9a5488178be32bdbc4ba982": "9d08ccf9dfca98b79610e8ccc84689c8",
".git/objects/95/af7028eb67b08a2a73ab41858f16534b9f4ed9": "c4d05f8bb8cfbb2adefba0a416d4fa06",
".git/objects/59/3f538a267d19eebe575e651229123a041c075b": "b1127b8c6062de53098b88d42149e040",
".git/objects/57/54f02c8cdf62072e362011e5a09907e99b4e22": "0e86e90ff9edc8287bbff0088a559f20",
".git/objects/03/74ffac542339e421c1caba4badef5da0634655": "cb70e0f7aca2bf8154383cd6fe459f52",
".git/objects/9e/589bdfc1b26a2e72ad836d1bee3032b75d3ed5": "bd50a69dddf8fc3f551e35948d126008",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/2419c7be59a2596cd642e9172a26014c51b645": "ced1f34b46d2d3cda84588617012dac8",
".git/objects/3c/1353c3aae2209fc896c729d21658f9af3cb399": "62d60527e4811d8b7097c0a1632bf7a0",
".git/objects/67/63ddb4b14f78f12b40acdc966f5c07cba9583b": "aceb309ebc58ce475edca786ca47daff",
".git/objects/60/59d02f0ed23521d0c674c9175ddd22f637807a": "13726353a264ef43a96a6747967fe0e3",
".git/objects/5f/14a37d4dcd0dd44aeb0f32f28e7f6d83dbf89d": "18b6ac5b676c72d624471bbef9fa08d9",
".git/objects/02/879c49a360220535f42622a6242d6526392be5": "6091629567dc213b315eee5cdace2d72",
".git/objects/a4/e42f66eccac322178ec9b0992da352106028ac": "21bebbb721d1aa5bf95113b0b352b359",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/c68abd62cb9ac0d0084c41022f83762661e641": "10b44e6d5e90a2e31bbf8713e8c88342",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ba257db5b2978e5163470a71981310f65746de": "0a1ea750db784f47684ceebd3af9c925",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/416c048e0021dfb8ff9c0c623c38bf6a0b9235": "ef3bd006d380642c428ce46a0407d6c2",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fb/c0c5ccd97da07fe80f13c1601edbefe067ac1f": "c44df6526b8849274afbf6081cc0c0f7",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/05acf4ba5b145f65892197c6e28d5dbc31ea71": "6c8dd54aec15ebba945db47548e2d13d",
".git/objects/8f/b3fd647fbbd08b3de6975162a937b23ea9a936": "c3981ea92da64bd04a74410697311e68",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/8a8dcad283063e20b30fe040b85eca46244abf": "5a84a529cfbf58a99eb47295981a8280",
".git/objects/19/321126c2b2c98d8884b0b07419a8012a148f87": "fc26efa4d8871fe0975b4de0324e117f",
".git/objects/19/d38f2a1dbd28cbb49adcfe2a8c4aff1e02bbdc": "14158ef61d6735bf4f9c74253b7d98c4",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/44/2b8ca097353814b1a565f7bb90d81f903d888c": "f4001d4fefa3aa9133dee3a66c89fd54",
".git/objects/43/7f33f20d63a1dcf8fd080cee35e95618d8b499": "52edc8ffbef0de3a4a7ca489f295714c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/c6ebcd8094a2ca9424bfce9fb9636e6d534868": "f562f48ea215d207ef5685c377358142",
".git/objects/38/a5484ae3ed9f350fd16c92ae652f9a65813a86": "d7c64d8fe96953fe5b63fe5c69c5f348",
".git/objects/6e/d68b586148dd198cbc95bf5fbacbe0310c4cab": "1f5248d44f9de8d813f840848e0dee19",
".git/objects/6e/73010a89cd3a6f56ec16c317fb0b315deb8e4c": "c8fe287c668d161d517886ed5f64cb49",
".git/objects/6e/60d08ef0250b9d376110bc7a6ad1e41c86573d": "788f83dac3dd8ea05d7052ae1a0e9cf2",
".git/objects/9a/e602682881c16b5c62ac94da84ad919e33c9aa": "53c4d81f43ae313bc1cd54a069c247d3",
".git/objects/5c/b0e9209755cb9b00c852c30c73927221f39f2f": "416c8f31175d72e63acdb212c7821a98",
".git/objects/31/74cf649e807fb642afd300e38e672c58a9e01a": "0077183c7603061e338e06e91a5335e2",
".git/objects/91/2489738d8ee2bed2e84f6a62f0d5713accb58a": "11e419b08e617d52ba4a5d6f6715c2fa",
".git/objects/91/7f287a8a8ffd2b90bc83d0d9d726864b33ec68": "85d6ed8eb7ac6346943f30802234bdc5",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/5b/cd428f76ff32b9edb0457f1e44ee1afbc6b983": "fe3b2efb83611ef857886bdb4239b10f",
".git/objects/6d/c3cfab25535fdc92d827a8d13d0dcab6c2e897": "dff3bc874ed7d1260d0e77faa3dbde0a",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/2862a69fbc2d0d3cc3569437bc1826d5b9ea89": "b82aebcac62c8e51ebd5999f15c21434",
".git/objects/0f/7ae93609a42d37363cec9a621f6824f210d7d7": "049c68f5d8e3fb5b9d9127cdb932ca6d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/c1860543cac33956381e6d5f8eb72a7cfe0c1a": "3a42c4bbd99dc2a0c35d4267faf9a63a",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/abdf1bff2538b62fa918ab04752667cf0c10be": "fbe37b8f51002820440ba7a1d8dd2bff",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/4aeb43d51a2b957a3cb1720c057d0d770a1c44": "425450830aceeb22d9ff7175f3ecea6f",
".git/objects/e1/4699f94f27ba2e978b2a5f186323889cca8460": "b6458b2ed9c425c32f560b040d6c7ed4",
".git/objects/cd/74e8521cca4b85fe440712bc994c21be7b8348": "bce0b79ed9a0088984a41ccb8b333754",
".git/objects/e6/c8d38afd011d420ce09f808abb94dca5118b6e": "cd681f66342a459b4c68f226a7c82d76",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/3bbc315b7fd7eb4e41bd3dbd0047be580da15d": "eb450a2dc7ae554679dc05920a73e403",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/19c3ea9ddf3ad383a4f92d26b51e3fa21758a6": "5cc2d962ddaa558a81c3b2542cfed871",
".git/objects/f8/02a523f24a79c99f7eea2a4e1d41df8874b535": "c90f8167f47e0a4c8100d2c45711fe3d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/2287cb343f421cd7d7c0244c5685ee9d3052ae": "537386930fe6b6f8728a5007f63ee697",
".git/objects/2d/c5a2bad036316d3aac75862b18586b4d5ce3ba": "023ef6aaf8e301b5f203b9d3ba696609",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/933b85b5b3fb98eba68376c5472c67abd8a1b0": "b42e0d1cb96a9224a56496b46731f477",
".git/objects/4a/473e36d26d710ef79b7ed2bc790e71b82e1600": "710a74d4c38d733f74269716e2f34abf",
".git/objects/23/c4916025c241be29a47b638b480b3363cbc841": "42e60b8fab63b8ad12cad3be6cb427fb",
".git/objects/71/9935a112bbc526ca4b08959c89982723114bf6": "b70ca5485a7515b21b799d3dca2b63f9",
".git/objects/47/92de7209b311b8c6bab589cc5cc4ee394a6ece": "364ec92a397ee602ec454eead5fddc44",
".git/objects/13/32983025251a0038a01e73c06fabf8e3c1519a": "58640e8efd3a87d06e9125db9182361c",
".git/objects/7a/5e726163fdf4cbb4f2c229634991541baf352f": "11a5ccc7659f9181dc8a7a94bbdac5ff",
".git/objects/14/e5146cda0271b773e10c17cd9ff78265173cd2": "36a88977950a96cc32d75f0eba35e6e2",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "9f92b78ebbaeeaa570b13f3e188cdbfd",
".git/logs/refs/heads/main": "da91587880db1bc1150e0d79d36b97a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "687b51b8da7c4070ef768ab57b549828",
".git/index": "8330943394d079e1045b33c59fbabbce",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "efc06eabe20e8886a2c83cdb2679834b",
"assets/NOTICES": "6045dab3d7c99bb4df416fd1df14f663",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "9e6483212a0c690bb9c492b197684b8a",
"assets/fonts/MaterialIcons-Regular.otf": "015208d0717a46de06ba6116092b5c83",
"assets/assets/images/delivery-boy.png": "c2020f5d9d50eba0048b8795e9f1fa33",
"assets/assets/images/plate-food.jpg": "9e396139c2a14b5a180db813975fc0af",
"assets/assets/images/banner2.jpg": "fa0ed0111e583a31b810bf544473b06b",
"assets/assets/images/food4.jpg": "d6261a4b395347eb3f12100ee3265fec",
"assets/assets/images/food5.jpg": "3dc6933ad2e8f2e280826585c00c16c1",
"assets/assets/images/delivery-man.png": "2dea4535feb4e7ac240da7ea9ddfc3bf",
"assets/assets/images/banner3.jpg": "ecc155d461c1c0d267fc23ebc62e104f",
"assets/assets/images/banner1.jpg": "3a69267d246e5be1570f87e9bdfae24d",
"assets/assets/images/food7.jpg": "97c679e359072dfb83a06992bef8251f",
"assets/assets/images/food6.jpg": "c442f26a31167bdd6ed7653ba080a132",
"assets/assets/images/banner4.jpg": "9328097acc1ada80c6860231667a2a13",
"assets/assets/images/food2.jpg": "6a5f64deb7e33d5e0b8b0a8609b06a86",
"assets/assets/images/user.jpg": "cfc7a816ae47c56facf455491b35fc30",
"assets/assets/images/food3.jpg": "ea859f29345e0c3a6e9931be0cd35e9f",
"assets/assets/images/food1.jpg": "8dfdb3cb48fd27d7475fe48665267506",
"assets/assets/images/meat.png": "a4a97e6ed8079ea1cfb3fb46d6ddffaf",
"assets/assets/images/grocery.png": "e6270d891f9a1a7a808025e75554365f",
"assets/assets/images/food8.jpg": "9fd454076efde8b0acc4ffb49a8f647d",
"assets/assets/images/food9.jpg": "24081d37a7efd2633865d32cb8e1aecb",
"assets/assets/images/pizza-delivery-boy.png": "ba9419b13552bf7abc0aa8de6cec308d",
"assets/assets/images/food10.jpg": "8946ea81fa3df52df9147ef4b1cd394d",
"assets/assets/images/plate-food1.jpg": "4d048f723382705a0814361081d96649",
"assets/assets/images/burger.png": "be65e0be1f37cc64a4a632b56bca2604",
"assets/assets/icons/natural-food.png": "edef9bd496a272bd4d7635a158b44cd5",
"assets/assets/icons/coffee.png": "c897c3297b4f3bfcd500f7b7a851d366",
"assets/assets/icons/courier.png": "a144a943b8ec3b990ea8be8e632a8ea6",
"assets/assets/icons/offer.png": "c78c87f3e35836d949c6fd734e40eb36",
"assets/assets/icons/pocket.png": "e78374fb994ca5b320f2fece1f7c8d28",
"assets/assets/icons/bread.png": "274b9fa47195e1248fdd3005097f8fd8",
"assets/assets/icons/thunder.png": "4c6484ef4af885074c38fbb72e96167d",
"assets/assets/icons/kawaii-sushi.png": "953a4ed9f2a18f783ee3dc9ba4a5028a",
"assets/assets/icons/delivery.png": "eab9664174a4726e86aa4fa10f1836e2",
"assets/assets/icons/spark.png": "06fd460784d3c7b34da7f1cd82b98ae2",
"assets/assets/icons/home.png": "4d3362bb502f9922155acefe46d41cd2",
"assets/assets/icons/documents.png": "c9154fa6c7d4ba455c93dc933f8dbd83",
"assets/assets/icons/food.png": "5ffbb55c83e1257db82d81be09c561e9",
"assets/assets/icons/blaze.png": "2fc08db02418198d6a8d607f122352b6",
"assets/assets/icons/more.png": "15b908e47ebcc3d1a28fa06af4cd0fed",
"assets/assets/icons/world-cup.png": "24dcc7e6048a749de77030ab237afa36",
"assets/assets/icons/only-on-swiggy.png": "0b876719b67fdf86634feb1e56575dd2",
"assets/assets/icons/milkshake.png": "a2c9ed8b41252ddd9b934d6819e35eb0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
