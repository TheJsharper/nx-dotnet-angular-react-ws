import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgrxSimpleCounterDecrementAction, NgrxSimpleCounterIncrementAction } from './store/ngrx-simple-counter.actions';
import { Observable, map } from 'rxjs';
import { NgrxSimpleCounterChildComponent } from './ngrx-simple-counter-child/ngrx-simple-counter-child.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-simple-counter',
  templateUrl: './ngrx-simple-counter.component.html',
  imports:[NgrxSimpleCounterChildComponent, AsyncPipe],
  styles: [],
})
export class NgrxSimpleCounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{ simpleCounter: number }>) {
    this.counter$ = this.store.pipe(map((value: { simpleCounter: number }) => value.simpleCounter));
  }

  increment(): void {
    this.store.dispatch(new NgrxSimpleCounterIncrementAction(1));
  }
  decrement(): void {
    this.store.dispatch(new NgrxSimpleCounterDecrementAction(1));

  }
}
