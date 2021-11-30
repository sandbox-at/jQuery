//SCB Singapore count down offer

<script>
    Flickerlessly = window.Flickerlessly || {};
    !function (A) {
        "use strict";
        var init = function (id, sel, callback, persist) {
            var animationName = 'atNodeInserted' + id;
            var cssStr = '@keyframes ' + animationName + ' {from {opacity:0.99} to {opacity:1} }\n';
            cssStr += sel + '{animation-duration:0.001s;animation-name:' + animationName + ';visibility:hidden}';
            var head = document.getElementsByTagName("head")[0];
            if (head) {
                var style = document.createElement("style");
                style.setAttribute("type", "text/css");
                if (style.styleSheet)
                    style.styleSheet.cssText = cssStr;
                else
                    style.appendChild(document.createTextNode(cssStr));
                head.insertBefore(style, head.firstChild)
            };
            var _insertListener = function (event) {
                if (event.animationName === animationName && typeof event.target === 'object') {
                    var isExecute = ((persist === true) || (persist === false && event.target.getAttribute('data-flk-success') === null)) ? true : false;
                    if (console && console.info) console.info("Node " + sel + " ready! Execute: " + isExecute, event.target);
                    if (typeof callback === 'function' && isExecute) {
                        callback(event.target);
                        event.target.setAttribute('data-flk-success', animationName);
                    }
                    event.target.style.visibility = 'visible';
                }
            };
            ['animationstart', 'MSAnimationStart', 'webkitAnimationStart'].forEach(function (item, index) {
                document.addEventListener(item, _insertListener, false);
            });
        };
        A.onReady = function () {
            for (var i = 0; i < arguments.length; i++) {
                var obj = arguments[i];
                var selector = obj.selector;
                var success = obj.success || null;
                var persist = obj.persist || false;
                var rand = Math.floor((Math.random() * 100) + 1);
                init(rand, selector, success, persist);
            };
        };
    }(Flickerlessly);
    Flickerlessly.onReady(
        {
            selector: "#sc-lb-module-promotional-masthead > div.content > div > div.hero-header > div.wrapper > p.message",
            persist: true,
            success: function (el) {
                if (!document.querySelector("#sc-lb-module-promotional-masthead > div.content > div > div.hero-header > div.wrapper > p.message").classList.contains("offer-content-adbe")) {
                    try {
                        document.querySelector("#sc-lb-module-promotional-masthead > div.content > div > div.hero-header > div.wrapper > p.message").innerHTML = "Buy what you love, split what you pay. Interest-free instalments (processing fees may apply). No hidden cost.";
                    } catch (e) { }
                    document.querySelector("#sc-lb-module-promotional-masthead > div.content > div > div.hero-header > div.wrapper > p.message").classList.add("offer-content-adbe");
                }
            }
        },
        {
            selector: "ul > li > a.c-button.rounded-button[title*='Apply Now'i]",
            persist: true,
            success: function (el3) {
                if (!el3.classList.contains("offer-content-adbe")) {
                    try {
                        el3.addEventListener("click", function (event) {
                            adobe.target.trackEvent({
                                "mbox": "mboxClickTrack",
                                "params": {
                                    "clicked": "applyNow"
                                }
                            });
                        });
                    } catch (e) { console.log(e); }
                    el3.classList.add("offer-content-adbe");
                }
            }
        }
    );
</script>