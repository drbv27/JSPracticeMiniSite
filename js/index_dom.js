import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock,alarm} from "./reloj.js"

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("../assets/alarm-clock.mp3","#activar-alarma","#desactivar-alarma")
})
