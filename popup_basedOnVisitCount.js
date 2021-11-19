<script>
    /**/
    //Fill the Title, Description, Modal CTA Text, Modal CTA Link

    //Modal information for first time visitor

    var firstModalTitle = "";

    var firstModalDescription = "<b>Flash Sale happening now!</b><br> Get S$80 cashback when you successfully activate your card and S$200 cashback when you spend S$200 within 30 days upon approval. T&Cs apply.";

    var firstModalCTAText = "Apply Now";

    //Modal information for first time returing visitor

    var secondModalTitle = "";

    var secondModalDescription = "<b>Limited time only!</b><br> Apply for Rewards+ Credit Card now and spend S$200 to get up to S$280 cashback. T&Cs apply.";

    var secondModalCTAText = "Apply Now";

    //Modal information for second time returing visitor

    var thirdModalTitle = "";

    var thirdModalDescription = "<b>Hurry and act now!</b><br> Get up to S$280 cashback when you successfully activate and spend S$200 within 30 days upon approval. T&Cs apply.";

    var thirdModalCTAText = "Apply Now";

    //Persistant Bar Content

    var firstModalPersistent = "<b>Flash Sale happening now!</b> Get S$80 cashback when you successfully activate your card and S$200 cashback when you spend S$200 within 30 days upon approval. T&Cs apply.";

    //Modal information for first time returing visitor

    var secondModalPersistent = "<b>Limited time only!</b> Apply for Rewards+ Credit Card now and spend S$200 to get up to S$280 cashback. T&Cs apply.";

    //Modal information for second time returing visitor

    var thirdModalPersistent = "<b>Hurry and act now!</b> Get up to S$280 cashback when you successfully activate and spend S$200 within 30 days upon approval. T&Cs apply.";

    var persistentBarCTAText = "Apply Now";

    //-----

    var modalCTALink = "";
    var persistentBarContent = firstModalPersistent;

    var lhref = "";
    try {
        var existingURLparameter = window.location.href;
        var aggregrateCode = 'IB03';
        if (existingURLparameter.split(/subChanCode=/gi)[1] != undefined) {
            aggregrateCode = existingURLparameter.split(/subChanCode=/gi)[1].split("&")[0];
        }

        lhref = "https://origination.sc.com/onboarding/sg/apply.html?product=308&campaign=5604&aggregator_code=" + aggregrateCode + "&aggregator_type=IBAT&aggregator_instance=ATRWPLUSPU";
    } catch (e) { console.log(e); }

    modalCTALink = lhref + "1";

    (function () {
        var cnt = 7000;
        function init() {
            if ((document.querySelector('body') != null) && typeof (jQuery) != undefined) {

                var isPopUpDisplayed = false;

                // console.log("qualified");
                var visitValue = '${profile.ATRWPLUS}' || 1;
                var visitCount = parseInt(visitValue);

                if (visitValue == 1) {

                    modalCTALink = lhref + "1";
                    persistentBarContent = firstModalPersistent;

                    var modalCodeAdbe = '<div class="c-modal-adbe" id="pop-up-adbe"> <div class="wrapper" data-send="close-modal" data-size="full"> <div class="modal-content"><div class="m-text-content no-padding is-visible" data-modal-id="c-modal-adbe"> <div class="button-wrapper"> <div class="closebutton-adbe closebutton icon mobile icon-modal-close-mobile" data-send="close-modal"></div> </div> <div class="modal-adbe"> <div class="container-adbe"> <div class="modal-adbe-content"> <br><br> <p class="title">' + firstModalTitle + '</p><br> <p class="description">' + firstModalDescription + '</p> <br><br> <ul class="buttons"> <li> <a data-url-updated="true" data-url-updated-param="true" href="' + modalCTALink + '" title="Apply Now" data-context="" class="c-button rounded-button is-theme-solid-green adbe-apply-cls" target="_blank"> <span>' + firstModalCTAText + '</span> </a> </li> </ul> </div> </div> </div> </div> </div> </div> </div>';
                    document.querySelector('body').insertAdjacentHTML('afterbegin', modalCodeAdbe);

                    var popUpPersistantBar = '<div class="m-persistent-bottom-bar-adbe btn-animated adbe-cls" id="sc-lb-module-persistent-bar-adbe"><div class="adbe-pop-up-persistent-bar"> <div class="column adbe-persistent-bar-content"> <label class="title"> <span>' + persistentBarContent + '</span> </label> </div> <div class="column apply-now"> <ul class="buttons"> <li> <a data-url-updated="true" data-url-updated-param="true" href="' + modalCTALink + '" title="Apply Now" data-context="Persistent Bar CTA" class="c-button is-theme-solid-green-hollow-white rounded-button apply-now-button" target="_blank"> <span>' + persistentBarCTAText + '</span> </a> </li> </ul> </div> </div> </div>';
                    document.querySelector('body').insertAdjacentHTML('beforeend', popUpPersistantBar);

                    //console.log('PageVisit: ' + visitCount);
                }

                else {
                    if (visitValue == 2) {

                        modalCTALink = lhref + "2";
                        persistentBarContent = secondModalPersistent;

                        var modalCodeAdbe = '<div class="c-modal-adbe" id="pop-up-adbe"> <div class="wrapper" data-send="close-modal" data-size="full"> <div class="modal-content"><div class="m-text-content no-padding is-visible" data-modal-id="c-modal-adbe"> <div class="button-wrapper"> <div class="closebutton-adbe closebutton icon mobile icon-modal-close-mobile" data-send="close-modal"></div> </div> <div class="modal-adbe"> <div class="container-adbe"> <div class="modal-adbe-content"> <br><br> <p class="title">' + secondModalTitle + '</p><br> <p class="description">' + secondModalDescription + '</p> <br><br> <ul class="buttons"> <li> <a data-url-updated="true" data-url-updated-param="true" href="' + modalCTALink + '" title="Apply Now" data-context="" class="c-button is-theme-solid-green adbe-apply-cls rounded-button" target="_blank"> <span>' + secondModalCTAText + '</span> </a> </li> </ul> </div> </div> </div> </div> </div> </div> </div>';
                        document.querySelector('body').insertAdjacentHTML('afterbegin', modalCodeAdbe);

                        var popUpPersistantBar = '<div class="m-persistent-bottom-bar-adbe btn-animated adbe-cls" id="sc-lb-module-persistent-bar-adbe"><div class="adbe-pop-up-persistent-bar"> <div class="column adbe-persistent-bar-content"> <label class="title"> <span>' + persistentBarContent + '</span> </label> </div> <div class="column apply-now"> <ul class="buttons"> <li> <a data-url-updated="true" data-url-updated-param="true" href="' + modalCTALink + '" title="Apply Now" data-context="Persistent Bar CTA" class="c-button is-theme-solid-green-hollow-white rounded-button apply-now-button" target="_blank"> <span>' + persistentBarCTAText + '</span> </a> </li> </ul> </div> </div> </div>';
                        document.querySelector('body').insertAdjacentHTML('beforeend', popUpPersistantBar);

                        //console.log('PageVisit: ' + visitCount);
                    }

                    else {
                        if (visitValue == 3) {

                            modalCTALink = lhref + "3";
                            persistentBarContent = thirdModalPersistent;

                            var modalCodeAdbe = '<div class="c-modal-adbe" id="pop-up-adbe"> <div class="wrapper" data-send="close-modal" data-size="full"> <div class="modal-content"><div class="m-text-content no-padding is-visible" data-modal-id="c-modal-adbe"> <div class="button-wrapper"> <div class="closebutton-adbe closebutton icon mobile icon-modal-close-mobile" data-send="close-modal"></div> </div> <div class="modal-adbe"> <div class="container-adbe"> <div class="modal-adbe-content"> <br><br> <p class="title">' + thirdModalTitle + '</p><br> <p class="description">' + thirdModalDescription + '</p> <br><br> <ul class="buttons"> <li> <a data-url-updated="true" data-url-updated-param="true" href="' + modalCTALink + '" title="Apply Now" data-context="" class="c-button is-theme-solid-green adbe-apply-cls rounded-button" target="_blank"> <span>' + thirdModalCTAText + '</span> </a> </li> </ul> </div> </div> </div> </div> </div> </div> </div>';
                            document.querySelector('body').insertAdjacentHTML('afterbegin', modalCodeAdbe);

                            var popUpPersistantBar = '<div class="m-persistent-bottom-bar-adbe btn-animated adbe-cls" id="sc-lb-module-persistent-bar-adbe"><div class="adbe-pop-up-persistent-bar"> <div class="column adbe-persistent-bar-content"> <label class="title"> <span>' + persistentBarContent + '</span> </label> </div> <div class="column apply-now"> <ul class="buttons"> <li> <a data-url-updated="true" data-url-updated-param="true" href="' + modalCTALink + '" title="Apply Now" data-context="Persistent Bar CTA" class="c-button is-theme-solid-green-hollow-white rounded-button apply-now-button" target="_blank"> <span>' + persistentBarCTAText + '</span> </a> </li> </ul> </div> </div> </div>';
                            document.querySelector('body').insertAdjacentHTML('beforeend', popUpPersistantBar);

                            //console.log('PageVisit: ' + visitCount);
                        }
                    }
                }

                if (visitValue == 1 || visitValue == 2 || visitValue == 3) {
                    function showPopUp() {
                        if ((visitValue == 1 || visitValue == 2 || visitValue == 3) && isPopUpDisplayed == false) {
                            document.querySelector('body').classList.add('modal-open');
                            document.querySelector('#pop-up-adbe').classList.add('is-open');
                            document.querySelector('#pop-up-adbe').classList.add('is-visible');

                            isPopUpDisplayed = true;

                            visitValue = '${profile.ATRWPLUS}' || 1;
                            visitCount = parseInt(visitValue) + 1;
                            adobe.target.trackEvent({
                                "mbox": "mboxClickTrack",
                                "params": {
                                    "profile.ATRWPLUS": visitCount
                                }
                            });
                            //console.log('Next PageVisit: ' + visitCount);
                        }
                    }

                    function closePopUp() {
                        // Show Pop Up exclusive offer in Persistant Bar
                        var scrollPos = jQuery(window).scrollTop();
                        var scrollDispPos = 300;
                        var persBar = jQuery("#sc-lb-module-persistent-bar-adbe");
                        (scrollDispPos < scrollPos) ? persBar.addClass("adbe-display") : persBar.removeClass("adbe-display");

                        jQuery(document).on("scroll", function () {
                            var scrollPos = jQuery(window).scrollTop();
                            var scrollDispPos = 300;
                            var persBar = jQuery("#sc-lb-module-persistent-bar-adbe");
                            (scrollDispPos < scrollPos) ? persBar.addClass("adbe-display") : persBar.removeClass("adbe-display");
                        });

                        document.querySelector("#sc-lb-module-persistent-bar-new").style.transform = "translateY(300px)";
                        document.querySelector("#sc-lb-module-persistent-bar-new").classList.add("hideContent-adbe");

                        // Close Pop Up
                        document.querySelector('body').classList.remove('modal-open');
                        document.querySelector('#pop-up-adbe').classList.remove('is-open');
                        document.querySelector('#pop-up-adbe').classList.remove('is-visible');
                    }

                    // Adding event listener to Close Pop Up
                    document.querySelector("#pop-up-adbe").addEventListener('click', function () {
                        if (!(event.target.classList.contains('modal-adbe') || event.target.closest('.modal-adbe') != null)) {
                            closePopUp();
                        }
                    });

                    // Show Pop-up when user leaves the window
                    $(document).mouseleave(function () {
                        //console.log("mouse leave");
                        showPopUp();
                    });
                }

                setTimeout(function () {
                    if (visitValue == 1 || visitValue == 2 || visitValue == 3) {
                        showPopUp();
                    }
                    //console.log('Next PageVisit: ' + visitCount);
                }, 15000);

                /*Click Tracking*/
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
                        selector: "#sc-lb-module-masthead-bonussaver > div.sc-bnr-wrapper > div > div > ul > li > a",
                        persist: true,
                        success: function (el) {
                            if (!el.classList.contains("clkTrackUC01")) {
                                try {
                                    el.href = modalCTALink;
                                    el.addEventListener("click", function (event) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        adobe.target.trackEvent({
                                            "mbox": "mboxClickTrack",
                                            "params": {
                                                "clicked": "ATRWPlusApplyNow"
                                            }
                                        });
                                        window.open(modalCTALink);
                                    });
                                } catch (e) { }
                                el.classList.add("clkTrackUC01");
                            }
                        }
                    },
                    {
                        selector: "#sc-lb-module-persistent-bar-adbe div.column.apply-now > ul > li > a",
                        persist: true,
                        success: function (el) {
                            if (!el.classList.contains("clkTrackUC01")) {
                                try {
                                    el.href = modalCTALink;
                                    el.addEventListener("click", function (event) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        adobe.target.trackEvent({
                                            "mbox": "mboxClickTrack",
                                            "params": {
                                                "clicked": "ATRWPlusApplyNow"
                                            }
                                        });
                                        window.open(modalCTALink);
                                    });
                                } catch (e) { }
                                el.classList.add("clkTrackUC01");
                            }
                        }
                    },
                    {
                        selector: "#sc-lb-module-persistent-bar-new > div.column.apply-now > ul > li > a",
                        persist: true,
                        success: function (el) {
                            if (!el.classList.contains("clkTrackUC01")) {
                                try {
                                    el.href = modalCTALink;
                                    el.addEventListener("click", function (event) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        adobe.target.trackEvent({
                                            "mbox": "mboxClickTrack",
                                            "params": {
                                                "clicked": "ATRWPlusApplyNow"
                                            }
                                        });
                                        window.open(modalCTALink);
                                    });
                                } catch (e) { }
                                el.classList.add("clkTrackUC01");
                            }
                        }
                    },
                    {
                        selector: "#pop-up-adbe a.adbe-apply-cls",
                        persist: true,
                        success: function (el) {
                            if (!el.classList.contains("clkTrackUC01")) {
                                try {
                                    el.href = modalCTALink;
                                    el.addEventListener("click", function (event) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        closePopUp();
                                        adobe.target.trackEvent({
                                            "mbox": "mboxClickTrack",
                                            "params": {
                                                "clicked": "ATRWPlusPopUpApplyNow"
                                            }
                                        });
                                        window.open(modalCTALink);
                                    });
                                } catch (e) { }
                                el.classList.add("clkTrackUC01");
                            }
                        }
                    }
                );

            } else if (cnt > 0) {
                cnt = cnt - 500;
                setTimeout(init, 500);
            } else {
            }
        }
        init();
    })();

</script>

<style>
    .c-modal-adbe [data-size=full] .modal-content>.button-wrapper {
        width: calc(75% - 32px * 2);
    }

    .c-modal-adbe .modal-content .closebutton:not(.mobile) {
        display: block;
    }

    .c-modal-adbe>.wrapper[data-size=full] {
        padding-left: 32px;
        padding-right: 32px;
    }

    .c-modal-adbe>.wrapper[data-size=full] {
        padding-left: 32px;
        padding-right: 32px;
    }

    .c-modal-adbe {
        display: none;
        z-index: 40000;
        -webkit-animation: modal-fadeout .25s ease-in-out 1;
        animation: modal-fadeout .25s ease-in-out 1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
    }

    .c-modal-adbe.is-open {
        display: block;
    }

    .c-modal-adbe.is-visible {
        -webkit-animation: modal-fadein .25s ease-in-out 1;
        animation: modal-fadein .25s ease-in-out 1;
    }

    .c-modal-adbe.is-visible [data-modal-id] {
        -webkit-animation: modal-content-fadein .25s cubic-bezier(.645, .45, .355, 1) 1;
        animation: modal-content-fadein .25s cubic-bezier(.645, .45, .355, 1) 1;
    }

    .c-modal-adbe.is-visible .modal-content .button-wrapper {
        -webkit-animation: modal-button-fadein .45s cubic-bezier(.645, .45, .355, 1) 1;
        animation: modal-button-fadein .45s cubic-bezier(.645, .45, .355, 1) 1;
    }

    .c-modal-adbe::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .87);
        z-index: -1;
    }

    .c-modal-adbe>.wrapper {
        height: 100%;
        width: 100%;
        position: relative;
    }

    .c-modal-adbe>.wrapper[data-size=full] {
        padding: 0;
        padding-top: 60px;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .c-modal-adbe>.wrapper[data-size=full] [data-modal-id] {
        margin-bottom: 60px;
    }

    .c-modal-adbe .modal-content {
        max-width: 1023px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        height: 100%;
        pointer-events: auto;
        padding-top: 3%;
    }

    .c-modal-adbe [data-size=auto] .modal-content {
        height: auto;
        width: auto;
        display: inline-block;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }

    .c-modal-adbe [data-size=auto] .modal-content .closebutton {
        top: -20px;
        z-index: 1000;
    }

    .c-modal-adbe [data-size=full] .modal-content>.button-wrapper {
        position: fixed;
        z-index: 1000;
        top: 40px;
        max-width: 1023px;
        width: calc(75% - 24px * 2);
    }

    .c-modal-adbe .modal-content .m-text-content {
        width: 76%;
    }

    .c-modal-adbe .modal-content .modal-no-border {
        padding: 0;
    }

    .c-modal-adbe .modal-content>* {
        pointer-events: auto;
    }

    .c-modal-adbe .modal-content .closebutton {
        position: absolute;
        cursor: pointer;
    }

    .c-modal-adbe .modal-content .closebutton.mobile {
        display: none;
        width: 34px;
        height: 34px;
        right: -20px;
        top: -20px;
    }

    .c-modal-adbe .modal-content .closebutton:not(.mobile) {
        display: none;
        width: 40px;
        height: 40px;
        right: -20px;
    }

    .c-modal-adbe .modal-content .closebutton svg {
        pointer-events: none;
    }

    .c-modal-adbe .modal-content .closebutton.mobile {
        display: block;
    }

    .c-modal-adbe .container-adbe {
        margin-bottom: 0;
        height: 100%;
        -o-object-fit: contain;
        object-fit: contain;
        /* background-color: rgba(0, 0, 0, .1); */
        text-align: center;
        padding-bottom: 65px;
        min-height: 385px;
    }

    .c-modal-adbe .container-adbe .modal-adbe-content {
        margin-bottom: 0;
        padding-top: 65px;
    }

    .c-modal-adbe .modal-adbe {
        /* background-image: url('https://cimage.adobe.com/scb/images/scb-bg-img.gif'); */
        object-fit: contain;
        background-size: cover;
        background-position: center center;
        margin-bottom: 0;
        height: 100%;
        min-height: 385px;
        -o-object-fit: contain;
        color: #fff;
        background: linear-gradient(to right, #012f86, #0573ea);
    }

    .c-modal-adbe .modal-adbe .modal-icon-class-adbe {
        background-image: none;
        align-content: center;
        width: 86px;
        height: 72px;
        -o-object-fit: contain;
        object-fit: contain;
        margin: 0 auto;
        position: relative;
        margin-top: 20px;
        margin-bottom: 4%;
        padding-left: 6px;
        padding-top: 20px;
        display: block;
    }

    .c-modal-adbe .modal-adbe p.title {
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.69;
        letter-spacing: .8px;
        text-align: center;
        color: #fff;
        padding-left: 50px;
        margin-bottom: 0;
    }

    .c-modal-adbe .modal-adbe p.description {
        font-size: 24px;
        font-weight: inherit;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.3;
        letter-spacing: 0.5px;
        text-align: center;
        color: #fff;
        padding: 0px 28px;
        margin-bottom: 0;
    }

    #pop-up-adbe b {
        font-weight: bold;
    }

    /*Existing Persistent Bar Style*/
    div#sc-lb-module-persistent-bar-adbe {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #fff;
        min-height: 65px;
        z-index: 1000;
        background: linear-gradient(to right, #012f86, #0573ea);
        -webkit-transition: -webkit-transform .4s ease-in-out;
        transition: -webkit-transform .4s ease-in-out;
        transition: transform .4s ease-in-out;
        transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
        display: flex;
        text-align: center;
        padding: 12px 20px;
        max-width: 1404px;
        right: 0;
        margin: 0 auto
    }

    div#sc-lb-module-persistent-bar-adbe.adbe-display sup {
        vertical-align: super;
        font-size: 50%;
        line-height: 0
    }

    div#sc-lb-module-persistent-bar-adbe.adbe-display sub {
        vertical-align: sub;
        font-size: 50%;
        line-height: 0
    }

    div#sc-lb-module-persistent-bar-adbe.adbe-display~.c2c_box_wrapper {
        bottom: 110px
    }

    .scroll-down div#sc-lb-module-persistent-bar-adbe.adbe-display {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }

    .scroll-up div#sc-lb-module-persistent-bar-adbe.adbe-display,
    .scroll-end div#sc-lb-module-persistent-bar-adbe.adbe-display {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
    }

    div#sc-lb-module-persistent-bar-adbe .title {
        font-size: 14px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: .5px;
        color: #fff;
        text-align: left;
        display: block;
    }

    div#sc-lb-module-persistent-bar-adbe .rounded-button {
        font-size: 14px;
        font-weight: 400;
        min-width: 150px;
        padding: 10px 24px 8px;
    }

    div#sc-lb-module-persistent-bar-adbe.adbe-display ul {
        position: relative;
        z-index: 1;
    }

    div#sc-lb-module-persistent-bar-adbe {
        -webkit-transform: translateY(300px);
        -ms-transform: translateY(300px);
        transform: translateY(300px);
    }

    div#sc-lb-module-persistent-bar-adbe.adbe-display {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
    }

    @media (min-width:1024px) {
        div#sc-lb-module-persistent-bar-adbe {
            min-height: 80px;
            padding: 12px 32px;
        }

        div#sc-lb-module-persistent-bar-adbe .title {
            font-size: 18px;
        }
    }

    @media (max-width:767.98px) {

        .scroll-down div#sc-lb-module-persistent-bar-adbe.bottom-bar-enabled,
        .scroll-up div#sc-lb-module-persistent-bar-adbe.bottom-bar-enabled {
            -webkit-transform: translate3d(0, 0, 0) rotate(90deg);
            transform: translate3d(0, 0, 0) rotate(90deg);
        }

        .m-persistent-bottom-bar-adbe::after {
            background-color: transparent;
        }
    }

    @media (min-width:681px) {
        div#sc-lb-module-persistent-bar-adbe {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            text-align: left;
        }

        div#sc-lb-module-persistent-bar-adbe.active~.c2c_box_wrapper {
            bottom: 90px;
        }

        div#sc-lb-module-persistent-bar-adbe .title {
            text-align: left;
            margin-bottom: 0;
        }

        div#sc-lb-module-persistent-bar-adbe .rounded-button {
            font-size: 16px;
            min-width: 225px;
            min-height: 45px;
            padding: 14px 40px;
        }
    }

    @media (max-width:680.98px) {

        div#sc-lb-module-persistent-bar-adbe.active~.c2c_mobile_wrapper .c2c_box_wrapper {
            bottom: 110px;
        }
    }

    /*Persistent Bar Style*/
    .adbe-pop-up-persistent-bar {
        width: 100%;
        /* display: contents; */
        max-width: 1404px;
        margin: auto;
    }

    .adbe-persistent-bar-content {
        width: calc(100% - 135px);
        padding-right: 5px;
    }

    .adbe-pop-up-persistent-bar .apply-now {
        width: 225px;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 225px;
        flex: 1 1 225px;
        margin-right: 0;
        max-width: 225px;
        display: inline-flex;
    }

    .adbe-pop-up-persistent-bar a.apply-now-button {
        margin: 5px;
        font-size: 13px;
        border-radius: 50px;
        padding: 14px 40px;
        min-width: 215px;
    }

    .m-persistent-bottom-bar-adbe.adbe-cls {
        -webkit-transform: translateY(300px);
        -ms-transform: translateY(300px);
        transform: translateY(300px);
    }

    div#sc-lb-module-persistent-bar-adbe.adbe-display {
        -webkit-transform: translateY(0px);
        -ms-transform: translateY(0px);
        transform: translateY(0px);
        min-width: 100%;
        max-width: 1404px;
        /* background-image: url('https://cimage.adobe.com/scb/images/scb-bg-img-small.gif'); */
        background-size: 100%;
        background: linear-gradient(to right, #012f86, #0573ea);
    }

    .column.adbe-persistent-bar-content {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 50%;
        flex: 1 1 calc(100% - 225px);
        margin-right: 0;
        text-align: left;
        max-width: calc(100% - 230px);
        display: inline-flex;
    }

    @media screen and (max-width:1386.5px) {
        .adbe-pop-up-persistent-bar {
            display: contents;
        }
    }

    @media screen and (max-width:680.5px) {
        .adbe-pop-up-persistent-bar .apply-now {
            width: 160px;
            -webkit-box-flex: 1;
            -ms-flex: 1 1 160px;
            flex: 1 1 160px;
            margin-right: 0;
            max-width: 160px;
            display: inline-flex;
        }

        .column.adbe-persistent-bar-content {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 50%;
            flex: 1 1 calc(100% - 160px);
            margin-right: 0;
            text-align: left;
            max-width: calc(100% - 170px);
            display: inline-flex;
        }
    }

    div#sc-lb-module-persistent-bar-adbe::after,
    div#sc-lb-module-persistent-bar-adbe::before {
        display: none;
    }

    div#sc-lb-module-persistent-bar-new.hideContent-adbe {
        -webkit-transform: translateY(300px);
        -ms-transform: translateY(300px);
        transform: translateY(300px);
    }
</style>