import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterSimpleGrandchildComponent } from '../counter-simple-grandchild/counter-simple-grandchild.component';

@Component({
  selector: 'app-counter-simple-child',
  templateUrl: './counter-simple-child.component.html',
  imports:[CounterSimpleGrandchildComponent],
  standalone:true,
  styleUrls: ['./counter-simple-child.component.scss'],
})
export class CounterSimpleChildComponent {

  @Input({} ) counter?: number;

  @Output() changedCounter = new EventEmitter<number>();

  multiply(): void {
    if (this.counter)
      this.counter *= 2;
    this.changedCounter.emit(this.counter);
  }
  divide(): void {
    if (this.counter)
      this.counter /= 2;
    this.changedCounter.emit(this.counter);
  }
  reset($event:number):void{
    this.changedCounter.emit($event);
  }
}
