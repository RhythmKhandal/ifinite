var bg;
var spaceship,spaceshipImg;
var aliens,alienImg;


function preload(){

  bg = loadImage("bg2.jpg");
  spaceshipImg = loadImage("spaceship.png");
  alienImg = loadImage("obstacle.png");
}


function setup() {
  createCanvas(700,650);
 
  spaceship = createSprite(350, 100, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.1;

  spaceship.x = camera.position.x
  spaceship.y = camera.position.y

  aliens = createSprite(random(10,200),200,20,20);
  aliens.addImage(alienImg);
  aliens.scale = 0.05;

}

function draw() {
  background(bg);

  if(keyDown(UP_ARROW)){
    spaceship.y = spaceship.y-5;
  }

  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x+5;
  }

  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x-5;
  }

  
   drawSprites();
}