class Mango{
    constructor(x,y,radius) {
        var options = {
            isStatic: true,
            restituton: 0,
            friction: 1
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        this.image=loadImage("mango.png")
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
      
        image(this.image, 0,0, this.radius, this.radius);
        pop();
      }
    
}