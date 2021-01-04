 
function setup() {
  	createCanvas(600, 400);  
  	background(240);
}

var speed =1;

function draw() {
	dene( );
 }
 
function dene() {

	 
	translate(280,200);
	fill(255);
	ellipse(60*sin(speed),40*cos(speed*-1),22,22);
	speed+=0.05;
 
}

 function AciHesapla(x1,y1,x2,y2) //bize cos0 hesaplayacaktır
	{	
	//vektörel çarpım u.v = u1.v1 + u2.v2
	vektorelCarpim = x1*x2 + y1*y2 ;
	//skaler çarpım 
	skalerCarpim = sqrt(Math.pow(x1,2)+Math.pow(y1,2)) * sqrt(Math.pow(x2,2)+Math.pow(y2,2)); // |u| burada x1 ve y1 den oluşuyor ve (x1^2)+(y1^2) şeklinde hesaplanıyor. |v| burada x2 ve y2 den oluşuyor ve (x2^2)+(y2^2) şeklinde hesaplanıyor. ayrıca sqrt javascriptte kök ifadesine eşittir, pow üs ifadesine eşittir. sqrt () ifadesinin içine yazdığımızın kökünü alır. pow ise (x,y) x^y yapar
	//cos0
	cos0 = vektorelCarpim/skalerCarpim; 	
 	return cos0;
}