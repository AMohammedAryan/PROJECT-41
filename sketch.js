var hr = hour();
var min = minute();
var sc = second();

angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 24, 0, 360);
}

function draw() {
  background(255,255,255);  

  translate(width/2, height/2);

  push();

  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 300, 0);

  pop();

  push();

  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 200, 0);

  pop();

  push();

  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 100, 0);

  pop();

  fill("red");

  arc(0, 0, 300, 300, 0, scAngle);

  fill("green");

  arc(0, 0, 200, 200, 0, minAngle);

  fill("blue");

  arc(0, 0, 100, 100, 0, hrAngle);

  drawSprites();
}

console.log(hrAngle);
console.log(minAngle);
console.log(hrAngle);
