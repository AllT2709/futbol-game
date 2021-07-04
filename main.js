import MainFoot from './scripts/index.js'
window.addEventListener('DOMContentLoaded',(e) => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    function initializeCanvas() {
        e.preventDefault()
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }
    initializeCanvas();

    var start = new MainFoot(ctx, canvas);
    function loop() {
        //made something
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        start.init();
    }
    function init() {

        loop();
        requestAnimationFrame(init);


    }
    init();
})
