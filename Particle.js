class Particle {
    constructor(x,y) {
        var options = {
            restitution: 0.2,
            friction: 2,
            density: 1
        }
        this.ball = Bodies.circle(x,y, 10, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.ball);
    }
    display() {
        var pos = this.ball.position;

        
        push();
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x, pos.y, 20, 20);
        pop();
    }
}