  var secondLink = $(".secondary-nav__link");
  var thirdNav = $(".third-nav");

    if ($(window).width() <= '768'){
      
      secondLink.on("click", function(e) {
        e.preventDefault();
        if ($(this).siblings(thirdNav).is(":hidden")) {
          $(this).siblings(thirdNav).slideDown(200);
          $(this).addClass("active");
        } else {
          $(this).siblings(thirdNav).hide(100);
          $(this).removeClass("active");
        }
      });
      
    }