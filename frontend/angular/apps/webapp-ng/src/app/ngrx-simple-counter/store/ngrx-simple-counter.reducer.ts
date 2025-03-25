import { Action } from "@ngrx/store";
import { NgrxSimpleCounterDecrementAction, NgrxSimpleCounterIncrementAction, NgrxSimpleCounterPatchAction } from "./ngrx-simple-counter.actions";


export function NgRxSimpleCounterReducer(state = 100, action: Action): number {


    switch (action.type) {
        case "INCREMENT":

            return state += (<NgrxSimpleCounterIncrementAction>action).payload;

        case "DECREMENT":
            return state -= (<NgrxSimpleCounterDecrementAction>action).payload;

        case "MULIPLY":
            return state *= (<NgrxSimpleCounterDecrementAction>action).payload;

        case "DIVIDE":
            return state /= (<NgrxSimpleCounterDecrementAction>action).payload;

        case "RESET":
            return 0;

        case "PATCH":
            return state = (<NgrxSimpleCounterPatchAction>action).payload

        default:
            return state;
    }
}