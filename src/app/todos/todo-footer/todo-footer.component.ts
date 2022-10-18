import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actionFilter from 'src/app/filter/filter.actions';
import { clearAllCompleted } from 'src/app/todos/todo.actions';
import { filtrosValidos } from 'src/app/filter/filter.models';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = [
    'todos', 
    'pendientes',
    'completados'
  ];

  pendientes: number = 0; 

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(){

    this.store.subscribe(state => {
      this.filtroActual = state.filter; 

      this.pendientes = state.todos.filter(todos => !todos.completado).length
    })
  }

  onClick(filtro: filtrosValidos){
    
    this.store.dispatch(actionFilter.aplicar({filter: filtro}));
  }

  clearAllCompleted(){

    this.store.dispatch(clearAllCompleted());
  }
}
