class Plinko{
    constructor(x,y) {
        var options = {
            restitution: 0.2,
            friction: 5,
            isStatic: true
        }
        this.plinko = Bodies.circle(x, y, 10, options);
        //this.r = 20
        World.add(world, this.plinko);
    }
    display() {
        var pos = this.plinko.position;

        push();
        for (let i = 50; i <= 790; i=i+45) {
            fill('orange');
            ellipseMode(CENTER);
            ellipse(i, pos.y, 20, 20);
        }
        pop();
    }
}