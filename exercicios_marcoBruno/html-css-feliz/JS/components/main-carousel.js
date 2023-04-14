const rightArrow = window.document.querySelector('#arrowRight');
const leftArrow = window.document.querySelector('#arrowLeft');
const boxGalleryThree  = window.document.querySelector('.box-gallery._three');
let pixels = 50;

rightArrow.addEventListener('click', function(){
    pixels = pixels + 50;
    boxGalleryThree.style = `transform: translateX(${pixels}px);`;
});

leftArrow.addEventListener('click', function(){
    pixels = pixels - 50;
    boxGalleryThree.style = `transform: translateX(${pixels}px);`;
});