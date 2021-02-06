function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}
var particles = [];
var blocks = [];
var plinkos = [];
var blockHeight=300;
 

for(var k = 0;<=width; k=k+80){
  blocks.push(newBlocks(k,height-blockHeight/2,10,blocksHeight))
}
for(var j=40;j<=width;j=j+50);
{
  plinkos.push(new Plinko(j,75));
}
for(var j=15; j<=width-10;j=j+10)
{
  plinkos.push(new Plinko(j,175));
}
for(var j=0; j<particles.length;j++){
  particles[j].display();
}
for(var k=0, k<blocks.length; k++){
  divisions[k].display();

}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10,),10,10))
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
ground = new Ground(800, 480, 600, 200)
block1 = new Block(100,500,20, 500)
block2 = new Block(100,500,100,500)

function draw(){
  Engine.update(engine);
  //strokeWeight(4);
  block1.display();
  block2.display();
  ground.display();
}