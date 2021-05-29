import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock,alarm} from "./reloj.js"
import {moveBall,shortcuts} from "./teclado.js"
import countdown from "./cuenta_regresiva.js"
import scrollTopButton from "./boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("../assets/alarm-clock.mp3","#activar-alarma","#desactivar-alarma")
    countdown(
        "countdown",
        "Feb 17, 2022 12:00:00",
        "Feliz Cumpleaños...Diego!!! 🦊"
        );
        scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage")
})
