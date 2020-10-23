class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
      }
      
      this.r=r;
      this.body = Bodies.circle(x,y,r,options);
      World.add(myWorld,this.body);
      this.image= loadImage("paper.png");
      this.image.scale = 0.4;

    }
    display(){
        var paperos = this.body.position;
      
        imageMode(CENTER);
        image(this.image,paperos.x,paperos.y,2*this.r,2*this.r);
       
        
    }
}