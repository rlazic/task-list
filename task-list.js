function taskListName() {
	const listName = document.getElementById("checklistNameInput").value;
  document.getElementById("ListName").innerHTML = listName;
  
}

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

const hideCompletedButton = document.getElementById("hide-completed-button");
hideCompletedButton.addEventListener("click", () => {
  hideCompletedTasks();
});

const showCompletedButton = document.getElementById("show-completed-button");
showCompletedButton.addEventListener("click", () => {
  showCompletedTasks();
});
function hideCompletedTasks() {
  const taskListElement = document.getElementById("task-list");
  taskListElement.querySelectorAll(".completed").forEach((taskItem) => {
    taskItem.style.display = "none";
  });
}

function showCompletedTasks() {
  const taskListElement = document.getElementById("task-list");
  taskListElement.querySelectorAll(".completed").forEach((taskItem) => {
    taskItem.style.display = "";
  });
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
