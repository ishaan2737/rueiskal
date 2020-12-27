function Preload(){



}


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  plinko1 = new Plinko(20,20,20,20);
}

function draw() {
  background(255,255,255);  

  plinko1.display
  drawSprites();
}