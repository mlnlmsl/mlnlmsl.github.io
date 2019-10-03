var IMAGE_INDEX = 0;
var WIDTH = 800;

/**
 * Methos to find total number of carousel images
 * @param none
 * 
 * @returns totalImages{number}
 */
function getTotalImages() {
    let images = document.querySelectorAll(".slider-image");

    return images.length;
}


/**
 * Create Dot elements According to number of images
 * @param none
 *
 * @return none
 */
function createDots() {
    const totalImages = getTotalImages();
    let dotWrapper = document.getElementById("dot-wrapper");

    for (let i = 0; i < totalImages; ++i) {
        var node = document.createElement("span");
        node.setAttribute("class", "dot");
        dotWrapper.appendChild(node);
    }
}


/**
 * Add Event Listener to dots
 * Number of dots vary according to images
 * @param none
 *
 * @return none
 */
function addEventListnersToDot() {
    var dot = document.getElementsByClassName('dot');

    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener('click', (function (n) {
            return function () {
                changeImage(n);
            }
        })(i));
    }
}


/**
 * Operation when next btn is clicked
 * @param none
 *
 * @return none
 */
function nextImage(offset) {
    showActiveImage(IMAGE_INDEX += offset);
}


/**
 *  Methods when dots is clicked
 * @param none
 *
 * @return none
 */
function changeImage(selectedPosition) {
    showActiveImage(IMAGE_INDEX = selectedPosition);
}


/**
 * Main methods to handle all the logics of carasoul
 * @param none
 *
 * @return none
 */
function showActiveImage(currentIndex) {

    let images = document.getElementsByClassName("slider-image");
    let dots = document.getElementsByClassName("dot");


    //reset all the element i.e images and dots
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        dots[i].classList.remove("active-dot");
    }

    //check for overflow of index
    (currentIndex >= images.length) ? IMAGE_INDEX = 0 : '';


    //check for underflow of index
    (currentIndex < 0) ? IMAGE_INDEX = images.length - 1 : '';

    // apply display and active property to selected elements
    images[IMAGE_INDEX].style.display = "block";
    dots[IMAGE_INDEX].className += " active-dot";
}


/**
 *  Entry Point for the application
 */
(function init() {
    createDots();
    addEventListnersToDot();
    showActiveImage(0);
})();