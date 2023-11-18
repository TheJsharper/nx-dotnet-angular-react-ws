import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-simple-grandchild',
  templateUrl: './counter-simple-grandchild.component.html',
  styleUrls: ['./counter-simple-grandchild.component.scss'],
})
export class CounterSimpleGrandchildComponent {
  @Input() counter?: number;
  @Output() changedCounter = new EventEmitter<number>();

  reset(): void {
    this.counter = 0;
    this.changedCounter.emit(this.counter);
  }

}
