//title
const title = document.createElement('h1');
  title.innerText = 'To-Do List';
  document.querySelector('body').appendChild(title);

const test = document.createElement('button');



//task inputs
const task = document.createElement('div')
task.id = ('taskdiv')

const textbox = document.createElement('input')
textbox.placeholder = 'Add a Task'

const submit = document.createElement('button');
submit.innerText = 'Create Task';
submit.addEventListener('click', handleSubmit)

document.querySelector('body').appendChild(task);
document.getElementById('taskdiv').appendChild(textbox)
document.getElementById('taskdiv').appendChild(submit)



//to-do list display
let todo = document.createElement('div')
todo.id = 'todoList'
let list = document.createElement('ol')
list.id = 'taskList'
document.querySelector('body').appendChild(todo);
document.getElementById('todoList').appendChild(list)



//adding a li to the ol to simulate tasks
function handleSubmit(){
const taskValue = textbox.value;

const newTask = document.createElement('li')
newTask.innerText = taskValue;
document.getElementById('taskList').appendChild(newTask)


axios.post('http://localhost:3000/tasks/newtask', {"task": taskValue})
.then((data) => console.log(data))
//when the button is clicked, make a request to the backend to save the task in the db.
//then return that task back to the front end, and add a button to retrieve all active tasks and display them on the front end.

}