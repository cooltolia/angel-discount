var thumbs = $(".gallery__secondary").find("img");
thumbs.click(function() {
  var src = $(this).attr("src");
  var mainImage = $(".gallery__main-image-item img");
  mainImage.attr("src", src);
});