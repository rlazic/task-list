let taskList = [];

function addTask() {
  const newTask = document.getElementById("new-task");
  const newTaskName = newTask.value.trim();
  
  if (newTaskName) {
    taskList.push(newTaskName);
    newTask.value = "";

    renderTaskList();
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTaskList();
}

function renderTaskList() {
  const taskListElement = document.getElementById("task-list");
  taskListElement.innerHTML = "";

  taskList.forEach((taskName, index) => {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskName;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));
    taskItem.appendChild(deleteButton);
    taskListElement.appendChild(taskItem);
  });
}
