class Umbrella{

    constructor(x, y){

        this.r = 50;

        this.body= Bodies.circle(x, y, this.r/2, {isStatic: true});

        World.add(world, this.body);
    }

    display(){

        imageMode(CENTER);
        image(umbrellaImage, this.body.position.x, this.body.position.y, 300, 300);
    }
}