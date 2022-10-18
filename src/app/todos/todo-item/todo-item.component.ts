import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  
  chkCompletado!: FormControl; 
  txtInput!: FormControl;

  editando: boolean = false;

  constructor(
    private store: Store
  ){}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo?.completado);
    this.txtInput = new FormControl(this.todo?.texto, Validators.required);

    this.chkCompletado.valueChanges
    .subscribe(() => {

      this.store.dispatch( actions.toogle({id: this.todo.id}) );
    });

  }

  terminarEdicion(){
    this.editando = false;

    if(this.txtInput.invalid || this.txtInput.value === this.todo.texto){ return ;}
    
    this.store.dispatch(
      actions.editar({id: this.todo.id, texto: this.txtInput.value})
    );
  }

  eliminar(){

    this.store.dispatch(
      actions.eliminar({id: this.todo.id })
    );
  }

}
