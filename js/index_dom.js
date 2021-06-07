import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock,alarm} from "./reloj.js"
import {moveBall,shortcuts} from "./teclado.js"
import countdown from "./cuenta_regresiva.js"
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";

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
        responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
        responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/BafRCj9tZZaktF2B8">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9913417051657!2d-75.56878368573402!3d6.264868027855204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428e695083c29%3A0x99f177323f8c67d5!2sRuta%20N!5e0!3m2!1ses!2sco!4v1622476548433!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
        );
        responsiveTester("responsive-tester");
        userDeviceInfo("user-device");
        webCam("webcam");
        getGeolocation("geolocation");
        searchFilters(".card-filter",".card");
        draw("#winner-btn",".player");
        slider();
        scrollSpy();
        smartVideo();
});

d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage")
})

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();