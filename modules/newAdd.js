const submit = document.querySelector('.uzo');
const tasksDiv = document.querySelector('.todos');
const taskInput = document.querySelector('.add-todo input');

let editId;
let isEditTask = false;
let tasks = JSON.parse(localStorage.getItem('task-list'));

window.editTask = (taskId, taskDescripton) => {
  editId = taskId - 1;
  isEditTask = true;
  taskInput.value = taskDescripton;
};

const addElemToPage = () => {
  let div = '';
  if (tasks) {
    tasks.forEach((task) => {
      div += `
        <div class='todo' data-id='task.id'>
          <input id="${task.index}" class='checkbox' onclick='updateCompleted(this)' type="checkbox">
          <p id='${task.index}'class='text' contenteditable="false">${task.descripton}</p>
          <button type="button"  id="${task.index}" class='edit' >
          <span onclick='editTask(${task.index}, "${task.descripton}")' class="material-symbols-outlined">edit</span>
          </button>
          <button type="button"  id="${task.index}" class='del' onclick='del(${task.index})' >
          <span class='material-symbols-outlined del'>delete</span>
          </button>
          </div>
        `;
    });
  }
  tasksDiv.innerHTML = div;
};
addElemToPage();

taskInput.addEventListener('keyup', (e) => {
  const userTask = taskInput.value;
  if (e.key === 'Enter' && userTask) {
    if (!isEditTask) {
      if (!tasks) {
        tasks = [];
      }
      const task = {
        index: tasks.length + 1,
        descripton: userTask,
        completed: false,
      };
      tasks.push(task);
    } else {
      isEditTask = false;
      tasks[editId].descripton = userTask;
    }
    taskInput.value = '';
    localStorage.setItem('task-list', JSON.stringify(tasks));
    addElemToPage();
  }
});

window.del = (id) => {
  tasks = tasks.filter((task) => task.index !== id);
  tasks.forEach((e, i) => {
    e.index = i + 1;
  });
  localStorage.setItem('task-list', JSON.stringify(tasks));
  addElemToPage();
};

submit.addEventListener('click', () => {
  const userTask = taskInput.value;
  if (!isEditTask) {
    if (!tasks) {
      tasks = [];
    }
    const task = {
      index: tasks.length + 1,
      descripton: userTask,
      completed: false,
    };
    tasks.push(task);
  } else {
    isEditTask = false;
    tasks[editId].descripton = userTask;
  }
  taskInput.value = '';
  localStorage.setItem('task-list', JSON.stringify(tasks));
  addElemToPage();
});
