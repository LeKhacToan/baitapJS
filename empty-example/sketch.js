
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight, WEBGL);
  width = windowWidth;
  height = windowHeight;


}
x = 2; y = 4; z = 5;
i = 0;
var zoom = 3;
function draw() {
  rotateY(x * 0.01);
  rotateX(y * 0.01);
  if (mouseIsPressed) {
    x = mouseX / 2;
    y = mouseY / 2;
  }
  // put drawing code here
  background(0);
  let fov = PI / zoom;
  let cameraZ = (height / 2.0) / tan(fov / 2.0);
  perspective(fov, float(width) / float(height), cameraZ / 10.0, cameraZ * 10.0);

  normalMaterial();
  push();
  translate(100, 100, -100);
  rotate(PI / 2, [1, 1, 0]);
  cylinder(100, 100, 20);
  pop();

  push();
  translate(400, 200, -100);
  rotate(90, [1, 1, 1]);
  cylinder(100, 100, 20);
  pop();

  push();
  rotate(PI / 8, [1, 1, 0]);
  translate(-100, -100, -100);
  cylinder(50, 50, 20);
  pop();

  push();
  translate(-200, -200, 100);
  rotate(PI / 2, [1, 1, 0]);
  cylinder(50, 50, 20);
  pop();

  push();
  translate(200, -200, 10);
  rotate(PI, [1, 1, 0]);
  cylinder(50, 50, 20);
  pop();

  push();
  translate(200, 250, -100);
  rotate(3 * PI / 4, [1, 1, 0]);
  cylinder(50, 50, 20);
  pop();
  if (keyIsPressed === true && keyCode == UP_ARROW) {
    zoom = zoom + 0.5;
  }
  if (keyIsPressed === true && keyCode == DOWN_ARROW) {
    if (zoom > 3) {
      zoom = zoom - 0.5;
    }
  }
}


