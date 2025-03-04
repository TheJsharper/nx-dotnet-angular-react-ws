import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlotlyViewComponent } from 'plotly-view';
@Component({
  selector: 'lib-stats-view',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, PlotlyViewComponent],
  templateUrl: './stats-view.component.html',
  styleUrl: './stats-view.component.scss',
})
export class StatsViewComponent {

 
  
}
