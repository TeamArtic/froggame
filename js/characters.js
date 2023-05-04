function setCharacter(newCharacter){
    localStorage.setItem("selectedCharacterId", newCharacter)
}
function setCharacter(characterIndex) {
    // ... código que selecciona un personaje ...
  
    // muestra el botón de cancelar
    const cancelButton = document.getElementById('cancelar');
    cancelButton.classList.remove('hidden');
  }