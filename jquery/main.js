$('#btnCreateTodo').click(function() {
	var todoText = $('#txtTodo').val();
	if (todoText.length == 0) {
		alert("ToDo text can't be blank");
		return;
	}
	var todoEl = $('<li>', {
		"class":"todo",
	});
	var todoDel = $('<button>', {
		"type":"button",
	    	"class":"delete"
	}).click(function() {
		$(this).parent('.todo').remove();
	}).text("Delete");
	var todoMark = $('<input>', {
		"type":"checkbox",
	    	"class":"complete"
	});
	todoEl.append(todoText).append(todoMark).append(todoDel);
	$('#todoList').append(todoEl);
});
