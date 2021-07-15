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

d.addEventListener("DOMContentLoaded",render);

//Estableciendo valores por defecto al state
setState({
    todoList:["Tarea1","Tarea2","Tarea3"]
});

const items = state.todoList;
items.push("Tarea4");
console.log("Mutable state",state)

d.addEventListener("submit", e=>{
    if(!e.target.matches("#todo-form")) return false;

    e.preventDefault();
    const $item = d.getElementById("todo-item");
    if(!$item) return;

    //Update the state
    state.todoList.push($item.value);
    render();


    //Limpiar el input
    $item.value="";
    $item.focus();
})