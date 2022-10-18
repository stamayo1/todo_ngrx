import { createReducer, on } from "@ngrx/store";
import { filtrosValidos } from "./filter.models";
import * as actions from './filter.actions';

export const initialState: filtrosValidos = <filtrosValidos>'todos';

export const filterReducer = createReducer(
    initialState,
    on(actions.aplicar, (state, props) => props.filter)
);

