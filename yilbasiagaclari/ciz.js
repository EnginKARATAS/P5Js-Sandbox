function Ciz() {
	this.x = random(400);
	this.y = random(400);
	this.size = random(15,40);
	this.out1 = random(5,15);

	this.show = function () {



		strokeWeight(0);
		for(a = 0 ; a<100; a= a+10){
		fill(150+a,200,50);
		triangle(this.x, this.y+a, this.x - a*0.4 -this.out1 - this.size, this.y+a*1.3 + this.size, this.x + a*0.4 +  this.size + this.out1, this.y +a*1.3 + this.size);
				this.out1 = random(2,25);

			}
		
 
		noStroke();
		rect(this.x-13,this.y+100,15,85);
		




	}

}
