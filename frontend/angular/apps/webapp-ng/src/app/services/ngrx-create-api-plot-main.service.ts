import { Injectable, RendererFactory2 } from "@angular/core";
import { Config, Layout, PlotData, PlotlyHTMLElement, newPlot } from "plotly.js-dist-min";

@Injectable()
export class NgrxCreateApiPlotMainService {

    private _plotInstance: Promise<PlotlyHTMLElement>;


    public get plotInstance(): Promise<PlotlyHTMLElement> {
        return this._plotInstance;
    }

    public set plotInstance(value: Promise<PlotlyHTMLElement>) {
        this._plotInstance = value;
    }

    constructor(private rendererFactory: RendererFactory2) {
        this._plotInstance = this.getPlotInstance();
    }
    private async getPlotInstance(): Promise<PlotlyHTMLElement> {

        const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yArray = [55, 49, 44, 24, 15];


        const data: Array<Partial<PlotData>> = [{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "v",

            marker: { color: "rgba(0, 0, 255, 0.5)" }
        }];

        const layout: Partial<Layout> = {
            clickmode: "event+select",
            font: { size: 18 },


        };

        const config: Partial<Config> = { responsive: true };

        const renderer = this.rendererFactory.createRenderer(null, null);

        const parent: HTMLDivElement = renderer.createElement("div");

        parent.classList.add('main-test-container');



        const el = await newPlot(parent, data, layout, config);

        return el;


    }
}