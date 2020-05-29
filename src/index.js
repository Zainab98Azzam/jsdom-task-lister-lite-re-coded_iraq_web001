
const z = document.getElementById("new-task-description")

  var li = document.createElement("li");
li.appendChild(z);
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tasks").appendChild(li);
});


