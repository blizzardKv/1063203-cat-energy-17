// Modal window
var popup = document.querySelector(".modal-order");
var overlay = document.querySelector(".overlay");
var openMainButtons = document.querySelectorAll(".button-catalog");
var openAdditionalButtons = document.querySelectorAll(".additional-product-div__order-button");

var toggleModal = function () {
  overlay.classList.toggle("overlay--show");
  popup.classList.toggle("modal-order--on");
};

for (var i = 0; i < openMainButtons.length; i++) {
  openMainButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    toggleModal();
  });
}

for (var i = 0; i < openAdditionalButtons.length; i++) {
  openAdditionalButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    toggleModal();
  });
}
