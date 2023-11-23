import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from "@angular/core";
import { Subject, takeUntil, tap } from "rxjs";
import { NgrxCreateApiPlotMainService } from "../../services/ngrx-create-api-plot-main.service";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";

@Component({
    selector: 'app-main',
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

            this.ngrxCreateApliPlotService.getPlotInstance(elPlot).pipe(
                takeUntil(this.signalDestroyer$),
                tap((value) => {
                    value.then(async (vv) => {
                        console.log("wowowow===>", vv);
                        this.renderer.appendChild(this.scenePlot!.nativeElement, elPlot);
                    }).then(async (v) => {
                        console.log("wowowow===>", v);
                        return await this.ngrxCreateApliPlotService.getPlotNextInstance(elPlot);
                    }).catch((err) => {
                        console.log("=========", err)
                    });
                })
            ).subscribe();

       /*      const seconds = interval(1000);

            const next = seconds
                .pipe(timeInterval());
            next.
                pipe(tap(async () => {
                    await this.ngrxCreateApliPlotService.getPlotNextInstance(elPlot);


                })).
                subscribe(); */

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