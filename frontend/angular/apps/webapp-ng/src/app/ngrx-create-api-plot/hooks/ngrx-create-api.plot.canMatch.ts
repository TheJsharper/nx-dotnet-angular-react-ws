
import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadingPlotDataAction } from '../store/ngrx-create-api-plot.actions';
import { PlotModel } from '../store/ngrx-create-api-plot.models';

export const NgrxCreateApiCanMatchGuard: CanMatchFn = () => {
    inject(Store<PlotModel>).dispatch(LoadingPlotDataAction())
    return true;
}