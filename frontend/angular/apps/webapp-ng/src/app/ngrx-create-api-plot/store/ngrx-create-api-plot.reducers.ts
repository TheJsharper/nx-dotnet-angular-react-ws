import { createReducer, on } from "@ngrx/store";
import { LOADED_ACTION_ALIAS_TYPING, LoadedPlotDataAction } from './ngrx-create-api-plot.actions';
import { PlotModel, initialPlotModel } from "./ngrx-create-api-plot.models";

export const plotRedurcer = createReducer<PlotModel, LOADED_ACTION_ALIAS_TYPING>(initialPlotModel,

    on(LoadedPlotDataAction, (state: PlotModel, action: LOADED_ACTION_ALIAS_TYPING) => ({ ...state, ...action.plotModel }))

);