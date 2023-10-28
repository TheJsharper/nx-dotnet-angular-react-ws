import { createReducer, on } from "@ngrx/store";
import { LOADED_ACTION_ALIAS_TYPING, LoadedLayoutDataAction, LoadedPlotDataAction, SelectedPlotDataAction } from './ngrx-create-api-plot.actions';
import { PlotModel, initialPlotModel, Selection } from "./ngrx-create-api-plot.models";

export const plotRedurcer = createReducer<PlotModel, LOADED_ACTION_ALIAS_TYPING>(initialPlotModel,

    on(LoadedPlotDataAction, (state: PlotModel, action: LOADED_ACTION_ALIAS_TYPING) => ({ ...state, ...action.plotModel })),
    on(SelectedPlotDataAction, (state: PlotModel, action) => {
        const index: number | undefined = state.data[0].x?.findIndex((value) => value === action.key);
        if (index !== undefined) {

            const key: string = <string>state.data[0].x![index];
            const value: number = <number>state.data[0].y![index];
            const selected: Selection = { key, value, index };
            return { ...state, selected };
        }
        return { ...state };
    }),
    on(LoadedLayoutDataAction, (state: PlotModel, action) => ({ ...state, layout: action.layout }))

);