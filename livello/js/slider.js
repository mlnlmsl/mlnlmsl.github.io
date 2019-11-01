/**
 * 
 * @param { string } element 
 * @param { number } sliderTime 
 */
function Slider(element, sliderTime) {
    this.el = document.querySelector(element);
    this.el.style.width = '100%';
    this.el.style.overflow = 'hidden';
    this.el.style.margin = '2em auto';
    this.currentState = 1;
    this.sliderTime = sliderTime;

    this.init = function () {
        this.imageLinks = this.el.querySelectorAll(".slide");
        this.wrapper = this.el.querySelector("#slider-wrapper");
        console.log(this);
        this.handleChange();
    }

    /**
     *  Methods to handle the change is active carousel from dots
     */
    this.handleChange = function () {
        for (var i = 0; i < this.imageLinks.length; ++i) {
            let nav = this.imageLinks[i];
            this.addEventListenerToDots(nav);
        }
    }


    /**
     *  Add event listener to each dots
     * 
     * @param {dom element} nav
     */
    this.addEventListenerToDots = function (nav) {
        const self = this; // this pointing here will change when called from DOM
        nav.addEventListener("click", function (e) {
            e.preventDefault();
            // console.log(this); // this points to the a tag of slider navigation
            var index = parseInt(this.getAttribute("data-target"), 10) + 1;
            var currentSlide = self.el.querySelector(".slide:nth-child(" + index + ")");
            console.log(currentSlide);
            self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
            self.setActiveLink(this);
        });
    }


    /**
     * Assign active class to active Dot
     * 
     * @param {dom active element} activeLink
     */
    this.setActiveLink = function (activeLink) {
        for (var i = 0; i < this.imageLinks.length; ++i) {
            (this.imageLinks[i] !== activeLink) ? this.imageLinks[i].className = "" : this.imageLinks[i].className = "active";
        }
    }


    /**
     *  Method to automate sliding
     */
    this.automateSlide = function () {
        // console.log(this.currentState, "before");
        if (this.currentState > this.imageLinks.length) {
            this.currentState = 1;
        }
        // console.log(this.currentState, "after");

        var currentSlide = this.el.querySelector(".slide:nth-child(" + this.currentState + ")");
        this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
        for (var i = 0; i < this.imageLinks.length; ++i) {
            var index = parseInt(this.imageLinks[i].getAttribute("data-target"), 10) + 1;
            (index !== this.currentState) ? this.imageLinks[i].className = "" : this.imageLinks[i].className = "active";
        }

        this.currentState++;

        setTimeout(this.automateSlide.bind(this), this.sliderTime);

    }

}


