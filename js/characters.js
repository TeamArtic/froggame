let unlockedCharacters

function setCharacter(characterId) {
    let actualCharacter = unlockedCharacters.find((element) => {
        return characterId == element.characterId;
    });

    if (actualCharacter) {
        if (actualCharacter.unlocked) {
            localStorage.setItem('selectedCharacterId', characterId);

            // Crear el elemento del mensaje
            let mensaje = document.createElement('div');
            mensaje.style.position = 'fixed';
            mensaje.style.top = '0';
            mensaje.style.left = '0';
            mensaje.style.width = '100%';
            mensaje.style.height = '100%';
            mensaje.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            mensaje.style.zIndex = '9999';
            mensaje.style.display = 'flex';
            mensaje.style.justifyContent = 'center';
            mensaje.style.alignItems = 'center';
            mensaje.style.opacity = '0';
            mensaje.style.transition = 'opacity 0.5s';

            // Crear el contenido del mensaje
            let texto = document.createElement('p');
            texto.style.color = '#fff';
            texto.style.fontSize = '24px';
            texto.style.textAlign = 'center';
            texto.textContent = 'Personaje seleccionado';

            // Agregar el contenido al mensaje
            mensaje.appendChild(texto);

            // Agregar el mensaje al cuerpo del documento
            document.body.appendChild(mensaje);

            // Animación de aparición
            setTimeout(function () {
                mensaje.style.opacity = '1';
            }, 100);

            // Animación de desaparición después de 3 segundos
            setTimeout(function () {
                mensaje.style.opacity = '0';
                setTimeout(function () {
                    mensaje.parentNode.removeChild(mensaje);
                }, 500);
            }, 3000);
        } else {
            // Crear el elemento del mensaje
            let mensaje = document.createElement('div');
            mensaje.style.position = 'fixed';
            mensaje.style.top = '0';
            mensaje.style.left = '0';
            mensaje.style.width = '100%';
            mensaje.style.height = '100%';
            mensaje.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            mensaje.style.zIndex = '9999';
            mensaje.style.display = 'flex';
            mensaje.style.justifyContent = 'center';
            mensaje.style.alignItems = 'center';
            mensaje.style.opacity = '0';
            mensaje.style.transition = 'opacity 0.5s';

            // Crear el contenido del mensaje
            let texto = document.createElement('p');
            texto.style.color = '#fff';
            texto.style.fontSize = '24px';
            texto.style.textAlign = 'center';
            texto.textContent = 'No tienes este personaje';

            // Agregar el contenido al mensaje
            mensaje.appendChild(texto);

            // Agregar el mensaje al cuerpo del documento
            document.body.appendChild(mensaje);

            // Animación de aparición
            setTimeout(function () {
                mensaje.style.opacity = '1';
            }, 100);

            // Animación de desaparición después de 3 segundos
            setTimeout(function () {
                mensaje.style.opacity = '0';
                setTimeout(function () {
                    mensaje.parentNode.removeChild(mensaje);
                }, 500);
            }, 3000);
        }
    }
}



window.addEventListener('load', () => {
    unlockedCharacters = JSON.parse(localStorage.getItem('unlockedCharacters'))
    if(!unlockedCharacters){
        unlockedCharacters = [
            {"characterId":0, "unlocked":true},
            {"characterId":1, "unlocked":false},
            {"characterId":2, "unlocked":false},
            {"characterId":3, "unlocked":false},
            {"characterId":4, "unlocked":false}
        ]
    }
})