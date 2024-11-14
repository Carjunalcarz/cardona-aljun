const form_task = document.getElementById("task");
const task_list = document.getElementById("task_list");

form_task.addEventListener("submit", function (e) {
  e.preventDefault();

  const add_task = form_task.elements["add_task"].value;

  // Create new list item
  const list = document.createElement("li");
  const inner_html = `${add_task} <button class="btn btn-danger m-1">Delete</button>`;
  list.classList = "text-success";
  list.innerHTML = inner_html;

  // Append the list item to the task list
  task_list.appendChild(list);

  // Find the "Delete" button inside the newly created list item
  const delButton = list.querySelector("button");

  // Add event listener for deleting the task
  delButton.addEventListener("click", function () {
    list.remove(); // This removes the entire <li> element
  });
});
