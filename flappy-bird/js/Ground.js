
function Ground() {
    this.ground = new Image();
    this.ground.src = "./images/ground.png";

    this.sX = 0;
    this.sY = 0;
    this.w = 37;
    this.h = 112;
    this.x = 0;
    this.y = 500 - 112;

    this.dx = 1.8;
    this.ground.onload = function () {
        this.draw();
    }.bind(this);

    this.setImage = function (n) {
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + n * this.w, this.y, this.w, this.h);
    }

    this.draw = function () {
        for (let i = 0; i < 10; ++i) {
            this.setImage(i);
        }
    },

        this.update = function () {
            this.x = (this.x - this.dx) % (this.w / 2); //moves x position by half distance left
        }
}

// var gnd = new Ground();