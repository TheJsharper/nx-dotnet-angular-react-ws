import { Injectable } from "@angular/core";
import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { PlotModel } from "./ngrx-create-api-plot.models";
import { Data } from 'plotly.js-dist-min';
import { Selection } from './ngrx-create-api-plot.models';

@Injectable()
export class NgrxCreateApiPlotSelector {


    getPlotFeatureSelector(): MemoizedSelector<object, PlotModel> {
        const feature: MemoizedSelector<object, PlotModel> = createFeatureSelector("plot");
        return feature;
    }

    getPlotDataState(): MemoizedSelector<PlotModel, Array<Partial<Data>>> {
        return createSelector(this.getPlotFeatureSelector(), (state: PlotModel) => state.data)
    }

    getPlotSelctedDataState(): MemoizedSelector<PlotModel, Selection> {
        return createSelector(this.getPlotFeatureSelector(), (state: PlotModel) => state.selected)
    }
}