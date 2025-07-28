document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.getElementById("todoList");
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.querySelector(".add-btn");

  let tasks = JSON.parse(localStorage.getItem("task")) || [];

  tasks.forEach((task) => renderTask(task));

  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    taskInput.value = ""; // Clear input
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Toggle complete on span click
    li.querySelector("span").addEventListener("click", () => {
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    // Delete button logic
    li.querySelector(".delete-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      li.remove();
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});
