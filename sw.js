/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","759c36910de5c2344c909eccb81a3db3"],["/archives/2021/index.html","ce87be9fbfcde930e71fe5d78f127d3b"],["/archives/2022/11/index.html","793e59f61864c10621e97238144cde7e"],["/archives/2022/11/page/2/index.html","8bd7e271c5de6ecc8dd618bcc02ad309"],["/archives/2022/11/page/3/index.html","04c8c12084d50945d107bf7c06b79cac"],["/archives/2022/11/page/4/index.html","90f45d3f6cafdfbd3910389d1eaf56f4"],["/archives/2022/12/index.html","ce325028b6125f3582e4978fa6f4e638"],["/archives/2022/index.html","e52b2ac912486fb6ecab75a62c4d4ccf"],["/archives/2022/page/2/index.html","684bccb26f80b1afb075482690bb6e99"],["/archives/2022/page/3/index.html","6bed7f4045442627b67bce265a6e62f4"],["/archives/2022/page/4/index.html","62f1089ba4c3843ca4449d73b374bcb2"],["/archives/2023/03/index.html","2b1de310155a6768eca11d659f264080"],["/archives/2023/04/index.html","d0e05a80c2eaa91a256820f206ab75cf"],["/archives/2023/index.html","64653f3e0cbec8733d52668cce758dda"],["/archives/index.html","67847cea44a4db255a495e43f27f2520"],["/archives/page/2/index.html","2f3a37d3b8d02b9fd8f8abe50e5d793f"],["/archives/page/3/index.html","f7d7a9f432c708fb41fefe1708106274"],["/archives/page/4/index.html","41d5a86514c527d8dd048a8235d837dc"],["/archives/page/5/index.html","6bdbba3ebaa48fe630af03228f8ecf87"],["/bangumis/index.html","fc41eac29d1c1033cbef05bcdc507a1f"],["/categories/分类1-分类是指文章的类别/index.html","cef2432d18177bdf4d2be7ab33613cbb"],["/comments/index.html","23d1128b8c397ac3ce8349dd44c96c68"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","a524f260e82f43e6ea68c48cfccb8bf9"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0c9cc248f7a700f80c2bd6edf136c4c8"],["/page/3/index.html","561ac0341244dd7447c12f35d376fb9e"],["/page/4/index.html","fd5979130d03f861a8876d70fbc7c6c6"],["/page/5/index.html","9151a36804b161a9e1e7e6563460aba2"],["/posts/0.html","d6cc8c2cd504542823e20581a05d1aa0"],["/posts/11d8b32d.html","e315dd90545687075912c3250ba909d6"],["/posts/215392d1.html","9b30a9b9f26ca30ee751f25ba6af84d2"],["/posts/254834b.html","43ccc31f038539de32061ecead055c28"],["/posts/26346fd7.html","3f0c9455b8e07e1775e51fcd7e138839"],["/posts/3024c976.html","b6092ec4bbc44970dc1abeaf59db0952"],["/posts/31f532fa.html","bd978d4350b7b596fa7635cc364f293d"],["/posts/3a517f26.html","8e3768ab87ac836ffecd3aa74516110b"],["/posts/3f209729.html","3e6b02d09d0d84da259deeaf5e273e85"],["/posts/40ad4f2e.html","cdafc4dc532715f99012b90881b22f82"],["/posts/427016e9.html","325c8e8e95cbff2c3bd084c12e84c252"],["/posts/5951da65.html","0aaa421269046cb5ab154f937fda5005"],["/posts/5c4a65bc.html","13d9c90c70c199be5b7065edfee11ac2"],["/posts/5d6d5dcf.html","a787aafecb1431b2d1975acbe93c1bfd"],["/posts/60e03c6.html","73e39076d226ceb822083f38c9288e64"],["/posts/61d01d3e.html","0324ddd5cb8d7ea21adf93b74967fee5"],["/posts/6963fb18.html","560b9e469f909e532af7cedce9d9ffb2"],["/posts/6d6e514a.html","ef9bb0c51e2ef7c29bce13098e5ecbc9"],["/posts/73a264ed.html","9628868501cdb2cca5028ce0ee05b462"],["/posts/75f5b5c3.html","18fc1c1ae266931bad450844018b2107"],["/posts/7a108a3c.html","d5c9e2130a666e10ec692b0048112c45"],["/posts/7f42df8e.html","53a92a40495284df97151f107dc1f7eb"],["/posts/8d78178a.html","787b72f76d30725ddf5ae88a306f4083"],["/posts/9393c5c.html","f7d4652ecdb6402d3d967b80dd79d413"],["/posts/98c6183b.html","9adbf9b2366aa7fe6b5b071aa8d164cf"],["/posts/a23c676d.html","e16fb4bd064bb594fbe1cff81bccbb13"],["/posts/a3493d7e.html","0c51187e3dc6e66d5af7ad769d1f1dbf"],["/posts/a350daf0.html","019be378709fffee5c72457219b91fdd"],["/posts/a444b428.html","b04827504a080f9d06fcdddf07ac3e31"],["/posts/c3e41ead.html","762a5942f2b798580c682bab88d37758"],["/posts/cb2b897.html","191277b782a0119dc4a69ed7de1149c3"],["/posts/d3d28240.html","d3f0e35cbf1b01f951fb54a7426f56ff"],["/posts/d60eb45.html","aabbd01022cdc48b996b320b9143cf42"],["/posts/f2c69016.html","9ccf17e555a03f61082161476f21eea8"],["/posts/f35fa098.html","fe032a0e6476c1605180e7fbc164bca8"],["/posts/f6ea766.html","983683737fe0b45d8f6001f09f68a1d1"],["/posts/f941d9b7.html","b1b9594100c2d9088f92095b87e9fefc"],["/sw-register.js","05e9b4c38004e308eee1a2be5cc6b2aa"],["/tags/Java/index.html","e51e3e7f9494ec25089b17d2dc35085b"],["/tags/Java/page/2/index.html","7fc345e03d6226964253b8f9803c6d2e"],["/tags/Java/page/3/index.html","6bdd3019a4435265e4394faa254f4212"],["/tags/探索/index.html","b4f9fd0e61816d59b28fd63d47d91ffe"],["/tags/标签1-标签代表文章的关键字/index.html","4e1f1e1e784811579cef2e336c004b88"],["/tags/标签2/index.html","615c8c5a5112c7957589c7887498c8a1"],["/tags/标签3/index.html","4b571f0ac620d4b2870b49d1b151c1c8"],["/tags/电商/index.html","98321b46468f37fb7cad6a480c3eff60"]];
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
