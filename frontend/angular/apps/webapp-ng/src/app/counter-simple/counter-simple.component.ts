import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-simple',
  templateUrl: './counter-simple.component.html',
  styleUrls: ['./counter-simple.component.scss'],
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
