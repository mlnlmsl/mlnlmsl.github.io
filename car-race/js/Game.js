function Game() {
    this.gameElement = document.getElementById('game-container');
    this.scoreElement = document.createElement("span");
    this.reload = document.createElement("button");
    this.gameOver = document.createElement("div");
    this.carElement = null;
    this.obstacleElement = null;
    this.obstacles = [];
    this.road = null;
    this.GAME_ANIMATION_FRAME = 24;
    this.startGame = null;
    this.score = 0;

    this.init = function () {
        this.gameElement.style.margin = '0px auto';
        this.gameElement.style.height = '600px';
        this.gameElement.style.width = '600px';
        this.gameElement.style.position = 'relative';
        this.gameElement.style.overflow = 'hidden';
        this.scoreElement.style.position = 'absolute';
        this.scoreElement.style.top = '20px';
        this.scoreElement.style.left = '20px';
        this.scoreElement.style.fontSize = '20px';
        this.scoreElement.style.zIndex = '100';
        this.gameElement.appendChild(this.scoreElement);
        this.addElement();
        this.startGame = setInterval(this.move.bind(this), this.GAME_ANIMATION_FRAME);
        // setInterval(this.addObstacle.bind(this), this.GAME_ANIMATION_FRAME * 20);
    }

    this.addElement = function () {
        this.road = new Road(this.gameElement);
        this.carElement = new Car(this.gameElement);
        // this.obstacleElement = new Obstacle(this.gameElement);

        this.road.init();
        this.carElement.init();
        // this.obstacleElement.create();
    }
    this.move = function () {
        var rem_arr = [];
        this.road.moveRoad();
        // this.obstacleElement.move();
        this.scoreElement.textContent = this.score;
        this.addObstacle();
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].move();
            if (this.obstacles[i].yPositionTop >= 600) {
                this.obstacles[i].remove();
                this.score++;
                rem_arr.push(i);
            }
        }
        for (let i = 0; i < rem_arr.length; i++) {
            this.obstacles.splice(rem_arr[i], 1);
        }
        this.carCollision();
    }

    this.moveCarLeft = function () {
        this.carElement.moveLeft();
    }

    this.moveCarRight = function () {
        this.carElement.moveRight();
    }

    this.addObstacle = function () {
        if (this.obstacles.length < 2) {
            this.obstacleElement = new Obstacle(this.gameElement);
            this.obstacles.push(this.obstacleElement);
            this.obstacleElement.create();
            this.obstacleElement.move();
        }
    }

    this.restart = function () {
        location.reload();
    }

    this.carCollision = function () {
        for (let i = 0; i < this.obstacles.length; ++i) {
            if (this.carElement.currentLane == this.obstacles[i].lane) {
                if (this.obstacles[i].yPositionTop + 100 >= this.carElement.topPos) {
                    clearInterval(this.startGame);
                    this.reload.textContent = "restart";
                    this.gameOver.textContent = "Game Over";
                    this.reload.style.zIndex = '100';
                    this.gameOver.style.zIndex = '100';
                    this.reload.style.position = 'absolute';
                    this.gameOver.style.position = 'absolute';
                    this.gameOver.style.top = '30px';
                    this.reload.style.top = '50px';
                    this.gameOver.style.left = '40%';
                    this.reload.style.left = '40%';
                    this.gameElement.appendChild(this.gameOver);
                    this.gameElement.appendChild(this.reload);
                    this.reload.onclick = this.restart;

                }
            }
        }
    }
}

