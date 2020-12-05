class Rope{
    constructor(objectA,objectB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:objectA,
            bodyB:objectB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }  
        this.objectA=objectA;
        this.objectB=objectB;
        this.rope=Constraint.create(options);
        World.add(world, this.rope);   
    }

    display(){
            strokeWeight(4);
            stroke("green");
            line(this.objectA.position.x,this.objectA.position.y,
                this.objectB.position.x+this.offsetX,this.objectB.position.y+this.offsetY); 
        
    }

}