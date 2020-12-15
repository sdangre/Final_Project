var s;
var scl = 20;
var food;
let scoreEl= document.getElementById('score')
let bodyEl=document.getElementById('body')
let messagesEl=document.getElementById('messages')
let clickCount = 0
let countChange = 1
let changeBackgroundButton= document.getElementById('changeBackground')
let changeBackground2Button= document.getElementById('changeBackground2')
let checkerboardButton= document.getElementById('checkerboard')

function setup(){
    createCanvas(600, 600)
    s = new Snake ();
    frameRate(10);
    pickLocation()
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(255, 204, 255)

    //checkerboard
    let start = 0
    let change = 800
    let size = 100
    fill(204, 255, 255);
    noStroke()
    //right
    for (let i= start; i<= change; i += size){
        square(i, i, 100) 
    }

    for (let i= start; i<= change; i += size){
        square(i + 200, i, 100)
    }

    for (let i= start; i<= change; i += size){
        square(i + 400, i, 100)
    }

    for (let i= start; i<= change; i += size){
        square(i + 600, i, 100)
    }
    //left
    for (let i= start; i<= change; i += size){
    square(i, i + 200, 100)
    }

    for (let i= start; i<= change; i += size){
    square(i, i + 400, 100)
    }

    for (let i= start; i<= change; i += size){
    square(i, i + 600, 100)
    }

    //Snake
    s.update();
    s.show();

    if (s.eat(food)){
        pickLocation();
        clickCount = clickCount + countChange
        scoreEl.innerHTML = clickCount

        
        var messages = ['Keep going!', 'You can do this!', 'Good job!', 'You rock!', 'Nice Catch!'] 
        let a = clickCount %5
        messagesEl.innerHTML= messages[a]
    }

    //Food
    fill(255, 255, 204);
    rect(food.x, food.y, scl, scl)
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
      s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      s.dir(-1, 0);
    }

    
  }  
  
  //Buttons

    function changeBackground(){
        clickCount= clickCount - 6
        scoreEl.innerHTML= clickCount

                bodyEl.classList.add('color6')
                changeBackgroundButton.classList.add('remove')
            }

    function changeBackground2(){
            clickCount= clickCount - 6
            scoreEl.innerHTML= clickCount
        
                    bodyEl.classList.remove('color6')
                    changeBackground2Button.classList.add('remove')
                }
    
    
        
    
        changeBackground2Button.addEventListener('click', changeBackground2)
        changeBackgroundButton.addEventListener('click', changeBackground)
    









