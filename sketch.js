  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

//Img é as variaveis (MOSTRAR A IMAGEM NA TELA DO JOGO)
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}
//canvas tamanho da tela e das sprites 
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  //draw desenhar as sprites dentro do jogo
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);



function draw() {
  background(0);

  // if = se alguma coisa acomtecer (se eu clicar espaço eu pulo)
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){

        ghost.x = ghost.x - 3;

      
    }
    if(keyDown("right_arrow")){
  
          ghost.x = ghost.x + 3;

      //keyDown e alguma tecla tem que ser clicada para o codigo exenplo espaço para pular
      
    }
    if(keyDown("space")){
  
         ghost.velocityY = -10;

      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
 
  if(tower.y > 400){ 
    tower.y = 300 
  }
   
      
    //quando o fantasma tocar em invisibleBlockGroup fim de jogo


      spawnDoors(); 
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy();
      gameState = "end";
    }
    
  
  drawSprites();
}//o txto de fim de jogo e suas formas e cores
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
  
    //round numeros aleatorios de variaveis
    door.addImage(doorImg);
    climber.addImage(climberImg);
    door.x = Math.round(random(120,400));
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    
    
     
ghost.depth = door.depth;
    ghost.depth +=1;
    
    

  door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

