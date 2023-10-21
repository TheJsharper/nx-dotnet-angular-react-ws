import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TypedAction } from '@ngrx/store/src/models';
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
                mergeMap((_: TypedAction<string>) =>
                    this.ngrxCreateApiPlotService.getPlotData().pipe(map((data: PlotModel) => LoadedPlotDataAction({ plotModel: data })))
                ))
        })
    }

}