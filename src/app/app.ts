import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoItem } from './components/todo-item/todo-item';
// import { Todo } from './models/todo';
import { TodoApi } from './services/todo-api';

@Component({
  imports: [TodoItem],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  private todoApi = inject(TodoApi);
  todos = toSignal(this.todoApi.getTodos(), { initialValue: [] });

  // todos: Todo[] = [
  //   { id: '1', title: 'Apprendre Angular', done: false },
  //   { id: '2', title: 'Acheter du pain', done: true },
  //   { id: '3', title: 'Faire la lessive', done: false },
  // ];
}
