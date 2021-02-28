class Pendulum{
    constructor(x,y,color){
        var options = {
            restitution: 1,
            friction: 0
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("white");
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}