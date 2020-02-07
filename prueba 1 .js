function setup() {
  createCanvas(600,500);  

}

function draw() {
  background(0,0,0);
  ellipse(300,250,20,20);
  fill(0,255,0);
  stroke(255,0,0);
  line(50,200,50,50);
  strokeWeight(3);
  line(550,200,550,50);
  
}


var x;
var velx = 5;
var y;
var vely = 10;

function setup(){
  createCanvas(500,500);
  x = 250;
  y = 250;
}

function draw(){
  mostrar();
  moverX();
  rebotarX();
  moverY();
  rebotarY();
}

function mostrar(){
  background(0,0,0);
  ellipse(x,y,20,20);
  fill(0,0,255);
}

function moverX(){
  x = x + velx;
}

function rebotarX(){
  if(x > 500){
    velx = velx*-1;
}
if(x < 0){
  velx = velx*-1;
}
}

function moverY(){
  y = y + vely;
}

function rebotarY(){
  if(y > 500){
    vely = vely*-1;
}
if(y < 0){
  vely = vely*-1;
}
}
