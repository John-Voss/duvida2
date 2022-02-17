class Division {
    constructor(x,y){
        var options = {
            restitution: 0.2,
            friction: 1,
            isStatic: true
        }
        //for (let j = 0; j <= 800; j=j+100) {
            this.divi = Bodies.rectangle(x,y,10,300, options);
            World.add(world, this.divi);
        //}
    }
    display() {
        var pos = this.divi.position

        push();
        for (let j = 0; j <= 800; j=j+100) {
            //translate(j, pos.y);
            //rotate(this.divi.angle);
            fill('#008000');
            rectMode(CENTER);
            rect(j,pos.y, 10, 300);
        }
        pop();
    }
}