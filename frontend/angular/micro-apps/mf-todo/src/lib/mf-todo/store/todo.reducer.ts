import { ActionReducerMap } from '@ngrx/store';
import { SetFilterAction } from '../../filter';
import { filterReducer } from '../../filter/filter.reducer';
import { Todo } from '../../models/todo.model';
import {
  ADD_TODO,
  AddTodoAction,
  DELETE_COMPLETED_TODO, DELETE_TODO,
  DeleteAllCompletedTodoAction, DeleteTodoAction,
  EDIT_TODO,
  EditTodoAction,
  TodoActions,
  TOGGLE_ALL_TODO,
  TOGGLE_TODO,
  ToggleAllTodoAction,
  ToggleTodoAction
} from './todo.actions';

export interface TodosState /*extends AppState*/{
  todos: Todo[];
  filter: 'completed' | 'pending' | 'all' ;
}

const initialState: Todo[] = [
  new Todo('Watch match barcelona vs. manU'),
  new Todo('Play with valentin'),
  new Todo('Go to shop')]
  .map((value: Todo, index: number) => {
    if (index === 2) {
      value.completion = true;
    }
    return value;
  }, );


export function todoReducer(state: Todo[] = initialState, action: TodoActions): Todo[]  {


  switch (action.type) {


    case  ADD_TODO :
      if (action instanceof AddTodoAction) {
        const newTodo: Todo = new Todo(action.content);
        return [...state, newTodo];
      }
      break;


    case TOGGLE_TODO:
      if (action instanceof ToggleTodoAction) {
        return state.map((todo: Todo) => {
          if (todo.id === action.id) {
            const todoRef: Todo = {...todo, completion: !todo.completion};
            return todoRef;
          } else {
            return todo;
          }
        });
      }
      break;


    case EDIT_TODO:
      if (action instanceof EditTodoAction) {
        return state.map((todo: Todo) => {
          if (todo.id === action.id) {
            const todoRef: Todo = {...todo, content: action.newContent};
            return todoRef;
          } else {
            return todo;
          }
        });
      }
      break;

    case DELETE_TODO:
      if (action instanceof DeleteTodoAction) {
        return state.filter((todo: Todo) => todo.id !== action.id);
      }
      break;

    case TOGGLE_ALL_TODO:
      if (action instanceof ToggleAllTodoAction) {
        return state.map((todo: Todo) => {
          return {...todo, completion: !todo.completion}
        });
      }
      break;
    case  DELETE_COMPLETED_TODO:
      if (action instanceof DeleteAllCompletedTodoAction) {
        return state.filter((todo: Todo) => !todo.completion);
      }
      break;
    default: {
      return state;
    }
  }
  return state;
}



export const reducers: ActionReducerMap<TodosState,SetFilterAction &TodoActions > = {
  todos: todoReducer,
  filter:  filterReducer
}
