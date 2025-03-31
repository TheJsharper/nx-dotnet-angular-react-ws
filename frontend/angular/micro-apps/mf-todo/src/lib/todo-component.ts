import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'lib-todo-main',
    template: '<router-outlet/>',
    styleUrls: ['./todo-component.css'],
    imports:[RouterOutlet]
})

export class TodoMainComponent  {
   
}