const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinko,ground,division,particle,




function setup(){    
  createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

   ground=new Ground(240,720,480,20);
   var particles=[];
   var plinkos=[];
   var divisions=[];

   var divisionHeight=300;

   for (var k=0; k <=width; k = k + 80){
     divisions.push(new divisions(k, height-divisionHeight/2,10,divisionHeight));

   }

   for (var j = 40; j <=width; j=j+50)
   {

    plinkos.push(new plinko(j,75));
   }
   
   for (var j = 15; j <=width-10; j=j+50)
   {
     plinkos.push(new plinko(j,175));
   }




  }

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,10,10)))
  }
  
  for (var j=0; j < particles.lenght; j++){

    particles[j].display(); 
   }
   for (var m=0; m < particles.lenght; m++){

    particles[m].display(); 
   }
   for (var k=0; k < particles.lenght; k++){

    particles[k].display(); 
   }
  
  
  
  
  
  
  drawSprites();
}