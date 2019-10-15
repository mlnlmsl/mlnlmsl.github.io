function Road(parentElem) {
    this.parentElement = parentElem;
    this.roadElement = document.createElement('div');;
    this.backgroundPositionY = 0;
    this.backgroundSpeed = 5;

    this.init = function () {
        this.roadElement.style.height = '780px';
        this.roadElement.style.width = '600px';
        this.roadElement.style.background = 'url(images/game_road.png)';
        this.roadElement.style.backgroundRepeat = 'repeat-y';
        this.roadElement.style.position = 'absolute';
        this.parentElement.appendChild(this.roadElement);
    }

    this.moveRoad = function () {
        this.backgroundPositionY += this.backgroundSpeed;
        this.roadElement.style.backgroundPositionY = `${this.backgroundPositionY}px`;
    }
}