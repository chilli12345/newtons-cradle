
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,100,500,40);
	bob1=new Bob(300,300,25);
	bob2=new Bob(250,300,25);
	bob3=new Bob(350,300,25);
	bob4=new Bob(450,305,25);
	bob5=new Bob(500,305,25);
	rope1=new Rope(bob2.body,roof.body,-100,0);
	rope2=new Rope(bob1.body,roof.body,-50,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,50,0);
	rope5=new Rope(bob5.body,roof.body,100,0);


	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();




}


	function keyPressed() { 
	if (keyCode === LEFT_ARROW) {
		 Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-100,y:-50});
	 } 
	} 

