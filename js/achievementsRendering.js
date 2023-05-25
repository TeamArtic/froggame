let container
let localArchievementsArray = getArchievement()

window.addEventListener('load', () => {
    container = document.getElementById('container')
    for(let i = 0; i < localArchievementsArray.length; i++){
        if(localArchievementsArray[i].value){
            container.innerHTML += "<div class=\"unlockedArchievement vertical-menu\"><h2 class=\"font-size-24\">" + archievementsArrayInfo[i].UIName + "</h2><p>" + archievementsArrayInfo[i].description + "</p></div>"
        }else{
            container.innerHTML += "<div class=\"lockedArchievement vertical-menu\"><h2 class=\"font-size-24\">(Bloqueado)" + archievementsArrayInfo[i].UIName + "</h2><p>" + archievementsArrayInfo[i].description + "</p></div>"
        }
    }
})