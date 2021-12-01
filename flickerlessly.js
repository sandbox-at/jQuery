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
            selector: 'body',
            persist: true,
            success: function (el) {
                if (!document.querySelector("body").classList.contains("offer-content-adbe")) {
                    try {
                        var saving_promotion = '<div class="multi-pro-inner"> <h2>Unlock unlimited rewards</h2> <ul> <li><span class="c-icon icon-tick"></span> 15% discounts on 850+ partner restaurants aXcessPlus Savings Account. </li> <li><span class="c-icon icon-tick"></span> 1 reward point on every INR 100 spends on your debit card</li> </ul> <div class="button-panel"> <a href="https://origination.sc.com/onboarding/www/rtoForms/index.html?pid=cc_ourproducts_man#/onboarding?products={%22product_image%22:%22https://www.sc.com/global/av/home-windows-dining-kitchen-1c.jpg%22,%22campaign%22:%22INSA00NA00104300%22,%22name%22:%22aXcess%20Plus%20SAVINGS%20ACCOUNT%22,%22product_category%22:%22SA%22,%22product_category_name%22:%22Savings%20Account%22,%22product_url%22:%22%22,%22product_type%22:%22300%22,%22company_category%22:%22NA%22,%22product_sequence_number%22:%221%22,%22segment%22:%22Personal%22}" title="Avail Now" at-title="saving" class="c-button is-theme-solid-green-hollow-white rounded-button">Avail Now</a> </div> </div>';
                        var pl_promotion = '<div class="multi-pro-inner"> <h2>0 loan processing fees!</h2> <ul> <li><span class="c-icon icon-tick"></span> ZERO processing fee, exclusively for pre-approved loan amounts of 5 lakhs to 15 lakhs </li> <li><span class="c-icon icon-tick"></span>Apply for Personal Loan at attractive interest rates.</li> </ul> <div class="button-panel"> <a href="https://apply.standardchartered.co.in/personal-loan/" title="Get Instant Decision" at-title="personal loan" class="c-button is-theme-solid-green-hollow-white rounded-button">Get Instant Decision</a> </div> </div>';
                        var cc_promotion = '<div class="multi-pro-inner"> <h2>Enjoy 500 INR Amazon Gift Card</h2> <ul> <li><span class="c-icon icon-tick"></span> On a single transaction of INR 500 within 30 days of card setup with your DigiSmart Credit Card</li> <li><span class="c-icon icon-tick"></span>Get offers on dining, grocery, shopping and more</li> </ul> <div class="button-panel"> <a href="https://apply.standardchartered.co.in/credit-card/provide-info/?card=28231" title="Apply Now" at-title="credit card" class="c-button is-theme-solid-green-hollow-white rounded-button">Apply Now</a> </div> </div>';
                        var hl_promotion = '<div class="multi-pro-inner"> <h2>Unlock you dream home!</h2> <ul> <li><span class="c-icon icon-tick"></span>Home Loan starting at 6.99% interest rate pa for online applications exclusively.</li> <li><span class="c-icon icon-tick"></span>Zero prepayment charges on Home Loan</li><li><span class="c-icon icon-tick"></span>Avail a loan of up to INR 35 Cr.</li></ul> <div class="button-panel"> <a href="https://apply.standardchartered.co.in/av/mortagage.jsp" title="Apply Online" at-title="home loan" class="c-button is-theme-solid-green-hollow-white rounded-button">Apply Online</a> </div> </div>';
                        var loc_promotion = '<div class="multi-pro-inner"> <h2>Turn your dreams into reality</h2> <ul> <li><span class="c-icon icon-tick"></span> Get a loan upto 10 Lakhs within 2 days.</li> <li><span class="c-icon icon-tick"></span>Attractive interest rates, as low as 0.99%</li><li><span class="c-icon icon-tick"></span>Hassle free repayment EMIs through your credit card</li> </ul><div class="button-panel"> <a href="https://apply.standardchartered.co.in/av/dialALoan.jsp?" title="Get your Loan now!" at-title="loan on card" class="c-button is-theme-solid-green-hollow-white rounded-button">Get your Loan now!</a> </div> </div>';


                        var offerComp_adbe = '<div class="multi-pro" id="multi-pro-adbe" style="opacity:0;visibility: hidden;" data-delay="12"> <a class="close-icon"> <svg viewBox="0 0 50 50" class="opened"> <path d="M3 15 L25 36 L47 15" style="stroke:rgb(255,255,255);stroke-width:5; fill:none" /> </svg> <svg viewBox="0 0 50 50" class="closed"> <path d="M3 36 L25 15 L47 36" style="stroke:rgb(255,255,255);stroke-width:5; fill:none" /> </svg> </a> <div class="flikityParent"> ' + saving_promotion + pl_promotion + cc_promotion + hl_promotion + loc_promotion + ' </div> <div class="progressBarContent"> <a class="prevs"> <i class="iconsMulti"> <svg viewBox="0 0 50 50"> <path d="M35 3 L15 25 L35 47" style="stroke:rgb(255,255,255);stroke-width:7; fill:none" /> </svg> </i> Previous </a> <span class="nextIn">Next promotion in <b class="timeLeft"></b></span> <a class="skips"> <i class="iconsMulti"> <svg viewBox="0 0 50 50"> <path d="M15 3 L35 25 L15 47" style="stroke:rgb(255,255,255);stroke-width:7; fill:none" /> </svg> </i> Next </a> </div> <div class="pBar"> <div class="runningBar"></div> </div> </div>';

                        document.querySelector("body").insertAdjacentHTML("afterbegin", offerComp_adbe);

                        var timerInterval;
                        var flkty;
                        var index = 0;
                        document.querySelector('.close-icon').addEventListener('click', function () {
                            if (document.querySelector('.multi-pro').classList.contains('minimized')) {
                                document.querySelector('.multi-pro').classList.remove('minimized');
                                document.querySelector('.m-footer').style.paddingBottom = '';
                                document.querySelector('.site-info').style.bottom = '';
                                setTimeout(function () {
                                    fixAllHeight();
                                }, 20);
                            }
                            else {
                                document.querySelector('.multi-pro').classList.add('minimized');
                                setTimeout(function () {
                                    var padTop = document.querySelector('.multi-pro').offsetHeight;
                                    document.querySelector('.m-footer').style.paddingBottom = padTop + 'px';
                                    document.querySelector('.site-info').style.bottom = padTop + 20 + 'px';
                                    resetHeights();
                                }, 500);
                            }
                            window.dispatchEvent(new Event('resize'));
                        });
                        document.querySelector('.prevs').addEventListener('click', function () {
                            flkty.previous();
                            delaySec = initialDelay;
                        });
                        document.querySelector('.skips').addEventListener('click', function () {
                            flkty.next();
                            delaySec = initialDelay;
                        });

                        var delaySec = parseInt(document.querySelector('.multi-pro').getAttribute('data-delay'));
                        var initialDelay = delaySec;
                        document.querySelector('.multi-pro').querySelector('.timeLeft').innerText = formatTime(delaySec);
                        var miliInterval;
                        function timerIntFn() {
                            document.querySelector('.multi-pro').querySelector('.timeLeft').innerText = formatTime(delaySec);
                            clearInterval(miliInterval);
                            var barPer = parseFloat((100 - ((delaySec / initialDelay) * 100)).toFixed(2));
                            document.querySelector('.runningBar').style.width = barPer + '%';

                            var incremental = parseFloat(((1 / initialDelay * 100) / 20).toFixed(2));
                            miliInterval = setInterval(function () {
                                barPer += incremental;
                                document.querySelector('.runningBar').style.width = barPer + '%';
                            }, 50);

                            delaySec -= 1;
                            if (delaySec <= 0) {
                                delaySec = initialDelay;
                                setTimeout(function () {
                                    flkty.next();
                                }, 500);
                            }
                        }

                        function formatTime(time) {
                            let minutes = Math.floor(time / 60);
                            let seconds = time % 60;

                            if (seconds < 10) {
                                seconds = '0' + seconds;
                            }
                            if (minutes < 10) {
                                minutes = '0' + minutes;
                            }
                            return seconds; // minutes + ':' + 
                        }


                        function sgpbPos() {
                            let wraningElement = document.querySelector('.m-warning-alert');
                            if (wraningElement == null)
                                return false;

                            var isWarningVisible = wraningElement.classList.contains('active');
                            let bottomPos = 0;
                            if (isWarningVisible)
                                bottomPos = wraningElement.clientHeight;

                            document.querySelector('.multi-pro').style.bottom = bottomPos + 'px';
                        }

                        sgpbPos();
                        window.addEventListener('click', function (e) {
                            sgpbPos();
                        });
                        document.onreadystatechange = function (event) {
                            if (document.readyState === 'complete') {
                                setTimeout(function () {
                                    sgpbPos();
                                }, 1000);

                                flkty = new Flickity('.flikityParent', {
                                    cellAlign: 'left',
                                    contain: true,
                                    adaptiveHeight: false,
                                    autoPlay: false,
                                    prevNextButtons: false,
                                    pageDots: false,
                                    draggable: false,
                                    wrapAround: true
                                });
                                fixAllHeight();
                                timerIntFn();
                                timerInterval = setInterval(function () {
                                    timerIntFn();
                                }, 1000);
                            }
                            document.querySelector("#multi-pro-adbe").style.opacity = "1";
                            document.querySelector("#multi-pro-adbe").style.visibility = "visible";
                            document.querySelector("#multi-pro-adbe").classList.add("addedAnimation");
                        };

                        function fixAllHeight() {
                            var allmulti = document.querySelectorAll('.multi-pro-inner');
                            var allHeight = [];
                            for (var i = 0; i < allmulti.length; i++) {
                                allHeight.push(allmulti[i].offsetHeight);
                            }
                            var maxHeight = allHeight.reduce(function (a, b) {
                                return Math.max(a, b);
                            }, 0);
                            for (var j = 0; j < allmulti.length; j++) {
                                allmulti[j].style.height = maxHeight + 'px';
                            }
                        }
                        function resetHeights() {
                            var allmulti = document.querySelectorAll('.multi-pro-inner');
                            for (var j = 0; j < allmulti.length; j++) {
                                allmulti[j].style.height = '';
                            }
                        }

                    } catch (e) { }
                    document.querySelector("body").classList.add("offer-content-adbe");
                }
            }
        },
        {
            selector: "#multi-pro-adbe div.multi-pro-inner a",
            persist: true,
            success: function (el) {
                if (!el.classList.contains("offer-content-adbe")) {
                    var productClicked = el.getAttribute("at-title") + " offerClicked";
                    el.addEventListener("click", function () {
                        adobe.target.trackEvent({
                            "mbox": "mboxClickTrack",
                            "params": {
                                "clicked": productClicked
                            }
                        });
                    });
                    el.classList.add("offer-content-adbe");
                }
            }
        },
        {
            selector: "#multi-pro-adbe > div.progressBarContent > a.prevs",
            persist: true,
            success: function (el) {
                if (!document.querySelector("#multi-pro-adbe > div.progressBarContent > a.prevs").classList.contains("offer-content-adbe")) {
                    document.querySelector("#multi-pro-adbe > div.progressBarContent > a.prevs").addEventListener("click", function () {
                        adobe.target.trackEvent({
                            "mbox": "mboxClickTrack",
                            "params": {
                                "clicked": "prevArrow"
                            }
                        });
                    });
                    document.querySelector("#multi-pro-adbe > div.progressBarContent > a.prevs").classList.add("offer-content-adbe");
                }
            }
        },
        {
            selector: "#multi-pro-adbe > div.progressBarContent > a.skips",
            persist: true,
            success: function (el) {
                if (!document.querySelector("#multi-pro-adbe > div.progressBarContent > a.skips").classList.contains("offer-content-adbe")) {
                    document.querySelector("#multi-pro-adbe > div.progressBarContent > a.skips").addEventListener("click", function () {
                        adobe.target.trackEvent({
                            "mbox": "mboxClickTrack",
                            "params": {
                                "clicked": "nextArrow"
                            }
                        });
                    });
                    document.querySelector("#multi-pro-adbe > div.progressBarContent > a.skips").classList.add("offer-content-adbe");
                }
            }
        },
        {
            selector: "#multi-pro-adbe .addedAnimation",
            persist: true,
            success: function (el) {
                if (!document.querySelector("#multi-pro-adbe .addedAnimation").classList.contains("offer-content-adbe")) {
                    document.querySelector("#multi-pro-adbe .addedAnimation").addEventListener("click", function () {
                        adobe.target.trackEvent({
                            "mbox": "mboxClickTrack",
                            "params": {
                                "clicked": "openIcon"
                            }
                        });
                    });
                    document.querySelector("##multi-pro-adbe .addedAnimation").classList.add("offer-content-adbe");
                }
            }
        }
    );