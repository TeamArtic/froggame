class level {

}

window.addEventListener('load', () => {
  cartContainer.style.display = 'none';
})
const cartButton = document.querySelector(".cart-button");
const closeButton = document.querySelector(".close-button");
const cartContainer = document.querySelector(".cart-container");

function abrircarrito() {
  cartContainer.style.display = 'block';
};

function cerrarcarrito() {
  cartContainer.style.display = 'none';
};


