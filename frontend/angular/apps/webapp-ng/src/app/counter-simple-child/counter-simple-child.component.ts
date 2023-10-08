import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-simple-child',
  templateUrl: './counter-simple-child.component.html',
  styleUrls: ['./counter-simple-child.component.scss'],
})
export class CounterSimpleChildComponent {

  @Input('counter') counter?:number;
}
