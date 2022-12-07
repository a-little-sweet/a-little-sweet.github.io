/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","4e5238f5d5bb5fb8faee3a1e295ef330"],["/archives/2021/index.html","e4d148afb2956b8808c922857a8a7790"],["/archives/2022/11/index.html","226de84851e735d501be62dc527f24ef"],["/archives/2022/11/page/2/index.html","525d306af8508defeaab2993afa3d883"],["/archives/2022/11/page/3/index.html","7872e52e4d28f174bbd880c314f42847"],["/archives/2022/11/page/4/index.html","f875185d522ad6ee11f4d55d83094cd6"],["/archives/2022/index.html","1e5ced366546ac0eaf0bd342f8ff939c"],["/archives/2022/page/2/index.html","1c72c763cb09271fa72d605e0a51d18b"],["/archives/2022/page/3/index.html","52846e635d958615a7ecfddd5a776734"],["/archives/2022/page/4/index.html","65062389d8e73f8e32d786cdac5e98fd"],["/archives/index.html","e0ccc01e3f0c0201fa5fbc8874e95c45"],["/archives/page/2/index.html","88b869777e8da1abd7090a6c34f27f5e"],["/archives/page/3/index.html","908d6072a50495b5bf06cd1f2a945b51"],["/archives/page/4/index.html","e6c3efe37be46bf902125649a642d89f"],["/bangumis/index.html","e8145e7a0c976714837d01100a08ef5a"],["/categories/分类1-分类是指文章的类别/index.html","1f2cc9ec8c4f616e4e98eb730b7cdc4a"],["/comments/index.html","e318d29b7637f9af7bfd602451a66e3f"],["/css/custom.css","390e3d9d45432cdf78265461fa6041b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","29b37e8d0320ac78f87112148915c6fd"],["/js/ali_font.js","b775a720fb339be4fb4819c38d6c4d75"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","433598c8246972a3ddcb7bfcb9c5d42d"],["/page/3/index.html","ebd13b12d2cb4af49df05817129a6ec5"],["/page/4/index.html","d207edbff342373b12b1db7c70c1dc3f"],["/posts/11d8b32d.html","6c412fffeb4ab50b07d8aeeabe09b152"],["/posts/215392d1.html","61f1e225ef04846d8984a4fc8ba7bf2c"],["/posts/254834b.html","deea5472c6142746da732fd6b8497871"],["/posts/26346fd7.html","5f0884672e7c049b687c87cd7a949e3c"],["/posts/31f532fa.html","c5dc74a1ceebfe77aaa8c8a5bba6c566"],["/posts/3a517f26.html","eee4067de48de56f50697bf3be44eae3"],["/posts/3f209729.html","f43b28d9da3c6a5f4d8e3bad8defdd33"],["/posts/40ad4f2e.html","755698ac17cf4b5549a6ba4288d89837"],["/posts/5951da65.html","01a737e9df2b3159b2d7778ceb1be49c"],["/posts/5c4a65bc.html","4b7a9e08eb91732874264a1db939935a"],["/posts/5d6d5dcf.html","fcd5d9275d11273417978558d4f134e9"],["/posts/60e03c6.html","663ded24a72ba97126b9a4aa614c53ca"],["/posts/61d01d3e.html","0a334c91b7dc28faff791085f58285e1"],["/posts/6963fb18.html","e9b362d8e899a761df277fae7a1ddfe9"],["/posts/6d6e514a.html","3ea68b5abd12dc0e4edec819d846a0c0"],["/posts/73a264ed.html","90fb7ece8e62ebedd5b0a7ac17a5987c"],["/posts/75f5b5c3.html","2481be5e3ad6da95d7d3b170028704aa"],["/posts/7a108a3c.html","fc625b446e9e491f199f4693113d8c35"],["/posts/7f42df8e.html","d9df5f7c2df04558da4f3e5415906da5"],["/posts/8d78178a.html","760e3b636d9d5ef6e7aaf044ddc074f5"],["/posts/9393c5c.html","4c2261c58d4e48de8cb8df8270aa4f65"],["/posts/98c6183b.html","2547af97403511401e288b7c7f56e657"],["/posts/a23c676d.html","ffc6376bcb4f58ebfb718bab5f067bd5"],["/posts/a3493d7e.html","00664df1101d847688802735f10b09b2"],["/posts/a350daf0.html","d6d8c5ca6c9a202d3e1d502b00c7de7e"],["/posts/a444b428.html","929cfd798943cd011abc41d19c8be828"],["/posts/c3e41ead.html","5c0b186b8b53939b2099ff87a61e7fec"],["/posts/cb2b897.html","aed59f6507233755a0a34aa92d94d4ad"],["/posts/d3d28240.html","c1d73c5de9bba2c15f49b3f13582e62a"],["/posts/d60eb45.html","3842e83b0971a0e01184f385f779553c"],["/posts/f2c69016.html","8d98cf81545434d6834aba55d99fad5c"],["/posts/f6ea766.html","1f0ead52f67bef662e68242056806ee4"],["/posts/f941d9b7.html","769ca223b87b7b7cd5899cb43d94686b"],["/sw-register.js","5af4b104d7a8ff2965b491c955e76559"],["/tags/Java/index.html","51d0c8f35a3c0cb63e733b3703f13761"],["/tags/Java/page/2/index.html","e8e6606f0277c1dd9d10b388b8c33105"],["/tags/Java/page/3/index.html","0ca537008e4b2613b5405942dc5d571a"],["/tags/标签1-标签代表文章的关键字/index.html","6c1ce1398d963ecf31b131d816b357aa"],["/tags/标签2/index.html","8562e17ffe98957a6606db026181352b"],["/tags/标签3/index.html","31a63b4dd03dcb8cd58f5d3240fd235c"]];
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
