import { Component } from '@angular/core';
import { CounterState, selectValue } from '../store/ngrx-create-api-counter.reducers';
import { Store } from '@ngrx/store';
import { divide, multiply } from '../store/ngrx-create-api-counter.actions';
import { Observable } from 'rxjs';
import { NgrxCreateApiCounterGrandchildComponent } from '../ngrx-create-api-counter-grandchild/ngrx-create-api-counter-grandchild.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-create-api-counter-child',
  templateUrl: './ngrx-create-api-counter-child.component.html',
  standalone:true, 
  imports:[NgrxCreateApiCounterGrandchildComponent, AsyncPipe],
  styles: [],
})
export class NgrxCreateApiCounterChildComponent {

  counter$: Observable<number>;


  constructor(private store: Store<CounterState>) {
    this.counter$ = this.store.select(selectValue);
  }

  multiply(): void {
    this.store.dispatch(multiply({ data: 2 }))
  }
  divide(): void {
    this.store.dispatch(divide({ data: 2 }))
  }
}
