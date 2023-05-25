let container
let localArchievementsArray = getArchievement()

window.addEventListener('load', () => {
    container = document.getElementById('container')
    for(let i = 0; i < archievementsArrayInfo.length; i++){
        if(archievementsArrayInfo.value){
            container.innerHTML =+ "<h2>" + archievementsArrayInfo.UIname + "</h2><p>" + archievementsArrayInfo.description + "</p>"
        }
    }
})