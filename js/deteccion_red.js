const d = document,
    w = window,
    n = navigator;

export default function networkStatus(){
    w.addEventListener("online",e=>console.log(n.onLine))
    w.addEventListener("offline",e=>console.log(n.onLine))
}