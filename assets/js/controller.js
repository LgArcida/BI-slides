let modalRef;
let carousel;
let filesBk = [];

$(document).ready(function () {
    carousel = $('#imgsCarousel')
    modalRef = $('#actionsModal');

    body.click(() => {
        if (clickCounter >= 3) {
            clearTimeout(clickTimer);
            clickCounter = 0;
            modalRef.modal({show: true});
        }
        clickCounter++;
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => clickCounter = 0, 500);
    });

    // --------------------------------- Carousel
    prevBtn.click(() => {
        carousel.carousel('prev');
    });
    nextBtn.click(() => {
        carousel.carousel('next');
    });


    // ------------------------------ Screen buttons
    fullScreenBtn.click(() => {
        fullScreen();
        fullScreenBtn.hide();
        normalScreenBtn.show();
    });
    normalScreenBtn.click(() => {
        cancelFullScreen();
        fullScreenBtn.show();
        normalScreenBtn.hide();
    });

    // ------------------------------ Slider buttons
    pauseBtn.click(() => {
        carousel.carousel('pause');
        playBtn.show();
        pauseBtn.hide();
    });
    playBtn.click(() => {
        carousel.carousel('cycle');
        pauseBtn.show();
        playBtn.hide();
    });

    init();
});

function fullScreen() {
    const element = document.documentElement;
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
}

function cancelFullScreen() {
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen();
    }
}

function refreshCarousel() {
    carousel = $('#imgsCarousel');
    carousel.on('slide.bs.carousel', (event) => {
        activeIdx = event.to;
        checkNewImages();
    });
}

function init() {
    normalScreenBtn.hide();
    playBtn.hide();
    modalRef.modal({show: true});
    modalRef.on('hidden.bs.modal', () => $('#infoTxt').hide());
    checkNewImages();
}

function checkNewImages() {
    $.ajax({
        method: 'post',
        url: '/refreshImgs',
        contentType: 'application/json',
        success: function (files) {
            const is_same = (filesBk.length === files.length) && filesBk.every((element, index) => element === files[index]);
            if (!is_same) {
                activeIdx = activeIdx > files.length - 1 ? 0 : activeIdx;
                refreshImgContainer();
                refreshCarousel();
                createImagesSlides(files);
            }
            filesBk = files;
        }
    })
}
