var tree;
var ciz;
var trees = [];
let snow = [];

let gravity ;
 
function setup() {
    createCanvas(windowWidth, windowHeight);
	gravity = createVector(0,0.05 );
	tree = new Tree();
		background(0);

 
  	for (i = 0; i < 20; i++) {
  		trees.push(new Tree());
  	}
 	for (i = 0; i < 20; i++)
 		trees[i].show();
}

function draw() {
	
//	snow.push(new Snowflake());
// 	for(flake of snow){
//		flake.update();
//		flake.render();
//	}

}