function Bird() {
    this.image = new Image();
    this.image.src = './images/bird.png';


    this.x = 25;
    this.y = 200;
    this.width = this.dWidth = 90;
    this.height = this.dHeight = 64;
    this.gravity = 0.098;

    this.speed = 0;
    this.frame = 0;

    this.thrust = 4;

    this.birdFrames = [
        { sX: 0, sY: 0 },
        { sX: 96, sY: 0 },
        { sX: 190, sY: 0 }
    ];


    this.image.onload = function () {
        this.draw();
    }.bind(this);

    this.draw = function () {
        let bird = this.birdFrames[this.frame];
        ctx.drawImage(this.image, bird.sX, bird.sY, this.width, this.height, this.x, this.y, 0.5 * this.dWidth, 0.5 * this.dHeight);
    }

    this.update = function () {
        if (frame % 20 == 0) {
        this.frame += 1;
            if (this.frame > 2) {
                this.frame = 0;
            }
        }
        this.down();
    }
    this.down = function () {
        if (this.y >= 370) {
            gameState = 'end';
        }
        if (this.y <= 0) {
            for (let i = 0; i >= 370; i += 2) {
                this.y = i;
                this.draw();
            }
            gameState = 'end';
        }
        this.y += this.speed;
        this.speed += this.gravity;
    }

    this.moveUp = function () {
        this.speed -= this.thrust;
    }
}

// var bird = new Bird();