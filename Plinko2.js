class Plinko2{
    constructor(x,y) {
        var options = {
            restitution: 0.3,
            friction: 6,
            isStatic: true
        }
        this.plinko2 = Bodies.circle(x, y, 10, options);
        World.add(world, this.plinko2);
    }
    display() {
        var pos = this.plinko2.position;

        push();
        for (let o = 25; o <= 750; o=o+45) {
            fill('red');
            ellipseMode(CENTER);
            ellipse(o, pos.y, 20, 20);
        }
        pop();
    }
}