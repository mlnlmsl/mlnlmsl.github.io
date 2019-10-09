function Box(parentElem) {
    this.parentElem = parentElem;
    this.element = null;
    this.x = null;
    this.y = null;
    this.dx = getRandomInt(1, 5); //takes random speed in X-direction
    this.dy = getRandomInt(1, 5); //takes random speed in Y-direction
    this.size = getRandomInt(20, 40);

    this.init = function () {
        this.element = document.createElement('div');
        this.element.classList.add('ball');
        this.element.style.height = this.size + 'px';
        this.element.style.width = this.size + 'px';
        this.parentElem.appendChild(this.element);
    }


    this.init();

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }

    this.draw = function () {
        this.element.style.top = this.x + 'px';
        this.element.style.left = this.y + 'px';
    }

    this.move = move.bind(this);
    function move() {
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

}
