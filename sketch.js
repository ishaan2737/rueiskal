

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function Preload(){



}


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;


  plinko1 = new Plinko(20,20,20,20);
}

function draw() {
  background(255,255,255);  

  plinko1.display
  drawSprites();
}