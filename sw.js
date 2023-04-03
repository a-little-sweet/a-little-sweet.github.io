/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","e0291b4f0f5a113485c60e2fa9b7aac7"],["/archives/2021/index.html","dd6a3db6bcde48249913ac9a838756f0"],["/archives/2022/11/index.html","0edc7371b479a7cfb66dc7e1fa3559a3"],["/archives/2022/11/page/2/index.html","aaa66abbf496fabe0c86ac9f59acd5d6"],["/archives/2022/11/page/3/index.html","9b9124da028005e941cb14f7d7186f4e"],["/archives/2022/11/page/4/index.html","4655d0cfe3030c9d8e28a09c5771e2e8"],["/archives/2022/12/index.html","2a8ca36a23707acaaaefb6da02d2ad99"],["/archives/2022/index.html","d87c954cd7d451d98867e4ba5588c3f7"],["/archives/2022/page/2/index.html","2597b3554d55a974f60e0a592bd4ea05"],["/archives/2022/page/3/index.html","a76fca7e5100da644acbfa466263155c"],["/archives/2022/page/4/index.html","98477790e45ec3216d0bdc3cdfcfcc55"],["/archives/2023/03/index.html","58a2a6067f682ba66c5ab4239ce8e2d6"],["/archives/2023/04/index.html","9eb15a9121b96ca64ea24514365288bf"],["/archives/2023/index.html","c5f2bb9e8f13a52684dd7f09ebf8ed29"],["/archives/index.html","e48ba98e3f38bce48d1345a7a586193e"],["/archives/page/2/index.html","896a8bf2faf7661d0e9f2c5376d2a35a"],["/archives/page/3/index.html","747d3fe02b635a99d476926ecf0cfcd6"],["/archives/page/4/index.html","1a9ac3b34a057a99569a3064ad2a6cb8"],["/archives/page/5/index.html","3d5bde168f840fb04d3a7840d1060c35"],["/bangumis/index.html","c3bfb5b8817ee2eeaac14464a08b0d81"],["/categories/分类1-分类是指文章的类别/index.html","f35cb318a1b1385d8491edac4a7fc2c1"],["/comments/index.html","aa232c2932ff17092c152ff724bef375"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","7f5d5204538c62e78030d1008a8ff049"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","2837757cbf2518620bf748d197130738"],["/page/3/index.html","907d39721ea0120fb3bac9babdfd5d08"],["/page/4/index.html","cf975aca8410a8c76021188cd7424590"],["/page/5/index.html","be0f306ac60e3c951af95945514ee6d7"],["/posts/0.html","bb372b1cfcff1e271edda38fe0ae9808"],["/posts/11d8b32d.html","c05a5f444aa449672421bdae93c4778a"],["/posts/123fd56.html","bc427f705af1c8872930e2ff5b441e56"],["/posts/15c5646c.html","6677b6f50ac88d508d1bc58edd33bf94"],["/posts/215392d1.html","4e0e440b8f24ab46cea4e80cfbc3255a"],["/posts/254834b.html","1a41dfc62e0658435d54474c95a5365f"],["/posts/26346fd7.html","b5092d53f3e7be74dd3e9e41f3f31056"],["/posts/3024c976.html","0bf3619bbe91a366a9a1895cf3add94d"],["/posts/31f532fa.html","14c95f22b167147636345a40894c2772"],["/posts/3a517f26.html","32a313f64e79aeb921d959711faecf00"],["/posts/3f209729.html","d7c5b312e012e196bedd8fdd36583524"],["/posts/40ad4f2e.html","998337183602bdb7d58d25f2ca8e692f"],["/posts/427016e9.html","757e932ade83eda044b2f0fb9510f222"],["/posts/5951da65.html","a928816abda29219adad006f43b3e286"],["/posts/5c4a65bc.html","b9b94770a5845cefbaa8197ffb2e73da"],["/posts/5d6d5dcf.html","47ab8ee6b6af9c8410ddd28d597ecc37"],["/posts/60e03c6.html","7cf4d04c8d6e8375cceaa245164ebe89"],["/posts/61d01d3e.html","6820fd8e446dc80d446fc9108dd6d689"],["/posts/6963fb18.html","b53205bddace8e7ebe40d1228abd7c1a"],["/posts/6d6e514a.html","0f7197ca4502fd72f29a38ac1ee2a0bc"],["/posts/73a264ed.html","02dbcd1b184995e56bf1b58f06f95b37"],["/posts/75f5b5c3.html","c67f032d2205c6c5ff8b043109d71c44"],["/posts/7a108a3c.html","a45fecc67e26111ac6351556f0f480ec"],["/posts/7f42df8e.html","246455906d1648665ca9503d85d2e534"],["/posts/82cb469d.html","8d5f75c009aecd23a8837f639c2d02cf"],["/posts/8d78178a.html","c2a3f571a8c9457d810f3f40b644a5c7"],["/posts/9393c5c.html","3a20cdf9e14936f796a988eafb340959"],["/posts/98c6183b.html","b2b26e67a2b94d55b1148a15fd260cb0"],["/posts/9aae53cd.html","988df7ba805b44c4cfb1e19ca70ae420"],["/posts/a23c676d.html","0e6e0e327a370c6494acf004858d858f"],["/posts/a3493d7e.html","b204c4b01769a3f40195225b0895aaa1"],["/posts/a350daf0.html","ee06f5f60a4eebbf15b492248f66c7ad"],["/posts/a444b428.html","84cd9da33747109dd5b484d78d35adc1"],["/posts/bfd213df.html","5bd590dfdbca85cf89ca3a712e85e0dd"],["/posts/c3e41ead.html","cdb482be18cebb9492056b68b0847ba2"],["/posts/cb2b897.html","7414244a48520eba96ccd14acb7bdd87"],["/posts/d28e90b0.html","4e10dd36c62be917fa546813688fe84d"],["/posts/d3d28240.html","3d4e4a9a1dbd12c6f440cca3ac89ef1a"],["/posts/d60eb45.html","6ae16ff4a11e3522215857fe03b7e4ad"],["/posts/f2c69016.html","5235ae0ae7b0840f2bc8e861f9206f3b"],["/posts/f35fa098.html","1c56502d48c7f400b113154940da9c00"],["/posts/f6ea766.html","1b0744af1d884dd6cf8fb6e2a61a116e"],["/posts/f941d9b7.html","e148c120078f1479d980871a4035365b"],["/sw-register.js","0110509aa090f1e893d8bab26770bb69"],["/tags/Java/index.html","76e5263cbef6519bd197458f238d74b4"],["/tags/Java/page/2/index.html","3f7cbddabcce7714971c53aa4f033a80"],["/tags/Java/page/3/index.html","b0aad17a54a7353c48c8409defa16889"],["/tags/其他文件/index.html","683763f62012eb67bdb62a83a1566fcb"],["/tags/学习栈/index.html","3789bacf7f7191dc8507182bd3a88e95"],["/tags/探索/index.html","b72657e0f0759d73170d00dcf061d2b8"],["/tags/标签1-标签代表文章的关键字/index.html","18b15578fbdc93200708c0ce382da8d6"],["/tags/标签2/index.html","9ae9a5383e31ee43b8195c89c9a87ad6"],["/tags/标签3/index.html","4163dcb560fd11eda6d40f47050040c3"],["/tags/电商/index.html","a54c63bfd3d0839a79b3c3fec5389a0a"]];
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
