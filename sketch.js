const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject,slingShot;
var world;

function preload()
{
	
	dustbinImg = loadImage("Images/dustbingreen.png")
}

function setup() {
	createCanvas(1000, 900);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,620,width,20);

	dustbin1=new Dustbin(700,510,20,200);
	dustbin2=new Dustbin(890,510,20,200);
	dustbin3=new Dustbin(810,600,200,20);
	
	
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  imageMode(CENTER);
	image(dustbinImg,805,460,250,300);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:73,y:-79})
	}

}

function mouseReleased (){
	attach.fly();
	
}

