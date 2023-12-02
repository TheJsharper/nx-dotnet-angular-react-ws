import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PlotHoverEvent, PlotMouseEvent, PlotSelectionEvent, PlotlyHTMLElement } from 'plotly.js-dist-min';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { NgrxCreateApiPlotMainService } from '../../services/ngrx-create-api-plot-main.service';
import { SelectedPlotDataAction } from '../store/ngrx-create-api-plot.actions';
import { PlotModel, Selection } from '../store/ngrx-create-api-plot.models';
import { NgrxCreateApiPlotSelector } from '../store/nrx-create-api-plot.selectors';

@Component({
    selector: 'app-nrgx-create-api-plot-values',
    templateUrl: 'ngrx-create-api-plot-values.component.html',
    imports: [CommonModule, ReactiveFormsModule],
    standalone: true
})

export class NgrxCreateApiPlotValuesComponent implements OnInit, OnDestroy {

    public formGroup: FormGroup;

    private plotInstance: Promise<PlotlyHTMLElement>;


    private selected: Observable<Selection>;

    private signalDestroyer$: Subject<void>;

    constructor(
        private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector,
        private store: Store<PlotModel>, private ngrxCreateApiPlotMainService: NgrxCreateApiPlotMainService) {

        this.signalDestroyer$ = new Subject<void>();

        this.plotInstance = this.ngrxCreateApiPlotMainService.plotInstance;

        this.selected = this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState());

        this.formGroup = new FormGroup({
            key: new FormControl<string>(''),
            value: new FormControl<number>(-1)
        })
    }



    async ngOnInit(): Promise<void> {
        this.selected.
            pipe(takeUntil(this.signalDestroyer$), tap((value) => {
                this.formGroup.get("key")?.setValue(value.key);
                this.formGroup.get("value")?.setValue(value.value);
            })).subscribe();

        const instance = await this.plotInstance;

        instance.on('plotly_click', (event: PlotMouseEvent) => {
            const key = <string>event.points[0].x;

            this.store.dispatch(SelectedPlotDataAction({ key }))
        });
        instance.on('plotly_selecting', (event: PlotSelectionEvent) => {
            const key = <string>event.points[0].x;

            this.store.dispatch(SelectedPlotDataAction({ key }))
        });
        instance.on('plotly_hover', (event: PlotHoverEvent) => {
            const key = <string>event.points[0].x;

            this.store.dispatch(SelectedPlotDataAction({ key }))
        });



    }
    async ngOnDestroy(): Promise<void> {
        const instance = await this.plotInstance;

        instance.removeAllListeners('plotly_click');

        instance.removeAllListeners('plotly_selecting');

        instance.removeAllListeners('plotly_hover');

        if (!this.signalDestroyer$.closed) {

            this.signalDestroyer$.next();

            this.signalDestroyer$.complete();

            this.signalDestroyer$.unsubscribe();
        }
    }
}