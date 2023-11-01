import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Layout, PlotMouseEvent, PlotRelayoutEvent, PlotlyHTMLElement, relayout } from "plotly.js-dist-min";
import { Observable, Subject, first, takeUntil, tap } from "rxjs";
import { SelectedPlotDataAction } from "../store/ngrx-create-api-plot.actions";
import { PlotModel, Selection, initialPlotModel } from "../store/ngrx-create-api-plot.models";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { cloneDeep } from "lodash";

@Component({
    selector: 'ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit, OnDestroy {


    @Input() plotInstance?: Promise<PlotlyHTMLElement>;

    @Input("root") root?: ElementRef;

    private selected: Observable<Selection>;

    private selection: Selection;

    private coordenateXY: Array<{ x: string; y: number; }>;

    private signalDestroyer$: Subject<void>;

    private currentLayout?: Layout;



    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector,
        private store: Store<PlotModel>, private zone: NgZone) {

        this.coordenateXY = [];

        this.selection = initialPlotModel.selected;

        this.signalDestroyer$ = new Subject<void>();

        this.selected = this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState());


    }

    private minusX?: number;
    private minusY?: number;
    async ngOnInit(): Promise<void> {


        this.currentLayout = (await this.plotInstance)?.layout;
        this.minusX = <number>this.currentLayout!["xaxis.range[0]"];
        this.minusY = <number>this.currentLayout!["xaxis.range[1]"]

        this.store.select(this.ngrxCreateApiPlotSelector.getPlotArrayXY())
            .pipe(takeUntil(this.signalDestroyer$), first(), tap(next => this.coordenateXY = next)).subscribe()

        this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState())
            .pipe(takeUntil(this.signalDestroyer$), tap((value) => this.selection = value))
            .subscribe();





        (await this.plotInstance)?.on("plotly_relayout", this.monitorRelayout);
        (await this.plotInstance)?.on("plotly_event", (data) => { console.log("DATA EVENT", data) });
        (await this.plotInstance)?.on("plotly_beforeplot", (data) => { console.log(" BEFORE PLOT DATA EVENT", data); return true; });


        console.log("AFTER DATA", (await this.plotInstance)?.layout)

    }
    navegateToNextLeft(): void {

        if (0 <= this.selection.index - 1) {
            const key = this.coordenateXY[this.selection.index - 1].x;
            this.store.dispatch(SelectedPlotDataAction({ key }))
        }
    }
    navegateToNextRight(): void {

        if (0 <= this.selection.index + 1 && this.selection.index + 1 < this.coordenateXY.length) {
            const key = this.coordenateXY[this.selection.index + 1].x;
            this.store.dispatch(SelectedPlotDataAction({ key }));
        }
    }
    navegateToFirstElement(): void {

        const key = this.coordenateXY[0].x;
        this.store.dispatch(SelectedPlotDataAction({ key }));
    }
    navegateToLastElement(): void {

        const key = this.coordenateXY[this.coordenateXY.length - 1].x;
        this.store.dispatch(SelectedPlotDataAction({ key }));

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