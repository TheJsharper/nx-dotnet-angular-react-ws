import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestLibComponent } from '../../lib/test-lib/test-lib.component';

@Component({
  imports: [CommonModule, TestLibComponent],
  selector: 'app-tes-lib-remote-entry',
  template: `<app-lib-test-lib-bootstrap/>`,
})
export class RemoteEntryComponent {}
