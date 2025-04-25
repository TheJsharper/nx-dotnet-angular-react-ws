import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

@Component({
  imports: [CommonModule, MainComponent],
  selector: 'app-my-mf-todo-remote-entry',
  template: `<app-main />`,
})
export class RemoteEntryComponent {}
