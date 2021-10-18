var greetings = ["hey", "hello", "whats up?"];
var hey = [];
var left = 300;
var right =150;
var x = 320;
var y = 180;
var xspeed = 1;
var yspeed = 100;

var r = 100;



function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
 
  var r = random(255);
  var g = random(255);
  var b = random(255);
 
  noFill();
  stroke(r,g,b);
ellipse(200, 200, r*2, r*2);
  x + 1;
  y + 1;
  if (x > width) {
    xspeed = -xspeed;
  }
  if (y > height) {
    yspeed = -yspeed;
  }
  

  
 noStroke();
  fill(r,g,b);
  ellipse(random(width),       random(height),100, 100);
  

  //text
  fill(0, 0, 0);
  textSize(32);
  text(greetings[hey], 60, 60);

 
  //headshape
  fill(255, 229, 205);
  noStroke();
  ellipse(200, 150, 100, 125);
  
 //left eye
  fill(255);
  stroke(1);
  ellipse(220, 140, 28, 18); 
  
  //right rye
  fill(255);
  ellipse(180, 140, 28, 18); 

  //nose
  fill(285, 229, 205);
  ellipse(200, 160, 10, 10); 
  
  //right eye   color
  fill(r, g, b);
  ellipse(220, 140, 15, 15); 
  
  //left eye color
  fill(r, g, b);
  ellipse(180, 140, 15, 15); 
  
  //body
  fill(102, 153, 204); 
  rect(160, 215, 90, 300, 295); 

  //pupilright
  fill(0, 0, 0);
  ellipse(220, 140, 8, 8); 
  
  //pupilleft
  ellipse(180, 140, 8, 8); 
  fill(255);
  
 //bottom lip
  arc(200, 180, 80, 40, 0, PI); 
  
   //top lip line
  line(160, 180, 240, 180);
  
  //teeth horizontal line
  line(165, 188, 235, 188);
  
  //hat
  fill(255, 153, 51);
  arc(200, 124, 90, 90, -PI, 0, CHORD); 
  
  //brim
  
   
}


 
function mousePressed() {
  push();
  background(255);
  pop();
  hey++;
  if (hey>2){
    hey=0;
    
    background(255);
  }
 
}
