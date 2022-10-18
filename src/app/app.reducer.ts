import { ActionReducerMap } from "@ngrx/store";

import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filter/filter.reducer";

import { Todo } from "./todos/models/todo.models";
import { filtrosValidos } from "./filter/filter.models";

export interface AppState{
    todos: Todo[],
    filter: filtrosValidos
}

export const AppReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}
