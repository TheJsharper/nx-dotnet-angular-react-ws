import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Data } from "plotly.js-dist-min";
import { LibPlotkyService } from "../../services/lib-plotly.service";
import { PlotyState } from "../../store/lib.ploty.reducers";

import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { plotlyLoadedDataAction } from "../../store/lib.ploty.actions";


export const plotlyResolver: ResolveFn<Data[]> =
  () => {
    const state = inject(Store<PlotyState>);

    const service = inject(LibPlotkyService).getDataPlot();

    service.pipe(tap((value: Data[]) => {
      state.dispatch(plotlyLoadedDataAction({ data: value }))
    }))
    return service;
  };