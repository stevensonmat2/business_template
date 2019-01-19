// var myNav = document.getElementById("navbar");
// window.onscroll = function () {
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     }
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar").addClass("nav-colored");
    } else {
        $(".navbar").removeClass("nav-colored");
    }
});
