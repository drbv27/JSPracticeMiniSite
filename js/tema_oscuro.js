const d = document;

export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    console.log($selectors);

    let moon = "🌙",
        sun = "☀️";

    const lightMode= () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
    }
    const darkMode= () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
    }

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            //console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded",e=>{
        alert("HOLA desde la funcion darktheme")
    })
}
