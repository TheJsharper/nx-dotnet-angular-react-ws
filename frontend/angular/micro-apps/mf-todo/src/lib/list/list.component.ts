import { AsyncPipe, NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable, of } from 'rxjs';
import { FilterPipe } from '../filter';
import { ItemComponent } from '../item';
import { TodosState } from '../mf-todo/store/todo.reducer';
import { selectFilter, selectTodos } from '../mf-todo/store/todo.selectors';
import { Todo } from "../models/todo.model";

@Component({
    selector: 'lib-app-list',
    imports: [ItemComponent, FilterPipe, AsyncPipe, NgFor],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  filterType: Observable<'completed' | 'pending' | 'all' > = of('all');

  todos: Observable<Todo[]> = of([]);

  constructor(@Inject(Store) private store: Store<TodosState>) {

  }

  ngOnInit() {
    this.todos = this.store.pipe(select(selectTodos));

    this.filterType = this.store.pipe(select(selectFilter));
  }

}
