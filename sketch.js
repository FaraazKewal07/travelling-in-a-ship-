var ship , shipImage ;
var sea , seaImage ,  invisibleSea ;

function preload(){
shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
  
  //create a ground sprite
  sea = createSprite(200,190,400,20);
  sea.addImage("sea",seaImage);
  sea.velocityX = 4;
  sea.scale = 0.3;



  ship = createSprite(200,200,50,20);
  ship.addAnimation("ship", shipImage);
  ship.scale = 0.25;
 
  
  //creating invisible ground
  invisibleSea = createSprite(200,200,400,10);
  invisibleSea.visible = false;
}

function draw() {
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
  background(seaImage);
 



drawSprites() 
  
}  
 
