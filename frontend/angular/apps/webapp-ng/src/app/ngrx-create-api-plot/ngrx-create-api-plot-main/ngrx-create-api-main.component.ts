import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from "@angular/core";
import { Subject, interval, map, mergeMap, takeUntil, tap, timeInterval } from "rxjs";
import { NgrxCreateApiPlotMainService } from "../../services/ngrx-create-api-plot-main.service";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";
import { PlotlyHTMLElement } from "plotly.js";

@Component({
    selector: 'main',
    templateUrl: './ngrx-create-api-main.component.html',
    styleUrls: ['./ngrx-create-api-main.component.scss']
})
export class NgrxCreateApiMainComponent implements AfterViewInit, OnDestroy {


    @ViewChild('scenePlot') scenePlot?: ElementRef;

    private signalDestroyer$: Subject<void>;

    constructor(
        private ngrxCreateApliPlotService: NgrxCreateApliPlotService,
        private ngrxCreateApiPlotMainService: NgrxCreateApiPlotMainService,
        private renderer: Renderer2) {
        this.signalDestroyer$ = new Subject<void>();
    }

    async ngAfterViewInit(): Promise<void> {

        if (this.scenePlot) {

            const elPlot = await this.ngrxCreateApiPlotMainService.plotInstance;

            const seconds = interval(1000);

            const next = seconds
                .pipe(timeInterval(), mergeMap((_) => this.ngrxCreateApliPlotService.getPlotInstance2(elPlot)))
            //  .subscribe(value => console.log(value));
            this.ngrxCreateApliPlotService.getPlotInstance(elPlot).pipe(
                takeUntil(this.signalDestroyer$),
                /*   tap((value) => {
  
                  }), */
                mergeMap(async(value: Promise<PlotlyHTMLElement>) => {
                   /*  return value.then((v: PlotlyHTMLElement) => {
                        return next.pipe(map((val) => val))
                    }); */
                    await value;
                    return next.pipe( tap((gg)=> console.log("ZZZZ", gg)));
                })
                , tap((value) => console.log("===>x", value))
            ).subscribe();

            this.renderer.appendChild(this.scenePlot.nativeElement, elPlot);

        }
    }


    ngOnDestroy(): void {

        if (!this.signalDestroyer$.closed) {
            this.signalDestroyer$.next();
            this.signalDestroyer$.complete();
            this.signalDestroyer$.unsubscribe();
        }
    }


}