
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survialTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
     // creating monkey
  monkey=createSprite(80,315,20,20); monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground .velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  banana = createSprite(100,100,0,0);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  

  FoodGroup = new Group(); 
  obstaclesGroup = new Group();
  
  }


function draw() {
    background(225);
  
  if(ground.x<0) {
    ground.x = ground.width/2
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score",+ score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
surivivalTime=Math.ceil(frameCount/frameRate()) 
text("surivival Time :",+ surivivalTime )
  
  if(frameCount%100===0) {
 var banana = createSprite(100,100,0,0);
 var obstacle=createSprite(170,325,50,50);
    
  banana.x = Math.round(random(150,300));
  obstacle.x = banana.x;
    
    obstacle.addImage(obstacleImage)
    banana.addImage(bananaImage);
    
      banana.scale = 0.1;
   obstacle.scale = 0.1;

    
  
    
  }
  
  drawSprites();
  
}

  
function spawanFood() {
  
  if(frameCount%100===0) {
  var banana = createSprite(100,100,0,0);
 var obstacle=createSprite(170,325,50,50);
    
  banana.x = Math.round(random(150,300));
 
    
    banana.addImage(bananaImage);
    
   banana.scale = 0.1;
   

}
}

function spawnObstacles()  {
  if(frameCount % 300 === 0)  {
    obstacle =createSprite(800,320,10,40);     obstacle.velocityX = -6; 
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);           obstacle.scale=0.15;
    //lifetime to the obstacle 
    obstacle.lifetime = 300; 
    //add each obstacle to the group  
    obstaclesGroup.add(obstacle);
    
     obstacle.x = banana.x;
  }
} 







