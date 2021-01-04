function Tree() {

	this.x = random(600);
	this.y = random(600);
	this.size = random(1, 6);
	this.out1 = random(5, 15);
	this.out2 = random(5, 15);

	this.show = function () {


		strokeWeight(1);
		for (a = 0; a <= 100; a = a + 10) {
			fill(255);

			stroke(0);
			strokeWeight(0.15);
			fill(150 + a, 200, 50);

			triangle(this.x, this.y + a, this.x - a * 0.37 - this.out1 - this.size, this.y + this.out2  + a * 1.3 + this.size, this.x + a * 0.37 + this.size + this.out1, this.y +this.out2 + a * 1.3 + this.size);
			this.out1 = random(2, 25);
			this.out2 = random(5, 10);

		}

		noStroke();
		rect(this.x - 13, this.y + 100, 15, 85);

	}


	//	this.x = random(400);
	//	this.y = random(400);
	//	this.size = random(35, 65);
	//	this.body = 10;
	//	this.r = 100;
	//	this.g = 100;
	//	this.height = 15;
	//	this.heightrange = 3;
	//	this.show = function () {
	//		this.i = 66;
	//				fill(255);
	//				strokeWeight(1);
	//				triangle(this.x, this.y , this.x - this.size, this.y  + this.size, this.x + this.size, this.y  + this.size);
	// 
	//		
	//		
	// 
	//	}
}