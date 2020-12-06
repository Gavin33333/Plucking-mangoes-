
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var tree, ground
var Boy
var M1, M2, M3
var stone
var launcher
function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2, 590, width, 20)
tree = new Tree(1050,340,450,500)
M1 = new Mango(800,100,40)
M2= new Mango(900,150,40)
M3= new Mango(900,130,40)
stone = new Stone(235,420,30)
launcher=new Launcher(stone.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,200,340,200,300)
  ground.display();
  tree.display();
M1.display();
M2.display();
M3.display();
stone.display();
launcher.display();
detectCollision(stone,M1);
detectCollision(stone,M2);
detectCollision(stone,M3)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}


function detectCollision(lstone,lmango){
    mangobody = lmango.body.position;
    stonebody = lstone.body.position;
    var distance = dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y);
    if(distance <= lmango.r+lstone.r){
        Matter.Body.setStatic(lmango.body,false);
    
    }
    
    }
function keyPressed(){
    if(keyCode===32){
       launcher.attach(stone.body) 
    }
}
