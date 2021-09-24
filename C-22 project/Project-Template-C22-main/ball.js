class Ball {
    constructor(x, y, r) {
        var options = {
            restitution: 0.4,
            friction: 1.0,
            density: 1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        World.add(world, this.body);
    }

    display() {
        var ballPos = this.body.position;
        push();
        translate(ballPos.x, ballPos.y);
        ellipseMode(CENTER);
        // fill(rgb(12, 235, 235));
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}