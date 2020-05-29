 

 var li = document.createElement("li");
var z = document.getElementById("x").value
var w = document.getElementById("submit")
var t = document.createTextNode(z);
 
li.appendChild(t);
w.addEventListener('click', function(){
  console.log("hi");
  document.getElementById("tasks").appendChild(li);})
