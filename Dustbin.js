class Dustbin{
    constructor(x,y,width,height){
      var options={
         isStatic:true
      }
      this.width=width
      this.height=height
      this.body=Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.body)
      this.image=loadImage("dustbin.png")
      
    }
    display(){
     var position=this.body.position
     push() 
      imageMode(CENTER)
     image(this.image,position.x,position.y,this.width,this.height)
     pop()
     
    }
 }