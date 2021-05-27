const d =document;

export function digitalClock(clock,btnPlay,btnStop) {
    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            },1000);

            e.target.disabled=true;
        }

        if(e.target.matches(btnStop)){

        }
    })
}
export function alarm() {

}