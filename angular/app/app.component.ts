import { Component } from '@angular/core';
import { Todo, TodoStore} from './services/store';
@Component({
  selector: 'todo-app',
  providers: [ TodoStore ],
  templateUrl: 'app/app.html'
})
export class TodoApp {
	todoStore: TodoStore
	newTodoText = '';

	constructor(todoStore: TodoStore) {
		this.todoStore = todoStore;
	}

	remove(todo: Todo){
		this.todoStore.remove(todo);
	}

	addTodo() {
		if (this.newTodoText.trim().length) {
			this.todoStore.add(this.newTodoText);
			this.newTodoText = '';
		}
	}
}

