class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
      this.pointB = pointB
        this.launcher= Constraint.create(options);
        World.add(world, this.launcher);
        
    }

    fly(){
      this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push()
           strokeWeight(4);
             stroke(48,22,8)
           line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
           line(pointA.x-29,pointA.y,pointB.x-30,pointB.y-3)
         
        
            pop()
            
  
        }
    }
    
}
