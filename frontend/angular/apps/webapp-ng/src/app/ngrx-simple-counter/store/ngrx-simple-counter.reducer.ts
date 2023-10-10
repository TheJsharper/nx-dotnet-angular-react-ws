import { Action } from "@ngrx/store";
import { NgrxSimpleCounterDecrementAction, NgrxSimpleCounterIncrementAction } from "./ngrx-simple-counter.actions";


export function NgRxSimpleCounterReducer(state: number = 0, action: Action): number {


    switch (action.type) {
        case "INCREMENT":

            return state += (<NgrxSimpleCounterIncrementAction>action).payload;

        case "DECREMENT":
            return state -= (<NgrxSimpleCounterDecrementAction>action).payload;

        case "MULIPLY":
            return state *= (<NgrxSimpleCounterDecrementAction>action).payload;

        case "DIVIDE":
            return state /= (<NgrxSimpleCounterDecrementAction>action).payload;


        default:
            return state;
    }
}