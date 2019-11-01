/**
 * @param {DOM element} elem parent element in which canvas lies
 * 
 * @param {number}  cH canvas height
 * 
 * @param {number} cW canvas width
 */
function _createCanvas(elem, cH, cW) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    // console.log(elem.offsetWidth);
    var cw = canvas.width = cW;
    var ch = canvas.height = cH;
    elem.appendChild(canvas);
    canvas.style.border = '1px solid red';
    return ctx;
}


/**
 * return percentage of data of total
 * @param {numbrt} data data whose percentage of total
 * @param {number} total total which is sum of data
 */
function calcPercentage(data, total) {
    if (total != 0) {
        return data / total * 100;
    }
    console.error('total sum is zero');
}


//converts any string in data array to number
function parseIntInArray(data) {
    if (data instanceof Array) {
        return data.map((x) => parseInt(x));
    }
}

//get closest multiple fo 5 
// multiple of 5 is used to divide the bar
function getClosestMultipleofFive(n) {
    if (n > 0)
        return Math.ceil(n / 5.0) * 5;
    else if (n < 0)
        return Math.floor(n / 5.0) * 5;
    else
        return 5
}


