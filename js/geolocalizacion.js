const d=document,
    n=navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy:true,
            timeout:5000,
            maximumAge:0
        };

        const success = position => {
            console.log(position);
        }

        const error = err => {
            console.log(err);
        }

        n.geolocation.getCurrentPosition(success,error,options);
}