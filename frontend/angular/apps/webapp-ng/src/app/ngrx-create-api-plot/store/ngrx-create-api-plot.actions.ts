import { ActionCreator, createAction, props } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { Axis, PlotModel } from "./ngrx-create-api-plot.models";

export type LOADED_ACTION_ALIAS_TYPING = { plotModel: PlotModel; } & TypedAction<string>;


export type LOADED_ACTION_FNC_ALIAS_TYPING = ActionCreator<string, (props: { plotModel: PlotModel; }) => { plotModel: PlotModel; } & TypedAction<string>>

export type SELECTED_ACTION_FNC_ALIAS_TYPING = ActionCreator<string, (props: { key: string; }) => { key:string } & TypedAction<string>>

export type LOADED_LAYOUT_ACTION_FNC_ALIAS_TYPING = ActionCreator<string, (props:{layout:Partial<Axis>}) => {layout:Partial<Axis>}& TypedAction<string>>

export const LoadingPlotDataAction: ActionCreator<string, () => TypedAction<string>> = createAction("[PLOT ROUTER MATCH] Loading PlotData");

export const LoadedPlotDataAction: LOADED_ACTION_FNC_ALIAS_TYPING = createAction("[PLOT MAIN COMPONENT] Success Loaded PlotData", props<{ plotModel: PlotModel; }>());

export const LoadedLayoutDataAction: LOADED_LAYOUT_ACTION_FNC_ALIAS_TYPING = createAction("[PLOT MAIN COMPONENT] Success Loaded PlotLayout", props<{ layout: Partial<Axis>; }>());

export const LoadingErrorPlotDataAction: ActionCreator<string, () => TypedAction<string>> = createAction("[PLOT ROUTER MATCH] Error Loading PlotData");

export const SelectedPlotDataAction: SELECTED_ACTION_FNC_ALIAS_TYPING = createAction("[PLOT NEXT SELECTED] Loading PlotData", props<{ key: string }>());
