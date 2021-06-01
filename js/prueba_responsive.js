const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e)=>{
        if(e.target === $form);
        alert("formulario enviado");
    })
}