import { Component } from '@angular/core';
import { CounterSimpleChildComponent } from './counter-simple-child/counter-simple-child.component';

@Component({
  selector: 'app-counter-simple',
  templateUrl: './counter-simple.component.html',
  standalone:true, 
  imports:[CounterSimpleChildComponent]
})
export class CounterSimpleComponent {
  counter: number;

  constructor() {

    this.counter = 10;
  }

  increment():void{
    this.counter ++;
  }

  decrement():void{
    this.counter ++;
  }
}
