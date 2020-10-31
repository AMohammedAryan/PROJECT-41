class Drops{

    constructor(x, y){

        var options = {

            friction: 0.1,
            isStatic:false
        }

        this.r = 5;

        this.body = Bodies.circle(x, y, this.r/2, options);

        World.add(world, this.body);
    }

    display(){

        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r)
    }

    update(){

        if(this.body.position.y > height){

            Body.setPosition(this.body, {x: this.body.position.x, y:0});
        }
    }
}