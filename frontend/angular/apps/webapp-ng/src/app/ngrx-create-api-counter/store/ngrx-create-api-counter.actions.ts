import { createAction, props } from "@ngrx/store";
import { ActionCreator, TypedAction } from "@ngrx/store/src/models";

export type ACTION_ALIAS_TYPING = ActionCreator<string, (props: { data: number; }) => { data: number; } & TypedAction<string>>

export const increment: ACTION_ALIAS_TYPING = createAction("[INCREMENT VALUE] value by argnument", props<{ data: number }>())

export const decrement: ACTION_ALIAS_TYPING = createAction("[DECREMENT VALUE] value by argnument", props<{ data: number }>())

export const multiply: ACTION_ALIAS_TYPING = createAction("[MULTIPLY VALUE] value by argnument", props<{ data: number }>())

export const divide: ACTION_ALIAS_TYPING = createAction("[DIVIDE VALUE] value by argnument", props<{ data: number }>())

export const path: ACTION_ALIAS_TYPING = createAction("[PATH VALUE] value by argnument", props<{ data: number }>())

