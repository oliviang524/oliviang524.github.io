const toDoForm = document.getElementById("toDoForm");
const toDoInput = document.getElementById("toDoInput");
const toDoList = document.getElementById("toDoList");
const TODOS_KEY = "toDos";
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => parseInt(toDo.id) !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDoObj.text;
    toDoList.appendChild(li);
}

function addTodo(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveTodos();
}
toDoForm.addEventListener("submit", addTodo);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}