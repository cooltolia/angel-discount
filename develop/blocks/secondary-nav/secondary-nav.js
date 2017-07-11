var hamburger = $(".hamburger");
var secondaryNav = $(".secondary-nav");

hamburger.on("click", function() {
  console.log(secondaryNav);
  secondaryNav.toggleClass("active");
  hamburger.toggleClass("checked")
});

