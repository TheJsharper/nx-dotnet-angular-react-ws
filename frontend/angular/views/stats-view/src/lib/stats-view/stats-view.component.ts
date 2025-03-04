import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlotlyViewComponent } from "../../../../plotly-views/src/lib/plotly-view/plotly-view.component";
//import { PlotlyViewComponent } from 'plotly-view';
@Component({
  selector: 'lib-stats-view',
  standalone: true,
  imports: [CommonModule, PlotlyViewComponent],
  templateUrl: './stats-view.component.html',
  styleUrl: './stats-view.component.scss',
})
export class StatsViewComponent {

 
  
}
