const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries)=>{
        console.log("entries",entries);
    }


    const observer = new IntersectionObserver(cb,{});

    $sections.forEach(el=>observer.observe(el));
}