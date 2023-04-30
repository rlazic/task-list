let taskList = [];

function addTask() {
  const newTaskInput = document.getElementById("new-task");
  const newTaskName = newTaskInput.value.trim();
  
  if (newTaskName) {
    taskList.push({ name: newTaskName, completed: false });
    newTaskInput.value = "";

    renderTaskList();
  }
}

function toggleCompleted(index) {
  taskList[index].completed = !taskList[index].completed;
  renderTaskList();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTaskList();
}

function renderTaskList() {
  const taskListElement = document.getElementById("task-list");
  taskListElement.innerHTML = "";

  taskList.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.innerText = task.name;
    if (task.completed) {
      taskItem.classList.add("completed");
    }
    taskListElement.appendChild(taskItem);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleCompleted(index));
    taskItem.insertBefore(checkbox, taskItem.firstChild);
  });
}
