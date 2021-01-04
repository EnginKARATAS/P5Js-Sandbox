 var r=0;
 var b=0;
function setup() {
  createCanvas(660,240);
  
}
function draw() 
{	
	background(r,0,b);
  noStroke();
	r=map(mouseX,600,0,0,255);
	b=map(mouseX,600,0,255,0);
	fill(250,118,222);
	ellipse(mouseX,mouseY,64,64);
}