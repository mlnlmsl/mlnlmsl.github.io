

function Background() {
    this.sX = 0;
    this.sY = 0;
    this.w = 786;
    this.h = 896;
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = "./images/background.png";

    this.image.onload = function () {
        this.draw();
    }.bind(this);

    this.draw = function () {
        ctx.drawImage(this.image, this.sX, this.sY, this.w, this.h, this.x, this.y, 360, 500 - 112);
    }
}

// var bg = new Background();
// bg.draw();