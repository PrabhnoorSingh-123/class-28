class Slingshot {
 constructor (objectA,pointB) {
     var options = { 
         bodyA: objectA,
         pointB: pointB,

         length : 10,
         stiffness : 0.04
     }

       this.sling = Constraint.create ( options)
       World.add (world,this.sling)
 }
   display (){
       if(this.sling.bodyA) {
       var pointA=this.sling.bodyA.position
       var pointB=this.sling.pointB
   
    line (pointA.x,pointA.y,pointB.x,pointB.y)
       }
    }
  fly(){
    
    this.sling.bodyA=null


  }

}
