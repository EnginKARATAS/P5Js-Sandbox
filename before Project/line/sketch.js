
function ciz(xi,yi,xs,ys)
{

	ekok=(xs-xi)*(ys-yi);
	xg=(xs-xi)/100;
	yg=(ys-yi)/100;

	for (float i = 0; i < ekok ; i++) 
	{

	fill(255);
	ellipse(xi+xs,yi+ys,11,11)
	xs+=xg;
	ys+=yg;
		
	}
	
}

function setup()
	{
	createCanvas(720,300);
 	background(21);
	}		

function draw() 
	{
	ciz(5,10,10,15);
	}

