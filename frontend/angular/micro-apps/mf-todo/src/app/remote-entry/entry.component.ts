import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoMainComponent } from "../../lib/todo-component";

@Component({
  imports: [CommonModule, TodoMainComponent],
  selector: 'lib-mf-todo-remote-entry',
  template: `<lib-todo-main/>`
})
export class RemoteEntryComponent {}
