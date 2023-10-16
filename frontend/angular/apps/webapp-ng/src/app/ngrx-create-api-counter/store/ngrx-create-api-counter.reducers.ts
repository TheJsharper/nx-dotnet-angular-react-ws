import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { path, decrement, divide, increment, multiply } from "./ngrx-create-api-counter.actions";

export type ACTION_ALIAS_TYPING_ARGS = { data: number; } & TypedAction<string> & { type: string; };

export interface CounterState {
    data: number;
}
export const INITIAL_COUNTER_STATE: CounterState = { data: 100 };

export const NgrxCreateApiCounterReducer = createReducer(INITIAL_COUNTER_STATE,

    on(increment, (state: CounterState, action: ACTION_ALIAS_TYPING_ARGS) => ({ data: state.data + action.data })),
    on(decrement, (state: CounterState, action: ACTION_ALIAS_TYPING_ARGS) => ({ data: state.data - action.data })),
    on(multiply, (state: CounterState, action: ACTION_ALIAS_TYPING_ARGS) => ({ data: state.data * action.data })),
    on(divide, (state: CounterState, action: ACTION_ALIAS_TYPING_ARGS) => ({ data: state.data / action.data })),
    on(path, (_: CounterState, action: ACTION_ALIAS_TYPING_ARGS) => ({ data: action.data })),
)

export const selectFeature = createFeatureSelector<CounterState>("counterCreateApi");

export const selectValue = createSelector(selectFeature, (state:CounterState)=> state.data);