 


const z = document.getElementById("").value
const w = document.getElementById("submit")
var t = document.createTextNode(z);
  var li = document.createElement("li");
li.appendChild(t);
w.addEventListener('click', function(){
  document.getElementById("tasks").appendChild(li);
  
})
w.preventDefault();