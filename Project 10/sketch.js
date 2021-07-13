var seaImg,sea;
var shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
    sea = createSprite(200,200,400,400);
    sea.addImage("sea",seaImg);
    sea.velocityX = -3;
    ship = createSprite(200,200,2,2);
    ship.addAnimation("ship",shipImg);
    ship.scale = 0.5;
}

function draw() {
  background("blue");
  if(sea.x < 0) {
    sea.x = width/2;
  }
  drawSprites();
}