// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



// Event listener 
todoButton.addEventListener('click',  addTodo);
todoList.addEventListener('click', deleteCheck);


// Funtions
function addTodo(event) {
    event.preventDefault();

    // Create Todo Div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Creat Li 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);

    // checked button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML =`<i class="fas fa-check-square"></i>`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);


    // Clear Todo Input Value 
    todoInput.value = ""
}
function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
    }
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
};