/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;*/






var runner,corona;
var ground,invisibleGround,workersGroup,specialWorkersGroup;
var cloudsGroup, cloudImage;
var groundImg;
var coronaObstacleGroup;
var personObstacleGroup;
var coronaObstacle_1,coronaObstacle_2,coronaObstacle_3,coronaObstacle_4,coronaObstacle_5;



function preload(){
    cloudImage = loadImage("blueCloud.png");
    groundImg = loadImage("realistic_ground.png");
    coronaObstacle_1 = loadImage("coronaObstacle_1.png");
    coronaObstacle_2 = loadImage("coronaObstacle_2.png");
    coronaObstacle_3 = loadImage("coronaObstacle_3.png");
    coronaObstacle_4 = loadImage("coronaObstacle_4.png");
   // coronaObstacle_5 = loadImage("coronaObstacle_5.png");
}

function setup(){
    createCanvas(1200,400);

//    engine = Engine.create();
	//world = engine.world;

   
    ground = createSprite(600,400,1200,20);
    ground.scale = 3;
    ground.setCollider("rectangle",0,0,ground.width,ground.height+15);
    ground.debug = true;
    ground.addImage("ground",groundImg);
    ground.velocityX = -5;
    
   // console.log(ground.x);
    invisibleGround = createSprite(600,350,1200,20);
    invisibleGround.visible = false;

    runner = createSprite(100,300,50,50);
    runner.shapeColor = "brown";
   // console.log(runner.y);


    corona = createSprite(600,300,50,50);
    corona.shapeColor = "brown";
   // console.log(corona.y);
    //ground.shapeColor = "brown";
    
   // globe.addImage("phoenix",globeImg);
  coronaObstacleGroup = new Group();
  personObstacleGroup = new Group();

  //Engine.run(engine);


}

function draw(){
    background("#09eded");
    console.log(runner.y);
    if(ground.x<-300){
        ground.x =600;
      
    }

    if(keyDown("space")  && runner.y > 320){
         runner.velocityY = -22;

    }

    runner.velocityY = runner.velocityY+0.8;

    runner.collide(ground);
    spawnClouds();
    spawncoronaObstacle();
    spawnpersonObstacle();
    drawSprites();
    
}
function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 100 === 0) {
      var cloud = createSprite(1200,120,40,10);
      cloud.y = Math.round(random(5,120));
      cloud.addImage(cloudImage);
      cloud.scale = 0.3;
      cloud.velocityX = -2;
      
       //assign lifetime to the variable
      cloud.lifetime = 700;
      
      //adjust the depth

  
      
      //add each cloud to the group
     // cloudsGroup.add(cloud);
    }
    
  }


  function spawncoronaObstacle() {
    var rand = Math.round(random(200,300));
    //console.log(rand);
    //write code here to spawn the clouds
    if (frameCount % rand === 0) {
      var coronaObstacle = createSprite(1200,300,10,40);
     var rand1 = Math.round(random(1,5));
     if(rand1 ===1){
      coronaObstacle.addImage("corona",coronaObstacle_1);
     } else  if(rand1 ===2){
      coronaObstacle.addImage("corona",coronaObstacle_2);
     } else  if(rand1 ===3){
      coronaObstacle.addImage("corona",coronaObstacle_3);
     } 
     else  if(rand1 ===4){
      coronaObstacle.addImage("corona",coronaObstacle_4);
     } 
     /*else  if(rand1 ===5){
      coronaObstacle.addImage("corona",coronaObstacle_5);
     } */
      coronaObstacle.scale = 0.3;
      coronaObstacle.velocityX = -5;
      
       //assign lifetime to the variable
    coronaObstacle.lifetime = 700;
    coronaObstacle.shapeColor = "red";
      //adjust the depth

  
      
      //add each cloud to the group
      coronaObstacleGroup.add(coronaObstacle);
    }
    
  }


  function spawnpersonObstacle() {
    var rand = Math.round(random(200,300));
   // console.log(rand);
    //write code here to spawn the clouds
    if (frameCount % rand === 0) {
      var personObstacle = createSprite(1200,300,10,40);
     
     // coronaObstacle.addImage(cloudImage);
      //coronaObstacle.scale = 0.3;
      personObstacle.velocityX = -5;
      
       //assign lifetime to the variable
    personObstacle.lifetime = 700;
    personObstacle.shapeColor = "blue";
      //adjust the depth

  
      
      //add each cloud to the group
      personObstacleGroup.add(personObstacle);
    }
    
  }
