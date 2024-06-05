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
  rects: { x: number, y: number }[] = [];
  lines: { x1: number, y1: number, x2: number, y2: number }[] = [];
  lineCurrent?: { x1?: number, y1?: number, x2?: number, y2?: number };

  leave(): void {
    console.log("leaving")
  }

  move($event: MouseEvent): void {
    if (this.lineCurrent && this.lineCurrent.x1 && this.lineCurrent.y1) {

      this.lineCurrent.x2 = $event.offsetX;
      this.lineCurrent.y2 = $event.offsetY;
      console.log("move", this.lineCurrent);
    }
  }

  up(): void {
    console.log("up")
  }

  down($event: any, d: any): void {
    console.log("down", $event, d)
  }
  click($event: MouseEvent): void {
    if (this.size == 'circle') {

      this.circles.push({ x: $event.offsetX, y: $event.offsetY });
      console.log("Click", this.size);
    } else if (this.size == 'rect') {
      this.rects.push({ x: $event.offsetX, y: $event.offsetY });
      console.log("Click", this.size);
    } else {
      if (this.lineCurrent && this.lineCurrent.x2 && this.lineCurrent.y2 && this.lineCurrent.x1 && this.lineCurrent.y1) {

        this.lines.push({ x1: this.lineCurrent.x1, y1: this.lineCurrent.y1, x2: this.lineCurrent.x2, y2: this.lineCurrent.y2 });
        this.lineCurrent = {};
      } else
        this.lineCurrent = { x1: $event.offsetX, y1: $event.offsetY }
    }
  }

}
