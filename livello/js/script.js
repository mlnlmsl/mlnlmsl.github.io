var slideIndex = 1;
showSlides();


function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n
    showSlides();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    // slideIndex++;
    // setTimeout(nextSlide, 4000);
}

function nextSlide() {
    slideIndex++;
    showSlides();
}
setInterval(nextSlide, 4000);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var aSlider = new Slider("#slider1", 2000).init();