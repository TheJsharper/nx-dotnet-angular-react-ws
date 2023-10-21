import { Injectable } from "@angular/core";
import { Data } from 'plotly.js-dist-min';
import { Observable, of } from "rxjs";
import { PlotModel } from "../store/ngrx-create-api-plot.models";

@Injectable()
export class NgrxCreateApliPlotService {


    getPlotData(): Observable<PlotModel> {

        const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yArray = [55, 49, 44, 24, 15];

        const data: Array<Partial<Data>> = [{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "v",
           // marker: { color: "rgba(0,0,255)" }
        }];

        const plotModel: PlotModel = {
            data, selected: data[0]
        }

        return of(plotModel );
    }
}