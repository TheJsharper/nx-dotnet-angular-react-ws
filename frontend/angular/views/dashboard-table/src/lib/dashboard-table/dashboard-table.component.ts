import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-dashboard-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.sass',
})
export class DashboardTableComponent {}
