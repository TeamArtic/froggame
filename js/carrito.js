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
// Obtener elementos del DOM
const saldoSpan = document.getElementById('saldo');
const botonesAñadir = document.querySelectorAll('.buy-button');

// Saldo inicial
let saldo = 100;

// Actualizar el saldo en la página
saldoSpan.textContent = saldo;

// Función para actualizar el saldo en la página
function actualizarSaldo() {
  saldoSpan.textContent = saldo;
}

// Agregar manejadores de eventos para el botón "Añadir"
botonesAñadir.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Obtener el precio del producto del botón
    const precio = parseFloat(boton.dataset.price);

    // Restar el precio del producto al saldo
    saldo -= precio;

    // Actualizar el saldo en la página
    actualizarSaldo();
  });
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && document.querySelector('.cart-container').style.display !== 'none') {
    cerrarcarrito();
  }
});
function restarSaldo(event) {
  const precio = parseFloat(event.target.dataset.price);
  const nombre = event.target.dataset.name;

  if (saldo >= precio) {
    saldo -= precio;
    document.getElementById('saldo').textContent = saldo.toFixed(2);

    const table = document.querySelector('.cart-table tbody');
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const priceCell = row.insertCell();

    nameCell.textContent = nombre;
    priceCell.textContent = precio.toFixed(2);

    const cartTotal = document.querySelector('.cart-total');
    const currentTotal = parseFloat(cartTotal.textContent);
    cartTotal.textContent = (currentTotal + precio).toFixed(2);
  }
}