import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { NgrxSimpleCounterPatchAction, NgrxSimpleCounterResetAction } from '../store/ngrx-simple-counter.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-simple-counter-grandchild',
  templateUrl: './ngrx-simple-counter-grandchild.component.html',
  imports:[AsyncPipe],
  styles: [],
})
export class NgrxSimpleCounterGrandchildComponent {


  counter$: Observable<number>;

  constructor(private store: Store<{ simpleCounter: number }>) {
    this.counter$ = this.store.pipe(map((value: { simpleCounter: number }) => value.simpleCounter))
  }

  reset(): void {
    this.store.dispatch(new NgrxSimpleCounterResetAction());
  }
  path(inputValue: string): void {
    if (inputValue !== '')
      this.store.dispatch(new NgrxSimpleCounterPatchAction(parseInt(inputValue)));
    else
      this.store.dispatch(new NgrxSimpleCounterPatchAction(0));
  }
}
