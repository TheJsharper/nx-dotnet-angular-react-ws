import { Component } from '@angular/core';

import { MainComponent } from './main.component';

@Component({
  imports: [MainComponent],
  selector: 'app-my-mf-todo-remote-entry',
  template: `<app-main />`,
})
export class RemoteEntryComponent {}
