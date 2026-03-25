const columns = document.querySelectorAll(".column");
let draggedTask = null;

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-btn")) {
    const text = prompt("Enter task:");

    if (!text || !text.trim()) return;

    const task = document.createElement("div");
    task.className = "task";
    task.textContent = text.trim();

    task.setAttribute("draggable", true);

    event.target.previousElementSibling.appendChild(task); //target element er nearest previous sibling
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target.classList.contains("task")) {
    draggedTask = event.target;
    event.target.classList.add("dragging");
  }
});
document.addEventListener("dragend", (event) => {
  if (event.target.classList.contains("task")) {
    event.target.classList.remove("dragging");
    draggedTask = null;
  }
});

//It's not recomended to use event delegation in dragging and focus/blur as there are continuously the classes are gettinh changed so that's not recommended, error-prone

columns.forEach((col) => {
  col.addEventListener("dragover", (event) => {
    event.preventDefault();
    col.classList.add("drag-over");
  });
  col.addEventListener("dragleave", () => {
    col.classList.remove("drag-over");
  });
  col.addEventListener("drop", () => {
    col.classList.remove("drag-over");

    const tasksContainer = col.querySelector(".tasks");
    if (draggedTask && tasksContainer) {
      tasksContainer.appendChild(draggedTask);
    }
  });
});
