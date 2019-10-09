function Game(boxCount) {
    var GAME_WIDTH = 450;
    var GAME_HEIGHT = 450;
    var GAME_ANIMATION_FRAME = 24;
    this.balls = [];
    this.boxCount = boxCount;
    this.parentElem = document.getElementById('container');


    this.moveBoxes = function () {
        for (var i = 0; i < this.balls.length; i++) {
            if (this.balls[i].isActive === true) {
                this.balls[i].move()
                this.checkBoundaryCollision(this.balls[i]);
                this.ballToBallCollision();
            }

        }
    }

    this.init = function () {
        this.createBoxes();
        this.addEventListenerToBalls();
        setInterval(this.moveBoxes.bind(this), GAME_ANIMATION_FRAME);
        return this;

    }

    this.createBoxes = function () {
        for (var i = 0; i < this.boxCount; i++) {
            var box = new Box(this.parentElem);
            var randomX = getRandomInt(0, GAME_WIDTH);
            var randomY = getRandomInt(0, GAME_HEIGHT);
            box.setPosition(randomX, randomY);
            box.draw();
            this.balls.push(box);
        }
    }

    this.addEventListenerToBalls = function () {
        for (let i = 0; i < this.balls.length; i++) {
            var self = this;
            this.balls[i].element.addEventListener('click', (function (n) {
                return () => {
                    self.balls[i].element.style.display = 'none';
                    self.balls[i].isActive = false;
                    // self.balls.splice(n, 1);
                    // self.boxCount -= 1;
                    console.log(self.balls);
                }
            })(i));
        }
    }


    this.checkBoundaryCollision = function (ball) {
        if (ball.x <= 0 || ball.x >= 500 - ball.size) {
            ball.dx *= -1;
        }
        if (ball.y <= 0 || ball.y >= 500 - ball.size) {
            ball.dy *= -1;
        }
    }

    this.ballToBallCollision = function () {
        for (var i = 0; i < this.balls.length; i++) {
            if (this.balls[i].isActive) {
                for (var j = i + 1; j < this.balls.length; j++) {
                    if (this.balls[j].isActive) {
                        let difX = this.balls[i].x - this.balls[j].x;
                        let difY = this.balls[i].y - this.balls[j].y;
                        let distance = Math.sqrt(difX * difX + difY * difY);
                        if (distance <= this.balls[i].size / 2 + this.balls[j].size / 2) {
                            this.balls[i].dx *= -1;
                            this.balls[j].dx *= -1;
                            this.balls[i].dy *= -1;
                            this.balls[j].dy *= -1;
                        }
                    }
                }
            }
        }
    }

}