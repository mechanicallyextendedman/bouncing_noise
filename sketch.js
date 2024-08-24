var rad = 100;
var pointNum = 45;
var posX = 400;
var posY = 300;
var dir = -1;
var speedX = 5;
var speedY = 5;

var xoff = 0.0;
var yoff = 0.0;
var noiseScale = 0.05;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}


function draw() {


	// background(0);
	noStroke();
	fill(0);
	rect(width / 2, height / 2, width, height);
	stroke(255, 91, 78);

	var angle = TWO_PI / pointNum;
	xoff = xoff + 0.5;
	yoff = yoff + 0.5;
	posX = posX + speedX;
	posY = posY + speedY;
	if (posX >= width - rad || posX <= rad) {
		speedX = speedX * dir;
	}
	if (posY >= height - rad || posY <= rad) {
		speedY = speedY * dir;
	}
	for (var i = 0; i < pointNum; i++) {
		var xRad = rad * sin(angle * i);
		var yRad = rad * cos(angle * i);
		var noiseVal1 = noise((xoff + i) * noiseScale, yoff * noiseScale);
		var noiseVal2 = noise((xoff + i) * noiseScale, yoff * noiseScale);
		// strokeWeight(i/75);
		// stroke(i,0,i);
		line(posX + xRad,
			posY + yRad,
			posX + xRad * noiseVal2,
			posY + yRad * noiseVal2);
		rectMode(CENTER);

	}
}