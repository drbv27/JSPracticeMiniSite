const d = document;

export default function searchFilters(inputs,selector){
    d.addEventListener("keyup",e=>{
        if(e.target.matches(inputs)){
            //console.log(e.key)
            console.log(e.target.value)
            d.querySelectorAll(selector).forEach((el)=>
                el.textContent.toLowerCase().includes(e.target.value)
                ?el.classList.remove("filter")
                :el.classList.add("filter")
                );
        }
    });
}