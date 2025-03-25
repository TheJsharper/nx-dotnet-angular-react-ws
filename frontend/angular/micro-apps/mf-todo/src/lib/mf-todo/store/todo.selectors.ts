import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { TodosState } from './todo.reducer';

export const selectFeature: MemoizedSelector<object,TodosState> = createFeatureSelector<TodosState>('todos');

export const selectTodos: MemoizedSelector<TodosState, Todo[], (s: TodosState) => Todo[]> = createSelector(selectFeature, (todos: TodosState) => todos.todos);


export const selectFilter: MemoizedSelector<TodosState, 'completed' | 'pending' | 'all' , (s: TodosState) => 'completed' | 'pending' | 'all' > = createSelector(selectFeature, (t: TodosState) => t.filter);


export const selectPendingTodos: MemoizedSelector<TodosState, number, (s: TodosState) => number> = createSelector(selectFeature, (state: TodosState) => state.todos.filter((todo: Todo) => !todo.completion).length)