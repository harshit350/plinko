class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.4 ,
            friction:0.05
        }
      this.body=bodies.circle(x,y,this.r,options);
      this.r=r;
      
      World.add(world,this.body);

    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle; 
     push();
     translate(pos.x, pos.y);
      rotate(angle);
       
        noStroke();
         fill("white") 
         ellipseMode(RADIUS);
          ellipse(0, 0, this.r,this.r);
           pop();
            }
             }


    
