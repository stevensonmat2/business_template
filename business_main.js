
// CHANGE NAVBAR COLOR ON SCROLL

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar").addClass("nav-colored");
    } else {
        $(".navbar").removeClass("nav-colored");
    }
});

//// TODO: make mobiel friendly, make header responsive


//https://stackoverflow.com/questions/43346235/how-to-change-nav-link-color-depending-on-page-position

// $(document).ready(function(){
//    $(".nav-item").click(function () {
//      $("a.active").removeClass('active');
//      $(this).addClass('active');
//      var active_section = $(this).attr('href'); //get active section id
//      $('html, body').animate({
//      //and scroll to the section
//      scrollTop: $(active_section).offset().top
//      });
//    });
//
//
//   $(document).scroll(function () {
//   //get document scroll position
//     var position = $(document).scrollTop();
//     //get header height
//     var header = $('nav').outerHeight();
//
//     //check active section
//     $('.section').each(function(i) {
//         if($(this).position().top <= (position + header))
//          {
//               $("a.active").removeClass('active');
//               $("a").eq(i).addClass('active');
//          }
//      });
//   });
//
// });
