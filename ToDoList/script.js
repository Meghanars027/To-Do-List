const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    const actionBtns = document.createElement("div");
    actionBtns.classList.add("action-btns");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => li.remove());

    actionBtns.appendChild(deleteBtn);
    li.appendChild(taskSpan);
    li.appendChild(actionBtns);
    taskList.appendChild(li);

    taskInput.value = "";
}
