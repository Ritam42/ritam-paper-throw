
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject, groundobj, dustpan, wall1, wall2; 

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(200, 200, 20, 20);
	groundobj = new ground(width/2, height-35, width,10);
	dustpan = new ground(650, 650, 100, 20);
    wall1 = new ground(600, 585, 20, 150);
    wall2 = new ground(690, 585, 20, 150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  groundobj.display();
  dustpan.display();
  wall1.display();
  wall2.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
       Matter.Body.applyForce(paperObject.body, paperObject.position,{x:15, y:-15});
	}
}







