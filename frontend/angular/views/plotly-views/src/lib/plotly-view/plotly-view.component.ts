import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Layout, newPlot, PlotlyHTMLElement, PlotMouseEvent } from 'plotly.js';

@Component({
  selector: 'lib-plotly-view',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './plotly-view.component.html',
  styleUrl: './plotly-view.component.scss',
})
export class PlotlyViewComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }




  async ngOnInit(): Promise<void> {
    const trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers',
      name: 'Scatter',
    };

    const trace2 = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      name: 'Lines',
    };

    const trace3 = {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      name: 'Scatter + Lines',
    };

    const data = [trace1, trace2, trace3];
    const layout: Partial<Layout> = {
      title: 'Adding Names to Line and Scatter Plot',
      width: 1800, height: 800, plot_bgcolor: '#cccccc'

    };

    const plotly: PlotlyHTMLElement = await newPlot(this.el.nativeElement, data, { ...layout }, { responsive: true, scrollZoom: false, });

    console.log("DATA", plotly.data);

    plotly.on('plotly_click', (ev: PlotMouseEvent) => { console.log("onclick", ev); return true; })

  }

}
