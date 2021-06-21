import STRIPE_KEYS from "./stripe-keys.js"
//console.log(STRIPE_KEYS)

const d = document,
    $tacos = d.getElementById("tacos"),
    $template = d.getElementById("taco-template").content,
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
        headers: {
            Authorization:`Bearer ${STRIPE_KEYS.secret}`,
    },
}

let prices,products;

Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
.then(responses => Promise.all(responses.map((res)=>res.json())))
.then(json => {
    console.log(json)
})
.catch(err => {
    console.log(err);
    let message =  err.statusText || "Ocurrio un error al conectarse con el API de STRIPE"
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
});
