
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

    this.draw = function () {
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);

        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + 2 * this.w, this.y, this.w, this.h);
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + 3 * this.w, this.y, this.w, this.h);
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + 4 * this.w, this.y, this.w, this.h);
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + 5 * this.w, this.y, this.w, this.h);
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + 6 * this.w, this.y, this.w, this.h);
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + 7 * this.w, this.y, this.w, this.h);
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + 8 * this.w, this.y, this.w, this.h);
        ctx.drawImage(this.ground, this.sX, this.sY, this.w, this.h, this.x + 9 * this.w, this.y, this.w, this.h);
    },

        this.update = function () {
            this.x = (this.x - this.dx) % (this.w / 2); //moves x position by half distance left
        }
}

// var gnd = new Ground();