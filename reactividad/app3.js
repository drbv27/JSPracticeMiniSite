const d = document;

//El state
const state = {
    todoList:[]

}

//Template UI
const template = () => {
    if(state.todoList.length < 1){
        return `<p><em>Lista sin tareas por hacer</em></p>`;
    }

let todos = state.todoList.map(item => `<li>${item}</li>`).join("");

return todos;
}


//UI REDER
const render = () =>{
    console.log(state);
    const $list = d.getElementById("todo-list");

    if(!$list) return;
    $list.innerHTML = template();
}

//Actualizar el state de forma reactiva
const setState = obj=>{
    for(let key in obj){
        if(state.hasOwnProperty(key)){
            state[key] = obj[key];
        }
    }
    render();
}

//Obtenemos una copia inmutable del state
const getState = ()=> JSON.parse(JSON.stringify(state));

d.addEventListener("DOMContentLoaded",render);

//Estableciendo valores por defecto al state
setState({
    todoList:["Tarea1","Tarea2","Tarea3"]
});

//Mutable state because can modify the state directly makeit one object copy and add element
//const items = state.todoList;
const items = getState();
//items.push("Tarea4");
items.todoList.push("Tarea4")
//console.log("Mutable state",state)
console.log("Unmutable state",state)

d.addEventListener("submit", e=>{
    if(!e.target.matches("#todo-form")) return false;

    e.preventDefault();
    const $item = d.getElementById("todo-item");
    if(!$item) return;

    //Update the state (reactive method)
    const lastState = getState();
    lastState.todoList.push($item.value);
    setState({todoList:lastState.todoList});


    //Limpiar el input
    $item.value="";
    $item.focus();
})