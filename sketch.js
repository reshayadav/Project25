
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var board1,board2,board3;
var dustbin,dustbinImg;
var paper;
var ground;
var myEngine,myWorld;

function preload()
{

	dustbinImg = loadImage("dustbin.png");
	
	
}

function setup() {
	createCanvas(800, 600);


	myEngine = Engine.create();
	myWorld = myEngine.world;



	//Create the Bodies Here.
	paper = new Paper(100,200,10);
	dustbin =new Dustbin(570,555,130,20);
	board2 =new Dustbin(520,530,20,130);
	board3 =new Dustbin(640,530,20,100);
	ground =new Ground(400,580,800,20);


	
  
}


function draw() {

  background(200);
  Engine.update(myEngine);



  paper.display();
  ground.display();
  image(dustbinImg,570,505,130,130);

  //board2.display();
  //board3.display();
  //dustbin.display();

 fill("black");
 text("Press the up arrow key to start",300,50);
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-14});

	}
}
