let x = 0;
let speed = 3

function setup() {
  createCanvas(400,400);
  // put setup code here
}

function draw() {
  background(100,100,100);
  fill(255,102,255);
  rect(x,x,100,100);
  fill(102,0,204);
  triangle(0,0,0,50,50,50);
  fill(0,204,0);
  triangle(0,0,50,-50,50,50);

  if (x > width - 100){
    speed = (-1 * speed);
  }
  if (x < 0){
    speed = (-1 * speed);
  }
  x = x + speed;

  // put drawing code here
}