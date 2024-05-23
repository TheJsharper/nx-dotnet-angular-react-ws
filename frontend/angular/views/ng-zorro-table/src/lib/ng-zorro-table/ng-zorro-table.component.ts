import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NgZorroBasicsTableComponent } from '../basics-table/ng-zorro-basics-table.component';
import { NgZorroSelectionOperationTableComponent } from '../selection-operation-table/ng-zorro-selection-operation-table.component';

@Component({
  selector: 'lib-ng-zorro-table',
  standalone: true,
  imports: [NzFlexModule, NgZorroBasicsTableComponent, NgZorroSelectionOperationTableComponent],
  templateUrl: './ng-zorro-table.component.html',
  styleUrl: './ng-zorro-table.component.scss',
})
export class NgZorroTableComponent { }
