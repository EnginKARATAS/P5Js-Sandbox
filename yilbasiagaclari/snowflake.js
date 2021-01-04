class Snowflake {
	constructor() {

		let x = random(width);
		let y = -21;

		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector();
		
		this.r = random(4,8)
	}
	update() {
		this.acc = gravity;
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
	render() {
		stroke(255);
		strokeWeight(this.r);
		point(this.pos.x, this.pos.y)


	}
}
