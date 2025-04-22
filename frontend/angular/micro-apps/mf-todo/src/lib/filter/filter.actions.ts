import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set Filter';

//export type FilterType 'completed' | 'pending' | 'all' | undefined;

export class SetFilterAction implements Action {
  readonly type: string = SET_FILTER;


  constructor(public filter: 'completed' | 'pending' | 'all' = 'all') {

  }

}

//export type FilterActions = SetFilterAction;
