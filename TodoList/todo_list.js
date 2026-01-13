const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
let tasks = [];
//to add tasks
function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                displayTasks(); // update the UI
            }
        }
//to display entered tasks
function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }
//to mark tasks as completed
        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        }
//clear completed tasks
    function clearCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            displayTasks();
        }
//to clear all tasks
function clearAllTasks() {
    tasks = [];  // empty the array 
    displayTasks(); 
}

// event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);

displayTasks();