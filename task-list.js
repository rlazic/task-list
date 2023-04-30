let taskList = [];

function addTask() {
  const newTask = document.getElementById("new-task");
  const newTaskName = newTask.value.trim();
  
  if (newTaskName) {
    taskList.push({ name: newTaskName, completed: false });
    newTask.value = "";

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
    taskItem.style.listStyleType = "none";
    taskListElement.appendChild(taskItem);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleCompleted(index));
    taskItem.insertBefore(checkbox, taskItem.firstChild);
  });
}
const newTaskInput = document.getElementById("new-task");
newTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
