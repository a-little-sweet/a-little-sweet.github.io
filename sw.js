/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","f953e5003cd572fc11f647624cd97f22"],["/archives/2021/index.html","94e73d826817c70c2bbf9d0e1ae27615"],["/archives/2022/11/index.html","477d73c3d86bbbfd6983229674079583"],["/archives/2022/11/page/2/index.html","e233733ab151e21c251d8cdc37ea4331"],["/archives/2022/11/page/3/index.html","a056e19b6d9de9a30711616e2d85c3eb"],["/archives/2022/11/page/4/index.html","573d9316603fc67e664e9a5ebb0a8d40"],["/archives/2022/12/index.html","43f9292fb79a43b300f868de1e777a49"],["/archives/2022/index.html","39f1816951f254ca35b37eaeca763e2e"],["/archives/2022/page/2/index.html","cd6b12a19515ff00f29a14242f493e00"],["/archives/2022/page/3/index.html","cdb14e46f8be7f474c8c4c928cdca157"],["/archives/2022/page/4/index.html","c6c79034718c155b1cbf9338130d8e9b"],["/archives/2023/03/index.html","792ad24e559b37ffd76ae3d1c3f4a67b"],["/archives/2023/04/index.html","70b4a095581b81e62feab82b2f8a3c43"],["/archives/2023/index.html","a167825f367f942320a81dd6f87d30f2"],["/archives/index.html","b3eac48e249480e0d37e23e4a2ecb985"],["/archives/page/2/index.html","bc786f33b88b982c3eef8410569b5a4b"],["/archives/page/3/index.html","6106f1d5f8c3f4e73e1a38f1956d6915"],["/archives/page/4/index.html","042279644302531347546641b36c2f9f"],["/archives/page/5/index.html","da0aa9f446515c3d521d43ab32acafc9"],["/bangumis/index.html","2c6bcb0b47134f408536e788866d9384"],["/categories/分类1-分类是指文章的类别/index.html","c7fd20e3eb61690c016f62b19bd6f647"],["/comments/index.html","7d1a35cb66f5b7339817d530609a56c9"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","d22f18112ccc4ad034726643bad073d7"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9b8082427840d116c48729f9dbe3d26b"],["/page/3/index.html","b3064140e846bd878b2c1d3cee3143d7"],["/page/4/index.html","e0750e96c33bcec35aefeea21d55d470"],["/page/5/index.html","68bb5a0029f0eb75fbc96ae920a62078"],["/posts/0.html","47ac70331219e45498312f8f02a1a01e"],["/posts/11d8b32d.html","df34192b3d07ec109a1f617b2289e0dd"],["/posts/123fd56.html","45021ff5920cf557585eea7031ccae14"],["/posts/15c5646c.html","945759382ba59bca54457f3331dcf656"],["/posts/215392d1.html","4e0e440b8f24ab46cea4e80cfbc3255a"],["/posts/254834b.html","c1f6af893e67c234d01ab89a8ef2626d"],["/posts/26346fd7.html","7dc7a10c4635429af9b317551a76b5dd"],["/posts/3024c976.html","0bf3619bbe91a366a9a1895cf3add94d"],["/posts/31f532fa.html","12d6a102f2281299d75573d78a5d2510"],["/posts/3a517f26.html","ada9e2b427abb6eda843748d706cfa06"],["/posts/3f209729.html","de011383c7be2719952f13b60e722285"],["/posts/40ad4f2e.html","669a67ee411650c77073b7faab558627"],["/posts/427016e9.html","757e932ade83eda044b2f0fb9510f222"],["/posts/5951da65.html","80b87427a952fa5d47e337ebdf762255"],["/posts/5c4a65bc.html","119c22f709f2e6a3f6f12c3c5b7559d6"],["/posts/5d6d5dcf.html","b5c15c7f318b445bcab0d79e34eca9f5"],["/posts/60e03c6.html","5b2e21138bb2941bfb01fa2c48e89b81"],["/posts/61d01d3e.html","6820fd8e446dc80d446fc9108dd6d689"],["/posts/6963fb18.html","a7d2c2457b06c280f52492ce11f57d91"],["/posts/6d6e514a.html","4887151203cc68b6146b836a9c2e8746"],["/posts/73a264ed.html","9e491a0f0cb41500b66e4aec0c612ca3"],["/posts/75f5b5c3.html","188a01e1565cb949df71f97472265e8f"],["/posts/7a108a3c.html","fd14e7a8efe55487be32ffd19ce4fd9f"],["/posts/7f42df8e.html","9959e31dabc2598f7a47727a69a65622"],["/posts/82cb469d.html","813c326c77dcc2750e9807333bf758c1"],["/posts/8d78178a.html","f469357af9b4379bdbf08ae4515ae197"],["/posts/9393c5c.html","bd61714826c75b0b86f4e2e07d916330"],["/posts/98c6183b.html","b2b26e67a2b94d55b1148a15fd260cb0"],["/posts/9aae53cd.html","62db19e6702714d50a74ae40bd9e4293"],["/posts/a23c676d.html","cb9bffce0c87b0cb0e5cee7d45989a8f"],["/posts/a3493d7e.html","f8a47894a4a9878527a60f7b903eae15"],["/posts/a350daf0.html","456220193bb2ee5cd51b17ab27977db4"],["/posts/a444b428.html","6fddde76b12580bf47b644ca3b2c3f18"],["/posts/bfd213df.html","29374be5f6cd063748a90701121436c8"],["/posts/c3e41ead.html","53f74d1b2d511f32888a98cfc3a05ecd"],["/posts/cb2b897.html","6998762dc1089dbc582db23b0676ccfe"],["/posts/d28e90b0.html","c87a2ce2d6ab864953d56b152b31445c"],["/posts/d3d28240.html","3d4e4a9a1dbd12c6f440cca3ac89ef1a"],["/posts/d60eb45.html","1ae6da0ef107075bf5bf2776b916c95c"],["/posts/f2c69016.html","9d516924ec75def0c82d40621366273b"],["/posts/f35fa098.html","1c56502d48c7f400b113154940da9c00"],["/posts/f6ea766.html","e76951c30502c4b3442d960bd1e68719"],["/posts/f941d9b7.html","1195a531617002981cbf8233ff647366"],["/sw-register.js","7f13284540c47228f71435d5a16058c8"],["/tags/Java/index.html","13f5cb652be22dfb79083b7bcf68b197"],["/tags/Java/page/2/index.html","e5b221ef08a88a977a0ca05e7fa888d3"],["/tags/Java/page/3/index.html","e178e829cd795eb1c399c4d7aafa8fa2"],["/tags/其他文件/index.html","97d0dad1f766c3c48e382079f4e7a20a"],["/tags/学习栈/index.html","65043d14c3a3b97faf65c14050c1df81"],["/tags/探索/index.html","cb2bc078e1dc70dcb2c21f848c71fda6"],["/tags/标签1-标签代表文章的关键字/index.html","c571a5b0a7e1e92dc8065715a64f54e7"],["/tags/标签2/index.html","312f1706134004f2aee837195e219b05"],["/tags/标签3/index.html","f928a95ec21c37e9d177aec63f7068dd"],["/tags/电商/index.html","10ea5e005be495d25cf550c803bdcca5"]];
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
