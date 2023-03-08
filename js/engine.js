function generateObject(parameters){

}

class vector2{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    add(additionVector2){
        this.x += additionVector2.x
        this.y += additionVector2.y
        return this
    }

    static additionVector2(vector2_1, vector2_2){
        return new vector2(vector2_1.x + vector2_2.x, vector2_1.y + vector2_2.y)
    }

    multiply(number){
        this.x *= number
        this.y *= number
        return this
    }
}

class object{
    // constructor(position){
    constructor(position, object = null){
        this.position = position
        this.object = object
    }

    move(movement){
        this.position = vector2.additionVector2(this.position, movement)
        if(this.object){
            this.object.style.left = this.position.x + "px"
            this.object.style.top = this.position.y + "px"
        }
    }

    translate()
}

class grid{
    constructor(gridContainer, width, height, tileSize){
        this.gridContainer = gridContainer
        this.width = width
        this.height = height
        this.tileSize = tileSize
        this.gridContainer.style.width = width*tileSize + "px"
        this.gridContainer.style.height = height*tileSize + "px"
    }
}

class gridObject extends object{
    constructor(grid, position, object){
        super(position.multiply(grid.tileSize), object)
        this.grid = grid
        this.gridPosition = position
    }

    gridTransform(movement){
        this.move(movement.multiply(this.grid.tileSize))
    }

    gridMove(movement){
        let finalPosition = this.gridPosition.add(movement)
        if(finalPosition.x < this.grid.width && finalPosition.x > 0 && finalPosition.y < this.grid.height && finalPosition.x > 0){
            this.gridTransform(movement)
            this.gridPosition = finalPosition
            console.log("Event")
        }
        console.log(this.gridPosition.x + " " + this.gridPosition.y)
    }
}