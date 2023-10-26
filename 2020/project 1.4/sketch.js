var spot = {
	x:100,
	y:100
};
var speed=3;
function setup() {
	createCanvas(640,240);
	
  	
}

function draw() {
	background(0); 
	ellipse(spot.x,spot.y,40,40);
	spot.x=spot.x+speed;
	if (spot.x>width) {
		spot.x=spot.x-speed;
		speed=-3;
	}
	else if(spot.x<1){
		speed=3;
	}
  // put drawing code here
}