class Dustbin{
    constructor(x,y,w,h){

        var option={
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,w,h,option);
        this.width=w;
        this.height=h;
        World.add(myWorld,this.body);

    }
    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        fill (255,255,255);
        rect(pos.x,pos.y,this.width,this.height);


    }
}