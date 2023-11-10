import { ElementRef, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { cloneDeep } from 'lodash';
import { Config, Data, Layout, PlotData, PlotlyHTMLElement, newPlot, purge, update } from 'plotly.js-dist-min';
import { Observable, map, of } from "rxjs";
import { Axis, PlotModel } from "../store/ngrx-create-api-plot.models";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { LoadedLayoutDataAction } from "../store/ngrx-create-api-plot.actions";

@Injectable()
export class NgrxCreateApliPlotService {



    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector, private store: Store<PlotModel>,) {

    }

    getPlotData(): Observable<PlotModel> {

        const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yArray = [55, 49, 44, 24, 30];


        const data: Array<Partial<PlotData>> = [{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "v",

            marker: { color: "rgba(0, 0, 255, 0.5)" }
        }];

        const plotModel: PlotModel = {
            data, selected: { key: xArray[0], value: yArray[0], index: 0 },
            layout: {}
        }

        return of(plotModel);
    }

    public getPlotInstance(initial: PlotlyHTMLElement): Observable<Promise<PlotlyHTMLElement>> {
        const result = this.store.select(this.ngrxCreateApiPlotSelector.getPlotDataState()).pipe(map(
            async (data: Array<Partial<Data>>) => {


                const layout: Partial<Layout> = {
                    clickmode: "event+select",

                    font: { size: 18 },
                    scene: {
                        camera: {
                            eye: {
                                x: 2,
                                y: 2,
                                z: 2
                            }
                        },
                        aspectmode: "manual",
                        aspectratio: {

                            x: 2,
                            y: 3
                        }
                    }

                };

                const config: Partial<Config> = { responsive: true };
                const newData = data.map((value: Partial<Data>) => cloneDeep(value));

                const newRoot = initial.getRootNode() as HTMLElement;
                purge(newRoot);
                const el = await newPlot(newRoot, newData, layout, config);
                if (el?.layout?.xaxis?.range && el?.layout?.yaxis?.range) {
                    const xaxis: [number, number] = [el.layout.xaxis.range[0], el.layout.xaxis.range[1]];
                    const yaxis: [number, number] = [el.layout.yaxis.range[0], el.layout.yaxis.range[1]];
                    this.store.dispatch(LoadedLayoutDataAction({ layout: { xaxis, yaxis } }))
                }
                return el;
            }
        ));
        return result;
    }
}