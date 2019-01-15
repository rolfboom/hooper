/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3a899afab457a268fd94b1895882f508"
  },
  {
    "url": "api.html",
    "revision": "ee8c1a5015d4e7fd8bc6ad7028af487e"
  },
  {
    "url": "assets/css/0.styles.356dd71a.css",
    "revision": "060318f191da0f5c99c9e6dfe6ba6f26"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.39f5fd0c.js",
    "revision": "8ac94c699dd7b378e3998b695f9db84f"
  },
  {
    "url": "assets/js/3.106196a2.js",
    "revision": "446579dd1c41ced831fc8e03833712b8"
  },
  {
    "url": "assets/js/4.93479cf9.js",
    "revision": "4c048ef06becbf241612eeb5061fff68"
  },
  {
    "url": "assets/js/5.59999568.js",
    "revision": "0be7245a290478c4060e57c30cedbf54"
  },
  {
    "url": "assets/js/6.fe950e9f.js",
    "revision": "ec9b39bf374a674e3b513e5693dcf63f"
  },
  {
    "url": "assets/js/7.5cef7884.js",
    "revision": "87b7c1ecd34ba2d55f2465b46ecb77e6"
  },
  {
    "url": "assets/js/app.e02bb3ce.js",
    "revision": "337b48411ffb0c8cd7f1ff592e75b222"
  },
  {
    "url": "examples.html",
    "revision": "ff50302b999225c378b1959c7c36bc45"
  },
  {
    "url": "getting-started.html",
    "revision": "d46131382ac6429dd6f2f8ab1c3a719f"
  },
  {
    "url": "hooper.svg",
    "revision": "e138dfdb27cd6a48518049a5571ce28d"
  },
  {
    "url": "index.html",
    "revision": "c9a26be51de67e2b1fd0c009da770405"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
