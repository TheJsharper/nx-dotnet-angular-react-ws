import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-svg-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-editor.component.html',
  styleUrl: './svg-editor.component.scss',
})
export class SvgEditorComponent {
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

}
