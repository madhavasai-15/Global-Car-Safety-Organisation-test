var car;
var wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1300, 200, 64, 256);

  speed = random(55, 90);
  weight = random(400, 1500);
  car.velocityX = speed;
}

function draw() {
  background(0);

  if(wall.x - car.x <= car.width / 2 + wall.width / 2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;

    if(deformation < 100){
        car.shapeColor = color(0, 255, 33);
    }

    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    
    if(deformation > 180){
      car.shapeColor = "red";
    }  
  } 

  drawSprites();
}