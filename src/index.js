 
const z = document.getElementById("new-task-description")
const w = document.getElementById("submit")

  var li = document.createElement("li");
li.appendChild(z);
w.addEventListener("click", () => {
  document.getElementById("tasks").appendChild(li);
});
w.Event.preventDefault

