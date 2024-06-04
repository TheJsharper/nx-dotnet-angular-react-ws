import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';
import {  NzRadioModule} from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-svg-editor',
  standalone: true,
  imports: [CommonModule, NzMenuModule, NzButtonModule, NzSelectModule, FormsModule, NzRadioModule],
  templateUrl: './svg-editor.component.html',
  styleUrl: './svg-editor.component.scss',
})
export class SvgEditorComponent {
  selectedValue= null;
  size: NzSelectSizeType = 'default';
  circle:string = "";
  drawings: { x: number, y: number }[] = [
    {
      x: 10,
      y: 20,
    },
    {
      x: 20,
      y: 40,
    },
    {
      x: 30,
      y: 60,
    },
    {
      x: 40,
      y: 60,
    },

  ]

  leave(): void {
    console.log("leaving")
  }

  move($event: any): void {
    console.log("move", $event)
  }

  up(): void {
    console.log("up")
  }

  down($event: any, d: any): void {
    console.log("down", $event, d)
  }
  click($event: MouseEvent): void {
    console.log("click", $event);
    this.drawings.push({x:$event.offsetX  , y:   $event.offsetY});
   // this.circle = `circle r="3" fill="red" [attr.cx]="d.x" [attr.cy]="d.y" (mousedown)="down($event, d)" (mouseup)="up()" ></circle>`;
  }

}
