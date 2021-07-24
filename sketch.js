
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
var bin,binImage;

function preload()
{
  binImage = loadImage("dustbin.png")	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(500,390,1000,20)

	paper = new Paper(50,50,20)
   
  launcher=new Launcher(paper.body,{x:100,y:100})
   dustbin = new Dustbin(800,330,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  paper.display()
  ground.display()
  
  dustbin.display()
  launcher.display();
}


function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcher.fly();
}



