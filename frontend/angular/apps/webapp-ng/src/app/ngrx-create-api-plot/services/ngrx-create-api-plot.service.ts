import { ElementRef, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Store } from "@ngrx/store";
import { Data, PlotlyHTMLElement, newPlot } from 'plotly.js-dist-min';
import { Observable, map, of } from "rxjs";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";

@Injectable()
export class NgrxCreateApliPlotService {

    private plotlyElementInstance$?: Observable<Promise<PlotlyHTMLElement>>;

    getPlotlyElementInstance$(parent: ElementRef): Observable<Promise<PlotlyHTMLElement>> {
        if (!this.plotlyElementInstance$) {
            this.plotlyElementInstance$ = this.getPlotInstance(parent);
        }
        return this.plotlyElementInstance$;
    }

    private renderer: Renderer2;

    constructor(rendererFactory: RendererFactory2, private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector, private store: Store<PlotModel>,) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

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

        return of(plotModel);
    }
   private getPlotInstance(parent: ElementRef): Observable<Promise<PlotlyHTMLElement>> {
        const result = this.store.select(this.ngrxCreateApiPlotSelector.getPlotDataState()).pipe(map(
            async (data: Array<Partial<Data>>) => {


                const layout = {
                    title: 'Responsive to window\'s size!',
                    font: { size: 18 }
                };

                const config = { responsive: true }
                const root = this.renderer.createElement("div");
                this.renderer.appendChild(parent.nativeElement, root);
                return await newPlot(root, data, layout, config);
            }
        ));
        return result;
    }
}