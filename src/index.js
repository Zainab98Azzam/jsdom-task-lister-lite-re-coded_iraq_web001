 


const z = document.getElementById("new-task-description").value
const w = document.getElementById("submit")
var t = document.createTextNode(z);
  var li = document.createElement("li");
li.appendChild(t);
w.addEventListener('click', function(){
  document.getElementById("myUL").appendChild(li);
  
})