import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NgZorroBasicsTableComponent } from '../basics-table/ng-zorro-basics-table.component';

@Component({
  selector: 'lib-ng-zorro-table',
  standalone: true,
  imports: [NzFlexModule, NgZorroBasicsTableComponent],
  templateUrl: './ng-zorro-table.component.html',
  styleUrl: './ng-zorro-table.component.scss',
})
export class NgZorroTableComponent { }
