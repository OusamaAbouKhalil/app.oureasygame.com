'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fef66e89a8aa4d65e3e40a046a4b76d7",
"version.json": "17ebb0af53c18f87afc1569bc0dd4caf",
"index.html": "84cc9800d6a22fc3dff5d5724fb6ac24",
"/": "84cc9800d6a22fc3dff5d5724fb6ac24",
"firebase-messaging-sw.js": "1c915c2767d1c252ddd81007063bdcdb",
"main.dart.js": "2d280bcb6df2dcce74b8787065568aa6",
"whish-success.html": "73fe6d2d0592f5d6bd6aebff2ab794b0",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "4c9d1a49b709ca020dad1396b8e2453b",
"whish-failure.html": "a9d8a7ce0856e81a94bbc75d7cf6e7ac",
"icons/Icon-192.png": "68c81fef39dc61bf31fd10e89fd5d1ae",
"icons/Icon-maskable-192.png": "68c81fef39dc61bf31fd10e89fd5d1ae",
"icons/Icon-maskable-512.png": "cd36f4ec8c717eee7e81fc70e6c8ea15",
"icons/Icon-512.png": "cd36f4ec8c717eee7e81fc70e6c8ea15",
"manifest.json": "8f6908f13baa8daf6d89fd83cf761915",
".git/config": "bc8af705a2cd103242b009a8944a3f9a",
".git/objects/92/54b7fdc6c8ae52c2882be959d47ec64bcbcef1": "a570151ebd47a49b6521313e576917f3",
".git/objects/50/9045aff53a9b62fa52a20b42babb65b3c7db30": "e363f57eda9c9a71419f9bfb3117ad99",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6a/bcfe93f441eac047a89b795c63eae9d5ee0f4d": "706868c500d3cde0c04ece9f240af202",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/308ff6fb6cfcba2562ebeeeb01339c9d2acdb9": "f4cb0d8ea6bade1a28f3a8b153054489",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/0e413a3179bf9926575cbe7462d64f84263bf3": "81165e4aa8f2837bc505e12cff96040a",
".git/objects/0b/ed0c59690a7635c4450b7fffdf29c9e947747e": "5f89cb8c5d2bd3964196df6a06de1f74",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/bd1df8bae64d4dcc19181c18d4836df6da4240": "46ca9f87f66b0441aede1a1cd3bed8ce",
".git/objects/34/f2809f837628b7b901c16df36608367ce8c6f1": "74a649fc99224e280ca07fa5379b3787",
".git/objects/33/3bd856a31a56d25e13f65981b3848c0cf4c014": "87e192cdcb01dc02ad216d93748420d4",
".git/objects/02/7e1dc09e3b0dbaf9d691d124d18eed3be02aad": "2f406ecd8b63c3c69536b8d21812a13e",
".git/objects/a4/12daa94b5ba5ddf06f9bcf7bb373a35a829eee": "44aaf2967aab211646a6208adfeef285",
".git/objects/a3/9da3de5b4e2258dd3f28161665dd9cb110b811": "fd6e0677aecb38eafd05aa22dccc065a",
".git/objects/b2/d3de7a8a2914ccd6dd8afe95932da15873b4ea": "fe333c21d8fdb94e509a82d59242f31c",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/27891fde9dd1a2a705a9704417393e2f953955": "7f9d0f95b22591b53e56f72f9732c7e8",
".git/objects/b3/c0dfdd7659ae8183585c43938c19be52222b58": "2918770b3cc3b22e43abf7d150a10c27",
".git/objects/b4/ce6d4d2511890b5af57657ad27f37dd5aa0d95": "6551221f7fe4bd2d661cdb486e25b213",
".git/objects/b4/f661df61913a0cb92380c1382af10262cfa18a": "39a206e182db5fc2cfcc92d4336279a2",
".git/objects/bc/a3966b51e58f71fbca9a81a14b17de2fdeab50": "bc2872ab102b49d25ea18cb22df20d17",
".git/objects/e5/5518bc714b04071f1c74ea232585e7620d63e2": "5ce38b6d5e1413995803b61171bd15df",
".git/objects/e5/dea9a8cc14782f28bad3731f88519efcca6c8e": "3cf91cbb88311f1e0a620b553d54ae4a",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/c7/3853616fd907c30f7e3de988e1c9b0bc3098fb": "e06e3a81909c18f18f1e825216aec853",
".git/objects/ee/f3c3892bfe41fa13e0ef43f5aee622fa596933": "114a2f77a6ac6f5e1e219c29c720c50c",
".git/objects/fc/05ab63e2373d4b67744d84d6aea89f8120adad": "8ca3804b88533eddb1d7ef6df319e0aa",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/77b1ad8079f75ed33dfa474cfd2e9755c75c98": "272487e98026d5b6b6af466429190508",
".git/objects/f5/544ad5de348ebee691c59508a49e2cdf0484bb": "8aa56cb65fbcd83ccc57d64d2137de4b",
".git/objects/fe/1a6d174597ee5a9845debd6756a78c82457e85": "3aa21302124c7ce7065405be016283aa",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/f6d1603c838c252c51b272145d5e3f30abf9c3": "63bf9be3d9c7f753e9452cdd8b9ca4e1",
".git/objects/fb/356cad4eb1c5ee8d00c15c2f68c5272b304aec": "f99fc657403adcf30e676b5306f25194",
".git/objects/c1/f7606b779c6f627e383a0ddbd13851bfd71c8f": "1ff9a2707c1fbb4d94f905308384fb3e",
".git/objects/ec/894fa1e7c02d7a636db2a451f18b8a5aefe587": "a6b59eeb85f7ee82e0776d2c068b167c",
".git/objects/4b/bb8a69d23108ac1d2aaab9d5c3956744e7c069": "3fb7b1f34c2d6d1288f711b7dfafd800",
".git/objects/pack/pack-d22bcd1679bcda955969f78e7ba35180abfd75ad.rev": "0325650beb40a25eaba61d9b2fcc2823",
".git/objects/pack/pack-d22bcd1679bcda955969f78e7ba35180abfd75ad.pack": "08c215f5792f402c216959002adec17b",
".git/objects/pack/pack-d22bcd1679bcda955969f78e7ba35180abfd75ad.idx": "9338c85fb16248a55f3afa91bdebe452",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/16/d7a2f83148f0cb1d740004563ca8ab230ce92e": "dc8e95610eb16f46792e717513148946",
".git/objects/89/11b112d68d51149c45b9b85499a19f1ff83e46": "1975cd5b569df19fcc40f15ba8b13bdf",
".git/objects/1f/480f0edaf72417a3e5fc97726d552fda706d44": "0941cb0fc8ca13cea1c30eb5b24b96f5",
".git/objects/73/34ce90abf59a7ee8aeeedb8ca33ce313059c6e": "d1f6cac231a538df974cf3bc29c0850c",
".git/objects/80/042d777a48bbd917927baee59238e9d957bdea": "c7c63ef99b5997831043f668a9316e8f",
".git/objects/28/4bd47863ab0541b52ffc3b750db067e42575dc": "9dc322b24d6a3f32bb2770fc65b63ec7",
".git/objects/10/d02a56fccccbf86206da53352b978e0ed3a0cf": "e002b574a5e1f16ce0a9cdd0db26ce9a",
".git/objects/21/36a2742c9c64af30cff841c96d095a93780792": "cfeead96f1e455b0d70ea36e605a1cf7",
".git/objects/86/beac98f6964175482692b3b795e6a99fca0292": "632c6b2cb02167946d41296b4e4b342f",
".git/objects/44/618088092913decea69fbbc948f1d7691092e0": "1689f526c9ba0384f9e2f77f9edff3b4",
".git/objects/43/ded65392086a9b3c5d8766a9a758202cc65b59": "8a4a2b1ce8e7221d7e3e728d7ddded24",
".git/objects/07/64a25c64cb214fc03d0eccf21ff2fad52231df": "6612432edeb99f23d8be49d4d155eecd",
".git/objects/6e/013aa445646bdfd315397f831a5387871b2702": "88744e79c01b1f09819ca7cd407085c3",
".git/objects/31/353b18305edb9f3a7504a9dbe4e093e7445a0f": "96959457d98a1e7d681c071bcf9ca547",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/476546c60223f3936f3004f27473185be4dd5d": "ec6f3f4d52aabb4f570b1a74d9074aed",
".git/objects/98/e98dcd97d8aeaec4482c6fe49c31e2a4d0627e": "299f608fd0133b8feba8a35d50e5454f",
".git/objects/3f/ee320d009f22826552931b0d0778fb9b5c0de9": "9fcad16c718ca24bd537460165bb3fc1",
".git/objects/30/87b11e7d414a65e96498df99a8055d2eca329d": "6d723763f4f2b1e383ebec3ef33951ab",
".git/objects/5e/0116497b3b6c56d43f859b992dc4b2aee7ce4c": "955db030277608a032fad844330330ec",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/52/c61bb6032f23d27032ce96228bc4973e6b2843": "7dfce814ca949526068f99d6588c91fc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/aa/a4bebb26735083b4b739f8144b7123f8354560": "d32e3408f4ac01347baf56b8080687db",
".git/objects/af/80ffdcee3100bbdd9dc9a4afb10b1534ebbd54": "bd509d90d524499afa67e2b07d9d2ffd",
".git/objects/af/e319d472cfef6c27dbb555fa3660b76b217c48": "f3fdb8d689cb6ac137f7a0f809dfc688",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "15af9524d664e39a6f548412b724c2e3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/cc/6fc383a2a88d14843f574137ed8ded67ca3a0d": "e1e00920213a2fac53e4a28cbf080886",
".git/objects/e6/9383b28ef7f8fe183d915eb97ad469a0515c2c": "dd8796f9478deca9f1958662b0be8b71",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/46/6e0d898064bb34a98afe273880aba0f5a45266": "b302190384bab72bb823860b2491a0de",
".git/objects/2c/d9dfc9701ee3c4ed8adc9fb3d794d7acabbff2": "6caf80f647f91a45b6c71714d792b3e2",
".git/objects/79/b2cfc2c16d5d24a88edd72dcbe80080680eceb": "d6887e11aa27a8e3605caa43be892680",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/7dbb60c5990b67cb56e62baed512835f57a493": "67a01074e4d7caaf3ce346e0c7eb1894",
".git/objects/24/7442da3a97f9534a164e616948b42f2624c2a0": "f17663b6bfb03e39d3c5a77293e4d681",
".git/objects/23/7de20b8d1833485e82bba41a5cd3f770a3f05c": "48b12714e6afde28f1003a48e3504027",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/2e/7f2f1d52091c375554cf2eeb32c94c925bf470": "f22c0f8cd1585a0f449ca8eb467d3322",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6503986f039a8d89354d84f3e8cc9d3c",
".git/logs/refs/heads/main": "28656e239b6fb604ce2d14645598fa06",
".git/logs/refs/remotes/origin/HEAD": "0b68cbf91ae355090cdb8a9ae1e06933",
".git/logs/refs/remotes/origin/main": "4a1423a89ab07a333e6ca827b4404e80",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "21e6c26fb9a25ffd8475f5feb2f65eb0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "21e6c26fb9a25ffd8475f5feb2f65eb0",
".git/index": "e906daca5588e01b9a8dba6e91aa47fa",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "9e72f2085dc5a1aacb4137743a3f7b50",
"assets/NOTICES": "3bfc36f8babbadecf533f9aa2d3c93d5",
"assets/FontManifest.json": "06f2dc6e3de1ad93fa2cdfc66f29bc1c",
"assets/AssetManifest.bin.json": "4b2273263c070558e007010aae3c3987",
"assets/packages/flutter_gcaptcha_v3/assets/index.html": "950caadc27f7d52b11aca8727827f92b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/hugeicons/lib/fonts/hugeicons-stroke-rounded.ttf": "ed1746fbad500fea94f6e5c5eb97ed7d",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "62658af51a70560398588f703f0236b4",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/jsons/countries.json.tmp": "832a0cb85d3d75c973a9fb18a600dcce",
"assets/assets/jsons/hugeicons_stroke.json": "f63acf86f1c2a61fc0fa27f69804c9f7",
"assets/assets/jsons/countries.json": "832a0cb85d3d75c973a9fb18a600dcce",
"assets/assets/images/new/onboarding1.png": "fa977491134821157df98fec37f5596f",
"assets/assets/images/new/homework_image.jpg": "4c5cf7bcfe03edd986b22ce5b3865018",
"assets/assets/images/new/class.png": "76a1d876243be6996a85f060a56f6331",
"assets/assets/images/new/onboarding3.png": "9c240465c133263bcf2eaa8fa3afa283",
"assets/assets/images/new/onboarding2.png": "5116a946916a32db5d188c142010bf59",
"assets/assets/images/new/french.png": "edce83d1273bca4d22d913649c13351a",
"assets/assets/images/new/arabic.png": "6d0f90a6695478ac9ec0abcc29b87c05",
"assets/assets/images/new/google_icon.svg": "cda5ffef8de49f8500eb4f2d4390cf26",
"assets/assets/images/new/splash_background.png": "45d671b7845471acd93020d5477cbf25",
"assets/assets/images/new/female_avatar.png": "b213d7074dea102e6e392a8abbb9d4db",
"assets/assets/images/new/male_avatar.png": "af841642e6dac62f784d5b612fd627c8",
"assets/assets/images/new/class_bg.png": "61a8c7e40cadc2f9693845cf11bddccf",
"assets/assets/images/new/logo.png": "10904b2028f5c70038e2794bcaf7cf4d",
"assets/assets/images/new/project_image.jpg": "1fcf3b6b3146bc96bc7c46c8b617d849",
"assets/assets/images/new/Appicon.png": "4d3f95ab10b65c14e27e82c99fcefde6",
"assets/assets/images/new/thesis_image.jpg": "193b22be80f6a389e97c302f728354bd",
"assets/assets/images/new/facebook_icon.svg": "03957bf6481cab62479bce6ace8fbf50",
"assets/assets/images/new/sos_image.jpg": "f48ae86fb934e423b77e23657936ad50",
"assets/assets/images/new/apple_icon.svg": "fd0d77ddb37b5d6a60c9963c5922a680",
"assets/assets/images/new/english.png": "519c5893cfb043efcf36ce3bc3aced09",
"assets/assets/images/new/exam_image.jpg": "55db4543af9cb9e4b1915e78ca1c0779",
"assets/assets/audio/new_message.mp3": "a9d89deba9adf6a4097964f9fc4166f9",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
