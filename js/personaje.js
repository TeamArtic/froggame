const characters = document.querySelectorAll('.character-personajes');

function selectCharacter(selectedCharacter) {
  characters.forEach((character) => {
    if (character !== selectedCharacter) {
      character.classList.add('grayed-out');
      character.querySelector('button').disabled = true;
    } else {
      character.classList.remove('grayed-out');
      character.querySelector('button').disabled = false;
    }
  });

  const otherCharactersButton = document.getElementById('other-characters-button');
  if (selectedCharacter) {
    otherCharactersButton.classList.remove('hidden');
  } else {
    otherCharactersButton.classList.add('hidden');
  }
}

characters.forEach((character) => {
  character.querySelector('button').addEventListener('click', () => {
    selectCharacter(character);
  });
});

const botonesPersonajes = document.querySelectorAll('.buy-button-personajes');

botonesPersonajes.forEach((boton) => {
  boton.addEventListener('click', seleccionarPersonaje);
});

function seleccionarPersonaje(event) {
  botonesPersonajes.forEach((boton) => {
    boton.disabled = true;
    boton.classList.add('unselected');
  });

  const botonSeleccionado = event.target;
  botonSeleccionado.classList.remove('unselected');
  botonSeleccionado.innerText = 'Seleccionado';

  const refreshButton = document.getElementById('refresh-button');
  refreshButton.classList.remove('hidden');
}

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', refreshPage);

function refreshPage() {
  location.reload();
}

const selectAnotherButton = document.getElementById('other-characters-button');
selectAnotherButton.addEventListener('click', selectAnotherCharacter);

function selectAnotherCharacter() {
  characters.forEach((character) => {
    character.classList.remove('grayed-out');
    character.querySelector('button').disabled = false;
  });

  const refreshButton = document.getElementById('refresh-button');
  refreshButton.classList.add('hidden');
}