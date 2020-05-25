'use strict';

// COLLAPSE
$(document).click(function (e) {
    if (!$(e.target).is('.panel-body')) {
        $('.collapse').collapse('hide');
    }
});

// AOS ANIMATE
AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
});


// NAVBAR
!(function ($) {
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

})(jQuery);

// BAGUETEBOX 
window.addEventListener('load', function () {
    baguetteBox.run('.gallery');
});
