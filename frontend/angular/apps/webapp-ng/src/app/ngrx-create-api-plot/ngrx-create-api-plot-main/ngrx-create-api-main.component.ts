import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Data, newPlot } from 'plotly.js-dist-min';
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { Store } from "@ngrx/store";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { tap } from "rxjs";

@Component({
    templateUrl: './ngrx-create-api-main.component.html'
})
export class NgrxCreateApiMainComponent implements AfterViewInit {



    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector, private store: Store<PlotModel>) { }
    private myDiv?: ElementRef;

    @ViewChild('myDiv') set content(content: ElementRef) {
        this.myDiv = content;
    }
    ngAfterViewInit(): void {
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotFeatureSelector()).subscribe(console.log)
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotDataState()).subscribe(console.log)
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState()).subscribe(console.log)



        this.store.select(this.ngrxCreateApiPlotSelector.getPlotDataState()).pipe(tap(
            async (data2: Array<Partial<Data>>) => {

                const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
                const yArray = [55, 49, 44, 24, 15];

                const data: Array<Partial<Data>> = [{
                    x: xArray,
                    y: yArray,
                    type: "bar",
                    orientation: "v",
                    marker: { color: "rgba(0,0,255)" }
                }];
                const layout = {
                    title: 'Responsive to window\'s size!',
                    font: { size: 18 }
                };

                const config = { responsive: true }

                await newPlot(this.myDiv?.nativeElement, data2, layout, config);
            }
        )).subscribe();

    }
}