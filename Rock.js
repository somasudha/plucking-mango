class Rock{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        world.add(world, this.body)

        this.image = loadImage("images/stone.png")
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre);
        pop();
      }
}