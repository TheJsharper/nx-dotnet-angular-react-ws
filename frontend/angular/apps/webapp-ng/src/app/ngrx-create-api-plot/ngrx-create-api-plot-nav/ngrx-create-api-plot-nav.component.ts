import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgrxCreateApiPlotSelector } from '../store/nrx-create-api-plot.selectors';
import { PlotModel, Selection, initialPlotModel } from '../store/ngrx-create-api-plot.models';
import { Store } from '@ngrx/store';
import { SelectedPlotDataAction } from '../store/ngrx-create-api-plot.actions';
import { Subject, first, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ngrx-create-api-plot-nav',
    templateUrl: './ngrx-create-api-plot-nav.component.html',
    standalone: true,
    imports: [CommonModule]
})

export class NgrxCreateApiPlotNavComponent implements OnInit, OnDestroy {

    private selection: Selection;

    private coordenateXY: Array<{ x: string; y: number; }>;

    private signalDestroyer$: Subject<void>;

    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector,
        private store: Store<PlotModel>,) {
        this.coordenateXY = [];

        this.selection = initialPlotModel.selected;

        this.signalDestroyer$ = new Subject<void>();
    }

    ngOnInit() {
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotArrayXY())
            .pipe(takeUntil(this.signalDestroyer$), first(), tap(next => this.coordenateXY = next)).subscribe()

        this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState())
            .pipe(takeUntil(this.signalDestroyer$), tap((value) => this.selection = value))
            .subscribe();
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
    ngOnDestroy(): void {
        if (!this.signalDestroyer$.closed) {
            this.signalDestroyer$.next();
            this.signalDestroyer$.complete();
            this.signalDestroyer$.unsubscribe();
        }
    }
}