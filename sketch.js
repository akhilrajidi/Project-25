
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall, ground1, dustbin1;
var dustbinimage,dustbinimageLoad;
function preload()
{
	dustbinimageLoad =loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	paperBall = new paper(200,600,50);
	dustbin1 = new dustbin(600,670);
	ground1= new ground(400,690,800,10);
	dustbinimage = createSprite(630,580,20,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  paperBall.display();
  dustbin1.display();
  ground1.display();
  dustbinimage.addImage(dustbinimageLoad);
  dustbinimage.scale = 0.7;
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW ){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-120});
}
}