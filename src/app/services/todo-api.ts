import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Service()
export class TodoApi {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/todos';

  getTodos() {
    return this.http.get<Todo[]>(this.url);
  }
}
