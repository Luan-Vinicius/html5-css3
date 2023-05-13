var arrowLeft = document.getElementsByClassName('arrow')[0]
var arrowRight = document.getElementsByClassName('arrow')[1]
var fundo = document.querySelector('.gallery')
let px = 25


arrowLeft.addEventListener('click', function(){
    px=px-25
    fundo.style=`transform: translateX(${px}px)`
    
})

arrowRight.addEventListener('click', function(){
    px=px+25
    fundo.style=`transform: translateX(${px}px)`
    
})