class LineChart {
    constructor(config, ctx) {
        this.config = { ...config };
        this.ctx = ctx;
        this.points = [];
        this.total = 0;
        this.cW = ctx.canvas.width;
        this.cH = ctx.canvas.height;
        this.offsetX = 80;
        this.offsetY = 80;
        this.axisGap = 40;
        this.axisHeight = this.cH - 2 * this.offsetY;
        this.axisWidth = this.cW - 2 * this.offsetX;
        this.width = Math.floor(this.axisWidth / this.config.xAxis.label.length - this.axisGap);
        this.maxIndex = getClosestMultipleofFive(Math.max(...this.config.series.data));
        this.findPoint();
        this.draw();

    }

    //maps the data to the graph points
    findPoint() {
        this.config.xAxis.label.forEach((label, index) => {
            let height = this.config.series.data[index] / this.maxIndex * this.axisHeight;
            let startPosX = this.offsetX + (this.width + 5) * index + 5;
            let startPosY = this.offsetY + this.axisHeight - height;
            this.points.push({ x: startPosX, y: startPosY, label: label });
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

    drawYAxis() {
        this.ctx.lineTo(this.cW - this.offsetX + 10, this.cH - this.offsetY);
    }

    drawXAxis() {
        this.ctx.lineTo(this.offsetX, this.cH - this.offsetY);
    }

    // rendering of the graph
    draw() {
        this.drawAxes();
        this.ctx.beginPath();
        this.ctx.moveTo(this.offsetX, this.offsetY + this.axisHeight);
        this.points.forEach((point, index) => {
            this.ctx.strokeStyle = colors[0];
            this.ctx.lineTo(point.x, point.y);
            this.ctx.stroke();
            this.ctx.arc(point.x, point.y, 5, 0, PI2);
            this.ctx.stroke();
            // this.ctx.fill();
            this.ctx.font = '10pt Arial';
            this.ctx.fillStyle = "black";
            this.ctx.fillText(this.config.series.data[index], point.x, point.y - 10);

        });
    }
}