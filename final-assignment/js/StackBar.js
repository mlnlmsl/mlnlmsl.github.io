class StackBar {
    constructor(config, context) {
        this.config = { ...config };
        this.ctx = context;
        this.cW = context.canvas.width;
        this.cH = context.canvas.height;
        this.offsetX = 80;
        this.offsetY = 80;
        this.axisHeight = this.cH - 2 * this.offsetY;
        this.axisWidth = this.cW - 2 * this.offsetX;
        this.barWidth = 0;
        this.bars = [];
        this.stacks = [];
        this.stacksTotal = [];
        this.findStacksTotal();
        this.maxData = getClosestMultipleofFive(Math.max(...this.stacksTotal));
        this.findStacks();
        this.draw();
    }

    //find total of each stack
    findStacksTotal() {
        this.config.yAxis.label.forEach((label, index) => {
            let total = 0;
            this.config.series.forEach((data, i) => {
                total += data.data[index] || 0;
            });
            this.stacksTotal.push(total);
        });
    }

    //prepare each stack
    findStacks() {
        const axisGap = 5;
        this.barWidth = this.axisHeight / this.config.yAxis.label.length - axisGap;

        this.config.yAxis.label.forEach((data, index) => {
            let startPosX = this.offsetX;
            let startPosY = this.offsetY + this.axisHeight - (this.barWidth + 5) * (index + 1);
            this.stacks.push({ x: startPosX, y: startPosY, label: data });
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
        let steps = Math.floor(this.maxData / lineNumber);
        let stepsMap = Math.floor((this.cW - 2 * this.offsetX) / 5);
        const lineLength = 10;
        let textGap = 30;

        for (let i = 0; i <= 5; i += 1) {
            this.ctx.fillStyle = "rgba(0,0,0,0.5)";
            this.ctx.strokeStyle = "rgba(0,0,0,0.5)";
            this.ctx.moveTo(this.offsetX + stepsMap * i, this.offsetY + this.axisHeight);
            this.ctx.lineTo(this.offsetX + stepsMap * i, this.offsetY + this.axisHeight + lineLength);
            this.ctx.stroke();
            this.ctx.fillText(0 + steps * i, this.offsetX + stepsMap * i, this.offsetY + this.axisHeight + lineLength + textGap);
        }
    }

    //entry for rendering the stack chart
    draw() {
        this.drawAxes();

        this.stacks.forEach((bar, index) => {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '12pt Arial';
            this.ctx.fillText(this.config.yAxis.label[index], this.offsetX - 20, bar.y + 20);
            let posXInc = 0;
            this.config.series.forEach((data, i) => {
                this.ctx.fillStyle = colors[i];
                this.ctx.fillRect(bar.x + posXInc, bar.y - 10, data.data[index] / this.maxData * this.axisWidth, this.barWidth);
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = '12pt Arial';
                this.ctx.fillText(data.data[index], bar.x + posXInc + 10, bar.y + 10);
                posXInc += data.data[index] / this.maxData * this.axisWidth;
            });
        });
    }
}
