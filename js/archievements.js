function setArchievemnet(archievemtId){
    let archievementsArray = localStorage.getItem('archievemnets')
    if(!archievementsArray){
        archievementsArray = [
            {"id":0, "value":false},
            {"id":1, "value":false},
            {"id":2, "value":false},
            {"id":3, "value":false},
            {"id":4, "value":false},
            {"id":5, "value":false},
            {"id":6, "value":false},
            {"id":7, "value":false}
        ]
    }
    let newArchievementArray = archievementsArray
    newArchievementArray[archievemtId].value = true
    localStorage.setItem('')
}

function getArchievement(){
    let archievementsArray = localStorage.getItem('archievements')
    if(!archievementsArray){
        archievementsArray = [
            {"id":0, "value":false},
            {"id":1, "value":false},
            {"id":2, "value":false},
            {"id":3, "value":false},
            {"id":4, "value":false},
            {"id":5, "value":false},
            {"id":6, "value":false},
            {"id":7, "value":false}
        ]
    }
    return archievementsArray
}