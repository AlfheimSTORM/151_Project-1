let x = 200; 
let y = 200;
let o = 600;
let p = 600;
var r, g, b, v, c1, c2

function setup() {
  createCanvas(800,800);

  c1 = color(255, 0, 31);
  c2 = color(255, 170, 0);
  setGradient(c1, c2);

  noStroke();
  fill(0,0,0);
  rect(0,0,20,800);
  rect(0,0,800,20);
  rect(800,800,-800,-20);
  rect(800,800,-20,-800);
  // put setup code here
}

function setGradient(c1, c2) {
  noFill();
  for (var h = 0; h < height; h++) {
    var inter = map(h, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, h, width, h);
  }
}


function draw() {

  ellipseColor = color(r,g,b);
  ellipseColor.setAlpha(128 + 128 * cos(millis() / 1000));

  noStroke();
  fill(ellipseColor);
  ellipse(x,y,20,20);
  noStroke();
  fill(ellipseColor);
  ellipse(o,p,20,20);

  const m = floor(random(4));
  switch (m) {
    case 0:
      x = x + 10;
      o = o - 10;
      r = random(255);
      g = random(255);
      b = random(200, 255);
      v = random(255);
    break;
    case 1:
      x = x - 10;
      o = o + 10;
      r = random(255);
      g = random(255);
      b = random(200, 255);
      v = random(255);
    break;
    case 2:
      y = y + 10;
      p = p - 10;
      r = random(255);
      g = random(255);
      b = random(200, 255);
      v = random(255);
    break;
    case 3:
      y = y - 10;
      p = p + 10;
      r = random(255);
      g = random(255);
      b = random(200, 255);
      v = random(255);
    break;
  }

  if (y > height - 40){
    y = y - 40;
  }
  if (y < 40){
    y = y + 40;
  }
  if (x > width - 40){
    x = x - 40;
  }
  if (x < 40){
    x = x + 40;
  }

  if (p > height - 40){
    p = p - 40;
  }
  if (p < 40){
    p = p + 40;
  }
  if (o > width - 40){
    o = o - 40;
  }
  if (o < 40){
    o = o + 40;
  }

  // put drawing code here
}

function keyTyped() {
  if (key === '1'){
    saveCanvas(['myCanvas'], 'jpg');
  }
  if (key === '2'){
    clear()
    createCanvas(800,800);
    c1 = color(255, 0, 31);
    c2 = color(255, 170, 0);
    setGradient(c1, c2);
    noStroke();
    fill(0,0,0);
    rect(0,0,20,800);
    rect(0,0,800,20);
    rect(800,800,-800,-20);
    rect(800,800,-20,-800);
  }
}