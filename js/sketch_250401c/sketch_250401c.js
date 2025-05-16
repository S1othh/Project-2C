let faceX, faceY, faceSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Set initial face position and size
  faceX = width / 2;
  faceY = height / 2;
  faceSize = min(width, height) / 3;
}

function draw() {
  // Generate a random background color every frame
  let r = noise(frameCount * 0.01) * 255;
  let g = noise(frameCount * 0.015) * 255;
  let b = noise(frameCount * 0.02) * 255;
  background(r, g, b);
  
  drawFace();
}

function drawFace() {
  // Face
  fill(245, 245, 220); // Off-white
  ellipse(faceX, faceY, faceSize, faceSize);

  // Eyes
  let eyeOffsetX = faceSize / 4;
  let eyeOffsetY = faceSize / 6;
  let eyeSize = faceSize / 8;
  
  fill(139, 69, 19); // Brown
  ellipse(faceX - eyeOffsetX, faceY - eyeOffsetY, eyeSize, eyeSize);
  ellipse(faceX + eyeOffsetX, faceY - eyeOffsetY, eyeSize, eyeSize);

  // Nose
  fill(0, 0, 255); // Blue
  ellipse(faceX, faceY, eyeSize, eyeSize * 1.5);

  // Mouth
  fill(255, 105, 180); // Pink
  ellipse(faceX, faceY + faceSize / 4, faceSize / 3, faceSize / 6);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  faceX = width / 2;
  faceY = height / 2;
  faceSize = min(width, height) / 3;
}
