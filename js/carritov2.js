var dinero = 100;
    var Tortugas = [

        { nombre: 'Splinter', precio: '5' },

        { nombre: 'Leonardo', precio: '10' },

        { nombre: 'Raphael', precio: '20' },
        
        { nombre: 'Michelangelo', precio: '30' },]




    function cambiarprecio(event) {
        var personaje = event.target.id ;
        var boton = document.getElementById(personaje);
        for (var i = 0; i <Tortugas.length; i++) {
            if(personaje==Tortugas[i].nombre && dinero-Tortugas[i].precio>=0){

                if(personaje==Tortugas[i].nombre){
                dinero -=Tortugas[i].precio;
                document.getElementById('saldo').innerHTML = dinero + '€';
                boton.disabled = true;

            }

            } 
            }

        }
        const carritoBtn = document.querySelector('.carrito');
const carritoContenedor = document.querySelector('.cart-container');

carritoBtn.addEventListener('click', () => {
  carritoContenedor.style.display = 'block';
});

function cerrarcarrito() {
  carritoContenedor.style.display = 'none';
}

// Agregar productos al carrito
const buyButtons = document.querySelectorAll('.buy-button');
const cartTableBody = document.querySelector('.cart-table tbody');
const cartTotalSpan = document.querySelector('.cart-total');

let cartTotal = 0;

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', (event) => {
    const productPrice = parseFloat(event.target.dataset.price);
    const productName = event.target.dataset.name;

    const cartTableRow = document.createElement('tr');
    const productNameCell = document.createElement('td');
    const productPriceCell = document.createElement('td');

    productNameCell.innerText = productName;
    productPriceCell.innerText = productPrice.toFixed(2) + ' €';

    cartTableRow.appendChild(productNameCell);
    cartTableRow.appendChild(productPriceCell);
    cartTableBody.appendChild(cartTableRow);

    cartTotal += productPrice;
    cartTotalSpan.innerText = cartTotal.toFixed(2);
  });
});
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && document.querySelector('.cart-container').style.display !== 'none') {
      cerrarcarrito();
    }
  });