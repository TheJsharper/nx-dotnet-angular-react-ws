import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { PlotMouseEvent, PlotlyHTMLElement } from "plotly.js";
import { Observable, Subject, first, takeUntil, tap } from "rxjs";
import { SelectedPlotDataAction } from "../store/ngrx-create-api-plot.actions";
import { PlotModel, Selection, initialPlotModel } from "../store/ngrx-create-api-plot.models";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";

@Component({
    selector: 'ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit {

    @Input() plotInstance?: Promise<PlotlyHTMLElement>;

    formGroup: FormGroup;

    private selected: Observable<Selection>;

    private selection: Selection;

    private coordenateXY: Array<{ x: string; y: number; }>;

    private signalDestroyer$: Subject<void>;



    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector,
        private store: Store<PlotModel>) {

        this.coordenateXY = [];

        this.selection = initialPlotModel.selected;

        this.signalDestroyer$ = new Subject<void>();

        this.selected = this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState());

        this.formGroup = new FormGroup({
            key: new FormControl<string>(''),
            value: new FormControl<number>(-1)
        })
    }

    async ngOnInit(): Promise<void> {
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotArrayXY())
            .pipe(takeUntil(this.signalDestroyer$), first(), tap(next => this.coordenateXY = next)).subscribe()

        this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState())
            .pipe(takeUntil(this.signalDestroyer$), tap((value) => this.selection = value))
            .subscribe();

        this.selected.
            pipe(takeUntil(this.signalDestroyer$), tap((value) => {
                this.formGroup.get("key")?.setValue(value.key);
                this.formGroup.get("value")?.setValue(value.value);
            })).subscribe();


        (await this.plotInstance)?.on('plotly_click', (event: PlotMouseEvent) => {
           
            const key = <string>event.points[0].x;
            this.store.dispatch(SelectedPlotDataAction({ key }))
        });


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
}