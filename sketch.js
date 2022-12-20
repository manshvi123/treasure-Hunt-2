var q1

function setup(){
  createCanvas(windowWidth,windowHeight);
  q1 = new Riddle()
}

function draw(){
background(rgb(random(255),random(255),random(255)))
  q1.showQues()
}

