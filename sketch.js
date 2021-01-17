var sword,swordImage;
var monsterImage;
var PLAY=1;
var END=0;
var gameState=1;
var fruitGroup,fruit1,fruit2,fruit3,fruit4; 
var enemyGroup;
var score=0;
var gameOver,gameoverImage;
var gameState="play";
function preload(){
swordImage=loadImage("sword.png") ; 
monsterImage=loadImage("alien1.png");
 fruit1=loadImage("fruit1.png"); 
  fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  gameOverImage=loadImage("gameover.png");
}
function setup(){
  createCanvas(400,400);
  sword=createSprite(50,50,50,50);
  sword.addImage(swordImage);
  sword.scale=0.6;
  enemyGroup=createGroup();
 fruitGroup=createGroup();
  gameOver=createSprite(200,200,20,20);
  gameOver.addImage("gameover",gameOverImage);
  gameOver.visible=false;
}
function draw(){
background("lightBlue");
  text("score-"+score,350,50);
  if(gameState==="play"){
    
  
  sword.x=mouseX;
    sword.y=mouseY;
  enemy();
 fruits();
   if(fruitGroup.isTouching(sword)){
     score=score+2;
     fruitGroup.destroyEach();
   
   }
    if(enemyGroup.isTouching(sword)){
      enemyGroup.destroyEach();
      gameOver.visible=true;
      gameState="end"
    }
  }
  drawSprites();
}
function fruits(){
    if(frameCount%80===0){
      fruit=createSprite(400,200,20,20);
     fruit.y=Math.round(random(50,340))
      fruit.scale=0.2;
      fruitGroup.add(fruit)
      fruit.velocityX=-5;
      //fruit.debug=true;
      r=Math.round(random(1,4));
      if(r==1){
        fruit.addImage(fruit1);
      }
      else if(r==2){
        fruit.addImage(fruit2);
      }
      else if(r==3){
        fruit.addImage(fruit3);
      }
      else
        fruit.addImage(fruit4);
    } 
      
    }
  
 
  function enemy(){
    if(World.frameCount%200===0){
      monster=createSprite(400,200,20,20);
      monster.addAnimation("moving",monsterImage)
      monster.y=Math.round(random(100,300));
      monster.velocityX=-8;
      monster.setLifetime=50;
      enemyGroup.add(monster);
    }
  }