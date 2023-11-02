import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash";
import { Layout, PlotRelayoutEvent, PlotlyHTMLElement, relayout } from "plotly.js-dist-min";
import { Subject, filter, tap } from "rxjs";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { LoadedLayoutDataAction } from "../store/ngrx-create-api-plot.actions";

@Component({
    selector: 'ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit, OnDestroy {


    @Input() plotInstance?: Promise<PlotlyHTMLElement>;

    @Input("root") root?: ElementRef;



    private signalDestroyer$: Subject<void>;

    private currentLayout?: Layout;



    constructor(private zone: NgZone, private store: Store<PlotModel>, private selector: NgrxCreateApiPlotSelector) {

        this.signalDestroyer$ = new Subject<void>();
    }


    async ngOnInit(): Promise<void> {

        this.store.select(this.selector.getPlotLayoutState()).pipe(
            filter((value) => Object.keys(value).length > 0),
            tap((layout) => {

                this.zone.runOutsideAngular(() => {

                    if (layout.xaxis && layout.yaxis) {

                        const newData: Partial<Layout> = cloneDeep({
                            "xaxis.range[0]": layout.xaxis[0],
                            "xaxis.range[1]": layout.xaxis[1],
                            "yaxis.range[0]": layout.yaxis[0],
                            "yaxis.range[1]": layout.yaxis[1],
                        })
                        if (this.root)
                            relayout(this.root.nativeElement, newData)
                    }

                })
            })

        ).subscribe();



        (await this.plotInstance)?.on("plotly_relayout", this.monitorRelayout);
        (await this.plotInstance)?.on("plotly_event", (data) => { console.log("DATA EVENT", data) });
        (await this.plotInstance)?.on("plotly_beforeplot", (data) => { console.log(" BEFORE PLOT DATA EVENT", data); return true; });




    }

    async monitorRelayout(event: PlotRelayoutEvent): Promise<void> {
        console.log("===>", event);
    }



    async zoomMinusX(): Promise<void> {
        if (this.currentLayout?.xaxis.range && this.currentLayout.yaxis.range) {
            const xaxis: [number, number] = [this.currentLayout.xaxis.range[0], this.currentLayout.xaxis.range[1]];
            const yaxis: [number, number] = [this.currentLayout.xaxis.range[0] + 1, this.currentLayout.xaxis.range[1] + 1];
            this.store.dispatch(LoadedLayoutDataAction({ layout: { xaxis, yaxis } }))
        }
    }

    async zoomPlusX(): Promise<void> {
        this.currentLayout = (await this.plotInstance)?.layout;
        if (this.currentLayout?.xaxis.range && this.currentLayout.yaxis.range) {
            const xaxis: [number, number] = [this.currentLayout.xaxis.range[0] + 1, this.currentLayout.xaxis.range[1] + 1];
            const yaxis: [number, number] = [this.currentLayout.xaxis.range[0], this.currentLayout.xaxis.range[1]];
            this.store.dispatch(LoadedLayoutDataAction({ layout: { xaxis, yaxis } }))
        }
    }

    async zoomMinusY(): Promise<void> {
        this.currentLayout = (await this.plotInstance)?.layout;
        if (this.currentLayout?.xaxis.range && this.currentLayout.yaxis.range) {
            const xaxis: [number, number] = [this.currentLayout.xaxis.range[0], this.currentLayout.xaxis.range[1]];
            const yaxis: [number, number] = [this.currentLayout.xaxis.range[0] - 1, this.currentLayout.xaxis.range[1] - 1];
            this.store.dispatch(LoadedLayoutDataAction({ layout: { xaxis, yaxis } }))
        }
    }

    async zoomPlusY(): Promise<void> {
        this.currentLayout = (await this.plotInstance)?.layout;

        if (this.currentLayout?.xaxis.range && this.currentLayout.yaxis.range) {
            const xaxis: [number, number] = [this.currentLayout.xaxis.range[0], this.currentLayout.xaxis.range[1]];
            const yaxis: [number, number] = [this.currentLayout.xaxis.range[0] + 1, this.currentLayout.xaxis.range[1] + 1];
            this.store.dispatch(LoadedLayoutDataAction({ layout: { xaxis, yaxis } }))
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