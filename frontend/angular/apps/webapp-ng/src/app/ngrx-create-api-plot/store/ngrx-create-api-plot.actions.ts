import { ActionCreator, createAction, props } from "@ngrx/store";
import { PlotModel } from "./ngrx-create-api-plot.models";
import { TypedAction } from "@ngrx/store/src/models";

export type LOADED_ACTION_ALIAS_TYPING = { plotModel: PlotModel; } & TypedAction<string>;

export type LOADED_ACTION_FNC_ALIAS_TYPING = ActionCreator<string, (props: { plotModel: PlotModel; }) => { plotModel: PlotModel; } & TypedAction<string>>

export const LoadingPlotDataAction: ActionCreator<string, () => TypedAction<string>> = createAction("[PLOT ROUTER MATCH] Loading PlotData");

export const LoadedPlotDataAction: LOADED_ACTION_FNC_ALIAS_TYPING = createAction("[PLOT MAIN COMPONENT] Success Loaded PlotData", props<{ plotModel: PlotModel; }>())

export const LoadingErrorPlotDataAction: ActionCreator<string, () => TypedAction<string>> = createAction("[PLOT ROUTER MATCH] Error Loading PlotData");