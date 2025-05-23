import { Action, ActionCreator, createAction, props } from "@ngrx/store";
import { Axis, PlotModel } from "./ngrx-create-api-plot.models";

export type LOADED_ACTION_ALIAS_TYPING = { plotModel: PlotModel; } & Action<string>;

export type UPDATED_ACTION_ALIAS_TYPING = { plotModel: Pick<PlotModel, "data" | "selected">; } & Action<string>;


export type LOADED_ACTION_FNC_ALIAS_TYPING = ActionCreator<string, (props: { plotModel: PlotModel; }) => { plotModel: PlotModel; } & Action<string>>

export type UPDATE_ACTION_FNC_ALIAS_TYPING = ActionCreator<string, (props: { plotModel: Pick<PlotModel, "data" | "selected">; }) => { plotModel: Pick<PlotModel, "data" | "selected">; } & Action<string>>

export type SELECTED_ACTION_FNC_ALIAS_TYPING = ActionCreator<string, (props: { key: string; }) => { key:string } & Action<string>>

export type LOADED_LAYOUT_ACTION_FNC_ALIAS_TYPING = ActionCreator<string, (props:{layout:Partial<Axis>}) => {layout:Partial<Axis>}& Action<string>>

export const LoadingPlotDataAction: ActionCreator<string, () => Action<string>> = createAction("[PLOT ROUTER MATCH] Loading PlotData");

export const LoadedPlotDataAction: LOADED_ACTION_FNC_ALIAS_TYPING = createAction("[PLOT MAIN COMPONENT] Success Loaded PlotData", props<{ plotModel: PlotModel; }>());

export const UpdatePlotDataAction: UPDATE_ACTION_FNC_ALIAS_TYPING = createAction("[PLOT MAIN COMPONENT] Success Update PlotData", props<{ plotModel: Pick<PlotModel, "data" | "selected">; }>());

export const LoadedLayoutDataAction: LOADED_LAYOUT_ACTION_FNC_ALIAS_TYPING = createAction("[PLOT MAIN COMPONENT] Success Loaded PlotLayout", props<{ layout: Partial<Axis>; }>());

export const LoadingErrorPlotDataAction: ActionCreator<string, () => Action<string>> = createAction("[PLOT ROUTER MATCH] Error Loading PlotData");

export const SelectedPlotDataAction: SELECTED_ACTION_FNC_ALIAS_TYPING = createAction("[PLOT NEXT SELECTED] Loading PlotData", props<{ key: string }>());
