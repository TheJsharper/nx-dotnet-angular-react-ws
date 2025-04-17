import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'lib-todo-main',
    template: '<router-outlet/>',
    styleUrls: ['./todo-component.scss'],
    imports:[RouterOutlet]
})

export class TodoMainComponent  {
   
}