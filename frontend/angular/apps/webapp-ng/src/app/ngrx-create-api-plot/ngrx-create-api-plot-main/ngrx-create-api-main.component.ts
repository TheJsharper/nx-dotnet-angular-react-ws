import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Data, PlotlyHTMLElement, newPlot } from 'plotly.js-dist-min';
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { Store } from "@ngrx/store";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { Observable, map, tap } from "rxjs";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";

@Component({
    templateUrl: './ngrx-create-api-main.component.html'
})
export class NgrxCreateApiMainComponent implements OnInit, AfterViewInit {


    private myDiv?: ElementRef;

    plot$?: Observable<Promise<PlotlyHTMLElement>>;

    @ViewChild('myDiv') set content(content: ElementRef) {
        this.myDiv = content;
    }

    constructor(private ngrxCreateApliPlotService: NgrxCreateApliPlotService, private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector, private store: Store<PlotModel>, private el: ElementRef, private renderer: Renderer2) { }
    ngOnInit(): void {
        this.plot$ = this.ngrxCreateApliPlotService.getPlotInstance();
    }

    ngAfterViewInit(): void {
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotDataState()).pipe(tap(
            async (data: Array<Partial<Data>>) => {


                const layout = {
                    title: 'Responsive to window\'s size!',
                    font: { size: 18 }
                };

                const config = { responsive: true }

                await newPlot(this.myDiv?.nativeElement, data, layout, config);
            }
        )).subscribe();

    }
}