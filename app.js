console.log('Starting game')

size = 20
scl = 10

var food

function pickLocation(){
    food = createVector(random(width), random(height));
}

function eat(){
    var d = dist(mouseX, mouseY, food.x, food.y);
    if (d < 1){
        something
    } else{
        something
    }
}

function setup() {
    createCanvas(600, 600)
    pickLocation()
}


function draw() {
    background('grey')
    fill('White')
    rect(food.x, food.y, scl, scl)
    noStroke()
    drawMouseDot()

    if(mouseX < 0){
        mouseX = mouseX + size
    }
    if(mouseX > 600){
        mouseX = mouseX - size
    }
    if(mouseY < 0){
        mouseY = mouseY + size
    }
    if(mouseY > 600){
        mouseY = mouseY - size
    }

    if( something){
        pickLocation()
        console.log('I ate')
    }

}


function drawMouseDot() {
    fill('#FFCFCF')
    rect(mouseX, mouseY, size, size)

}







