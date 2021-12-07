const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(900,50,50,50)
    box2=new Box(900,40,50,50)
    box3=new Box(900,30,50,50)
    box4=new Box(900,20,50,50)
    box5=new Box(900,10,50,50)
    box6=new Box(800,50,50,50)
    box7=new Box(800,40,50,50)
    box8=new Box(800,30,50,50)
    box9=new Box(800,20,50,50)
    box10=new Box(700,70,50,50)
    box12=new Box(700,60,50,50)
    box13=new Box(700,50,50,50)
    box14=new Box(700,40,50,50)
    box15=new Box(700,30,50,50)
    box16=new Box(700,20,50,50)
    box17=new Box(700,10,50,50)
    ball=new Ball(300,150,70)
    slingshot=new SlingShot(ball.body,{
        x:300, y:50
    })


    ground = new Ground(600,height,1200,20);
   
}

function draw(){
    background("purple");
    Engine.update(engine);
    ground.display();
    strokeWeight(4);
    stroke("white")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    ball.display();
    slingshot.display();}

function mouseDragged(){
Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
slingshot.fly();
}