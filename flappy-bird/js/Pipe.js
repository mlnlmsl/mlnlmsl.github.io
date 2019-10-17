function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Pipes(bird) {
    this.topImage = new Image();
    this.bottomImage = new Image();
    this.topImage.src = './images/pip-down.png';
    this.bottomImage.src = './images/pipe.png';

    this.topPosX = 0;
    this.topPosY = 0;
    this.bottomPosX = 500;
    this.bottomPosY = 0;
    this.width = 138;
    this.height = 793;
    this.pipeGap = 100;
    this.pipeX = 350;
    this.pipesPosition = [{ x: 350, y: -300 }]

    this.bird = bird;

    this.draw = function () {
        for (let i = 0; i < this.pipesPosition.length; i++) {
            let bottomPos = this.pipesPosition[i].y + this.height * 0.5 + this.pipeGap;
            // console.log(this.pipesPosition[i].y);
            ctx.drawImage(this.topImage, this.topPosX, this.topPosY, this.width, this.height, this.pipesPosition[i].x, this.pipesPosition[i].y, 0.5 * this.width, 0.5 * this.height);
            ctx.drawImage(this.bottomImage, this.topPosX, this.topPosY, this.width, this.height, this.pipesPosition[i].x, bottomPos, 0.5 * this.width, 0.5 * this.height);
        }
    }

    this.update = function () {
        // this.pipeX -= 2;
        // console.log(this.pipesPosition.length);
        for (let i = 0; i < this.pipesPosition.length; i++) {
            if (this.pipesPosition[i].x + this.width * 0.5 < 0) {
                this.pipesPosition.shift();
                score++;
            }
            this.pipesPosition[i].x += -2;
        }
        this.checkCollision();
        this.generatePipe();
    }

    this.generatePipe = function () {
        if (frame % 100 == 0) {
            // console.log(this.bird);
            this.pipesPosition.push({
                x: 350,
                y: getRandomInt(-320, -150)
            });
        }
    }

    this.checkCollision = function () {

        for (let i = 0; i < this.pipesPosition.length; i++) {
            p = this.pipesPosition[i];
            console.log([this.bird.x, this.bird.y, p.x, p.y + this.height * 0.5 + this.pipeGap]);
        }

    }
}