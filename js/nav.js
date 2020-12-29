// ! function(t){
//     "use strict";
//     jQuery(document).on("ready", function(){
//         t(window).on("scroll", function () {
//             t(this).scrollTop() > 120 ? t(".navbar-light").addClass("is-sticky") : t(".navbar-light").removeClass("is-sticky")
//         })
//     })
// }(jquery);

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 120) {
        $('.nav-menu').addClass('is-sticky');
    } else {
        $('.nav-menu').removeClass('is-sticky');
    }
});