const form_task = document.getElementById("task");
const task_list = document.getElementById("task_list");


form_task.addEventListener("submit", function (e) {
  e.preventDefault();

  const add_task = form_task.elements["add_task"].value;
  const del = document.getElementById("del")

  const list = document.createElement("li");
  const inner_html = `<li class="pb-2">${add_task} <button class="btn btn-danger">Delete</button></li>`

  list.innerHTML = inner_html;
  
  task_list.appendChild(list);
 


});
