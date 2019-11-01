class Graph {

    /**
     * 
     * @param {DOM element} elem  parent where chart lies
     * 
     * @param {number} canvasHeight  canvas height where graph lies
     * 
     * @param {number} canvasWidth  canvas width where graph lies
     */
    constructor(elem, canvasHeight = 500, canvasWidth = 500) {
        this.parentElement = elem;
        this.ctx = _createCanvas(this.parentElement, canvasHeight, canvasWidth);
        // console.log(this.ctx.canvas);
    }


    /**
     * 
     * @param {object} config configuration for the chart
     * 
     * check the config type and return appropriate bar
     */
    createChart(config) {

        //check if type is empty
        if (!config.type) {
            console.error('Chart cannot be rendered with type not specified');
            return 0;
        }

        //create chart according to type
        if (config.type.toLowerCase() === pie) {
            new PieChart(config, this.ctx);
        }
        else if (config.type.toLowerCase() === bar) {
            new BarChart(config, this.ctx);
        }
        else if (config.type.toLowerCase() === line) {
            new LineChart(config, this.ctx);
        }

        else if (config.type.toLowerCase() === stack) {
            new StackBar(config, this.ctx);
        }

        else {
            console.error('Not valid chart type')
        }
        return 0;

    }
}



