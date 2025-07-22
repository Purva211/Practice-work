function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.className = "task";

  const span = document.createElement("span");
  span.innerText = taskText;
  span.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);`
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
}
