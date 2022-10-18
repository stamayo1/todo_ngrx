import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO add component] Crear Todo',
    props<{texto: string}>()
);

export const toogle = createAction(
    '[TODO item component] toogle Todo',
    props<{id: number}>()
);

export const editar = createAction(
    '[TODO item component] Editar Todo',
    props<{id: number, texto: string}>()
);

export const eliminar = createAction(
    '[TODO item component] Eliminar un Todo',
    props<{id: number}>()
);

export const toogleAll = createAction(
    '[TODO page component] Toogle All Todo',
    props<{completado: boolean}>()
);

export const clearAllCompleted = createAction('[TODO footer component] Clear all completed');

