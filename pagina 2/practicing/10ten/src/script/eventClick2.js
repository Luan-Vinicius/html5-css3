const $alink = [...document.querySelectorAll(".gallery-imgs > div > .main-wrap")]
console.log($alink)

// $alink.map((elem)=>{
//     elem.addEventListener("click",()=>{
//         $Childrens = [...elem.children]
//     })
// })





ind_element = $alink.find((elem, ind)=>{
    elem.addEventListener("click",()=>{
        ind
    })
})
console.log(ind_element)

const teste = $alink.find((elem, ind)=>{
    elem.addEventListener("click",()=>{
        ind == ind_element
    })
    return elem
})

console.log(teste)
