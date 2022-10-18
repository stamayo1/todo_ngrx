import { createAction, props } from "@ngrx/store";
import { filtrosValidos } from "./filter.models";

export const aplicar = createAction(
    '[Filter] conjunto de filtros',
    props<{filter: filtrosValidos}>()
);
