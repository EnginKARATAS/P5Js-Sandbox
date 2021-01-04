 
function ciz(xi,xs,yi,ys){
	if( (xi-xs)==0 )
	{
		xs += 0.01 ;
	}
	if ( (yi-ys)==0 )
	{
		ys += 0.01;
	}

	r=0.1;
	hassasiyet=50;
	x=xs-xi;
	y=ys-yi;

	if (x != 0 || y != 0) 
	{
		xh=x/hassasiyet;
		yh=y/hassasiyet;	
	}

	ekok=x*y;

	for (var i = 0; i <ekok*hassasiyet ; i++) {

		fill(0);
		ellipse(xi,yi,r,r);

		xi +=xh;   
		yi +=yh;
	}
}

 function setup()
 	{
	createCanvas(720,300);
 	background(255);	 
 	}	

 function draw()
 	{
 	ciz(0,142,3,3);
 	ciz(142,142,3,120);
 	
 	 /*	
 	if (konum.x<680) {
 		fill(150,150,150);
		ellipse(340+xkonumArttır(0.1),90,55,55);
 	}
 	
  

 	if (konum.x>680) 
 	{

 				if (konum.y<120) 
			 	{
			 		fill(150,150,150);
 					ellipse(1020,90+ykonumAzalt(5),55,55);
 				}
 				else{
 				fill(150,150,150);
 				ellipse(1020-konum.x2,90+konum.y,55,55);
 				konum.x2+=5;
 			}
 	}
 	*/
 }


 