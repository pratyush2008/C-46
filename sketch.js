const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var canvas;
var spaceship,spaceshipImage;

var backgroundImage;

var scene;

var edges; 

var spacecraftsgroup;

var spacecrafts,spacecraftImage ;

var score=0;

var sound;

function preload(){
 spaceshipImage=loadImage("alien.jpg");
 backgroundImage=loadImage("background 1.jpg");
 spacecraftImage=loadImage("space1.png");
 sound=loadSound("sound1.mp3");
}

function setup() {
  
 canvas= createCanvas(displayWidth,displayHeight-100);
 
 // scene=createSprite(0,0,displayWidth,displayHeight);
 // scene.addImage(backgroundImage);
 // scene.scale=7;
 // scene.x=scene.width/2;

  engine=Engine.create();
  world=engine.world;


  spaceship=createSprite(displayWidth/2,600,100,50);
  spaceship.addImage(spaceshipImage);
  spaceship.scale=0.1;
  
  spacecraftsgroup=new Group();
  
}

function draw() {
  background(backgroundImage); 
  spaceship.velocityY=0;
  spaceship.velocityX=0;
 //scene.velocityX=+3; 

 // if(scene.x<0){
  //scene.x=scene.width/2;

  //}

 
  fill("white");
  textSize(40);
 text("Hits:" +score,1000,50);
 

  Engine.update(engine);

  if(keyDown("UP_ARROW")){

    spaceship.velocityY=-3;
    spaceship.velocityX=0;
  }

  if(keyDown("DOWN_ARROW")){

    spaceship.velocityY=3;
    spaceship.velocityX=0;
  }

  if(keyDown("LEFT_ARROW")){

    spaceship.velocityY=0;
    spaceship.velocityX=-3;
  }
  if(keyDown("RIGHT_ARROW")){

    spaceship.velocityY=0;
    spaceship.velocityX=3;
  }

  if(spacecraftsgroup.isTouching(spaceship)){
    sound.play();
    score=score+1;
    spacecrafts.destroy();
    
    }
 
  edges=createEdgeSprites();
  spaceship.bounceOff(edges);
  
 spawnSpaceCrafts();
  drawSprites();
}

function spawnSpaceCrafts(){
if(frameCount%80===0){
  spacecrafts=createSprite(1000,100,200,100);
  spacecrafts.x=Math.round(random(80,2000));
  spacecrafts.addImage(spacecraftImage);
  spacecrafts.scale=0.5
  
   spacecrafts.velocityY=3;
   spacecrafts.lifetime=150;
   spacecraftsgroup.add(spacecrafts);

}


}