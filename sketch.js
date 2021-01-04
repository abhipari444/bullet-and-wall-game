var bullet1;


var wall1;

var speed;
var weight;

var thickness;
var bulletRightEdge;
var wallLeftEdge;






function setup() {
  createCanvas(600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall1 = createSprite(590, 200,thickness,height/2);
  
  
 bullet1= createSprite(40,200,50,10);
  bullet1.velocityX = speed;
  

  bulletRightEdge = bullet1.x;
  wallLeftEdge = wall1.x
  
  

function draw() {

  background("pink");  

 
  }
   if(hasCollided(bullet1,wall1)) {
     bullet1.velocityX = 0;
     var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

     if(damage>10) {
       wall1.shapeColor = color(255,0,0);
     }
     if(damage<10) {
       wall1.shapeColor = color(0,255,0);
     }
   }
    
  drawSprites();
}

function hasCollided(bullet,wall) {

bullet.RightEdge = bullet1.x +bullet1.width;
   wallLeftEdge = wall1.x;
   if(bulletRightEdge>=wallLeftEdge) {
     return true;
   }
    return false;
}





