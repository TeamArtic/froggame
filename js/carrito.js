class level {

}

window.addEventListener('load', () => {

})
const cartButton = document.querySelector('nav li:last-child');
const cartContainer = document.querySelector('.cart-container');
const cartCloseButton = document.querySelector('.cart-close-button');

cartButton.addEventListener('click', function() {
  cartContainer.style.display = 'block';
});

function cerrarcarrito() {
  cartContainer.style.display = 'none';
};