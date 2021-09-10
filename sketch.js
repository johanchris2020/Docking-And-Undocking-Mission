var iss, spacecraft;
var hasDocked = false;
var iss_img, spacebg_img, spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img;
function preload() {
  iss_img = loadImage("Images/iss.png");
  spacebg_img = loadImage("Images/spacebg.jpg");
  spacecraft1_img = loadImage("Images/spacecraft1.png");
  spacecraft2_img = loadImage("Images/spacecraft2.png");
  spacecraft3_img = loadImage("Images/spacecraft3.png");
  spacecraft4_img = loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(800, 400);
  iss = createSprite(400, 150, 50, 50);
  iss.addAnimation("iss", iss_img);
  iss.scale = 0.4;
  spacecraft = createSprite(400, 350, 50, 50);
  spacecraft.x = Math.round(random(800, 0));
  spacecraft.addAnimation("spacecraft", spacecraft1_img);
  spacecraft.scale = 0.2;
}

function draw() {
  background(spacebg_img);

  iss.setCollider("rectangle", iss.x - 470, iss.y - 130, 30, 30)
  if (!hasDocked) {
    if (spacecraft.isTouching(iss)) {
      hasDocked = true;
    }
    keyPressed();
  }
  if (hasDocked) {

    text("Docking Successful", 300, 300);

  }
  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    spacecraft.addAnimation("spacecraft", spacecraft3_img);
    spacecraft.x = spacecraft.x - 10;
  }
  if (keyCode === RIGHT_ARROW) {
    spacecraft.addAnimation("spacecraft", spacecraft4_img);
    spacecraft.x = spacecraft.x + 10;
  }
  if (keyCode === DOWN_ARROW) {
    spacecraft.addAnimation("spacecraft", spacecraft2_img);
  }
  if (keyCode === UP_ARROW) {
    spacecraft.addAnimation("spacecraft", spacecraft2_img);
    spacecraft.y = spacecraft.y - 10;
  }
}
