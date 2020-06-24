
function createImagesSlides(files) {
    const imgsContainer = $('#imgs-container');
    for (let i = 0; i < files.length; i++) {
        const src = `/imgs/${files[i]}`;
        imgsContainer.append(addSlide(src, i));
    }
}

function refreshImgContainer() {
    const wrapper = $('#carouselSlider');
    wrapper.empty();
    wrapper.append(`
        <div id="imgsCarousel" class="carousel slide" data-ride="carousel" data-pause="false">
            <div id="imgs-container" class="carousel-inner"></div>
        </div>
    `)
}

function addSlide(imgSrc, idx) {
    const css = `carousel-item ${idx === activeIdx ? 'active' : ''}`;
    const interval = 10000;
    return `<div class='${css}' data-pause='false' data-interval='${interval}'> <img src='${imgSrc}' class='d-block w-100 bi-img'/> </div>`;
}
