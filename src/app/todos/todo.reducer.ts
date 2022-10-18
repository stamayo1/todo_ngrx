import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.models";
import * as actions from './todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  
  on(actions.crear, (state, props) => [...state, new Todo(props.texto)] ),
  
  on(actions.toogle, (state, props) => {
    
    return state.map(todo => {

      if(todo.id === props.id){
        
        return {
          ...todo,
          completado: !todo.completado
        }
      }

      return todo; 
    })
  }),

  on(actions.editar, (state, props) => {
    
    return state.map(todo => {
      
      if(todo.id === props.id){
        
        return {
          ...todo,
          texto: props.texto
        }
      }

      return todo; 
    })
  }),

  on(actions.eliminar, (state, props) => {
    
    return state.filter(todo => todo.id !== props.id )
  }),

  on(actions.toogleAll, (state, props) => {
    
    return state.map(todo => {

      return {
        ...todo,
        completado: props.completado
      }
    });

  }),

  on(actions.clearAllCompleted, (state) => {
    
    return state.filter(todo => !todo.completado);
    
  }),
  
);

