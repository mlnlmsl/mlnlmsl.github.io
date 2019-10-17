function Car(parentElem) {
    this.parentElement = parentElem;
    this.carDiv = document.createElement('div');
    this.carImage = document.createElement('img');
    this.currentLane = 1;
    this.topPos = 500;

    this.init = function () {
        this.carDiv.style.height = 100 + 'px';
        this.carDiv.style.width = 60 + 'px';
        this.carDiv.style.position = 'absolute';
        this.carDiv.style.zIndex = '10';
        this.carDiv.style.top = this.topPos + 'px';
        this.carDiv.style.left = LANES[this.currentLane] + 'px';
        this.carImage.setAttribute('src', 'images/obstacle.png');
        this.carImage.style.backgroundRepeat = 'no-repeat';
        this.carImage.style.height = '100%';
        this.carImage.style.width = '100%';

        this.carDiv.appendChild(this.carImage);
        this.parentElement.appendChild(this.carDiv);
    }

    this.moveLeft = function () {

        switch (this.currentLane) {
            case 2:
                this.currentLane = 1;

                this.carDiv.style.left = `${LANES[this.currentLane]}px`;
                break;
            case 1:
                this.currentLane = 0;
                this.carDiv.style.left = `${LANES[this.currentLane]}px`;
                break;
        }
    }

    this.moveRight = function () {
        switch (this.currentLane) {
            case 0:
                this.currentLane = 1;
                this.carDiv.style.left = `${LANES[this.currentLane]}px`;
                break;
            case 1:
                this.currentLane = 2;
                for (let lane = LANES[1]; lane <= LANES[2]; lane += 0.02) {
                    this.carDiv.style.left = `${lane}px`;
                }
                // this.carDiv.style.left = `${LANES[this.currentLane]}px`;
                break;
        }
    }
}