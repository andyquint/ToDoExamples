export class Todo {
	completed: Boolean;

	private _title: String;
	get title() {
		return this._title;
	}
	set title(value: String) {
		this._title = value.trim();
	}

	constructor(title: String) {
		this.completed = false;
		this.title = title.trim();
	}
}

export class TodoStore {
	todos: Array<Todo>;

	constructor() {
		this.todos = [];
	}

	remove(todo: Todo) {
		this.todos.splice(this.todos.indexOf(todo), 1);
	}

	add(title: String) {
		this.todos.push(new Todo(title));
	}
}
