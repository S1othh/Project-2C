var capture;
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  imageMode(CENTER);
}
function draw() {
  //background(255);

  //change the mouseX, mouseY below to an x, y value to make webcam stay still
  image(capture, mouseX, mouseY, 100, height);
  filter(THRESHOLD);
}