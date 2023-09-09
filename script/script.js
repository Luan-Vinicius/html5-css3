const $guanabaraClass = document.getElementById("guanabara_class")
const $marcoBruno = document.getElementById("marcoBruno")
const $list_exerc_guanabara = document.getElementById("list_exerc_guanabara")
const $list_exerc_marcoBruno = document.getElementById("list_exerc_marcoBruno")

$guanabaraClass.addEventListener("click",()=>{
    if($list_exerc_marcoBruno.style.display=="block"){
        $list_exerc_marcoBruno.style.display="none"
        $marcoBruno.style.color="black"
    }
    if($list_exerc_guanabara.style.display=="none"){
        $list_exerc_guanabara.style.display="block"
        $guanabaraClass.style.color="yellow"
    }else{
        $list_exerc_guanabara.style.display="none"
        $guanabaraClass.style.color="black"
    }
})

$marcoBruno.addEventListener("click",()=>{
    if($list_exerc_guanabara.style.display=="block"){
        $list_exerc_guanabara.style.display="none"
        $guanabaraClass.style.color="black"
    }
    if($list_exerc_marcoBruno.style.display=="none"){
        $list_exerc_marcoBruno.style.display="block"
        $marcoBruno.style.color="yellow"
    }else{
        $list_exerc_marcoBruno.style.display="none"
        $marcoBruno.style.color="black"
    }
})