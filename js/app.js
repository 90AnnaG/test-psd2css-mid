let arrowPrev = document.getElementById('arrowPrev');
let arrowNext = document.getElementById('arrowNext');
let ul = document.querySelector('ul');
let sliderElements = document.querySelectorAll('li');
let ulLength = sliderElements.length;
let currentSlide = 0;
let mobileView = window.innerWidth < 650;
let desktopView = window.innerWidth > 650;

// slider for browser width hihg than 650px
function desktopVeiwSlide(currentSlide) {
    for (i = 0; i < ulLength; i++) {
        sliderElements[i].style.display = 'none';
    }

    if (currentSlide === 0) {
        sliderElements[ulLength-3].style.display = 'block';
        sliderElements[ulLength-2].style.display = 'block';
        sliderElements[ulLength-1].style.display = 'block';
    } else if (currentSlide === ulLength-1) {
        sliderElements[0].style.display = 'block';
        sliderElements[1].style.display = 'block';
        sliderElements[2].style.display = 'block';
    } else {
        sliderElements[currentSlide].style.display = 'block';
        sliderElements[currentSlide-1].style.display = 'block';
        sliderElements[currentSlide+1].style.display = 'block';
    }
 };

 // slider for browser width less than 650px
function mobileViewSlide(currentSlide) {
        for (i = 0; i < ulLength; i++) {
            sliderElements[i].style.display = 'none';
        }
        sliderElements[currentSlide].style.display = 'block';
};

// click function to show previous slider element
arrowPrev.addEventListener('click', function () {
    currentSlide = currentSlide - 1;
    if (currentSlide < 0) {
        currentSlide = ulLength - 1;
    }
    if (mobileView) {
        mobileViewSlide(currentSlide);
    } else {
        desktopVeiwSlide(currentSlide);
    }
});

// click function to show next slider element
arrowNext.addEventListener('click', function () {
    currentSlide = currentSlide + 1;

    if (currentSlide >= ulLength) {
        currentSlide = 0;
    }
    if (mobileView) {
        mobileViewSlide(currentSlide);
    } else {
        desktopVeiwSlide(currentSlide);
    }
});


window.addEventListener('DOMContentLoaded', (event) => {
    if (mobileView) {
        mobileViewSlide(0);
    } else {
        desktopVeiwSlide(1);
    }
});