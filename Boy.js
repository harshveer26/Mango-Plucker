class Boy {
    constructor(x, y, width, height){
        var options = {
            'friction' : 1.2,
            'density' : 0.8,
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x, y, width/2, height/2, options);
        this.image = loadImage("sprites/boy.png");
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
