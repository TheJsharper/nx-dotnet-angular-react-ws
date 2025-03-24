import { SET_FILTER, SetFilterAction } from './filter.actions';

//const initialState: FilterType = 'all';

export function filterReducer(state: 'completed' | 'pending' | 'all' = 'all' , action: SetFilterAction): 'completed' | 'pending' | 'all'  {

  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default: {
      return state;
    }
  }
  return state;
}
