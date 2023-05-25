const archievementsArrayInfo = [
    {"id":0, "name":"", "UIName":"", "description":"", "value":false}, // First level
    {"id":1, "name":"", "UIName":"Primera ciudad", "description":"Llega a una ciudad.", "value":false}, // First city
    {"id":2, "name":"", "UIName":"Primera autopista", "description":"Llega a una autopista.", "value":false}, // First highway
    {"id":3, "name":"", "UIName":"Primera ciudad futurista", "description":"LLega a tu primera ciudad futurista.", "value":false}, // First futurist city
    {"id":4, "name":"", "UIName":"Todos los niveles", "description":"Recorre todos los niveles.", "value":false}, // All levels
    {"id":5, "name":"", "UIName":"Normal", "description":"Completa el juego en dos minutos o menos.", "value":false}, // 2 minuts or less
    {"id":6, "name":"", "UIName":"Rapido", "description":"Completa el juego en un minuto y 30 segundos o menos.", "value":false}, // 1 minute 30 seconds or less
    {"id":7, "name":"", "UIName":"Muy rápido", "description":"Completa el juego en un minuto o menos.", "value":false}, // 1 minute or less
    {"id":8, "name":"", "UIName":"¡A la velocidad de la luz!", "description":"Completa el juego en 30 segundos o menos.", "value":false}, // 30 seconds or less
    {"id":9, "name":"", "UIName":"¿Sabes que es un freno?", "description":"Completa el juego en 25 segundos o menos.", "value":false}, // 25 seconds or less
    {"id":10, "name":"", "UIName":"Donnatelo", "description":"Desbloquea a Donnatelo", "value":false}, // Unlock Donnatelo
    {"id":11, "name":"", "UIName":"Rafael", "description":"Desbloquea a Rafael", "value":false}, // Unlock Rafael
    {"id":12, "name":"", "UIName":"Leonardo", "description":"Desbloquea a Leonardo", "value":false}, // Unlock Leonardo
    {"id":13, "name":"", "UIName":"Jennica", "description":"Desbloquea a Jennica", "value":false}, // Unlock Jennica
]

function setArchievement(archievemtId){
    let archievementsArray = JSON.parse(localStorage.getItem('archievements'))
    if(!archievementsArray || archievementsArray == "null"){
        archievementsArray = archievementsArrayInfo
    }
    let newArchievementArray = archievementsArray
    newArchievementArray[archievemtId].value = true
    localStorage.setItem('archievements', newArchievementArray)
}

function getArchievement(){
    let archievementsArray = JSON.parse(localStorage.getItem('archievements'))
    if(!archievementsArray || archievementsArray == "null"){
        archievementsArray = archievementsArrayInfo
    }
    return archievementsArray
}