var i,t;

function preload() {
  backgroundImg = loadImage("bg.png");
}

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(backgroundImg);  

  rectMode(CENTER);

  fill(126, 51, 255);
  circle(400,285,300);
  
  fill(126, 51, 255);
  rect(110,640,80,250);
  rect(690,640,80,250);
  
  fill(0, 84, 255);
  rect(200,508,100,194);
  rect(600,508,100,194);
  
  fill(25, 179, 229);
  rect(400,455,300,300);
  rect(400,685,500,160);

  fill("black");
  rect(400,780,780,30);
  t=161;
  for(i=1;i<=10;i++){
    square(t,595,20);
    t=t+53;
  }
  
  t=80;
  for(i=1;i<=3;i++){
    square(t,505,20);
    t=t+29;
  }

  t=660;
  for(i=1;i<=3;i++){
    square(t,505,20);
    t=t+29;
  }

  t=160;
  for(i=1;i<=3;i++){
    square(t,400,20);
    t=t+40;
  }

  t=560;
  for(i=1;i<=3;i++){
    square(t,400,20);
    t=t+40;
  }
  
  rect(400,713,300,104);
  rect(400,410,130,110);
  rect(400,295,300,20);

  
  drawSprites();
}