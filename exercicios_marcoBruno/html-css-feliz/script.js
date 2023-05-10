var arrowLeft = document.getElementsByClassName('arrow')[0]
var arrowRight = document.getElementsByClassName('arrow')[1]
var fundo = document.querySelector('.box-imgCards')
let px = 15


arrowLeft.addEventListener('click', function(){
    fundo.style='background-color: #000'
    fundo.style=`transform: translateX(${px}px)`
    px=px+15
})

arrowRight.addEventListener('click', function(){
    px=px-15
    fundo.style='background-color: #fff'
    fundo.style=`transform: translateX(${px}px)`
    
})