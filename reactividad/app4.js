const d = document;

//Global state
const state = {
    todoList:[]

}

//Template UI
const template = () => {
    if(template.data.todoList.length < 1){
        return `<p><em>Lista sin tareas por hacer</em></p>`;
    }

let todos = template.data.todoList.map(item => `<li>${item}</li>`).join("");

return todos;
}

//Agregar state al template que genera el componente de UI(local state)
template.data = {
    todoList:[]
}


//UI REDER
const render = () =>{
    console.log(template.data);
    const $list = d.getElementById("todo-list");

    if(!$list) return;
    $list.innerHTML = template();
}

//Actualizar el state de forma reactiva
const setState = obj=>{
    for(let key in obj){
        if(template.data.hasOwnProperty(key)){
            template.data[key] = obj[key];
        }
    }
    render();
}

//Obtenemos una copia inmutable del state
const getState = ()=> JSON.parse(JSON.stringify(template.data));

d.addEventListener("DOMContentLoaded",render);

//Estableciendo valores por defecto al state
setState({
    todoList:["Tarea1","Tarea2","Tarea3"]
});

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