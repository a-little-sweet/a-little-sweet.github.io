/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","6c98a3bf9da6b6e7a6545724c551e729"],["/archives/2021/index.html","f3c358de06ef9d13dc2ed1d8ea962df3"],["/archives/2022/11/index.html","d49d4322a99f379cb87a7a5f6259aec7"],["/archives/2022/11/page/2/index.html","2150d359753dfe01210c62e65d62e5da"],["/archives/2022/11/page/3/index.html","09e515f2b309924620941a3aeebdc165"],["/archives/2022/11/page/4/index.html","2752ae7dc03eaf09a3cb971cdbed611c"],["/archives/2022/12/index.html","e66caf290b480d337db0c0526ae3d7e3"],["/archives/2022/index.html","97c29404174dac27a66cfbb09d329951"],["/archives/2022/page/2/index.html","5b03cbb8c2db9d411608bb728f37c6fc"],["/archives/2022/page/3/index.html","281deb597ab02d502e790c294d6b0093"],["/archives/2022/page/4/index.html","14cf001c5236e157f53eb7d31f6d5596"],["/archives/index.html","5a999100334c5de374afae367270f095"],["/archives/page/2/index.html","10bf90f86f077b9fc3d7d9d6a6709a7b"],["/archives/page/3/index.html","3e2b610de7c1e82760eca5ceb359ab55"],["/archives/page/4/index.html","b21efd5251953c8bca53e4854c8a56a9"],["/bangumis/index.html","ba8e041150a7c6c94c0f1624fb85bb10"],["/categories/分类1-分类是指文章的类别/index.html","8df06041a4734a25ee05f74128393162"],["/comments/index.html","4d5ca0e6e4460813a7b26e07eb5c2d97"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","cfe2610819865012d86db44776cfbc19"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","85a448e6194739c2ca6018743beb3003"],["/page/3/index.html","db414831e2f45d3192e6f9b4f7f95fa7"],["/page/4/index.html","aaa86ac405abd28c46fcbcc07015899d"],["/posts/11d8b32d.html","94e1218f5d21eb6fb47b05744ba4f8e1"],["/posts/215392d1.html","75148ff6eb1ee1b2b7687ecad560a1b6"],["/posts/254834b.html","164b27d704949178d4f69f3548adffa6"],["/posts/26346fd7.html","94b661e4fa6605c144de6f70b46af92e"],["/posts/31f532fa.html","6bf73527b2ccad442ba2d7a2e76f3ac6"],["/posts/3a517f26.html","05df8ded27bed49ab5f03179e8842ac1"],["/posts/3f209729.html","14b6a7069b9eae007820e735a2ea5d79"],["/posts/40ad4f2e.html","0d9114e17477510694b1e5918ac5b3ea"],["/posts/5951da65.html","4cac193e4be3c568b8a891939389d37c"],["/posts/5c4a65bc.html","0269cc70687b495a658618ad8ae8b365"],["/posts/5d6d5dcf.html","bfffdfa9e24a82817c21ad1a04979f5a"],["/posts/60e03c6.html","27fda59d57c99b1738dae5eb773ac781"],["/posts/61d01d3e.html","a9002874a52d60a43f13fcc54a22d76d"],["/posts/6963fb18.html","164486daf506ebad3c2c93e2599a40a6"],["/posts/6d6e514a.html","fa30caf682c9de2de6ad1285563b570a"],["/posts/73a264ed.html","d18546c7a80f26a65fdd07407aa4d73a"],["/posts/75f5b5c3.html","528858fc927e89ffe3b898781fa52f7d"],["/posts/7a108a3c.html","cde6fa5cd0caa0492a309310d6c1bd01"],["/posts/7f42df8e.html","4405c15516678f0ba2c1a5cf8a1ed706"],["/posts/8d78178a.html","2f1b88dcea8019ead3b72e3033e22ce3"],["/posts/9393c5c.html","d021f31e1b7ce6c77fdcbfa6ba03359f"],["/posts/98c6183b.html","8386f864ab284140845d13cd3e2bb34b"],["/posts/a23c676d.html","f1a5a3bec4869f2b8f5a3a301ed2b65a"],["/posts/a3493d7e.html","c5268771bd647ff5e33179026893dd88"],["/posts/a350daf0.html","1c9fbcde7e6239417b07c7aa5e636c75"],["/posts/a444b428.html","714de15f22524cdd7301a95b6960e656"],["/posts/c3e41ead.html","7e59c74949a543b79ffda5965325e062"],["/posts/cb2b897.html","ec1233915eb2a17f8e5cb8692a729a6a"],["/posts/d3d28240.html","6b0618f22ef1d70efdff654b67eb3809"],["/posts/d60eb45.html","c7fe39d741863142d0ded84cb843093c"],["/posts/f2c69016.html","3052560e228ca9ff3c47239d89ffabe3"],["/posts/f35fa098.html","d72ae8cda137cc9cda73bb35444cd37d"],["/posts/f6ea766.html","b2ddc587a437eec828e111f790a50cde"],["/posts/f941d9b7.html","b95e843dc5a880472716b2ad77c747a9"],["/sw-register.js","518b52a27105606fffd30cb3a8fbed0e"],["/tags/Java/index.html","246c58ce47091ca2aa91f44ca4530730"],["/tags/Java/page/2/index.html","cac754c171978748e56a2dbb2ef53851"],["/tags/Java/page/3/index.html","02f8493698f495ac3cd519209c6066d1"],["/tags/标签1-标签代表文章的关键字/index.html","320508b3a723396b291c46963bffd130"],["/tags/标签2/index.html","b3cdf9181577de1fa01fb6432c97ca62"],["/tags/标签3/index.html","b714b7d30b84130a4bfcb91ef3fc29fe"],["/tags/电商/index.html","d704cf352efdb6188e3539508fb1b696"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
