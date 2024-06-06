import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
//import { DataTableComponent} from 'angular-components-core-ui-0.0.1-124147/package'

@Component({
  selector: 'lib-svg-editor',
  standalone: true,
  imports: [CommonModule, NzMenuModule, NzButtonModule, NzSelectModule, FormsModule, NzRadioModule/* , DataTableComponent */],
  templateUrl: './svg-editor.component.html',
  styleUrl: './svg-editor.component.scss',
})
export class SvgEditorComponent {
  selectedValue = null;
  selectItem: 'rect' | 'circle' | 'path' = 'rect';
  circle = "";
  circles: { x: number, y: number }[] = [];
  rects: { x?: number, y?: number, width?: number, heigth?: number }[] = [];

  rectCurrent: { x?: number, y?: number, width?: number, heigth?: number } = {};

  lines: { x1: number, y1: number, x2: number, y2: number }[] = [];
  lineCurrent?: { x1?: number, y1?: number, x2?: number, y2?: number } = {};

  leave(): void {
    if(this.selectItem === "rect" && this.rectCurrent.x && this.rectCurrent.y && this.rectCurrent.width && this.rectCurrent.heigth){
      this.rects.push({ ...this.rectCurrent });
      this.rectCurrent = {};
    }
    console.log("leaving")
  }

  move($event: MouseEvent): void {
    const e  = $event;
    if (this.selectItem === "path" && this.lineCurrent && this.lineCurrent.x1 && this.lineCurrent.y1) {

      this.lineCurrent.x2 = $event.offsetX;
      this.lineCurrent.y2 = $event.offsetY;
    }

    if (this.selectItem == "rect" && this.rectCurrent.x && this.rectCurrent.y) {
      const width = Math.abs($event.offsetX - this.rectCurrent.x);
      const height = Math.abs($event.offsetY - this.rectCurrent.y);
   
      if($event.offsetX - this.rectCurrent.x < 0){
          this.rectCurrent.width =   Math.max($event.offsetX , this.rectCurrent.x)- $event.offsetX;
      }else{

        this.rectCurrent.width = width;
      }

      if($event.offsetY - this.rectCurrent.y < 0){
        this.rectCurrent.heigth = Math.max($event.offsetY , this.rectCurrent.y) -$event.offsetY ;
    }else{

      this.rectCurrent.heigth = height;
    }
  
      //console.log(this.rectCurrent.x, this.rectCurrent.y, width, height, "==> ",  this.rectCurrent.x - $event.offsetY, "==>x ", this.rectCurrent.x - this.rectCurrent.y  );
     // console.log("=>x", e.)
    }
  }

  up(): void {
    console.log("up")
  }

  down($event: any, d: any): void {
    console.log("down", $event, d)
  }
  click($event: MouseEvent): void {
    if (this.selectItem == 'circle') {

      this.circles.push({ x: $event.offsetX, y: $event.offsetY });
      console.log("Click", this.selectItem);
    } else if (this.selectItem == 'rect') {
      if (this.rectCurrent.x && this.rectCurrent.y && this.rectCurrent.heigth && this.rectCurrent.width) {

        this.rects.push({ ...this.rectCurrent });
        this.rectCurrent = {};
      } else {
        this.rectCurrent = { x: $event.offsetX, y: $event.offsetY };
      }
    } else {
      if (this.lineCurrent && this.lineCurrent.x2 && this.lineCurrent.y2 && this.lineCurrent.x1 && this.lineCurrent.y1) {

        this.lines.push({ x1: this.lineCurrent.x1, y1: this.lineCurrent.y1, x2: this.lineCurrent.x2, y2: this.lineCurrent.y2 });
        this.lineCurrent = {};
      } else
        this.lineCurrent = { x1: $event.offsetX, y1: $event.offsetY }
    }
  }

}
