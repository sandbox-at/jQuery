<style>
    .multi-pro {
        position: fixed;
        right: 20px;
        bottom: 0px;
        margin-bottom: 20px;
        background: linear-gradient(to right, #09246f, #1e4da9);
        z-index: 111;
        padding: 20px;
        width: 100%;
        max-width: 350px;
        border-radius: 10px;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
    }

    .multi-pro.addedAnimation {
        animation: sgpbMove 1s;
        animation-iteration-count: 1;
        transition: all .3s;
    }

    @keyframes sgpbMove {
        from {
            right: -500px;
            opacity: 0;
        }

        to {
            right: 0px;
            opacity: 1;
        }
    }

    @keyframes sgpbMoveMobile {
        from {
            bottom: -700px;
            opacity: 0;
        }

        to {
            bottom: 0px;
            opacity: 1;
        }
    }

    .multi-pro.minimized {
        padding: 10px 15px;
        margin-bottom: 0;
        border-radius: 10px 10px 0 0;
        -webkit-border-radius: 10px 10px 0 0;
        -moz-border-radius: 10px 10px 0 0;
    }

    .multi-pro:not(minimized) .multi-pro-inner {
        padding-bottom: 56px;
        position: relative;
    }

    .multi-pro.minimized .multi-pro-inner h2 {
        margin: 0;
        padding-right: 15px;
        font-size: 16px;
    }

    .multi-pro.minimized .multi-pro-inner h3 {
        display: none;
    }

    .multi-pro.minimized .button-panel {
        display: none;
    }

    .multi-pro.minimized .progressBarContent {
        display: none;
    }

    .multi-pro.minimized .pBar {
        display: none;
    }

    .multi-pro.minimized .close-icon {
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .multi-pro .close-icon svg.opened {
        display: block;
    }

    .multi-pro .close-icon svg.closed {
        display: none;
    }

    .multi-pro.minimized .close-icon svg.opened {
        display: none;
        height: 15px;
    }

    .multi-pro.minimized .close-icon svg.closed {
        display: block;
        height: 15px;
        position: absolute;
        top: 11px;
        width: 15px;
        right: 15px;
    }

    .multi-pro.minimized .flickity-viewport {
        height: 17px !important;
    }

    .multi-pro-inner {
        width: 100%;
        color: #fff;
        line-height: 1.4;
        letter-spacing: .5px;
    }

    .multi-pro-inner h2 {
        font-size: 18px;
        color: #fff;
        margin: 0 0 10px 0;
        font-weight: 500;
        padding-right: 25px;
    }

    .multi-pro-inner h3 {
        font-size: 14px;
        color: #fff;
        margin: 0 0 10px 0;
        font-weight: 300;
        line-height: 1.2;
    }

    .confirmLabel {
        width: 100%;
        position: relative;
        padding-left: 20px;
        display: none;
    }

    input.confirm {
        position: absolute;
        left: 0px;
        top: 7px;
    }

    .confirmLabel span {
        display: block;
        font-size: 12px;
    }

    .button-panel {
        width: 100%;
        text-align: center;
        margin: 10px 0;
        position: absolute;
        bottom: 0;
    }

    .c-btn {
        font-size: 14px;
        color: #fff;
        background-color: #00a546;
        padding: 8px 40px;
        display: inline-block;
        text-transform: uppercase;
        border-radius: 50px;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
    }

    .progressBarContent {
        width: 100%;
        display: flex;
        font-size: 12px;
        color: #fff;
    }

    .progressBarContent a:hover {
        color: #fff;
    }

    .prevs {
        width: 25%;
        color: inherit;
        padding-left: 18px;
        position: relative;
        line-height: 15px;
    }

    .skips {
        width: 25%;
        text-align: right;
        color: inherit;
        padding-right: 18px;
        position: relative;
        line-height: 15px;
    }

    .iconsMulti {
        width: 15px;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
    }

    .skips .iconsMulti {
        left: auto;
        right: 0;
    }

    .iconsMulti svg {
        width: 100%;
        display: block;
        height: 15px;
    }

    .nextIn {
        width: 50%;
        color: inherit;
        text-align: center;
        line-height: 15px;
    }

    .progressBarContent b {
        font-weight: 600;
    }

    .flikityParent>.multi-pro-inner:nth-of-type(1n+2) {
        display: none;
    }

    .pBar {
        width: 100%;
        margin: 5px 0;
        background-color: #ffffff40;
        border-radius: 15px;
    }

    .runningBar {
        height: 3px;
        width: 0%;
        background-color: #fff;
    }

    .close-icon {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 20px;
        top: 21px;
        cursor: pointer;
        z-index: 11;
    }

    .flickity-prev-next-button {
        visibility: hidden;
    }

    @media (max-width:600px) {
        .multi-pro {
            animation: sgpbMoveMobile 1s;
            margin-bottom: 0px;
            right: 0px;
            width: 100%;
            max-width: 100%;
            border-radius: 10px 10px 0 0;
            -moz-border-radius: 10px 10px 0 0;
            -webkit-border-radius: 10px 10px 0 0;
        }

        .multi-pro.minimized {
            right: 0px;
            border-radius: 0;
            -moz-border-radius: 0;
            -webkit-border-radius: 0;
        }

        .prevs {
            text-indent: -1000px;
            width: 20px;
            position: relative;
        }

        .skips {
            text-indent: 1000px;
            width: 20px;
            position: relative;
        }

        .nextIn {
            width: 100%;
        }

        .pBar {
            position: absolute;
            left: 0px;
            bottom: 0px;
            margin: 0;
        }

        .runningBar {
            height: 5px;
        }

        .multi-pro-inner h2 {
            text-align: center;
        }

        .multi-pro-inner h3 {
            text-align: center;
        }

        .multi-pro.minimized .multi-pro-inner h2 {
            text-align: left;
        }
    }

    .multi-pro .c-button {
        padding: 10px 20px !important;
        font-size: 12px !important;
        line-height: 1 !important;
    }

    .multi-pro-inner ul li {
        margin-bottom: 3px;
        position: relative;
        padding-left: 18px;
    }

    .multi-pro-inner ul li span {
        position: absolute;
        left: 0;
        top: 4px;
    }

    /**/
    a#sme-wtb-ob-bnr+span a.button.small.radius.external-link {
        margin-left: 15px;
    }

    div.back-to-top a {
        float: left;
    }

    #\#bannerCaption1>div.info-box>span>div.sc-login-drop {
        left: 49px;
        color: black;
        margin-top: -29px;
        display: none;
    }

    #\#bannerCaption1>div.info-box>span>div.sc-login-drop .sc-login-drop__link {
        color: #0c77b9;
    }

    #\#bannerCaption1>div.info-box>span>div.sc-login-drop .sc-login-drop__bank-login {
        color: #000;
    }

    #\#bannerCaption1>div.info-box>span>div.sc-login-drop .sc-login-drop__link:hover {
        color: #fff;
    }

    a#sme-wtb-ob-bnr+span a.button.small.radius.external-link:hover+.sc-login-drop,
    #\#bannerCaption1>div.info-box a#sme-wtb-ob-bnr+span:hover .sc-login-drop {
        display: block;
        visibility: visible;
        opacity: 1;
    }

    #\#bannerCaption1 .sc-login-drop ul {
        margin-bottom: 0;
    }

    @media (max-width:1023.5px) {
        #\#bannerCaption1>div.info-box>span>div.sc-login-drop {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
        }
    }
</style>
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
            selector: 'body',
            persist: true,
            success: function (el) {
                if (!document.querySelector("body").classList.contains("offer-content-adbe")) {
                    try {
						var deposits_promotion = '<div class="multi-pro-inner"> <h2>Unlock unlimited rewards</h2> <ul> <li><span class="c-icon icon-tick"></span> -15% discounts on 850+ partner restaurants aXcessPlus Savings Account. </li> <li><span class="c-icon icon-tick"></span> - 1 reward point on every INR 100 spends on your debit card</li> </ul> <div class="button-panel"> <a href="https://origination.sc.com/onboarding/www/rtoForms/index.html?pid=cc_ourproducts_man#/onboarding?products={%22product_image%22:%22https://www.sc.com/global/av/home-windows-dining-kitchen-1c.jpg%22,%22campaign%22:%22INSA00NA00104300%22,%22name%22:%22aXcess%20Plus%20SAVINGS%20ACCOUNT%22,%22product_category%22:%22SA%22,%22product_category_name%22:%22Savings%20Account%22,%22product_url%22:%22%22,%22product_type%22:%22300%22,%22company_category%22:%22NA%22,%22product_sequence_number%22:%221%22,%22segment%22:%22Personal%22}" title="Avail Now" at-title="bonus saver" class="c-button is-theme-solid-green-hollow-white rounded-button">Know More</a> </div> </div>';
                        var pl_promotion = '<div class="multi-pro-inner"> <h2>Zero loan processing fees!</h2> <ul> <li><span class="c-icon icon-tick"></span> - ZERO processing fee, exclusively for Loan amounts of E4 to 15lacs</li> <li><span class="c-icon icon-tick"></span>- Apply for Personal Loan at attractive interest rates</li> </ul> <div class="button-panel"> <a href="https://apply.standardchartered.co.in/personal-loan/" title="Apply Now" at-title="cashOne" class="c-button is-theme-solid-green-hollow-white rounded-button">Apply Now</a> </div> </div>';
                        var cc_promotion = '<div class="multi-pro-inner"> <h2>Enjoy 500 INR Amazon Gift Card</h2> <ul> <li><span class="c-icon icon-tick"></span>- On a single transaction of INR 500 within 30 days of card setup with your DigiSmart Credit Card</li> <li><span class="c-icon icon-tick"></span>- Get offers on dining, grocery, shopping and more</li> </ul> <div class="button-panel"> <a href="https://apply.standardchartered.co.in/credit-card/provide-info/?card=28231" title="Apply Now" at-title="credit card" class="c-button is-theme-solid-green-hollow-white rounded-button">Apply Now</a> </div> </div>';
                        var hl_promotion = '<div class="multi-pro-inner"> <h2>Unlock you dream home!</h2> <ul> <li><span class="c-icon icon-tick"></span>- Home Loan starting at 6.99% interest rate pa for online applications exclusively. </li> <li><span class="c-icon icon-tick"></span>Zero prepayment charges on Home Loan</li><li><span class="c-icon icon-tick"></span>- Avail a loan of up to INR 35 Cr.</li></ul> <div class="button-panel"> <a href="https://apply.standardchartered.co.in/av/mortagage.jsp" title="Apply Now" at-title="unit trust" class="c-button is-theme-solid-green-hollow-white rounded-button">Apply Now</a> </div> </div>';
                        var loc_promotion = '<div class="multi-pro-inner"> <h2>Turn your dreams into reality</h2> <ul> <li><span class="c-icon icon-tick"></span>- Get a loan upto 10 Lakhs within 2 days.</li> <li><span class="c-icon icon-tick"></span>- Atractive interest rates, as low as 0.99%</li><li><span class="c-icon icon-tick"></span>- Hassle free repayment EMIs through your credit card</li> </ul><div class="button-panel"> <a href="https://apply.standardchartered.co.in/av/dialALoan.jsp?" title="Apply Now" at-title="online trading" class="c-button is-theme-solid-green-hollow-white rounded-button">Apply Now</a> </div> </div>';
                        

                        var offerComp_adbe = '<div class="multi-pro" id="multi-pro-adbe" style="opacity:0;visibility: hidden;" data-delay="12"> <a class="close-icon"> <svg viewBox="0 0 50 50" class="opened"> <path d="M3 15 L25 36 L47 15" style="stroke:rgb(255,255,255);stroke-width:5; fill:none" /> </svg> <svg viewBox="0 0 50 50" class="closed"> <path d="M3 36 L25 15 L47 36" style="stroke:rgb(255,255,255);stroke-width:5; fill:none" /> </svg> </a> <div class="flikityParent"> ' + cc_promotion + deposits_promotion + pl_promotion +  hl_promotion + loc_promotion+' </div> <div class="progressBarContent"> <a class="prevs"> <i class="iconsMulti"> <svg viewBox="0 0 50 50"> <path d="M35 3 L15 25 L35 47" style="stroke:rgb(255,255,255);stroke-width:7; fill:none" /> </svg> </i> Previous </a> <span class="nextIn">Next promotion in <b class="timeLeft"></b></span> <a class="skips"> <i class="iconsMulti"> <svg viewBox="0 0 50 50"> <path d="M15 3 L35 25 L15 47" style="stroke:rgb(255,255,255);stroke-width:7; fill:none" /> </svg> </i> Next </a> </div> <div class="pBar"> <div class="runningBar"></div> </div> </div>';

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
            selector: "#multi-pro-adbe div.multi-pro-inner a[href*='at_code=AT6']",
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
            selector: "#multi-pro-adbe > a.close-icon",
            persist: true,
            success: function (el) {
                if (!document.querySelector("#multi-pro-adbe > a.close-icon").classList.contains("offer-content-adbe")) {
                    document.querySelector("#multi-pro-adbe > a.close-icon").addEventListener("click", function () {
                        adobe.target.trackEvent({
                            "mbox": "mboxClickTrack",
                            "params": {
                                "clicked": "minimizeIcon"
                            }
                        });
                    });
                    document.querySelector("#multi-pro-adbe > a.close-icon").classList.add("offer-content-adbe");
                }
            }
        }
    );
</script>
