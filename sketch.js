var snowflake, snowflakeImg;
var bgImg;

function preload() {
  snowflakeImg = loadImage("snowflake.png");
  bgImg = loadImage("snow1.jpeg");
}

function setup() {
  createCanvas(1000,800);
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount % 50 === 0){
  snowflake = createSprite(random(0 ,1000), 0, 50, 50);
  snowflake.velocityX = 0;
  snowflake.velocityY = 2;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.2;
  }
}

