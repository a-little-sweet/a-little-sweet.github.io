/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","72d4f4ab6cd683bdba49e6e5848944fc"],["/archives/2021/index.html","11779afbe4d819f1892e87a485389c7e"],["/archives/2022/11/index.html","5c21a54e9b9928ff0c2d86d254c1f011"],["/archives/2022/11/page/2/index.html","f1f5185368d0552f95369e8b38a536a8"],["/archives/2022/11/page/3/index.html","6da3ea9bee126eb5806473c1eca70c71"],["/archives/2022/11/page/4/index.html","5518e0282072e8ae4e7db754bb84efe0"],["/archives/2022/12/index.html","1f7cc3e10e816e19b38d001d9baf21b7"],["/archives/2022/index.html","8e1fc9be8c1680c062ac4fc49d80b6eb"],["/archives/2022/page/2/index.html","504a7db24d16a226a9caea3047fee6c4"],["/archives/2022/page/3/index.html","7f97a52a91ac5a624a1050023cd3b86c"],["/archives/2022/page/4/index.html","5153554ec3fa6c1468f9d2207afbac81"],["/archives/2023/03/index.html","14278ca333a8268c2251026df3717165"],["/archives/2023/index.html","eed9ceea17c6506e4992466953d0cf66"],["/archives/index.html","9038ad4894e921754f5e2d2213e7dd07"],["/archives/page/2/index.html","03bb064ad99e3695e18fdde1d7888d89"],["/archives/page/3/index.html","289bd0229f8849f2fec655f8a200c3eb"],["/archives/page/4/index.html","443bbb7f39a30bae98fbb78b2b069bee"],["/bangumis/index.html","f155721ced5f8edbf13624fba421179c"],["/categories/分类1-分类是指文章的类别/index.html","fa82e8aecbf8370f30c1786748794175"],["/comments/index.html","17366f36dc598c90e84bdd3f7a2dfef5"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","374ececff18b19d6408d31576518cc07"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c26204c11cd308da4d79640d4c7f5582"],["/page/3/index.html","96cbdc0838831d19884e8fbe42c5508c"],["/page/4/index.html","61b1175a578a7a6359e20a70590f4d47"],["/posts/0.html","f3cf08ba4d50d2b93875c5d19012a70c"],["/posts/11d8b32d.html","0526dab9b0c27e6787f59eb2396b851d"],["/posts/215392d1.html","ae7f3fbf4faf329f03e82058b89bb87b"],["/posts/254834b.html","32bbe8870ddf97f2ea81cd702a56d486"],["/posts/26346fd7.html","b259e9076548819383e79ff75a14029f"],["/posts/3024c976.html","2da85dbe9318e2ddafee3722de55dc3b"],["/posts/31f532fa.html","50faf69fd78240386ad3d8875ac6f577"],["/posts/3a517f26.html","b9cf7561adf4d06eb80c408dca1227a4"],["/posts/3f209729.html","aca905c06fc4f645154f9930dd14c773"],["/posts/40ad4f2e.html","864f1550987cf96fc2cb4ba4bc91b8b2"],["/posts/5951da65.html","24e707de44824e98daf8a577068048e6"],["/posts/5c4a65bc.html","e1f5745b1753389977c4d363835e4f70"],["/posts/5d6d5dcf.html","edf665f490da103d0acc87ec7a96ae02"],["/posts/60e03c6.html","4c863436f77b60e365d08b57af91f15a"],["/posts/61d01d3e.html","ed9b1a52c24149b0bbc044bc63268031"],["/posts/6963fb18.html","736eab86049a27450629c6212793ff60"],["/posts/6d6e514a.html","41d6720045bb365d83e97dcc68d84b52"],["/posts/73a264ed.html","3160dfefc91c7acd3ede62f515c6ec27"],["/posts/75f5b5c3.html","a90472690d997fbeaf0f904e5fde218d"],["/posts/7a108a3c.html","6ac9e5348669dd7f9ccc588eb3d3524e"],["/posts/7f42df8e.html","9c2127a9cca6d186cf1391ec97105320"],["/posts/8d78178a.html","2d00f9130c0bff1a41bcad7ca5db1419"],["/posts/9393c5c.html","59b3548bf1acdae5c8a7b53305f22770"],["/posts/98c6183b.html","c389da9fa2f529cb9fadf5a24c08a0f1"],["/posts/a23c676d.html","0b6c79c51d8f64f82d13da8b459702e4"],["/posts/a3493d7e.html","6b00fd67e283b46f6832bc6d4702789c"],["/posts/a350daf0.html","4614e7f3efab2308cf6cd0b8cc59d212"],["/posts/a444b428.html","1f8f58eaf3abb22989bab31ada95b5b4"],["/posts/c3e41ead.html","1679b954b0758f68446614e5acc1c762"],["/posts/cb2b897.html","53e1677d93baf2aa87226b69e2d24631"],["/posts/d3d28240.html","1bfbcf146ed23f70593c29ae893a5c1c"],["/posts/d60eb45.html","29eaa152e1349f7614bf7f93c1c1c947"],["/posts/f2c69016.html","d2d726f6d41712314b92c4654bd3a92e"],["/posts/f35fa098.html","924735bfbe116d87f3db464c71e33ba0"],["/posts/f6ea766.html","e1b63153ff6874694315719b20ed845e"],["/posts/f941d9b7.html","f4c1ef9bdae4c28da79e2dccd39ec891"],["/sw-register.js","68763df6559db96b1bb1df97b420c4cf"],["/tags/Java/index.html","dd2dc937626824fda0ff70a17ca5673e"],["/tags/Java/page/2/index.html","a98433183d873b7e632c837782eadac7"],["/tags/Java/page/3/index.html","4710cc1116d5f4036b751212d5916912"],["/tags/标签1-标签代表文章的关键字/index.html","fce7d8d52059a11c65add1e548cbe485"],["/tags/标签2/index.html","0bcf3c70f947d1da835703fef7132511"],["/tags/标签3/index.html","4406329b93d781876954e346fbba8d01"],["/tags/电商/index.html","66295456bbd55344cb1971721ebda619"]];
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
