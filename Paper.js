class Paper{
    constructor(x,y,radius){
   var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
   }
   this.radius=radius
   this.body=Matter.Bodies.circle(x,y,radius,options)
   this.image = loadImage("paper.png")
   World.add(world,this.body)
    }
  display(){
var position=this.body.position
//ellipse(position.x,position.y,this.radius*2,this.radius*2)
imageMode(CENTER);
image(this.image,position.x,position.y,this.radius*2, this.radius*2);


  }

}