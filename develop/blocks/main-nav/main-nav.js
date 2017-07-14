var mainNavLink = $(".main-nav__link");

mainNavLink.on("click", function(e){
  e.preventDefault;
  mainNavLink.removeClass("active");
  $(this).addClass("active");
});