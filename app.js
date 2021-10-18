var checkjQueryExist = setInterval(function () {
    if (window.jQuery) {
        $("#header .nav-list ul li:last").replaceWith("CONTACT");


        clearInterval(checkjQueryExist);

    }
}, 100);
