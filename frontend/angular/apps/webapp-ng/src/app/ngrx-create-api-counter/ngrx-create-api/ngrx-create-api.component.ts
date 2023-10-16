import { Component } from '@angular/core';
import { CounterState, selectValue } from '../store/ngrx-create-api-counter.reducers';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/ngrx-create-api-counter.actions';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-ngrx-create-api',
  templateUrl: './ngrx-create-api.component.html',
  styles: [],
})
export class NgrxCreateApiComponent {

  counter$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.counter$ = this.store.select(selectValue);
  }


  increment(): void {
    this.store.dispatch(increment({ data: 1 }))
  }
  decrement(): void {

    this.store.dispatch(decrement({ data: 1 }))
  }
}
