function createTodo() {
	var todoText = document.getElementById("txtTodo").value;
	if (todoText.length == 0) {
		alert("ToDo text can't be blank");
		return;
	}
	var todoTextNode = document.createTextNode(todoText);
	var todoEl = document.createElement("li");
	todoEl.setAttribute("class","todo");
	var todoDel = 	document.createElement("button");
	todoDel.setAttribute("type","button");
	todoDel.setAttribute("class","delete");
	todoDel.addEventListener("click", deleteTodo);
	todoDel.appendChild(document.createTextNode("Delete"));
	var todoMark = document.createElement("input");
	todoMark.setAttribute("type","checkbox");
	todoMark.setAttribute("class","complete");
	var todoList = document.getElementById("todoList");
	todoEl.appendChild(todoDel);
	todoEl.insertBefore(todoMark, todoDel);
	todoEl.insertBefore(todoTextNode, todoMark);
	todoList.appendChild(todoEl);
}
function deleteTodo(event) {
	var button = event.target;
	var todo = button.parentNode;
	todo.remove();
}

var btnCreateTodo = document.getElementById("btnCreateTodo");
btnCreateTodo.addEventListener("click", createTodo);
