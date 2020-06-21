var fixedRect,movingRect;
var object1,object2;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(200, 200, 50, 80);
 movingRect= createSprite(200, 200, 80, 50);
 fixedRect.shapeColor="green";
 movingRect.shapeColor="green";
 gameObject1=createSprite(200,100,50,50);
 gameObject2=createSprite(800,100,100,100);
 gameObject1.shapeColor="green";
 gameObject2.shapeColor="green";
 gameObject1.velocityX=8;
 gameObject2.velocityX=(-15);
}


function draw() {
  background(0); 
  movingRect.x=mouseX; 
  movingRect.y=mouseY; 
if(isTouching(gameObject1,movingRect)){
  gameObject1.shapeColor="blue";
  movingRect.shapeColor="red";
}
else {
  gameObject1.shapeColor="green";
 movingRect.shapeColor="green";
}
 
bounce(gameObject2,gameObject1);
  drawSprites();
}
