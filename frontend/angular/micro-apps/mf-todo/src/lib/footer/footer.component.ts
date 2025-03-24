import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { SetFilterAction } from '../filter/filter.actions';
import { TodosState } from '../mf-todo/store/todo.reducer';
import { DeleteAllCompletedTodoAction } from "../mf-todo/store/todo.actions";
import { selectFilter, selectPendingTodos } from '../mf-todo/store/todo.selectors';

@Component({
    selector: 'lib-app-footer',
    templateUrl: './footer.component.html',
    imports: [AsyncPipe, NgClass, NgFor],
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  filterTypes: ('completed' | 'pending' | 'all') [] = ['all', 'completed', 'pending'];

  selectedFilter$: Observable<'completed' | 'pending' | 'all' > = of('all');
  
  pendingTodos$?: Observable<number>;

  constructor(@Inject(Store)private store: Store<TodosState>) {
  }

  ngOnInit() {
    this.selectedFilter$ = this.store.pipe(select(selectFilter));
    this.pendingTodos$ = this.store.pipe(select(selectPendingTodos));
  }

  changeFilter(filter: 'completed' | 'pending' | 'all' ): void {
    this.store.dispatch(new SetFilterAction(filter));
  }

  clearCompletedTodos(): void {
    this.store.dispatch(new DeleteAllCompletedTodoAction());
  }

}
