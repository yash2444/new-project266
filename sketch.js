
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,10,width,10)
	bobObject1=new bob(320,200,50)
	 bobObject2=new bob(360,200,50)
	 bobObject3=new bob(400,200,50)
	 bobObject4=new bob(440,200,50)
	 bobObject5=new bob(480,200,50)
	 rope1=new rope(bobObject1.body,{x:320,y:10})
	 rope2=new rope(bobObject2.body,{x:360,y:10})
	 rope3=new rope(bobObject3.body,{x:400,y:10})
	 rope4=new rope(bobObject4.body,{x:440,y:10})
	rope5=new rope(bobObject5.body,{x:480,y:10})

	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-40,y:-20});

  	}
}




