import './style.css';

const todoList = document.querySelector('.list-todo');

const todoArray = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To DO list project',
    completed: false,
    index: 1,
  },
  {
    description: 'Study and practice Javascript',
    completed: false,
    index: 2,
  },
  {
    description: 'Pray and Rest',
    completed: false,
    index: 3,
  },
];

const addToDo = () => {
  todoList.innerHTML = '';
  for (let i = 0; i < todoArray.length; i += 1) {
    todoList.innerHTML += `
      <div class="do-all">
        <div class="dos">
          <input type="checkbox" name="" id="">
          <p>${todoArray[i].description}</p>
        </div>
        <div class="aka">
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </div>
  `;
  }
};

addToDo();