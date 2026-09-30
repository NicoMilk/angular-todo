import { Component, input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  imports: [],
  selector: 'app-todo-item',
  styleUrl: './todo-item.css',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  todo = input.required<Todo>();
}
