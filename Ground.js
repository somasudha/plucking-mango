class Ground{

    constructor(x, y, width, height) {

        var options = {
            isStatic:true,
            friction:0.4
        }
      this.body = Bodies.rectangle(x, y, width, height, options);
	  World.add(world, this.body);
	  this.width = width;
	  this.height = height;
    }
    display() {
      rectMode(CENTER);
      rect(650, 500, 1300, 1);
    }
}