/**
 * 
 * @param {number} min minimun number of range 
 * @param {number} max maximun number of range
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}