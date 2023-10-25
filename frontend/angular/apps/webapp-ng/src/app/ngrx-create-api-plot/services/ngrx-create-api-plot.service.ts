import { ElementRef, Injectable, RendererFactory2 } from "@angular/core";
import { Store } from "@ngrx/store";
import { Config, Data, Layout, PlotData, PlotlyHTMLElement, newPlot } from 'plotly.js-dist-min';
import { Observable, map, of } from "rxjs";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";

@Injectable()
export class NgrxCreateApliPlotService {



    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector, private store: Store<PlotModel>,) {

    }

    getPlotData(): Observable<PlotModel> {

        const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yArray = [55, 49, 44, 24, 15];

        const data: Array<Partial<PlotData>> = [{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "v",

            // marker: { color: "rgba(0,0,255)" }
        }];

        const plotModel: PlotModel = {
            data, selected: { key: xArray[0], value: yArray[0], index:0 }
        }

        return of(plotModel);
    }
    public getPlotInstance(parent: ElementRef): Observable<Promise<PlotlyHTMLElement>> {
        const result = this.store.select(this.ngrxCreateApiPlotSelector.getPlotDataState()).pipe(map(
            async (data: Array<Partial<Data>>) => {


                const layout: Partial<Layout> = {
                    title: 'Responsive to window\'s size!',
                    font: { size: 18 },

                };

                const config: Partial<Config> = { responsive: true }



                return await newPlot(parent.nativeElement, data, layout, config);
            }
        ));
        return result;
    }
}