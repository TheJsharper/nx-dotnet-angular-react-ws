import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit } from "@angular/core";
import { cloneDeep } from "lodash";
import { Layout, PlotRelayoutEvent, PlotlyHTMLElement, relayout } from "plotly.js-dist-min";
import { Subject } from "rxjs";

@Component({
    selector: 'ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit, OnDestroy {


    @Input() plotInstance?: Promise<PlotlyHTMLElement>;

    @Input("root") root?: ElementRef;



    private signalDestroyer$: Subject<void>;

    private currentLayout?: Layout;



    constructor(private zone: NgZone) {

        this.signalDestroyer$ = new Subject<void>();
    }

    private minusX?: number;
    private minusY?: number;
    async ngOnInit(): Promise<void> {


        this.currentLayout = (await this.plotInstance)?.layout;
        this.minusX = <number>this.currentLayout!["xaxis.range[0]"];
        this.minusY = <number>this.currentLayout!["xaxis.range[1]"];

        (await this.plotInstance)?.on("plotly_relayout", this.monitorRelayout);
        (await this.plotInstance)?.on("plotly_event", (data) => { console.log("DATA EVENT", data) });
        (await this.plotInstance)?.on("plotly_beforeplot", (data) => { console.log(" BEFORE PLOT DATA EVENT", data); return true; });


        console.log("AFTER DATA", (await this.plotInstance)?.layout)

    }

    async monitorRelayout(event: PlotRelayoutEvent): Promise<void> {
        console.log("===>", event);
    }



    async zoomMinusX(): Promise<void> {
        this.zone.runOutsideAngular(() => {
            if (this.root && this.currentLayout) {
                (<number>this.currentLayout!["xaxis.range[0]"]) += 1;
                (<number>this.currentLayout["xaxis.range[1]"]) += 1;

                relayout(this.root.nativeElement, cloneDeep(this.currentLayout))
            }
            /*   this.minusX -= 1;
              this.minusY += 1; */
        })
    }
    private plusX = 0.5;
    private plusY = 5;
    async zoomPlusX(): Promise<void> {
        this.zone.runOutsideAngular(() => {

            const newData: Partial<Layout> = cloneDeep({
                "xaxis.range[0]": this.plusX,
                "xaxis.range[1]": this.plusY
            })
            if (this.root)
                relayout(this.root.nativeElement, newData)
            this.plusX += 1;
            this.plusY -= 1;
        })
    }
    private minusXY = 0.5;
    private minusYY = 5;
    async zoomMinusY(): Promise<void> {
        this.zone.runOutsideAngular(() => {

            if (this.root)
                relayout(this.root.nativeElement, {
                    "yaxis.range[0]": this.minusXY,
                    "yaxis.range[1]": this.minusYY
                })
            this.minusXY -= 1;
            this.minusYY += 1;
        })
    }
    private plusXY = 0.5;
    private plusYY = 5;
    async zoomPlusY(): Promise<void> {
        this.zone.runOutsideAngular(() => {

            if (this.root)
                relayout(this.root.nativeElement, {
                    "yaxis.range[0]": this.plusXY,
                    "yaxis.range[1]": this.plusYY
                })
            this.plusXY += 1;
            this.plusYY -= 1;
        })
    }
    ngOnDestroy(): void {
        if (!this.signalDestroyer$.closed) {
            this.signalDestroyer$.next();
            this.signalDestroyer$.complete();
            this.signalDestroyer$.unsubscribe();
        }
    }
}