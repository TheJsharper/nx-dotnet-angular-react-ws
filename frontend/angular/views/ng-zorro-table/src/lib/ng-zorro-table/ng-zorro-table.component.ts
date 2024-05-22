import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ng-zorro-table',
  standalone: true,
 // imports: [CommonModule],
  templateUrl: './ng-zorro-table.component.html',
  styleUrl: './ng-zorro-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgZorroTableComponent {}
