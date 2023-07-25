const $alink = [...document.querySelectorAll(".gallery-imgs > div > .main-wrap")]

console.log($alink)

$alink.map((elem)=>{
    elem.addEventListener("click",()=>{
        
        const $img = [...elem.children]
        console.log($img)
    })
})