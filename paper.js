class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
      }
      this.y=y;
      this.x=x;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(myWorld,this.body);
      this.image= loadImage("paper.png");

    }
    display(){
        //var paperos = this.body.position;
      
        imageMode(RADIUS);
        image(this.image,100,200,20);
       
        
    }
}