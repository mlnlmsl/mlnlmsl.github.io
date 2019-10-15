function Obstacle(parentElem) {
    this.parentElement = parentElem;
    this.obstacleDiv = document.createElement('div');
    this.obstacleImage = document.createElement('img');
    this.yPositionTop = -100;
    this.lane = getRandomInt(0, 3);

    this.create = function () {
        this.obstacleDiv.style.width = 60 + 'px';
        this.obstacleDiv.style.height = 100 + 'px';
        this.obstacleDiv.style.top = this.yPositionTop + 'px';
        this.obstacleDiv.style.left = LANES[this.lane] + 'px';
        this.obstacleDiv.style.position = 'absolute';

        this.obstacleImage.style.width = '100%';
        this.obstacleImage.style.height = '100%';
        this.obstacleImage.setAttribute('src', 'images/obstacle.png');


        this.obstacleDiv.appendChild(this.obstacleImage);
        this.parentElement.appendChild(this.obstacleDiv);

    }


    //movement of the car
    this.move = function () {
        this.yPositionTop += 3;
        this.obstacleDiv.style.top = this.yPositionTop + 'px';
    }

    //remove completely from dom
    this.remove = function () {
        this.parentElement.removeChild(this.obstacleDiv);
    }
}