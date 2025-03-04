/* import { Injectable } from "@angular/core";
import { LibPlotkyService } from "../services/lib-plotly.service";
import { Observable, mergeMap, tap } from "rxjs";

import {TypedAction} from '@ngrx/store/src/models';
import { Data } from "plotly.js-dist-min";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { plotlyLoadedDataAction, plotlyLoadingRequest } from "./lib.ploty.actions";

@Injectable()
export class LibPlotkyEffect{


    plotyAction:Observable< Data[]>;

    constructor(private libPlotlyService: LibPlotkyService, private action$:Actions){

        this.plotyAction = createEffect(()=>{
            return this.action$.pipe(ofType(plotlyLoadingRequest), tap(()=> this.libPlotlyService.getDataPlot()))
        });

    }
} */