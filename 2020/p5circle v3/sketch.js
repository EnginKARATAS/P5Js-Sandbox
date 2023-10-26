	
var position ={
	x:400,
	y:400
};
var speed ={
	x:0,
	y:0
};
var figure ={
	x:15,
	y:15
};

	function setup() {
	createCanvas(600,600);
	background(0);
 	}

function draw() {
	
	ellipse(position.x,position.y,figure.x,figure.y);
  // put drawing code here
}