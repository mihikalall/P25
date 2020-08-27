
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var dustbin2 = createSprite(650,685,200,30) 
	var dustbin2 = createSprite(550,680,30,80) 
	var dustbin2 = createSprite(750,680,30,80) 
	 
	paper1= new Paper(100,680,10,10)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  
  drawSprites();
 
}
function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.body.applyForce(paper.Object.body,paperObject.body.position,{x:85,y:-85})
	}
}


