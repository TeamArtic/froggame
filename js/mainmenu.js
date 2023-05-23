let record, recordContainer
window.addEventListener('load', () => {
    record = parseInt(localStorage.getItem('record'))
    recordContainer = document.getElementById('recordContainer')
    if(record){
        recordContainer.innerHTML = "Record: " + record + "ms"
        recordContainer.style.display = "block"
    }
})