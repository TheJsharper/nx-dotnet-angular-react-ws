import { Action } from "@ngrx/store";


export class NgrxSimpleCounterIncrementAction implements Action {
    readonly type: string = "INCREMENT";

    constructor(public payload: number) { }

}
export class NgrxSimpleCounterDecrementAction implements Action {
    readonly type: string = "DECREMENT";

    constructor(public payload: number) { }

}
export class NgrxSimpleCounterMultiplyAction implements Action {
    readonly type: string = "MULIPLY";

    constructor(public payload: number) { }

}
export class NgrxSimpleCounterDivideAction implements Action {
    readonly type: string = "DIVIDE";

    constructor(public payload: number) { }

}