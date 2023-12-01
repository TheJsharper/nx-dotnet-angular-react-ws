import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { cloneDeep } from 'lodash';
import { Config, Data, Datum, Layout, PlotData, PlotlyHTMLElement, extendTraces, newPlot, purge, restyle } from 'plotly.js-dist-min';
import { Observable, map, of } from "rxjs";
import { LoadedLayoutDataAction, UpdatePlotDataAction } from "../store/ngrx-create-api-plot.actions";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { Selection } from '../store/ngrx-create-api-plot.models';

@Injectable()
export class NgrxCreateApliPlotService {


    private selectedNode?: Selection;
    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector, private store: Store<PlotModel>,) {
        this.store.select(
            this.ngrxCreateApiPlotSelector.getPlotSelctedDataState()).subscribe((value: Selection) => this.selectedNode = value)
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

    public async getPlotNextInstance(initial: PlotlyHTMLElement): Promise<PlotlyHTMLElement> {

        const data = <number[]>(<Partial<PlotData>>initial.data[0]).y;

        const dataY = data.map((value: number) => value === 60 ? 1 : (value + 1));

        const update = {
            y: [[...dataY]]
        };

        const updateState = (<Partial<PlotData>>initial.data[0]);

        const updateNew = { ...updateState, y: [...<Datum[]>dataY] };

        if (this.selectedNode) {
            const dataX = <string[]>(<Partial<PlotData>>initial.data[0]).x;

            const index = dataX.findIndex((value: string) => value === this.selectedNode?.key);

            const value = dataY[index];

            const plotModel: Pick<PlotModel, "data" | "selected"> = {
                data: [updateNew],
                selected: { index: this.selectedNode.index, key: this.selectedNode.key, value }

            }
            this.store.dispatch(UpdatePlotDataAction({ plotModel }));
        }

        return await restyle(initial, update, [0]);


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




    public getSimpleCoord(): void {
        this.getInitialData().then((trace) => {
            newPlot("root", [trace]).then(
                () => {

                    setInterval(() => {
                        const update = {
                            x: [[Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1]],
                            y: [[Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1]]
                        };

                        extendTraces("root", update, [0]);
                    }, 1000);
                }
            );
        })
    }

    private sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    private async getInitialData(): Promise<Partial<Plotly.PlotData>> {
        // simulate HTTP call
        await this.sleep(2000);
        return {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: 'scatter'
        };
    }
}