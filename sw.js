/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/08/index.html","9927d4814a0bbb9b1e351afd845eb08e"],["/archives/2021/index.html","2642a21a14da28a89c671fb32cead871"],["/archives/2022/11/index.html","6db49575cafc512a99bc781ce66c5a82"],["/archives/2022/11/page/2/index.html","3a4e1a2886c5096c0dc494903b23e281"],["/archives/2022/11/page/3/index.html","18eec82771b3959b697a78671ff609af"],["/archives/2022/11/page/4/index.html","2bf657948d62564887daac2439a1c63d"],["/archives/2022/index.html","037afa512b09bc451cb5aa7ddf1ff3c8"],["/archives/2022/page/2/index.html","680645a160f32a775006ec49a54a0650"],["/archives/2022/page/3/index.html","00b8cc5741c74a9eaec985f1197cbe9b"],["/archives/2022/page/4/index.html","d65937a33943c7aa17854ec14945f474"],["/archives/index.html","ef2495763319348a437c08bc0c68f857"],["/archives/page/2/index.html","8d336fb608011093b407224d601afb28"],["/archives/page/3/index.html","8ccaeecc7a540ce9ea1ed7e29f826427"],["/archives/page/4/index.html","95eb1e380be5800d0a2172b94d5c2537"],["/bangumis/index.html","5d1b811ceb6fd6426ee9c8644051b614"],["/categories/分类1-分类是指文章的类别/index.html","9728baa6792a68b949ff1a3740a5221e"],["/comments/index.html","e1367829584e7defbe9f7f6ff15543cb"],["/css/custom.css","f38881bf29354671d3ecb86b301b11b8"],["/css/index.css","e40e79530c95622a3610054ae3cf6ad9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","d35608285935fcda1845fc71affb3c07"],["/img/siteicon/144.png","1e969edb1380ec1f37f2fd280c7b9fc3"],["/img/siteicon/16.png","3d50cd2309fc389169cd4bf414e223c8"],["/img/siteicon/32.png","85ccd5d6f94198a230fa6343be147c9c"],["/img/siteicon/48.png","349753fb49ba72796aed9c94521111a7"],["/img/siteicon/512.png","cb259b040d1ce304887cb28880f4b34e"],["/img/siteicon/64.png","8a035a035c61c6a17069c6d925947bf8"],["/img/头像.jpg","ef10e989158d904df97f16b899d0f715"],["/index.html","3c9e57044aa60f3dced19767360aabe1"],["/js/ali_font.js","6c5feb2cf0d3eea0176cee4fdd1f2f35"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/runtime/runtime.min.js","e651328c2f745d84acf6225f362c70af"],["/js/runtime/快速高效.svg","a6f99db9f11312673a6df7df0ea19648"],["/js/runtime/链接.svg","905582bdc91cb973a324ed99c82efc99"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","79b408490d347b4ad03d3ce0f840cb16"],["/page/3/index.html","5fdb180d3a1f85f02be7dada3f9ea224"],["/page/4/index.html","2269254af076b277c4b020d1aff35e37"],["/posts/11d8b32d.html","234b5f2519eba1712bdee8337eae4271"],["/posts/215392d1.html","ec9e41845df85ac75bfd276e4a2a09c9"],["/posts/254834b.html","1d0b9b1c0fcdc17fc8b46e2aa3a697b9"],["/posts/26346fd7.html","83c208dc6a646ca7b5b794e3ba7cad93"],["/posts/31f532fa.html","547c4f73953895e510d42f68375761f5"],["/posts/3a517f26.html","dbb527bfc400f1bd83f3f67a6bede0b9"],["/posts/3f209729.html","a8a66de5f089bd794543ceb1e0d96a43"],["/posts/40ad4f2e.html","89c6913164a871860217c7c39c023235"],["/posts/5951da65.html","188ca1edc3b681edf8452b766c45dcd8"],["/posts/5c4a65bc.html","7dc8b6b1d132c0fb748286ae23c3c302"],["/posts/5d6d5dcf.html","5bf99ac64990a40767c70b57d558d3d7"],["/posts/60e03c6.html","6c514e343fa8d10d03a6ced72c048adc"],["/posts/61d01d3e.html","ffdd6245521d716e7d2796fc23c4096a"],["/posts/6963fb18.html","db9269df37557aff78da8ed0b8a6422e"],["/posts/6d6e514a.html","cefef3215abc62166fda7e53af0ddb8f"],["/posts/73a264ed.html","3afd7e4a3c9c2e66d1b9902a258d2eb2"],["/posts/75f5b5c3.html","8134496281548e1655451a3ae7a6c929"],["/posts/7a108a3c.html","401b9c583374e78494d0e192c62d0881"],["/posts/7f42df8e.html","3c19f15d4191390ab89c67bcaecee919"],["/posts/8d78178a.html","d8ed32059ef023d16df5a5ba7a9de08b"],["/posts/9393c5c.html","522eac9a6263ff0926402a437b912146"],["/posts/98c6183b.html","fb4e164208c4efc893ffa70597f4cf15"],["/posts/a23c676d.html","218c9396e05d111a5da5504ce563407c"],["/posts/a3493d7e.html","f3bb1ce31fd3c301966e1d1a791444d3"],["/posts/a350daf0.html","ef449bdcdfd52695a64b1d9da853372c"],["/posts/a444b428.html","d4bb01de9ea04a1bb9fa00f7046b8dea"],["/posts/c3e41ead.html","105761f9fe06a90135fd415dab06d04f"],["/posts/cb2b897.html","179061e11d5cf2b94b9b17b71300a1e8"],["/posts/d3d28240.html","1756ed2a2a8c12f4dd6050982a183d6d"],["/posts/d60eb45.html","156f9e62d52b16b0198d07bdb4e7ce7a"],["/posts/f2c69016.html","2cd621afa3d82992c861c2b056e9176e"],["/posts/f6ea766.html","143807e603b6fcd226676bebf7f1b002"],["/posts/f941d9b7.html","7c356842fc8f0845feeea765934ae3b2"],["/sw-register.js","ec253d76a4129a7bb176605110d6d8d9"],["/tags/Java/index.html","0caf7fc02a6f8c6559f9e9ddaf1de94f"],["/tags/Java/page/2/index.html","5349425008b5f69ee3cce1d90fc55956"],["/tags/Java/page/3/index.html","491991af5d00c23d68cd09d581d361f4"],["/tags/标签1-标签代表文章的关键字/index.html","0f99db884c10c8e6445f4520dcc7df79"],["/tags/标签2/index.html","ebeacef880d1f9111a7b5c2a395e5279"],["/tags/标签3/index.html","53f5dee000670bef6b7fb2b72d4bc8b4"]];
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
