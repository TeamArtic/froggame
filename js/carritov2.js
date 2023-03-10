var dinero = 100;
    var Tortugas = [

        { nombre: 'Splinter', precio: '30' },

        { nombre: 'Leonardo', precio: '20' },

        { nombre: 'Raphael', precio: '20' },
        
        { nombre: 'Michelangelo', precio: '20' },]




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

