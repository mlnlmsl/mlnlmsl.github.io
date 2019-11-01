class BarChart {
    constructor(config, ctx) {
        this.axisGap = 5;
        this.config = { ...config };
        this.ctx = ctx;
        this.cW = ctx.canvas.width;
        this.cH = ctx.canvas.height;
        this.offsetX = 80;
        this.offsetY = 80;
        this.axisHeight = this.cH - 2 * this.offsetY;
        this.axisWidth = this.cW - 2 * this.offsetX;
        this.total = 0;
        this.bars = [];
        this.width = this.axisWidth / this.config.xAxis.label.length - this.axisGap;
        this.maxIndex = getClosestMultipleofFive(Math.max(...this.config.series.data));//get maximum number from array
        this.findBars();
        this.draw();
    }

    findBars() {
        this.config.xAxis.label.forEach((label, index) => {
            let height = this.config.series.data[index] / this.maxIndex * this.axisHeight;
            let startPosX = this.offsetX + (this.width + 5) * index + 5;
            let startPosY = this.offsetY + this.axisHeight - height;
            this.bars.push({ height: height, width: this.width, xStart: startPosX, yStart: startPosY, barLabel: label });

        });
    }


    drawAxes() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.offsetX, this.offsetY - 10);
        this.drawXAxis();
        this.drawYAxis();
        this.ctx.stroke();
        this.drawAxesParameter();

    }

    drawYAxis() {
        this.ctx.lineTo(this.cW - this.offsetX + 10, this.cH - this.offsetY);
    }

    drawXAxis() {
        this.ctx.lineTo(this.offsetX, this.cH - this.offsetY);
    }

    drawAxesParameter() {
        this.ctx.fillText(this.config.series.xLabel || 'X-axis', 60, 60);
        this.ctx.fillText(this.config.series.yLabel || 'Y-axis', this.cW - 60, this.cH - this.offsetY);
        let lineNumber = 5;
        let steps = Math.floor(this.maxIndex / lineNumber);
        let stepsMap = Math.floor((this.cH - 2 * this.offsetY) / 5);
        const lineLength = 10;
        let textGap = 30;
        for (let i = 0; i <= 5; i += 1) {
            this.ctx.fillStyle = "rgba(0,0,0,0.5)";
            this.ctx.strokeStyle = "rgba(0,0,0,0.5)";
            this.ctx.moveTo(this.offsetX - lineLength, this.offsetY + stepsMap * i);
            this.ctx.lineTo(this.offsetX, this.offsetY + stepsMap * i);
            this.ctx.stroke();
            this.ctx.fillText(this.maxIndex - steps * i, this.offsetX - lineLength - textGap, this.offsetY + stepsMap * i);
        }
    }

    addTitle() {
        this.ctx.fillStyle = "rgb(0,0,0)";
        this.ctx.font = '14pt Arial';
        this.ctx.fillText(this.config.title || 'Title', this.cW / 2 - 80, this.offsetY - this.offsetY / 2);
    }

    draw() {
        this.drawAxes();
        this.drawAxesParameter();
        this.addTitle();
        this.bars.forEach((bar, index) => {
            this.ctx.fillStyle = colors[index];
            this.ctx.fillRect(bar.xStart, bar.yStart, bar.width, bar.height);
            this.ctx.font = '10pt Arial';
            this.ctx.fillStyle = "black";

            this.ctx.fillText(this.config.series.data[index], bar.xStart + this.axisGap, bar.yStart);
            this.ctx.save();
            this.ctx.translate(bar.xStart + 5, this.cH - this.offsetY + 30);
            this.ctx.rotate(-0.25 * Math.PI);
            this.ctx.fillText(bar.barLabel, 0, 0);
            this.ctx.restore();
            // this.ctx.fill();
        });
    }

}
