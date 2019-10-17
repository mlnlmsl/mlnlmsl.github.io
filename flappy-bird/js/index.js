// var canvas1 = document.getElementById("canvas1");


// var ctx1 = canvas1.getContext("2d");


// var background = new Image();
// background.src = "./images/background.png";

// function draw() {
//     ctx1.drawImage(background, 0, 0, 100, 100, 10, 10, 100, 100);
// }
// draw();
// window.requestAnimationFrame(draw)

function Game() {
    this.background = new Background();
    this.ground = new Ground();
    this.bird = new Bird();
    this.pipes = new Pipes(this.bird);

    this.init = function () {
        this.update();
        this.draw();
        if (gameState !== 'end') {
            animationFrame = requestAnimationFrame(this.init);
        }
    }.bind(this);

    this.draw = function () {
        ctx.fillStyle = "#70c5ce";
        ctx.fillRect(0, 0, 360, 500);
        this.background.draw();
        this.ground.draw();
        this.bird.draw();
        this.pipes.draw();
        frame += 1;
    }

    this.update = function () {
        this.ground.update();
        this.bird.update();
        this.pipes.update();
        scoreEl.textContent = 'Score ' + score;
    }

    this.moveBird = function () {
        this.bird.moveUp();
    }
}

var scoreEl = document.getElementById('score');
scoreEl.textContent = 'Score ' + score;
var game = new Game();
game.init();

window.addEventListener("keydown", function (event) {
    event.preventDefault();
    // console.log('key is pressed');
    game.moveBird();
});