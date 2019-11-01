class PieChart {

    /**
     * 
     * @param {object} config chart configuration
     * @param {context} ctx  canvas 2D context
     */
    constructor(config, ctx) {
        this.radius = 0;
        this.ctx = ctx;
        this.config = { ...config };
        this.total = 0;
        this.hoverPosX = 0;
        this.hoverPosY = 0;
        this.wedges = [];
        for (var i = 0; i < this.config.data.length; i++) {
            this.total += parseInt(this.config.data[i].data || 0);
        }
        this.setPieWedge();
        this.drawA();
        // used for hover effects 
        // this.ctx.canvas.onmousemove = function (e) {
        //     var r = this.ctx.canvas.getBoundingClientRect();
        //     this.hoverPosX = e.clientX - r.left;
        //     this.hoverPosY = e.clientY - Math.floor(r.top);
        // }.bind(this);
    }

    // draw with animation
    drawA() {
        this.draw()
        let frame = window.requestAnimationFrame(this.drawA.bind(this));
        if (this.radius >= 150) {
            window.cancelAnimationFrame(frame);
        }
    }

    /**
     * Configure each wedge of the pie
     * Pie => summation of all the wedges
     */
    setPieWedge() {
        let startAngle = 0;
        let endAngle = 0;
        this.config.data.forEach((item, index) => {
            let wedgeAngle = (parseInt(item.data || 0)) / this.total * 360;
            if (index !== 0) {
                startAngle = endAngle;
            }
            endAngle = startAngle + wedgeAngle;

            this.wedges.push({
                startAngle: startAngle,
                endAngle: endAngle
            });
        });
    }
    //add pie title
    addTitle() {
        this.ctx.fillStyle = "rgb(0,0,0)";
        this.ctx.font = '12pt Arial';
        this.ctx.fillText(this.config.title || 'Title', 200, 60);
    }

    /**
     * draw complete pie joining each wedge
     */
    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.addTitle();
        let x = this.ctx.canvas.width / 2;
        let y = this.ctx.canvas.height / 2;
        this.radius += 4;
        this.wedges.forEach((wedge, index) => {
            this.ctx.beginPath();
            this.ctx.fillStyle = colors[index];
            // this.ctx.shadowBlur = 8;
            this.ctx.shadowColor = "black";
            this.ctx.moveTo(x, y);
            this.ctx.arc(x, y, this.radius, wedge.startAngle * DEG_TO_RAD, wedge.endAngle * DEG_TO_RAD);
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
            this.ctx.rect(10, 10 + index * 30, 12, 12);
            this.ctx.fill();
            this.ctx.font = '7pt Arial';
            this.ctx.fillText((this.config.data[index].label || ' ') + ' - ' + (this.config.data[index].data || 0), 30, 20 + index * 30);
        });
    }
}