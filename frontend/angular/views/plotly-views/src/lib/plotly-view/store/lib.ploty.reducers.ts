import { ActionReducer, createReducer, on } from "@ngrx/store";
import { Data, PlotData } from "plotly.js-dist-min";
import { plotlyLoadedDataAction } from "./lib.ploty.actions";

export interface PlotyState {

    data: Data[];
}


export const plotlyReducer: ActionReducer<PlotyState, PlotData> = createReducer<PlotyState>(
    { data: [] },
    on(plotlyLoadedDataAction,
        (state, action: { data: Data[] }) => ({ ...state, data: [...action.data] })



    ));