const $titleExerc = [...document.getElementsByClassName("main-subtitle")]
const $divListExerc = [...document.getElementsByClassName("listExerc#Script")]

$titleExerc.map((el)=>{
    el.addEventListener("click",()=>{//ADD OU REMOVE A CLASSE SELECTED QUANDO CLICAR
        if(el.getAttribute("class")=="main-subtitle"){
            removeClassSelected()
            el.classList.toggle("_selected")
            verifica()
        }else{
            el.classList.toggle("_selected")
            verifica()
        }
    })
})



function removeClassSelected(){//REMOVE A CLASSE SELECTED DE TODOS OS ELEMENTO
    $titleExerc.map((el)=>{
        el.setAttribute("class","main-subtitle")
    })
}
function removeDisplayBlock(){//ALTERA O DISPLAY BLOCK PARA NONE
    $divListExerc.map(el=>{
        el.setAttribute("style","display:none")
    })
}
function verifica(){
    $titleExerc.map((el)=>{
        if(el.getAttribute("class")=="main-subtitle _selected"){
            switch(el.id){
                case "guanabara_class":
                    removeDisplayBlock()
                    $divListExerc[0].setAttribute("style","display:block")
                break
                case "marcoBruno":
                    removeDisplayBlock()
                    $divListExerc[1].setAttribute("style","display:block")
                break
                default:
                    removeDisplayBlock()
                    $divListExerc[2].setAttribute("style","display:block")
                break
            }
        }else{
            if(el.id=="guanabara_class"){
                removeDisplayBlock()
            }
        }
    })
}
