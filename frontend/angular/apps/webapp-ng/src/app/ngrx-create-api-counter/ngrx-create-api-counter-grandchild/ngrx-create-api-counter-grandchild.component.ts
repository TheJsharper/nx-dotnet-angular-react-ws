import { Component } from '@angular/core';
import { CounterState, selectValue } from '../store/ngrx-create-api-counter.reducers';
import { Store } from '@ngrx/store';
import { path } from '../store/ngrx-create-api-counter.actions';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-create-api-counter-grandchild',
  templateUrl: './ngrx-create-api-counter-grandchild.component.html',
  standalone:true,
  imports:[AsyncPipe],
  styles: [],
})
export class NgrxCreateApiCounterGrandchildComponent {
  counter$:Observable<number>;
  constructor(private store:Store<CounterState>){
    this.counter$ = this.store.select(selectValue);
  }


  reset():void{
    this.store.dispatch(path({data:0}));
  }
  path(pathValue:string):void{
    if(pathValue !== '')
    this.store.dispatch(path({data:parseInt(pathValue)}));
  else
    this.store.dispatch(path({data:0}));

  }
}
