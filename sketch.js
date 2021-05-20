var bg,bgImg


function preload(){
bgImg = loadImage("bg.png")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
 

}

function draw() {
  background("blue");  
 
drawSprites();

console.log("hi ")
}