 var konum ={
 	x:0,
 	y:0,
 	x2:0

 };

 function setup(){
	createCanvas(1360,620);
 	background(0);	
 	 
 }	

 function draw() {
 	 	
 	if (konum.x<680) {
 		fill(150,150,150);
		ellipse(340+xkonumArttır(0.1),90,55,55);
 	}
 	
 	xkonumArttır(5);

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
 }


 function xkonumArttır(artis)//x artı
 {
	return konum.x += artis;

 }
  function xkonumAzalt(artis)//x azalt
 {
	return konum.x -= artis;

 }
 function ykonumArttır(artis)//y arttır
 {
	return konum.y += artis;

 }
  function ykonumAzalt(artis)//y azalt
 {
	return konum.y = konum.y-artis*-1;
 }
 