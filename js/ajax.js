//Classic AJAX
(() =>{
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState !== 4) return;

        //console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300){
            //console.log("exito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = xhr.responseText;
            let json =JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            //console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
        //console.log("Este mensaje cargará de cualquier forma");
    });

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();

//Fetch API
(() => {
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
/*         .then(res => {
            console.log(res);
            return res.ok ? res.json() : Promise.reject(res);
        }) */
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            //console.log(json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        })
        .catch(err => {
            //console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        }).finally(() => {
            //console.log("Esto se ejeecutará independientemente del resultado de la promesa Fetch")
        }
    );
})();

//Fetch async await

(()=> {
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

                //console.log(res,json);

                //if(!res.ok) throw new Error("Ocurrio un error al solicitar los datos")
                if(!res.ok) throw {status: res.status, statusText: res.statusText}

                json.forEach(el => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                    $fragment.appendChild($li);
                });
    
                $fetchAsync.appendChild($fragment);
        } catch (err) {
            //console.log("Estoy en el catch",err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            //console.log("Esto se ejecuta si o si")
        }
    }

    getData();
})();

//Axios

(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        //console.log(res);
        let json = res.data; //solo conservo el nombre pero no es un json

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $axios.appendChild($fragment);
    })
    .catch(err => {
        //console.log(err.response);
        let message = err.response.statusText || "Ocurrio un error";
         $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
        //console.log("Esto se ejecuta si o si");
    });
})();

//Axios + async await
(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users");

    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
            json = await res.data;

            //console.log(res,json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
    
            $axiosAsync.appendChild($fragment);
        } catch (err) {
            console.log(err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            console.log("Esto se ejecuta si o si");
        }
    }

    getData();
})();

/* ******CRUD WITH DIFFERENTS METHODS***** */