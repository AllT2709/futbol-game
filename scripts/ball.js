import Vector from './vectors.js'
class Ball {
    constructor(/*x, y,*/ vel, grav, dir, rad,ball) {
        this.rad = rad
        this.ball = ball;
        this.image = ball.image

        this.pos = new Vector(0, 0);
        // this.pos = new Vector(x, y);
        this.vel = new Vector(0, 0);
        this.grav = new Vector(0, grav || 0);

        this.vel.setLength(vel)
        this.vel.setAngle(dir);

        this.impX;
    }
    impulse(vector) {
        this.vel = this.vel.add(vector);
    }
    update() {
        this.vel = this.vel.add(this.grav);
        this.pos = this.pos.add(this.vel);
    }
    draw(ctx) {
        if (this.ball.loaded) {
            ctx.beginPath();
            ctx.arc(this.pos.getX(), this.pos.getY(), this.rad, 0, Math.PI * 2, false);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.drawImage(this.image, this.pos.getX()-this.rad, this.pos.getY()-this.rad,this.rad*2,this.rad*2);
            ctx.closePath();
        }
    }
    getPosX() {
        return this.pos.getX();
    }
    getPosY() {
        return this.pos.getY();
    }
    reAsing(value) {
        if (this.vel.getX() > 7) {
            this.vel.setX(6);
        }
        if (this.vel.getX() < -7) {
            this.vel.setX(-6);
        }
        this.vel.setY(value);
    }
    setDir(obj) {
        this.impX = new Vector(obj.x, obj.y);
        this.vel.setAngle(this.impX.getAngle());
        this.rotate = this.impX.getAngle();
    }
    //pruebaa
    // getDir(){
    //     return this.rotate;
    // }
}

export default Ball