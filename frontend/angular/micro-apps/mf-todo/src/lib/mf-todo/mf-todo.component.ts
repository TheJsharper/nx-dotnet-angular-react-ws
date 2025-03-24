import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ToggleAllTodoAction } from './store/todo.actions';
import { TodosState } from './store/todo.reducer';
import { AddComponent } from '../add';
import { FooterComponent } from '../footer';
import { ListComponent } from '../list';

@Component({
  selector: 'lib-mf-todo',
  imports: [CommonModule, ListComponent, FooterComponent, AddComponent],
  templateUrl: './mf-todo.component.html',
  styleUrl: './mf-todo.component.scss',
})
export class MfTodoComponent {
  constructor( @Inject(Store)private  store: Store<TodosState>) {
  }


  toggleAll(): void {
  this.store.dispatch(new ToggleAllTodoAction());
  }
}
