import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../store/ngrx-create-api-counter.actions';
import { CounterState, selectValue } from '../store/ngrx-create-api-counter.reducers';
import { NgrxCreateApiCounterChildComponent } from '../ngrx-create-api-counter-child/ngrx-create-api-counter-child.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-create-api',
  templateUrl: './ngrx-create-api.component.html',
  standalone:true,
  imports:[NgrxCreateApiCounterChildComponent, AsyncPipe],
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
