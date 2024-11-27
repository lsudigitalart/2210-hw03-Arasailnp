function setup() {
    createCanvas(600, 600);
  // Define colors
  c1 = color(25, 200, 150);
  c2 = color(255);
  setGradient(c1, c2);
}
function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function draw() {
  background(220);
  for (var y = 0; y <= height; y += 10) {
    for (var x = 0; x <= width; x += 10) { 
      fill(255,30, 60, 12);
      rect(x, y, 10, 25,7);
      stroke(20, 50,6, 12)
      line( x, y ,10 , 10)
}
  }
}