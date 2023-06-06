const todoList = [{name:'',dueDate:''}]

renderTodolist();

function renderTodolist() {
  let todoListHTML = ''

  todoList.forEach(function(todoObject,index){
    // This is short-cut for code belowe
    const {name, dueDate} = todoObject;

    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index}, 1);
      renderTodolist();
      " class="todo-delete-button">Delete</button>
    `;
 

    todoListHTML += html;
  })
  
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