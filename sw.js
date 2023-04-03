/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","ff8ba705ea65b8ecdd350d193f1aa056"],["/archives/2021/index.html","2a32bb24ee9f3a609fae22a510023f83"],["/archives/2022/11/index.html","5856fe6ecd5a670430fd6958c969b8e6"],["/archives/2022/11/page/2/index.html","1c6b9d638085a9eb211aef324e0fb61f"],["/archives/2022/11/page/3/index.html","56aed5bfb1f9409a865f58dba1ac8537"],["/archives/2022/11/page/4/index.html","d3506231182ac92a1e6b7a8babeed7c1"],["/archives/2022/12/index.html","7afca7db156ae3b761545e224a0b5fca"],["/archives/2022/index.html","e340cd43d896f2d77b9b551060f24596"],["/archives/2022/page/2/index.html","450b8e624d8e315cbe8278c828d179b6"],["/archives/2022/page/3/index.html","fd2ec52fafff67e8403b9f211825d47b"],["/archives/2022/page/4/index.html","afc3a4a6509367669fad0960d21e6c3c"],["/archives/2023/03/index.html","9b5dc033769147ed80775759aeabfbf2"],["/archives/2023/04/index.html","036989392d155fbabeee352ecdd95afb"],["/archives/2023/index.html","64a653558da928786060ccd2ac08225b"],["/archives/index.html","ea3681c5b97eff918bdd0fd408d618c0"],["/archives/page/2/index.html","e1b5c66f2b908d9124cba9ac12235263"],["/archives/page/3/index.html","3cf0f8df774ed46712ac60b1d1db5a6a"],["/archives/page/4/index.html","fac75ebe938aefc45895738ac6929a47"],["/archives/page/5/index.html","bfb4a92a39021f8fadb90a4dbddbd838"],["/bangumis/index.html","7cbf8e078392cf0e0b3cd2e27d79ec70"],["/categories/分类1-分类是指文章的类别/index.html","ec31dedd84aa9e1cff11470546db46be"],["/comments/index.html","0af5cbcd47b451a46b2a105cb6cee431"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","0cbcbd8ddc5261b0cba6aa940de545c3"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0b08ca750bfb4d4bf23f78588c73172d"],["/page/3/index.html","7e5b9e64f3607837fa75ab5a298d5ee1"],["/page/4/index.html","cc256489b698a0ee7912bd5581858672"],["/page/5/index.html","30543ff8278c10dccf493b78627520e0"],["/posts/0.html","bb372b1cfcff1e271edda38fe0ae9808"],["/posts/11d8b32d.html","c05a5f444aa449672421bdae93c4778a"],["/posts/123fd56.html","bc427f705af1c8872930e2ff5b441e56"],["/posts/15c5646c.html","6677b6f50ac88d508d1bc58edd33bf94"],["/posts/215392d1.html","4e0e440b8f24ab46cea4e80cfbc3255a"],["/posts/254834b.html","1a41dfc62e0658435d54474c95a5365f"],["/posts/26346fd7.html","b5092d53f3e7be74dd3e9e41f3f31056"],["/posts/3024c976.html","0bf3619bbe91a366a9a1895cf3add94d"],["/posts/31f532fa.html","14c95f22b167147636345a40894c2772"],["/posts/3a517f26.html","32a313f64e79aeb921d959711faecf00"],["/posts/3f209729.html","d7c5b312e012e196bedd8fdd36583524"],["/posts/40ad4f2e.html","998337183602bdb7d58d25f2ca8e692f"],["/posts/427016e9.html","757e932ade83eda044b2f0fb9510f222"],["/posts/5951da65.html","a928816abda29219adad006f43b3e286"],["/posts/5c4a65bc.html","b9b94770a5845cefbaa8197ffb2e73da"],["/posts/5d6d5dcf.html","47ab8ee6b6af9c8410ddd28d597ecc37"],["/posts/60e03c6.html","7cf4d04c8d6e8375cceaa245164ebe89"],["/posts/61d01d3e.html","6820fd8e446dc80d446fc9108dd6d689"],["/posts/6963fb18.html","b53205bddace8e7ebe40d1228abd7c1a"],["/posts/6d6e514a.html","0f7197ca4502fd72f29a38ac1ee2a0bc"],["/posts/73a264ed.html","02dbcd1b184995e56bf1b58f06f95b37"],["/posts/75f5b5c3.html","c67f032d2205c6c5ff8b043109d71c44"],["/posts/7a108a3c.html","a45fecc67e26111ac6351556f0f480ec"],["/posts/7f42df8e.html","246455906d1648665ca9503d85d2e534"],["/posts/82cb469d.html","8d5f75c009aecd23a8837f639c2d02cf"],["/posts/8d78178a.html","c2a3f571a8c9457d810f3f40b644a5c7"],["/posts/9393c5c.html","3a20cdf9e14936f796a988eafb340959"],["/posts/98c6183b.html","b2b26e67a2b94d55b1148a15fd260cb0"],["/posts/9aae53cd.html","988df7ba805b44c4cfb1e19ca70ae420"],["/posts/a23c676d.html","0e6e0e327a370c6494acf004858d858f"],["/posts/a3493d7e.html","b204c4b01769a3f40195225b0895aaa1"],["/posts/a350daf0.html","ee06f5f60a4eebbf15b492248f66c7ad"],["/posts/a444b428.html","84cd9da33747109dd5b484d78d35adc1"],["/posts/bfd213df.html","5bd590dfdbca85cf89ca3a712e85e0dd"],["/posts/c3e41ead.html","cdb482be18cebb9492056b68b0847ba2"],["/posts/cb2b897.html","7414244a48520eba96ccd14acb7bdd87"],["/posts/d28e90b0.html","4e10dd36c62be917fa546813688fe84d"],["/posts/d3d28240.html","3d4e4a9a1dbd12c6f440cca3ac89ef1a"],["/posts/d60eb45.html","6ae16ff4a11e3522215857fe03b7e4ad"],["/posts/f2c69016.html","5235ae0ae7b0840f2bc8e861f9206f3b"],["/posts/f35fa098.html","1c56502d48c7f400b113154940da9c00"],["/posts/f6ea766.html","1b0744af1d884dd6cf8fb6e2a61a116e"],["/posts/f941d9b7.html","e148c120078f1479d980871a4035365b"],["/sw-register.js","2b1cf92f1b4e05e3c1ee3feea8fa2a9e"],["/tags/Java/index.html","f61cc9a131fc8adcc6be4e85c203dc65"],["/tags/Java/page/2/index.html","0ca0ec474ce9ff585721047bd6104323"],["/tags/Java/page/3/index.html","74d9eb40f2c22b5dcc045d87e37c7b8e"],["/tags/其他文件/index.html","f7bf5134a586f6e382b5d98661d9561a"],["/tags/学习栈/index.html","7bbc667e1c6574c1e4ffc93b1500c3b8"],["/tags/探索/index.html","c8801d445d4b06cd8b0f1664f7eb14d7"],["/tags/标签1-标签代表文章的关键字/index.html","45fd1f57e1ebf6bbbc37cf1058c47410"],["/tags/标签2/index.html","8dd6e4495aadfa3444c58e232233facb"],["/tags/标签3/index.html","026157f20d9e85c3db084b1cd9a1e532"],["/tags/电商/index.html","347fb583f7f9290a4c499f6d1d724120"]];
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
