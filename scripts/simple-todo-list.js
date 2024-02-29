const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();



document.querySelector('.js-add-todo-button').addEventListener('click', () => addTodo());

function addTodo(){
  const nameInputElement = document.querySelector('.js-todo-input');
  const todoNameValue = nameInputElement.value;

  const dueDateInputElement = document.querySelector('.js-due-date-input');
  const todoDueDateValue = dueDateInputElement.value;
  
  todoList.push({
    name: todoNameValue,
    dueDate: todoDueDateValue
  });
  console.log(todoList);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  nameInputElement.value = '';
  renderTodoList();
}



function deleteTodo(index){
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
}



function renderTodoList(){
  let todoListHTML = '';
  todoList.forEach( (todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `<div>${index + 1}) ${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-button js-delete-todo-button
        ">Delete</button>`;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => deleteTodo(index));
  })
}



function handleCostKeyDown(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}