import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';
import { Todo } from './models/todo.model';
import { TodosState } from './todo.reducer';

export const selectFeature: MemoizedSelector<AppState, TodosState> = createFeatureSelector<TodosState>('todos');

export const selectTodos: MemoizedSelector<AppState, Todo[], (s: TodosState) => Todo[]> = createSelector(selectFeature, (todos: TodosState) => todos.todos);


export const selectFilter: MemoizedSelector<AppState, 'completed' | 'pending' | 'all' , (s: TodosState) => 'completed' | 'pending' | 'all' > = createSelector(selectFeature, (t: TodosState) => t.filter);


export const selectPendingTodos: MemoizedSelector<AppState, number, (s: TodosState) => number> = createSelector(selectFeature, (state: TodosState) => state.todos.filter((todo: Todo) => !todo.completion).length)