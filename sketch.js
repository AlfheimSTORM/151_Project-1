let x = 0;
"let speed = 1;"
"let z = 0;"
let y = 0;
var r
var g
var b

function setup() {
  createCanvas(600,600);
  background(17,221,157);
  // put setup code here
}

function draw() {
  fill(r,g,b);
  rect(x,y,100,100);

  "if (x > width - 100){"
    "speed = (-1 * speed);"
  "}"
  "if (x < 0){"
    "speed = (-1 * speed);"
  "}"
  "x = x + speed;"

  "z = z + 10;"
  "fill(1000);"
  "point(z,z);"

  if (y > height-100){
    y = y - 50;
  }
  if (y < 0){
    y = y + 50;
  }
  if (x > width-100){
    x = x - 50;
  }
  if (x < 0){
    x = x + 50;
  }

  // put drawing code here
}
function keyPressed() {
  if (keyCode === LEFT_ARROW){
    x = x - 50;
  }
  if (keyCode === RIGHT_ARROW){
    x = x + 50;
  }
  if (keyCode === UP_ARROW){
    y = y - 50;
  }
  if (keyCode === DOWN_ARROW){
    y = y + 50;
  }
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === UP_ARROW || keyCode === DOWN_ARROW){
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

function keyTyped() {
  if (key === '1'){
    saveCanvas(['myCanvas'], 'jpg');
  }
  if (key === '2'){
    background(17,221,157);
  }
}