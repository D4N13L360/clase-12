
var trex ,trex_running;
var sueloinvisible;
function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groung = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 ground1 = createSprite(200,180,400,20);
 ground1.addImage  (groung);
 ground1.velocityX = -6;
 sueloinvisible = createSprite(200,190,400,10);
 sueloinvisible.visible = false
}

function draw(){
  background("white")
 if (keyDown("space")&&trex.y >=140) {
  trex.velocityY=-10
 } 
 trex.velocityY = trex.velocityY+0.5;
 if(ground1.x < 0){
  ground1.x = ground1.width/2;
 }
 trex.collide(sueloinvisible)
drawSprites();
}
