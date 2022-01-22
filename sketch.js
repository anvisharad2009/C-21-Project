const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside;
var rightside;

function preload()
{
	
}

function setup() {
	createCanvas(990, 500);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false ,
		restitution:0.3 ,
		friction:0 ,
		density:1.2
	 } 

	ball=Bodies.circle (300,150,30 , ball_options) 
	World.add (world , ball)
 

	ground=new Ground(width/2 ,490,1100,20);
	leftside=new Ground(800,400,15,150);
    rightside=new Ground(650,400,15,150); 


	

	


	//Create the Bodies Here.
	
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
   
  ground.display();
  leftside.display ();
  rightside.display ();
  ellipseMode(CENTER);

  ellipse(ball.position.x , ball.position.y , 70)

  }

  function keyPressed () {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball , ball.position , {x:130 , y:-130})
	}
  } 




