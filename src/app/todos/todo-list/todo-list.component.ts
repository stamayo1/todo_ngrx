import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.models';
import { Observable } from "rxjs";
import { filtrosValidos } from 'src/app/filter/filter.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtradoActual: filtrosValidos = 'todos';

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
    .subscribe(state => {
      this.todos = state.todos; 
      this.filtradoActual = state.filter;
    });
  }

}
