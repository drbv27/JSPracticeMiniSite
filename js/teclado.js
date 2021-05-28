const d = document;

export function shortcuts(e){
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);//para saber si estas presionando control
    console.log(e.shiftKey);//para saber si estas presionando shift
    console.log(e.altKey);//para saber si estas presionando shift
    console.log(e);

    if (e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado, combinando alt + a");
    }
    
    if (e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmación con el teclado, combinando alt + c");
    }
    if (e.key === "p" && e.altKey){
        prompt("Haz lanzado un prompt con el teclado, combinando alt + p");
    }

}