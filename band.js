class Band
{    
    constructor(bodyA , bodyB, pointB)
    {
        var options = {
            bodyA : bodyA ,
            bodyB : bodyB ,
            pointB : pointB , 
            stiffness : 0.4,
            length : 20
            
        }
     
      this.body = Constraint.create(options);
      World.add(world , this.body)
      
    }

    fly()
    {
        this.body.bodyA = null;

    }

    display()
    {
    
       if(this.body.bodyA)
       {
        var pointA = this.body.bodyA.position;
        var pointB = this.body.pointB;
        strokeWeight(4);
         line(pointA.x , pointB.x , pointA.y , pointB.y );
        
       }
       
    }
}