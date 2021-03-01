var bullet, wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,1000);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50, 300, 200, 80);
  
  wall = createSprite(700,300,thickness,height/2);
  


  bullet.velocityX=speed;
}

function draw() {
  background("white");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    
  }
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  

 
   
    if(damage > 10){
      wall.shapeColor="red";
    }
    if(damage < 10){
      wall.shapeColor="green";
    }
    drawSprites();
  }
   


function hasCollided(lbullet, lwall) 
{ bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x; 
  if (bulletRightEdge>=wallLeftEdge) {
   return true
   }
   return false; 
  }