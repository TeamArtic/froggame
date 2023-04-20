let appContainer, elementsContainer, pageTitle, elementsContainer2, keyboardEvent, gameFrog, gameFrog2, frogContainer, frogContainer2, mainGrid, mainGrid2, levelLoadingTimeout, frogMovementTimeout, pauseMenu, pauseMenuToggle, mainScene

let playing = false

let onMovement = false

const animationTime = 500

let actualCharacter

let roads = []

class levelInformation {
    constructor(levelId, name, size, spawPosition, floorElements, roadsElements) {
        this.levelId = levelId
        this.name = name
        this.size = size
        this.spawPosition = spawPosition
        this.floorElements = floorElements
        this.roadsElements = roadsElements
    }
}

let levels = [
    new levelInformation(1, "Cloaca", new vector2(6, 6), new vector2(3, 0), [
        {"type":"sewerStart","position":-1},
        {"type":"sewerFloor","position":0},
        {"type":"sewerWater","position":1},
        {"type":"sewerFloor","position":2},
        {"type":"sewerWater","position":3},
        {"type":"sewerFloor","position":4},
        {"type":"sewerWater","position":5},
        {"type":"sewerFloor","position":6},
    ], [
        { "yPosition": 1, "speed": 10 },
        { "yPosition": 3, "speed": 10 },
        { "yPosition": 5, "speed": 10 },
    ]),
    new levelInformation(2, "Carretera", new vector2(6, 6), new vector2(3, 0), [
        {"type":"futureStart","position":-1},
        {"type":"futureStreet","position":0},
        {"type":"futureRoad","position":1},
        {"type":"futureStreet","position":2},
        {"type":"futureRoad","position":3},
        {"type":"futureStreet","position":4},
        {"type":"futureRoad","position":5},
        {"type":"futureStreet","position":6},
    ], [
        { "yPosition": 1, "speed": 10 },
        { "yPosition": 3, "speed": 10 },
        { "yPosition": 5, "speed": 10 },
    ]),
    new levelInformation(3, "Autopista", new vector2(6, 6), new vector2(3, 0), [
        {"type":"streetFloor","position":0},
        {"type":"streetRoad","position":1},
        {"type":"streetRoad","position":2},
        {"type":"streetFloor","position":3},
        {"type":"streetRoad","position":4},
        {"type":"streetRoad","position":5},
        {"type":"streetFloor","position":6},
    ], [
        { "yPosition": 1, "speed": 10 },
        { "yPosition": 2, "speed": 10 },
        { "yPosition": 4, "speed": 10 },
        { "yPosition": 5, "speed": 10 },
    ]),
    new levelInformation(4, "Rio", new vector2(6, 6), new vector2(3, 0), [
        { "type": "streetFloor", "position": 0 },
        { "type": "riverWater", "position": 1 },
        { "type": "streetFloor", "position": 2 },
        { "type": "riverWater", "position": 3 },
        { "type": "streetFloor", "position": 4 },
        { "type": "riverWater", "position": 5 },
        { "type": "streetFloor", "position": 6 },
    ], [
        { "yPosition": 1, "speed": 10 },
        { "yPosition": 3, "speed": 10 },
        { "yPosition": 5, "speed": 10 },
    ]),
    new levelInformation(5, "Playa", new vector2(6, 6), new vector2(3,0), [
        {"type":"sandFloor","position":0},
        {"type":"sandWater","position":1},
        {"type":"sandFloor","position":2},
        {"type":"sandWater","position":3},
        {"type":"sandFloor","position":4},
        {"type":"sandWater","position":5},
        {"type":"sandFloor","position":6},
    ], [
        { "yPosition": 1, "speed": 10 },
        { "yPosition": 3, "speed": 10 },
        { "yPosition": 5, "speed": 10 },
    ]),
    new levelInformation(6, "Playa", new vector2(6, 6), new vector2(3,0), [
        {"type":"sandFloor","position":0},
        {"type":"sandWater","position":1},
        {"type":"sandWater","position":2},
        {"type":"sandWater","position":3},
        {"type":"sandWater","position":4},
        {"type":"sandWater","position":5},
        {"type":"sandFloor","position":6},
    ], [
        { "yPosition": 1, "speed": 10 },
        { "yPosition": 2, "speed": 10 },
        { "yPosition": 3, "speed": 10 },
        { "yPosition": 4, "speed": 10 },
        { "yPosition": 5, "speed": 10 },
    ]),
]

class levelFloor {
    constructor(floorName, imageSRC) {
        this.floorName = floorName
        this.imageSRC = imageSRC
    }
}

let levelFloorObjects = [
    new levelFloor("sewerStart", "../img/cloaca-nueva.png"),
    new levelFloor("sewerFloor", "../img/suelo.png"),
    new levelFloor("sewerWater", "../img/agua.png"),
    new levelFloor("futureStart", "../img/cabecero-city.png"),
    new levelFloor("futureStreet", "../img/acerfutur.png"),
    new levelFloor("futureRoad", "../img/carreterafutur.png"),
    new levelFloor("streetFloor", "../img/acer-nueva.png"),
    new levelFloor("streetRoad", "../img/carreterav1.png"),
    new levelFloor("riverWater", "../img/agua.png"),
    new levelFloor("sandFloor", "../img/arena.png"),
    new levelFloor("sandWater", "../img/agua2.png"),
]

let actualLevel = 0

class levelManager {
    static loadLevel(levelInfo) {    // TODO Do this with classes
        for(let i = 0; i < roads.length; i++){
            roads[i].remove()
        }
        roads = []
        let floorElements = document.getElementsByClassName("floorElement")
        let length = floorElements.length
        for(let i = 0; i < length; i++){
            floorElements[0].remove()
        }
        actualLevel = levelInfo.levelId
        pageTitle.innerHTML = levelInfo.name
        mainGrid.setGridSize(levelInfo.size)
        elementsContainer.style.backgroundImage = "url(" + levelInfo.backgroundImage + ")"
        appContainer.style.backgroundImage = "url(" + levelInfo.backgroundImage + ")"
        gameFrog.gridTransform(levelInfo.spawPosition)
        for (let i = 0; i < levelInfo.floorElements.length; i++) {
            let floorElement = levelInfo.floorElements[i]
            let floorObjectImageSRC = levelFloorObjects.find(function (element) {
                return element.floorName == floorElement.type
            }).imageSRC
            let floorObjectText = generateLabelHTML("div", new attributes([{ "name": "src", "values": [floorObjectImageSRC] }, {"name":"class", "values":["floorElement"]}, { "name": "style", "values": ["position:absolute;", "z-index:1;", "left:0px;", "top:" + floorElement.position * mainGrid.tileSize + "px;", "width:" + ((levelInfo.size.x + 1) * 100) + "px;", "height:100px;", "background-image:url('" + floorObjectImageSRC + "');"] }]), "")
            elementsContainer.innerHTML += floorObjectText
        }
        for (let i = 0; i < levelInfo.roadsElements.length; i++) {
            roads.push(new road(gameScene, levelInfo.roadsElements[i].yPosition, levelInfo.roadsElements[i].speed, "road-" + i))
        }
        for(let i = 0; i < roads.length; i++){
            roads[i].updateEnemiesReferences()
        }
        gameFrog.updateObjectReference()
    }
}

class enemy extends object {
    constructor(objectScene, position, speed, enemyId) {
        super(enemyId, objectScene, position, position, true)
        this.enemyId = enemyId
        this.speed = speed
        this.movementInterval = setInterval(() => {
            // this.moveEnemy()
            this.move(new vector2(this.speed, 0))
        }, 500)
        this.setPosition(position)
        this.position = position
        this.object.style.zIndex = 2
        this.object.src = "../img/april.gif"
        this.setImage("../img/april.gif", new vector2(50, 50), new vector2(30, -25))
        this.move(new vector2(0,0))
    }

    // moveEnemy(){
    //     this.object.move(new vector2(speed, 0))
    // }
}

class road {
    constructor(objectScene, YPosition, speed, roadId) {
        this.YPosition = YPosition * 100
        this.speed = speed
        this.objectScene = objectScene
        this.roadId = roadId
        this.enemies = [this.generateEnemy()]
    }

    generateEnemy() {
        let generationPosition = new vector2(-100, this.YPosition)
        return new enemy(this.objectScene, generationPosition, this.speed, this.roadId + "-" + 1)
    }

    remove(){
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].remove()
        }
    }

    updateEnemiesReferences(){
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].updateObjectReference()
        }
    }
}

class frog extends gridObject {
    constructor(objectGrid, objectScene, id) {
        super(objectGrid, objectScene, id, new vector2(3, 0), new vector2(100, 100), true);
        this.gridPosition = new vector2(3, 0); // Inicializar la propiedad gridPosition en el constructor
    }

    gridMove(offset) {
        super.gridMove(offset);
        if (this.gridPosition.y >= levels[actualLevel - 1].size.y) {
            // Si la rana llegó a la fila 6, activa la transición a la siguiente pantalla
            startLoadingLevel()
        }
    }
}

class imageInfo {
    constructor(imageURL, size, center) {
        this.imageURL = imageURL
    }
}

class characterInfo {
    constructor(characterName, stayImageURL, movingImageURL) {
        this.characterName = characterName
        this.stayImageURL = stayImageURL
        this.movingImageURL = movingImageURL
    }
}

let imagesFolder = "../img/"

let characters = [
    new characterInfo("Donatelo", imagesFolder + "dona.gif", imagesFolder + "palante.gif")
]

// Level transition animation

function startLoadingLevel() {
    playing = false
    foregroundContainer.style.backgroundColor = "#000000FF"
    // foregroundContainer.style.filter = "blur(4px)"
    clearTimeout(levelLoadingTimeout)
    levelLoadingTimeout = setTimeout(loadLevel, animationTime)
}

function loadLevel() {
    if (actualLevel < levels.length) {
        levelManager.loadLevel(levels[++actualLevel - 1])
        clearTimeout(levelLoadingTimeout)
        levelLoadingTimeout = setTimeout(showLevelName, 800)
    } else {
        clearTimeout(levelLoadingTimeout)
        levelLoadingTimeout = setTimeout(showEnd, 800)
    }
}

function showEnd() {
    window.location.href = "../html/credits.html";
    levelInfoName.innerHTML = "Creditos"
    levelInfoName.style.filter = "opacity(100%)"
}

function showLevelName() {
    levelInfoName.innerHTML = levels[actualLevel - 1].name
    levelInfoName.style.filter = "opacity(100%)"
    clearTimeout(levelLoadingTimeout)
    levelLoadingTimeout = setTimeout(showLevel, 1000)
}

function showLevel() {
    clearTimeout(levelLoadingTimeout)
    levelLoadingTimeout = setTimeout(showLevelInfo, animationTime)
    foregroundContainer.style.backgroundColor = "#000000ab"
}

function showLevelInfo() { // TODO Change the name of this function.
    // pageTitle.innerHTML = levels[actualLevel].name
    clearTimeout(levelLoadingTimeout)
    levelLoadingTimeout = setTimeout(removeLoadLevelEffects, 1000)
}

function removeLoadLevelEffects() {
    foregroundContainer.style.backgroundColor = "#00000000"
    clearTimeout(levelLoadingTimeout)
    levelLoadingTimeout = setTimeout(startLevel, animationTime)
    levelInfoName.style.filter = "opacity(0%)"
}

function startLevel() {
    playing = true
}

// End of the level transition animation

function transitionToNextScreen() {
    //transición a la siguiente pantalla
    mainGrid.setGrid(document.getElementById('elementsContainer2'))
    gameFrog.setObject(document.getElementById('rana2'))
    document.getElementById('elementsContainer').style.display = 'none';
    document.getElementById('elementsContainer2').style.display = 'grid';
}

function moveFrog(movement) {
    if (!onMovement && playing) {
        onMovement = true
        gameFrog.object.src = "../img/palante.gif"
        clearTimeout(frogMovementTimeout)
        frogMovementTimeout = setTimeout(function () { onMovement = false; gameFrog.object.src = "../img/dona.gif" }, 500)
        gameFrog.gridMove(movement)
    }
}

function keyEvent(e) {
    switch (e.keyCode) {
        case 87:
            moveFrog(new vector2(0, -1))
            break;
        case 65:
            moveFrog(new vector2(-1, 0))
            break;
        case 83:
            moveFrog(new vector2(0, 1))
            break;
        case 68:
            moveFrog(new vector2(1, 0))
            break;
        case 27:
            pauseMenuToggle.toggle()
            break;
    }
}

function update() {

}

window.addEventListener('load', () => {

    pageTitle = document.getElementById('pageTitle')
    foregroundContainer = document.getElementById('foregroundContainer')

    appContainer = document.getElementById('app')
    elementsContainer = document.getElementById('elementsContainer')

    gameScene = new scene(update, elementsContainer)
    keyboardEvent = new KeyboardEvent("keydown")
    mainGrid = new grid(elementsContainer, 6, 6, 100)

    // Generate the mainCharacter
    gameFrog = new frog(mainGrid, gameScene, "mainCharacter")
    gameFrog.setImage("../img/dona.gif", new vector2(50, 50), new vector2(25, -39))
    gameScene.addObject("frog", gameFrog)

    // enemyContainer = document.getElementById('enemy')
    // enemyContainer = new object("enemy", gameScene, new vector2(50,0),new vector2(0,0), enemyContainer)
    // gameScene.addObject("enemy", enemy)

    pauseMenu = document.getElementById('pauseMenu')
    pauseMenuToggle = new toggleMenu(pauseMenu, 'hidden-menu')
    document.onkeydown = keyEvent;

    levelManager.loadLevel(levels[0])
    levelLoadingTimeout = setTimeout(showLevelName, 800)

});