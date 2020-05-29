 

 var li = document.createElement("li");
var z = document.getElementById("new-task-description").value
var w = document.getElementById("submit")
var t = document.createTextNode(z);
 
li.appendChild(t);
w.addEventListener('click', function(){
  console.log(z)
  document.getElementById("tasks").appendChild(li);})
w.preventDefault();