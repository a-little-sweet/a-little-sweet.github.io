/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","d95155770e9e1fbddc485e56e5dec4c7"],["/archives/2021/index.html","2c9dc005860deed4f81d0198e6288e94"],["/archives/2022/11/index.html","5d8368dcd8c45e6d00410d350cbb8c54"],["/archives/2022/11/page/2/index.html","ca714c351a1daae357f38a460da9eff4"],["/archives/2022/11/page/3/index.html","713e0307493af342b4d4265aefea7334"],["/archives/2022/11/page/4/index.html","afe293f0dbf2397f4d871248ccf9b493"],["/archives/2022/12/index.html","ec51cf3b8d2f8b2e7532b0dd2d424cf4"],["/archives/2022/index.html","f8b45a30da2d09693a165a3f53ea35f2"],["/archives/2022/page/2/index.html","bf124125910ae54d841912361c4c0b75"],["/archives/2022/page/3/index.html","28214fb5acad12506ccc905ed6263380"],["/archives/2022/page/4/index.html","fde58d4a0b3dd9106a737004580eddd9"],["/archives/2023/04/index.html","4dfd27861020896d8f9bf6ad03d31a9c"],["/archives/2023/index.html","16773b10e51e755ad38fae2b0c33d032"],["/archives/index.html","5c977eeb361f7622afee93bb4b221434"],["/archives/page/2/index.html","532ad016e45a1ce93dd9962e390ab422"],["/archives/page/3/index.html","89910a5ae0fad0e0c7bc513965b80662"],["/archives/page/4/index.html","2bbeba9af462eec7093e074fa30b5a68"],["/archives/page/5/index.html","82685d13bcad30b22303a09cb98d863a"],["/bangumis/index.html","39df1f8ee456843d344d8514d4ea5711"],["/categories/分类1-分类是指文章的类别/index.html","f7ee52afa402d9b5c09ff678399634ae"],["/comments/index.html","c12d15edb526470a0880eb17ba3198e1"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","fbdb0930a503cbcff69c04f336404a6c"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8aed9344b1208c678fb54ac137f12073"],["/page/3/index.html","26b73f1f29a5aeeaa6e116e76946d226"],["/page/4/index.html","a24894ea6916f2334e91e0e6155982a4"],["/page/5/index.html","0d84a5e104a896d42dcb1339c5405c4a"],["/posts/0.html","e15386433a147946ec26acd446718b4d"],["/posts/11d8b32d.html","b1b559d7a72f42570f4b59ea75faed6b"],["/posts/215392d1.html","ee6ce9d97cb9d3e787696d6d51933f99"],["/posts/254834b.html","f12fb876990045a121b1f49408566a57"],["/posts/26346fd7.html","3d34dfdab01e6a48cc20b400f267e0ce"],["/posts/3024c976.html","f68cc65a52d62d160115c0152f676b15"],["/posts/31f532fa.html","469a467a9fd2b9de40632105b47de5be"],["/posts/3a517f26.html","3d5362b8264326653a352ddc78ac9e48"],["/posts/3f209729.html","d11080b11ec16d8f5c1097b2a907fdd9"],["/posts/40ad4f2e.html","ee25150d607ff49e3eabe908a53c1f1b"],["/posts/5951da65.html","a0d7b17f5dd761da6b8d4324dc1f8823"],["/posts/5c4a65bc.html","d22ad0a12f15b343ffe68d42a2ed930d"],["/posts/5d6d5dcf.html","bfeba4cbe095c506c93494c6e42a964e"],["/posts/60e03c6.html","9512acde976b9875f1fba45659a56fea"],["/posts/61d01d3e.html","0c56957c3e8c97fefa253af2dbe67c86"],["/posts/6963fb18.html","502020fdc781e1c5b22001a72acf5a03"],["/posts/6d6e514a.html","8b18a19a2c4c8b9008004b43520bbccb"],["/posts/73a264ed.html","728411167a450e1ed31e38c9e3c60e17"],["/posts/75f5b5c3.html","47081b807ec47d7c30a0ac19583fbe32"],["/posts/7a108a3c.html","d09868476a3f451f121de131cdc6ce9e"],["/posts/7f42df8e.html","4c49af526b1d7e8e4c97cbe008738c35"],["/posts/8d78178a.html","a0068cfe4708dce3d131da3bc59ece39"],["/posts/9393c5c.html","50693b473a1192ecb0a1603ac8d7069a"],["/posts/98c6183b.html","3a794f41644078b2aee5affe19f77ea6"],["/posts/a23c676d.html","c68c0c24ed6b3600168e532d377053c2"],["/posts/a3493d7e.html","0e5c3ef7a7621abae04b48fa75a4720e"],["/posts/a350daf0.html","62bb6fcc90b811dfac66acae6fa428fd"],["/posts/a444b428.html","99e1552e79142ba01c6dda654037f50e"],["/posts/c3e41ead.html","b1150f1a911527913df103160b72eb29"],["/posts/cb2b897.html","34217eaf8203e47fca64092a843becd8"],["/posts/d3d28240.html","99848395c5a899ee1bc54d8dc858826f"],["/posts/d60eb45.html","251b81ac667e72913e5c2dcc2007ac21"],["/posts/f2c69016.html","00c630da8246ac8ed193fb1dafd83141"],["/posts/f35fa098.html","06b6aa8da370760b419792dbeb914a40"],["/posts/f6ea766.html","f1ca631b857698b9b104fb60d61e592b"],["/posts/f941d9b7.html","9bd05fffe2a5072580a0dbe227078f54"],["/sw-register.js","05dc026e3230ebba3b39e65f2cc40b56"],["/tags/Java/index.html","6578226ce2e61986dd613ee880394d58"],["/tags/Java/page/2/index.html","c7198f937c208823a8e78689a79553e6"],["/tags/Java/page/3/index.html","77a4b3cdd022de618c2751ec4af6fd1f"],["/tags/标签1-标签代表文章的关键字/index.html","c4f98d410e25b2727d823a6af3b6abcf"],["/tags/标签2/index.html","5b6cbff42d5f4ba6163ddc953eb50078"],["/tags/标签3/index.html","fa074d172d81d75e6d26758db6430a56"],["/tags/电商/index.html","3df0a95d34acd295944ab781c6fa62da"]];
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
