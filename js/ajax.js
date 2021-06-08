(() =>{
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState !== 4) return;

        console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300){
            console.log("exito");
        }else{
            console.log("error");
        }

    });

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();
