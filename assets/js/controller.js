$(document).ready(function () {

    body.click(() => {
        if (clickCounter >= 3) {
            clearTimeout(clickTimer);
            clickCounter = 0;
            $('#actionsModal').modal({show: true});
        }
        clickCounter++;
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => clickCounter = 0, 500);
    });

    // --------------------------------- Carousel

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
    normalScreenBtn.hide();

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
    playBtn.hide();

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
