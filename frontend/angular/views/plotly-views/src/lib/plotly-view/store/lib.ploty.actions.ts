import { createAction, props } from '@ngrx/store';
import { Data } from 'plotly.js-dist-min';

export const plotlyLoadedDataAction = createAction('[LoadingPlotlyData] All Data loading', props<{data:Data[]}>())
export const plotlyLoadingRequest = createAction('[LoadingRequest] All Data loading')