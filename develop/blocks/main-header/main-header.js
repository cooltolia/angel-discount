var headerPointer = $(".main-header__icon--js-show"),
    headerPointerMobile = $(".main-header__icon--js-showSmall"),
    headerContacts = $(".main-header__contacts-content"),
    headerContactsMobile = $(".main-header__contacts-content-m");

headerPointer.on("click", function(e) {
  e.preventDefault();
  if (headerContacts.is(":hidden")) {
    headerContacts.show();
  } else {
    headerContacts.hide();
  }
});

headerPointerMobile.on("click", function(e) {
  e.preventDefault();
  if (headerContactsMobile.is(":hidden")) {
    headerContactsMobile.show();
  } else {
    headerContactsMobile.hide();
  }
});