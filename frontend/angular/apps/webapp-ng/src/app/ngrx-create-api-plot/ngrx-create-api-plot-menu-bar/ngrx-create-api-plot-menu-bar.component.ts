import { Component, Input, OnInit } from "@angular/core";
import { PlotMouseEvent, PlotlyHTMLElement } from "plotly.js";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { PlotModel, initialPlotModel } from "../store/ngrx-create-api-plot.models";
import { Store } from "@ngrx/store";
import { Observable, first, last, map, take } from "rxjs";
import { Selection } from '../store/ngrx-create-api-plot.models';
import { FormControl, FormGroup } from "@angular/forms";
import { SelectedPlotDataAction } from "../store/ngrx-create-api-plot.actions";

@Component({
    selector: 'ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit {

    @Input() plotInstance?: Promise<PlotlyHTMLElement>;
    selected: Observable<Selection>;
    formGroup: FormGroup;
    selection: Selection = initialPlotModel.selected;
    coordenateXY: Array<{ x: string; y: number; }> = []



    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector,
        private store: Store<PlotModel>) {
        this.selected = this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState());
        this.formGroup = new FormGroup({
            key: new FormControl<string>(''),
            value: new FormControl<number>(-1)
        })
    }

    async ngOnInit(): Promise<void> {
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotArrayXY()).pipe(first()).subscribe(
            (next) => this.coordenateXY = next)
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState()).subscribe((value) => {

            this.selection = value;
        });

        this.selected.subscribe(value => {
            console.log("===>", value);
            this.formGroup.get("key")?.setValue(value.key);
            this.formGroup.get("value")?.setValue(value.value);
        });
        (await this.plotInstance)?.on('plotly_click', (event: PlotMouseEvent) => {
            const key = <string>event.points[0].x
            console.log("click====>", event, key);
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