class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB;
        this.ss = Constraint.create(options);
        World.add(world, this.ss);
    }

    fly(){
        this.ss.bodyA = null;
    }

    Launch(bodyA){
        this.ss.bodyA = bodyA;
    }

    display(){
       
    }
    
}