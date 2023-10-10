import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { NgrxSimpleCounterDivideAction, NgrxSimpleCounterMultiplyAction } from '../store/ngrx-simple-counter.actions';

@Component({
  selector: 'app-ngrx-simple-counter-child',
  templateUrl: './ngrx-simple-counter-child.component.html',
  styles: [],
})
export class NgrxSimpleCounterChildComponent {

  counter$: Observable<number>;

  constructor(private store: Store<{ simpleCounter: number }>) {
    this.counter$ = this.store.pipe(map((value: { simpleCounter: number }) => value.simpleCounter));
  }

  multiply(): void {
    this.store.dispatch(new NgrxSimpleCounterMultiplyAction(2));
  }
  divide(): void {
    this.store.dispatch(new NgrxSimpleCounterDivideAction(2));

  }
}
