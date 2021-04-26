var ship;

function setup(){
  canvas = createCanvas(400,400);
  var ship = createSprite(200,350,20,20);
}


function draw(){
  background("black");
 if(keyDown("UP_ARROW")){
   ship.velocityX = ship.velocityX + 2;
 }

 if(keyDown("DOWN_ARROW")){
   ship.velocityY = ship.velocityY + 2;
}

if(ship.isTouching(obstacles)){
ship.x = 200;
ship.y = 350;
}

spawnObstacles();
}

function spawnObstacles(){
  if(World.frameCount % 30 === 0){
    var obstacle = createSprite(400,200,10,10);
    obstacle.y = randomNumber(100,300);
    obstacle.velocityX = -3;
    obstacle.lifetime = 134;
}
}
