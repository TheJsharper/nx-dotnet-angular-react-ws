
import { Injectable } from '@angular/core';
import { Data } from 'plotly.js-dist-min';
import { Observable, of } from 'rxjs';

@Injectable()
export class LibPlotkyService {

    getDataPlot(): Observable<Data[]> {
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
        return of(data);
    }
}