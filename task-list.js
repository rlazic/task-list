let taskList = [];

function addTask() {
  const newTask = document.getElementById("new-task");
  const newTaskName = newTaskInput.value.trim();
  
  if (newTaskName) {
    taskList.push(newTaskName);
    newTask.value = "";

    renderTaskList();
  }
}

function renderTaskList() {
  const taskListElement = document.getElementById("task-list");
  taskListElement.innerHTML = "";

  taskList.forEach(taskName => {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskName;
    taskListElement.appendChild(taskItem);
  });
}
