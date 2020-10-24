class Dustbin{
    constructor(x,y,w,h){

        var option={
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,w,h,option);
        this.width=w;
        this.height=h;
        World.add(myWorld,this.body);
       // this.image = loadImage("dustbin.png");

    }
    display(){
        var pos= this.body.position;
        push ();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill ("white");
        rect(0,0,this.width,this.height);
      //  imageMode(CENTER);
       // image(pos.x,pos.y,this.width,this.height);


    }
}