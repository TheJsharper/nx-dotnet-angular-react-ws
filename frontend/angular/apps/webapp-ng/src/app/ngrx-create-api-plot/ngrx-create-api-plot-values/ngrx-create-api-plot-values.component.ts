import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PlotMouseEvent, PlotlyHTMLElement } from 'plotly.js-dist-min';
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


    private plotInstance: Promise<PlotlyHTMLElement>;

    formGroup: FormGroup;

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


        (await this.plotInstance)?.on('plotly_click', (event: PlotMouseEvent) => {
            console.log("Cliking", event)
            const key = <string>event.points[0].x;
            this.store.dispatch(SelectedPlotDataAction({ key }))
        });

    }
    ngOnDestroy(): void {
        console.log("ngOnDestroy");
        if (!this.signalDestroyer$.closed) {
            this.signalDestroyer$.next();
            this.signalDestroyer$.complete();
            this.signalDestroyer$.unsubscribe();
        }
    }
}