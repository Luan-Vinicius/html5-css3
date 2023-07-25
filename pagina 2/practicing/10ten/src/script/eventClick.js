

let $ageopts = document.getElementsByClassName("age-opts")

let dest
for(v of $ageopts){
   if(v.getAttribute('class')=="age-opts _destaque"){
    dest = v
   }
}
$ageopts = [...$ageopts]
$ageopts.map((el)=>{
    el.addEventListener('click',()=>{
        
        if(el.getAttribute('class')=="age-opts _destaque"){
        }else{
            dest.setAttribute('class','age-opts')
            el.setAttribute('class','age-opts _destaque')
            dest = el
        }
    })
})