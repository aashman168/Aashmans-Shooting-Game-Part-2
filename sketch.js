var bg, bgimg
var boy, boyimg
var eyeofender, eyeofenderimg, eyeofenderG
var diamond, diamondimg, diamondG
var redstone, redstoneimg, redstoneG
var bullet, bulletimg, bulletG

function preload(){
bgimg=loadAnimation("images/bg1.png", "images/bg2.png", "images/bg3.png", "images/bg4.png", 
"images/bg5.png","images/bg6.png", "images/bg7.png")
boyimg=loadImage("images/boy.png")
redstoneimg=loadAnimation("images/redstone1.png", "images/redstone2.png", "images/redstone3.png", 
"images/redstone4.png", "images/redstone5.png", "images/redstone6.png", "images/redstone7.png", 
"images/redstone8.png")
diamondimg=loadAnimation("images/diamond1.png", "images/diamond2.png", "images/diamond3.png", 
"images/diamond4.png", "images/diamond5.png")
eyeofenderimg=loadAnimation("images/eyeofender1.png", "images/eyeofender2.png")
bulletimg=loadImage("images/bullet.png")
}

function setup() {
  createCanvas(1350,650);
  bg= createSprite(675, 325, 1500, 650);
  bg.addAnimation("bg", bgimg)
  bg.scale= 1.8
  boy=createSprite(250, 450)
  boy.addImage(boyimg)
  boy.scale=0.5
  eyeofenderG=new Group()
  diamondG=new Group()
  redstoneG=new Group()
  bulletG=new Group()
}

function draw() {
  background("black");  
  if(keyDown("w")){
    boy.y=boy.y-10
  }
  if(keyDown("s")){
    boy.y=boy.y+10
  }
  spawnredstone();
  spawndiamond();
  spawneyeofender();
  if(keyDown("space")){
    spawnbullet();
  }
  for(var r=0; r<redstoneG.length; r++){
      if(redstoneG.get(r).isTouching(bulletG)){
        redstoneG.get(r).destroy()
    }
  }
  for(var d=0; d<diamondG.length; d++){
      if(diamondG.get(d).isTouching(bulletG)){
        diamondG.get(d).destroy()
    }
  }
  for(var e=0; e<eyeofenderG.length; e++){
    if(eyeofenderG.get(e).isTouching(bulletG)){
      eyeofenderG.get(e).destroy()
  }
}

  drawSprites();
 
}

function spawnredstone(){
  if(frameCount%120===0){
    redstone=createSprite(1360, 400, 15, 15)
    redstone.y= random(100, 550)
    redstone.addAnimation("redstone", redstoneimg)
    redstone.velocityX= -10
    redstone.scale= 0.25
    redstoneG.add(redstone)
  }
}
function spawndiamond(){
  if(frameCount%160===0){
    diamond=createSprite(1360, 400, 15, 15)
    diamond.addAnimation("diamond", diamondimg)
    diamond.y= random(100, 550)
    diamond.velocityX= -10
    diamond.scale= 0.15
    diamondG.add(diamond)
  }
}
function spawneyeofender(){
  if(frameCount%200===0){
    eyeofender=createSprite(1360, 400, 40, 40)
    eyeofender.addAnimation("eyeofender", eyeofenderimg)
    eyeofender.y= random(100, 550)
    eyeofender.velocityX= -10
    eyeofender.scale= 0.25
    eyeofenderG.add(eyeofender)
  }
}
function spawnbullet(){
  bullet=createSprite(30, 100)
  bullet.x= boy.x+110
  bullet.y= boy.y-80
  bullet.addImage(bulletimg)
  bullet.velocityX= 75
  bullet.scale=0.20
  bulletG.add(bullet)
}