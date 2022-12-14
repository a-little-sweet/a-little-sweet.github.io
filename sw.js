/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","9e9a51fe1c767d5dfc562f53071fd516"],["/archives/2021/index.html","1a4bd7b0475553f933792e31e6f8d426"],["/archives/2022/11/index.html","410a0b4ad8c4343ace4397f03b59e303"],["/archives/2022/11/page/2/index.html","be52dbaab30799ced8a2c94a8bacb4a3"],["/archives/2022/11/page/3/index.html","ce63443f07d4458e116a1e12dfdfa2ec"],["/archives/2022/11/page/4/index.html","79053ff970118e1d831e738c8f6a7a4d"],["/archives/2022/12/index.html","838d60c786025cef22e6c6fda7b3f211"],["/archives/2022/index.html","9926f5eaa7308900bb90ba6deb4aceb3"],["/archives/2022/page/2/index.html","d87286bc82bc2d8f29444fb6043acf91"],["/archives/2022/page/3/index.html","357af56820252676f790347b846ad898"],["/archives/2022/page/4/index.html","7493d5d09de3a25872419615db4b6e4b"],["/archives/index.html","55d0655ab13fbfc87c1923dae4a012c7"],["/archives/page/2/index.html","dd570aab540e710406dff1ed9f68713b"],["/archives/page/3/index.html","d49ea60799a3ffe4da15bc8199a360e6"],["/archives/page/4/index.html","15379455826b0b941fc87d3279f6e3de"],["/bangumis/index.html","ca3b0fde59f474554be9de34fc60a6fe"],["/categories/分类1-分类是指文章的类别/index.html","5655a144d98fe3a635073d113e839900"],["/comments/index.html","c8041a7863b77f4c0af84baa20d8c9d1"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","eda81ad21ab5856760cdd9818c8b9488"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d32bf5d705e370f7ad61774539315bfe"],["/page/3/index.html","fc8e15e5882297a640d52d5caab691a3"],["/page/4/index.html","eb251e23a26e661f53a6d6cfbb6a9928"],["/posts/11d8b32d.html","919fe6175b9f9234e2562b2628cf644e"],["/posts/215392d1.html","b0ec66562eb762b46246282831166d7b"],["/posts/254834b.html","51fbc0f5fd2df07afbe068a1a321c95b"],["/posts/26346fd7.html","43d3529e8bd98409f96d24391fc39005"],["/posts/3024c976.html","b8aae37f19af761006671f2698fa480f"],["/posts/31f532fa.html","58e1330fa4ffbbb0e10cb6571ff6d553"],["/posts/3a517f26.html","78614bbb80a2bf770cf60c31beda532d"],["/posts/3f209729.html","0bd238e8c1f857722b29f70927a3bcd2"],["/posts/40ad4f2e.html","01ae2b091b4363e337f5b546e2deadd8"],["/posts/5951da65.html","ba2685a4531efedb537c951dd865b8ac"],["/posts/5c4a65bc.html","0a3a576da3bc2928b9377ef453d1217f"],["/posts/5d6d5dcf.html","1060b51031d8640a743b36a8d2e58cdf"],["/posts/60e03c6.html","725008c3708c764d676112991c5eaa73"],["/posts/61d01d3e.html","ded7ca35697532c70b78c4dfa8822a76"],["/posts/6963fb18.html","299021f8359c70f098b0c28b5c3c2990"],["/posts/6d6e514a.html","247707c7356a6e2f2721ce1da9c114dc"],["/posts/73a264ed.html","5096b5026b3daef9bf9b83b4aaefc9e4"],["/posts/75f5b5c3.html","56406d6ff81cc2522256760da5c20a44"],["/posts/7a108a3c.html","accf173aa0cda1e829f65fbfabe73539"],["/posts/7f42df8e.html","7bcdd9b90cc99797136f431138f22517"],["/posts/8d78178a.html","a632f6ee574cbc1899958da9f3ad1e6a"],["/posts/9393c5c.html","67c833ca4026e945aafae288f59b3657"],["/posts/98c6183b.html","ed762725fec330633cfb69e9ddb0a9cd"],["/posts/a23c676d.html","e14deece0c5ed653c8583712baefc61d"],["/posts/a3493d7e.html","bfe55a8baa11436ce3c04c8ad36c254f"],["/posts/a350daf0.html","c31ac5d3e31f296a14f9f54ada5f1bbb"],["/posts/a444b428.html","a5f1d5306a826d56b024128903297c97"],["/posts/c3e41ead.html","4aa09359abebc3144b455cd4c852b452"],["/posts/cb2b897.html","39dbdf71261f2bb9570f9ca24e71f15b"],["/posts/d3d28240.html","c08d649d44f04ec4dcb06a27f8437c97"],["/posts/d60eb45.html","17024d42e23285a085d3cd4401b9c146"],["/posts/f2c69016.html","3242f7cc3f85f082c6b0594c0c76db2c"],["/posts/f35fa098.html","1d046620dd39e72145035a4df75e4689"],["/posts/f6ea766.html","0c77c26846414a3fe2e9c865f2ddc467"],["/posts/f941d9b7.html","37615777869f7b3a2959c50c343faaa9"],["/sw-register.js","e4a1ad6e4f47622f127685e1c98301cb"],["/tags/Java/index.html","8aa5b41f3a3684665ef70181972292cf"],["/tags/Java/page/2/index.html","48308af31a51e8774e95b788b5bb1f23"],["/tags/Java/page/3/index.html","dd5d2c0dc4bb919b9398cad66da49006"],["/tags/标签1-标签代表文章的关键字/index.html","8db51fd0caceda277520bcc24a3871ea"],["/tags/标签2/index.html","f4c583467dbdd44bf7085cb22b770a18"],["/tags/标签3/index.html","08c17fcae4e5d1cf5e9efa2c98388cf3"],["/tags/电商/index.html","9332bfb3730ef3b97fe272a122e4dec3"]];
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
