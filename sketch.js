
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var board1,board2,board3;

var paper;
var ground;
var myEngine,myWorld;

function preload()
{

	//dustbinImg = loadImage("dustbin.png");
	
	
}

function setup() {
	createCanvas(800, 600);


	myEngine = Engine.create();
	myWorld = myEngine.world;


	//image(dustbinImg,550,535,200,30);

	//Create the Bodies Here.
	paper = new Paper(100,200,10);
	board1 =new Dustbin(550,555,200,30);
	board2 =new Dustbin(455,530,20,100);
	board3 =new Dustbin(650,530,20,100);
	ground =new Ground(400,580,800,20);


	
  
}


function draw() {

  background(450);
  Engine.update(myEngine);

  paper.display();
  ground.display();
  board1.display();
 // board2.display();
 // board3.display();

 
  
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30});

	}
}
