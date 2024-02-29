const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();



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
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const { name } = todoObject;
    const { dueDate } = todoObject;

    const html = `<div>${i + 1}) ${name}</div>
      <div>${dueDate}</div> 
      <button onclick="
        deleteTodo(${i});"
        class="delete-todo-button
        ">Delete</button>`
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



function handleCostKeyDown(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}