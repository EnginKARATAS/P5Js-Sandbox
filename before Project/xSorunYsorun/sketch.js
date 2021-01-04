function setup() {
	createCanvas(600,600);
	background(240);
  // put setup code here
}

function draw() {
	ciz(100,35,35,70);//x2,y2,?,?
  // put drawing code here
}



function ciz(xs,ys,xsorun,ysorun)
{

	ekok=xs*ys;
	xg=Math.abs((xsorun-xs)/50);
	yg=Math.abs((ysorun-ys)/50);

	for (var i = 0; i < ekok ; i++) 
	{

	fill(0);
	ellipse(xs+xsorun,ys+ysorun,11,11)
	xsorun+=xg;
	ysorun+=yg;
		
	}
	
}