const archievementsArrayInfo = [
    {"id":0, "name":"", "UIName":"Principiante", "description":"Has superado el primer nivel."}, // First level
    {"id":1, "name":"", "UIName":"Primera ciudad", "description":"Llega a una ciudad."}, // First city
    {"id":2, "name":"", "UIName":"Primera autopista", "description":"Llega a una autopista."}, // First highway
    {"id":3, "name":"", "UIName":"Primera ciudad futurista", "description":"LLega a tu primera ciudad futurista."}, // First futurist city
    {"id":4, "name":"", "UIName":"Todos los niveles", "description":"Recorre todos los niveles."}, // All levels
    {"id":5, "name":"", "UIName":"Normal", "description":"Completa el juego en dos minutos o menos."}, // 2 minuts or less
    {"id":6, "name":"", "UIName":"Rapido", "description":"Completa el juego en un minuto y 30 segundos o menos."}, // 1 minute 30 seconds or less
    {"id":7, "name":"", "UIName":"Muy rápido", "description":"Completa el juego en un minuto o menos."}, // 1 minute or less
    {"id":8, "name":"", "UIName":"¡A la velocidad de la luz!", "description":"Completa el juego en 30 segundos o menos."}, // 30 seconds or less
    {"id":9, "name":"", "UIName":"¿Sabes que es un freno?", "description":"Completa el juego en 25 segundos o menos."}, // 25 seconds or less
    {"id":10, "name":"", "UIName":"Donnatelo", "description":"Desbloquea a Donnatelo"}, // Unlock Donnatelo
    {"id":11, "name":"", "UIName":"Rafael", "description":"Desbloquea a Rafael"}, // Unlock Rafael
    {"id":12, "name":"", "UIName":"Leonardo", "description":"Desbloquea a Leonardo"}, // Unlock Leonardo
    {"id":13, "name":"", "UIName":"Jennica", "description":"Desbloquea a Jennica"}, // Unlock Jennica
]

const archievementsArrayValues = [
    {"id":0, "value":false}, // First level
    {"id":1, "value":false}, // First city
    {"id":2, "value":false}, // First highway
    {"id":3, "value":false}, // First futurist city
    {"id":4, "value":false}, // All levels
    {"id":5, "value":false}, // 2 minuts or less
    {"id":6, "value":false}, // 1 minute 30 seconds or less
    {"id":7, "value":false}, // 1 minute or less
    {"id":8, "value":false}, // 30 seconds or less
    {"id":9, "value":false}, // 25 seconds or less
    {"id":10, "value":false}, // Unlock Donnatelo
    {"id":11, "value":false}, // Unlock Rafael
    {"id":12, "value":false}, // Unlock Leonardo
    {"id":13, "value":false}, // Unlock Jennica
]

function setArchievement(archievemtId){
    let archievementsArray = JSON.parse(localStorage.getItem('archievements'))
    if(!archievementsArray || archievementsArray == "null"){
        archievementsArray = archievementsArrayValues
    }
    let newArchievementArray = archievementsArray
    newArchievementArray[archievemtId].value = true
    localStorage.setItem('archievements', JSON.stringify(newArchievementArray))
}

function getArchievement(){
    let archievementsArray = JSON.parse(localStorage.getItem('archievements'))
    if(!archievementsArray || archievementsArray == "null"){
        archievementsArray = archievementsArrayValues
    }
    return archievementsArray
}