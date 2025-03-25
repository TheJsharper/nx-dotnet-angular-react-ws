import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddComponent } from '../add';
import { FooterComponent } from '../footer';
import { ListComponent } from '../list';
import { ToggleAllTodoAction } from './store/todo.actions';
import { TodosState } from './store/todo.reducer';

@Component({
  selector: 'lib-mf-todo',
  imports: [CommonModule, ListComponent, FooterComponent, AddComponent],
  providers:[],
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
