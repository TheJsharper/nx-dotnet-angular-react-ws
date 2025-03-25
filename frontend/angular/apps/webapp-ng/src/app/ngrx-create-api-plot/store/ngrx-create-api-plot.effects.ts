import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { map, mergeMap } from 'rxjs';
import { NgrxCreateApliPlotService } from '../services/ngrx-create-api-plot.service';
import { LoadedPlotDataAction, LoadingPlotDataAction } from './ngrx-create-api-plot.actions';
import { PlotModel } from './ngrx-create-api-plot.models';

@Injectable()
export class NgrxCreateApiPlotEffects {

    plotLoaded;

    constructor(private actions$: Actions, private ngrxCreateApiPlotService: NgrxCreateApliPlotService) {
        this.plotLoaded = createEffect(() => {
            return this.actions$.pipe(
                ofType(LoadingPlotDataAction),
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                mergeMap((_: Action<string>) =>
                    this.ngrxCreateApiPlotService.getPlotData().pipe(map((data: PlotModel) => LoadedPlotDataAction({ plotModel: data })))
                ))
        })
    }

}