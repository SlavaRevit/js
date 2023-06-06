const todoList = [{name:'',dueDate:''}]

renderTodolist();

function renderTodolist() {
  let todoListHTML = ''

  for (let i =0; i<todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodolist();
      " class="todo-delete-button">Delete</button>
    `;
 

    todoListHTML += html;
  }
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addTodo() {
  const  inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({
    name : name,
    dueDate : dueDate
  });

  inputElement.value = '';
  renderTodolist();
  }