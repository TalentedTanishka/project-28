
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world , engine;
var ground ;
var tree , boy;
var mango1 , mango2 , mango3 , mango4 , mango5 ; 
var mango6 , mango7 , mango8 , mango9 , mango10 ;
var mango11 , mango12 ,mango13 ;
var sun , ray1 , ray2 , ray4 , ray5;
var stone , band;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,80);

	tree = new Tree(600,470,450,450);

	mango1 = new Mango(500,490,50,50);
	mango2 = new Mango(550,490,50,50);
	mango3 = new Mango(650,490,50,50);
	mango4 = new Mango(690,475,50,50);
	mango5 = new Mango(450,490,50,50);
	mango6 = new Mango(699,400,50,50);
	mango7 = new Mango(410,400,50,50);
	mango8 = new Mango(490,450,50,50);
	mango9 = new Mango(600,350,50,50);
	mango10 = new Mango(600,450,50,50);

mango11 = new Mango(500,350,50,50);
	mango12 = new Mango(550,390,50,50);
	mango13 = new Mango(410,460,50,50);
	
	
	boy = new Boy(150,600,200,200);

	sun = new Sun(100,100,80)

	ray1 = new Rays(100,30,10,50);
	ray2 = new Rays(100,170,10,50);
	ray3 = new Rays(30,90,50,10);
	ray4 = new Rays(170,90,50,10);

	stone = new Stone(95,550,30,30)

	band = new Band(stone.body ,{x : 80 , y: 80});

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine)
  rectMode(CENTER);
  background(44,157,237);
  
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  
  mango11.display();
  mango12.display();
  mango13.display();
  
  
  sun.display();

  ray1.display();
  ray2.display();
  
  ray3.display();
  ray4.display();
  
  
  boy.display();
  band.display();
  stone.display();

 

  ground.display();
  
  
 
}
function mouseDragged()
{
Matter.Body.setPosition(stone.body , {x : mouseX , y : mouseY})

}

function mouseReleased()
{

	band.fly();
}
