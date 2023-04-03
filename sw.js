/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","7ccb02db1e6410be9b72b40e60a49292"],["/archives/2021/index.html","a9aee7c373554463961119702b6fc3b4"],["/archives/2022/11/index.html","ab71bc3cf493b0f5cc4f1e35c3ee7fc0"],["/archives/2022/11/page/2/index.html","c2266673e3edb44e4f76482a169ee210"],["/archives/2022/11/page/3/index.html","5446c9b52c4bf95a569d43096d7ce704"],["/archives/2022/11/page/4/index.html","867d35835e1670e0c2a789ea1233b30e"],["/archives/2022/12/index.html","a9922ba81757ed0f07b397198c8e26e4"],["/archives/2022/index.html","32cb80c108c5f8ab3bda6a680d0e12ef"],["/archives/2022/page/2/index.html","3e00c5fcf2e780b6307c7fef26e67047"],["/archives/2022/page/3/index.html","4ae50b4117ac0fafc82662866c2f1d9c"],["/archives/2022/page/4/index.html","f16dc3747d2a5971a5524f05eb8d2361"],["/archives/2023/03/index.html","d8a9452c40c0bde2f55ca74eb7d49ca2"],["/archives/2023/04/index.html","ab2c1b6905fe477d1babe6ba39abee5b"],["/archives/2023/index.html","25912cabc8105bee4b1612f6a00581ac"],["/archives/index.html","a87c89cac454171af9a59fceea3fce43"],["/archives/page/2/index.html","c17802a135c0576d4b3a53619dd0ddfb"],["/archives/page/3/index.html","883c9dc338d39237d704015a3532734f"],["/archives/page/4/index.html","b81cb506e39dc628df3fb2dcce2a7197"],["/archives/page/5/index.html","a553ea60aa2c98b75eb6d0472a593b9a"],["/bangumis/index.html","96562ec9e0740fca743615a757943ac4"],["/categories/分类1-分类是指文章的类别/index.html","f25627c69dd33887aa10e4d466dc68d8"],["/comments/index.html","a9f6b156f12784b9dd272d0e96012d7e"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","3eaa2cd3972e801d2cec1d10448c567b"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","865b61e291146b5760f2f1625ccd1d64"],["/page/3/index.html","08fd0fd517244d33f275ea83946b1b0b"],["/page/4/index.html","1de5f9972bbb8d7e74529b8c76098acb"],["/page/5/index.html","9c7799a1d21d17e96c0a18fef8dd9ca8"],["/posts/0.html","bb372b1cfcff1e271edda38fe0ae9808"],["/posts/11d8b32d.html","2451cd3eb2f15387657eb8556ce55f18"],["/posts/123fd56.html","bc427f705af1c8872930e2ff5b441e56"],["/posts/15c5646c.html","6677b6f50ac88d508d1bc58edd33bf94"],["/posts/215392d1.html","532a01bb2a1c4e91d74394a6aa99723d"],["/posts/254834b.html","dbcfdf8f56272d55f848eeef8bb31aa8"],["/posts/26346fd7.html","68ba1e80007127c1da1026fc6393376c"],["/posts/3024c976.html","0bf3619bbe91a366a9a1895cf3add94d"],["/posts/31f532fa.html","14c95f22b167147636345a40894c2772"],["/posts/3a517f26.html","651b990fa84b05113dd56b426b947a0e"],["/posts/3f209729.html","d7c5b312e012e196bedd8fdd36583524"],["/posts/40ad4f2e.html","d5edd7099db15422e5c79341bd68962f"],["/posts/427016e9.html","757e932ade83eda044b2f0fb9510f222"],["/posts/5951da65.html","274ed5aca2ade7abb7853dbf690d80c6"],["/posts/5c4a65bc.html","9883fc18fae92fcea2b0e4569c9898f7"],["/posts/5d6d5dcf.html","b908b517c4fa9c117ffd21d47c9fb188"],["/posts/60e03c6.html","d14b3cf14b0b3309669119d71181f56b"],["/posts/61d01d3e.html","6820fd8e446dc80d446fc9108dd6d689"],["/posts/6963fb18.html","cb9754957c0d91c7d06050ad2c46339a"],["/posts/6d6e514a.html","634711ed3a1f994f85c52c3bfd20b447"],["/posts/73a264ed.html","866c6a213a3da78505eafab07d9c2137"],["/posts/75f5b5c3.html","79ca716829f807c81a4d11e8ae20bad1"],["/posts/7a108a3c.html","879148a4bc220c3b8ea3d1b403b0599c"],["/posts/7f42df8e.html","24621b26dd86236e9aaae1f1e6be7ef6"],["/posts/82cb469d.html","8d5f75c009aecd23a8837f639c2d02cf"],["/posts/8d78178a.html","80c9400503e495a167ebce18d0b46f2d"],["/posts/9393c5c.html","7828defed83358960d8e0f165c371484"],["/posts/98c6183b.html","b2b26e67a2b94d55b1148a15fd260cb0"],["/posts/9aae53cd.html","988df7ba805b44c4cfb1e19ca70ae420"],["/posts/a23c676d.html","eb4ba8f6569b0aeadf4140a64ff689de"],["/posts/a3493d7e.html","08c8c84b4fdbab12adaaae88ef378121"],["/posts/a350daf0.html","b56dfa17346f7b74f808abe0571fe873"],["/posts/a444b428.html","62a8302bc9c03bfe720427199cefa374"],["/posts/bfd213df.html","5bd590dfdbca85cf89ca3a712e85e0dd"],["/posts/c3e41ead.html","0208d2ee1a980b3fe7d10f17d5da4d3b"],["/posts/cb2b897.html","cb0e95c48953c87f9ae860bbf7d5f00e"],["/posts/d28e90b0.html","4e10dd36c62be917fa546813688fe84d"],["/posts/d3d28240.html","3d4e4a9a1dbd12c6f440cca3ac89ef1a"],["/posts/d60eb45.html","89f403c0ab77abf2aa35b6421b6eac2b"],["/posts/f2c69016.html","e0e232516bd5ad2d0aa06905ce610916"],["/posts/f35fa098.html","1c56502d48c7f400b113154940da9c00"],["/posts/f6ea766.html","8b8a2668c7fc71996f191de9f49839cd"],["/posts/f941d9b7.html","56b53894051117e70d316c52eb1d1439"],["/sw-register.js","61ea3f73b136a2935ba36e99e4f8c7da"],["/tags/Java/index.html","795fc893d14809930bab0f4f524ab0e9"],["/tags/Java/page/2/index.html","dc42741a4a990d712e332d0e7ad29a54"],["/tags/Java/page/3/index.html","199bfd845fff66da7309efd446dc5129"],["/tags/其他文件/index.html","6a38e0362b7afbbb643d70606dc2d39f"],["/tags/学习栈/index.html","59a95d6503232699afd61dad4ea62497"],["/tags/探索/index.html","89cff30a8f64921e492ad8f061ff53f9"],["/tags/标签1-标签代表文章的关键字/index.html","e645cff62790ed377c12308d6dd0eddd"],["/tags/标签2/index.html","18bcf52191d4adb3c8478118fa79964f"],["/tags/标签3/index.html","5f05ec7f76b4b519271614c5f79db816"],["/tags/电商/index.html","19c9ae526c999e0a27ce97e4939c7a2e"]];
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
