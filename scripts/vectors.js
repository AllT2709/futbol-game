/***El vector sera trabajado con su valor cartesiano, si queremos su valor modular o absoluto se 
aplicaría el teorema de Pitagoras *****/
class Vector{
    constructor(x,y){
        this.x = x;
        this.y=y;
    }
    setX(value){
        this.x=value;
    }
    getX(){
        return this.x;
    }
    setY(value){
        this.y=value;
    }
    getY(){
        return this.y;
    }
    setAngle(angle){
        let length = this.getLength();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }
    getAngle(){
        return Math.atan2(this.y,this.x);
    }
    setLength(length){
        let angle = this.getAngle();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }
    getLength(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    add(vector){
        return new Vector(this.x+vector.getX(), this.y+vector.getY());
    }
    substract(vector){
        return new Vector(this.x-vector.getX(), this.y-vector.getY());
    }
    scale(value){
        return new Vector(this.x*value, this.y*value);
    }
    scaleX(value){
        return new Vector(this.x*value,this.y);
    }
    scaleY(value){
        return new Vector(this.x,this.y*value);
    }
    
}

export default Vector