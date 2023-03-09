class level {

}

window.addEventListener('load', () => {

})
const cartButton = document.querySelector(".cart-button");
const closeButton = document.querySelector(".close-button");
const cartContainer = document.querySelector(".cart-container");

cartButton.addEventListener("click", function() {
  cartContainer.classList.add("open");
});

closeButton.addEventListener("click", function() {
  cartContainer.classList.remove("open");
});