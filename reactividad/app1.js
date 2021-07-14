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

d.addEventListener("DOMContentLoaded",render);

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