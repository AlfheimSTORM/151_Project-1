var r, g, b, v, c1, c2, x, y, o, p

function setup() {
  createCanvas(windowWidth-17,windowHeight);

  x = width * 0.25;
  y = height * 0.25;
  o = width * 0.75;
  p = height * 0.75;

  c1 = color(255, 0, 31);
  c2 = color(255, 170, 0);
  setGradient(c1, c2);

  noStroke();
  fill(0,0,0);
  rect(0,0,20,height);
  rect(0,0,width,20);
  rect(width,height,-width,-20);
  rect(width,height,-20,-height);
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

  if (y > height - 30){
    y = y - 40;
  }
  if (y < 30){
    y = y + 40;
  }
  if (x > width - 30){
    x = x - 40;
  }
  if (x < 30){
    x = x + 40;
  }

  if (p > height - 30){
    p = p - 40;
  }
  if (p < 30){
    p = p + 40;
  }
  if (o > width - 30){
    o = o - 40;
  }
  if (o < 30){
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
    createCanvas(windowWidth-17,windowHeight);
    c1 = color(255, 0, 31);
    c2 = color(255, 170, 0);
    setGradient(c1, c2);
    noStroke();
    fill(0,0,0);
    rect(0,0,20,height);
    rect(0,0,width,20);
    rect(width,height,-width,-20);
    rect(width,height,-20,-height);
  }
}