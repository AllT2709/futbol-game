import Score from './score.js' 
import Ball from './ball.js' 
const gameState = {
    start: false,
    playing: true,
    gameOver: false,

}
const tale = {
    url: '../img/tale.png',
    loaded: false
}
const ball = {
    url: '../img/balll.png',
    loaded: false
}

class MainFoot {
    constructor(ctx, canvas) {
        this.logic(ctx, canvas);
    }
    logic(ctx, canvas) {
        
        this.canvas = canvas;
        this.ctx = ctx;

        tale.image = new Image();
        tale.image.src = tale.url;
        tale.loaded = true;

        ball.image = new Image();
        ball.image.src = ball.url;
        ball.loaded = true

        this.buttonStart = document.getElementById('button-start');
        this.buttonAgain = document.getElementById('button-again');
        this.ballSound = document.getElementById('ballSound');
        this.buttomSound = document.getElementById('buttomSound');
        this.failSound = document.getElementById('failSound');
        this.touchSound = document.getElementById('touchSound');

        this.ball = new Ball(3, /* 0.9 */1.36, 30,this.canvas.width/7.3,ball);
        this.score = new Score();
        this.dir = {};
        this.events();
        this.state = gameState.start;

    }
    init() {
        if (this.state == gameState.playing) {
            this.addTale();

            this.collisions();
            this.ball.draw(this.ctx,this.canvas);
            this.ball.update();
            this.score.drawScore();
            this.score.h1.classList.remove('active');


        } else {
            this.addTale();
            this.ball.pos.setX(this.canvas.width / 2);
            this.ball.pos.setY(this.canvas.height / 9);
            this.ball.draw(this.ctx,this.canvas);
            this.score.drawScore(this.ctx, this.canvas);

            this.score.h1.classList.add('active');
        }

    }
    collisions() {
        let ballPosX = this.ball.getPosX();
        let ballPosY = this.ball.getPosY()
        if (ballPosX < this.ball.rad || ballPosX > this.canvas.width - this.ball.rad) {
            this.ball.vel = this.ball.vel.scaleX(-1);
            this.ballSound.play()
        }
        if (ballPosY > this.canvas.height) {
            this.state = gameState.gameOver;
            this.failSound.play();
            this.gameOver();
        }
    }
    events() {
        this.canvas.addEventListener('touchstart', this.touchBall.bind(this));
        this.buttonStart.addEventListener('touchend', this.start.bind(this));
        this.buttonAgain.addEventListener('touchend', this.gameOverAgain.bind(this));
    }
    touchBall(e) {
        let touchX = e.touches[0].clientX;
        let touchY = e.touches[0].clientY;

        let posX = this.ball.getPosX();
        let posY = this.ball.getPosY();

        if (this.ctx.isPointInPath(touchX, touchY)) {
            this.dir.x = posX - touchX;
            this.dir.y = posY - touchY;
            this.ball.setDir(this.dir);
            this.ball.reAsing(-25);
            // ball.image.style.transform = 'rotate('+ 45 +'deg)';
            this.score.score++;
            this.touchSound.play()
            // this.ballSound.play()
        }
    }
    start(e) {
        e.preventDefault()
        this.state = gameState.playing;
        const box = document.getElementById('content-start');
        box.style.display = "none";
        this.buttomSound.play();
        
    }
    gameOver() {
        const boxOver = document.getElementById('content-over');
        const boxOverBanner = document.getElementById('content-over-banner');
        const score = document.getElementById('score');
        if (this.state == gameState.gameOver) {
            // boxOver.style.display = "block";
            boxOver.classList.add('active');
            boxOverBanner.classList.add('active');
            score.innerText = this.score.hightScore();
            this.score.clearScore();
            // this.score.h1.classList.add('active');
        }
    }
    gameOverAgain(e) {
        this.buttomSound.play();

        setTimeout(function(){
            document.location.reload();

        },150)
    }

    addTale() {
        if (tale.loaded) {
            this.ctx.drawImage(tale.image, 0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

export default MainFoot