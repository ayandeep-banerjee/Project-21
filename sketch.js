var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 10);
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "80, 80, 80";
  weight = random(30, 52);
  speed = random(223, 321);
}

function draw() {
  background(0);
  if (keyDown("space")) {
    bullet.velocityX = speed;
  }

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  

    if (damage<10) {
      bullet.shapeColor = "green";
    }

    else if (damage>10) {
      bullet.shapeColor = "red";
    }

    console.log(damage);
  }

  drawSprites();
}

function hasCollided(Lbullet, Lwall) {
  var bulletRightEdge = Lbullet.x+Lbullet.width;
  var wallLeftEdge = Lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}