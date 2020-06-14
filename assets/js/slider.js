$(document).ready(function () {
    const imgFiles = files.split(',');
    for (let i = 0; i < imgFiles.length; i++) {
        const src = `/imgs/${imgFiles[i]}`;
        imgsContainer.append(createSlide(src, i));
    }
});


function createSlide(imgSrc, idx) {
    const css = `carousel-item ${idx === 0 ? 'active' : ''}`;
    const interval = 10000;
    return `<div class='${css}' data-pause='false' data-interval='${interval}'> <img src='${imgSrc}' class='d-block w-100 bi-img'/> </div>`;
}
