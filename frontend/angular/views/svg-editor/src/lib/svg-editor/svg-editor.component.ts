import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-svg-editor',
  standalone: true,
  imports: [CommonModule, NzMenuModule, NzButtonModule, NzSelectModule, FormsModule, NzRadioModule],
  templateUrl: './svg-editor.component.html',
  styleUrl: './svg-editor.component.scss',
})
export class SvgEditorComponent {
  selectedValue = null;
  size: 'rect' | 'circle' | 'path' = 'circle';
  circle: string = "";
  circles: { x: number, y: number }[] = [];
  rects: { x: number, y: number }[] = [
    {
      y: 150,
      x: 100
    }
  ];

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
    //  console.log("click", $event);
    if (this.size == 'circle') {

      this.circles.push({ x: $event.offsetX, y: $event.offsetY });
      console.log("Click", this.size);
    } else if (this.size == 'rect') {
      this.rects.push({ x: $event.offsetX, y: $event.offsetY });
      console.log("Click", this.size);
    }else{
      
      this.rects.push({ x: $event.offsetX, y: $event.offsetY });
    }
  }

}
