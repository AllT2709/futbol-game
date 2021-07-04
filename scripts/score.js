class Score {
    constructor() {

        this.h1 = document.getElementById("score1");
        
        this.score = 0;
        this.bestScore = 0;
    }
    drawScore() {
        this.h1.innerText = this.score;
    }
    hightScore() {
        if (this.score > this.bestScore) {
            this.bestScore = this.score;
        }
        return this.bestScore;
    }
    clearScore() {
        this.score = 0;
    }
}

export default Score