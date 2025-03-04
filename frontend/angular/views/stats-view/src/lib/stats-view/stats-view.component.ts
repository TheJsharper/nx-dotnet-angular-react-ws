import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterStickyTableComponent } from 'footer-sticky-table';
import { PlotlyViewComponent } from 'plotly-view';
@Component({
  selector: 'lib-stats-view',
  standalone: true,
  imports: [CommonModule,   PlotlyViewComponent, FooterStickyTableComponent],
  templateUrl: './stats-view.component.html',
  styleUrl: './stats-view.component.scss',
})
export class StatsViewComponent {

 
  
}
