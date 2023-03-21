/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","aa19ecb345f08b6734506e7681bca593"],["/archives/2021/index.html","804f3800ad5991eb4610477cafe86640"],["/archives/2022/11/index.html","8d5a3e8e1143166f5f10600683f20272"],["/archives/2022/11/page/2/index.html","589dedc6474af8c1788363883c645841"],["/archives/2022/11/page/3/index.html","cb7850097fa3c73e133fb3bca4dcb147"],["/archives/2022/11/page/4/index.html","59ef8ef276f41dfe25d95ed25388b919"],["/archives/2022/12/index.html","1bea7c0ab65e55dc86d91b81ea94c384"],["/archives/2022/index.html","57a93d052a9566b28222e49086167479"],["/archives/2022/page/2/index.html","eca3eca3a0d821c03bcaa0fde580331e"],["/archives/2022/page/3/index.html","090ea474cf18c1df683af8fb5ec44af7"],["/archives/2022/page/4/index.html","e442e409d0b09b95f3cb60acc21ca5ec"],["/archives/2023/03/index.html","39c231aa697476f9eb5cfd7b77ba30c3"],["/archives/2023/index.html","9629d0a2640891fe834b9c57f95c0700"],["/archives/index.html","b34aec1d1c9b4c3a78af2bda2a858558"],["/archives/page/2/index.html","69f2b70f17337843174f7eaa2d9a80d7"],["/archives/page/3/index.html","363e568b06e8e883c982ffeca0d0d7b4"],["/archives/page/4/index.html","37c497661cd25146d2a2f86276ca98e0"],["/bangumis/index.html","b2060be24314eb533acecfd9ece159a6"],["/categories/分类1-分类是指文章的类别/index.html","d362a0f295d31e6deeb5c74002296203"],["/comments/index.html","2b518c59ef2c6b6be7b8e944075950d4"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","03300f19b1a889b26428897bcc24ba89"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","596bb41ba9da18e4d10fc60906953d00"],["/page/3/index.html","8299af3b6db15acfe08a5beaf820989a"],["/page/4/index.html","957f7c98c9e24e2bb55989243f70eaf2"],["/posts/0.html","9897e5c8afc4fa4a795fc838b4ec1591"],["/posts/11d8b32d.html","32a2eefb7225bf8e8fa2eb75d968a97e"],["/posts/215392d1.html","676d0fa17d607a7e959e336030138495"],["/posts/254834b.html","e595612b83197913d799d4beacb8df3b"],["/posts/26346fd7.html","d3d02297ce4b151bebfc43a60ff6ba4f"],["/posts/3024c976.html","e6db180ffdb90f95c03b06382f7dd303"],["/posts/31f532fa.html","6f69a7bcbb8d54c6ebb341c0e4350f6e"],["/posts/3a517f26.html","0d0d432658064e5337ef3658c735f58b"],["/posts/3f209729.html","1e6b02af16e205808e00118c34de5042"],["/posts/40ad4f2e.html","eea9add9d25b283ee31ad8f49fc8660b"],["/posts/5951da65.html","52461ecb2859431b6f3ad529ac8dc0aa"],["/posts/5c4a65bc.html","0228cbe373b06f0eed87ba97a5e5e3f7"],["/posts/5d6d5dcf.html","815c3e146eb8b322a0c3e57ead1e3fd3"],["/posts/60e03c6.html","b06d1c63eb10ad060ec262a8f1f1a7f0"],["/posts/61d01d3e.html","4c58de7b8e4798bc5fc7982f030d4e17"],["/posts/6963fb18.html","d2c0bd126bf88cb39ac6d832f652d8e7"],["/posts/6d6e514a.html","83140cbcd7f665404266e616e05d3982"],["/posts/73a264ed.html","fb2c74932353c3afc3b3e8d0b4439f13"],["/posts/75f5b5c3.html","4fb433bbb3b8f67f7e7713cc7225d456"],["/posts/7a108a3c.html","5dae08c6fee93fae81791248f03b5e48"],["/posts/7f42df8e.html","1410ab3176c2a4262478441773124ece"],["/posts/8d78178a.html","02b9231f3eb7912d5ec5338944a9c93d"],["/posts/9393c5c.html","60d04f0259997a17f4d062664d458558"],["/posts/98c6183b.html","699937df454ac3664ca3c9358edd025f"],["/posts/a23c676d.html","09458f581fd47cb400537b748bb527cc"],["/posts/a3493d7e.html","44ecdbc313a23d84eeaa808c620d5df5"],["/posts/a350daf0.html","ed05e15c4ad44a137e05137c5a66cddc"],["/posts/a444b428.html","05f380f6dfad77712679e2659c4274b1"],["/posts/c3e41ead.html","e0c453e7e55a3a60342f7d6c3269cba4"],["/posts/cb2b897.html","cfbfe8ce2f26ce7237d8edeecdad22af"],["/posts/d3d28240.html","58c66b272eee7c6a5578f1f81fadb9f4"],["/posts/d60eb45.html","9c924590dcc42b6d156e3339425f4c6b"],["/posts/f2c69016.html","8887dac7fb156302fc039d78e4955864"],["/posts/f35fa098.html","0143f2b8b4503d7481de425f96b239c4"],["/posts/f6ea766.html","38f155bcfc87049d447a12a24c22c7e1"],["/posts/f941d9b7.html","28a6d53851caa52553f2fd4ffe19245b"],["/sw-register.js","583ad2fed577def89d93c96950e159ef"],["/tags/Java/index.html","0df924f4d8e3920cf945936c1a08d731"],["/tags/Java/page/2/index.html","22ec611b3b7d05aafd73f2e8f5e1a1c7"],["/tags/Java/page/3/index.html","76b8ebc330a5d41316c965568afe42a9"],["/tags/标签1-标签代表文章的关键字/index.html","ffde7c27406091377f01a834d0828d72"],["/tags/标签2/index.html","ddf81f6cfd357f3d89c38e4ab55ef4aa"],["/tags/标签3/index.html","9a5f4eeece1aac9b4a6c39b2b98153ed"],["/tags/电商/index.html","203baabb1a734dace3cde60ab31f291f"]];
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
