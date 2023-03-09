class level {

}

window.addEventListener('load', () => {
  cartContainer.style.display = 'none';
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
cartCloseButton.addEventListener('click', function() {
  cartContainer.style.display = 'none';
});
function cerrarcarrito() {
  cartContainer.style.display = 'none';
};


