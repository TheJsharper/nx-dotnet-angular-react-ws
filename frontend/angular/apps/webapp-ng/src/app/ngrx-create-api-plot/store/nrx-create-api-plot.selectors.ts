import { Injectable } from "@angular/core";
import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { Axis, PlotModel } from "./ngrx-create-api-plot.models";
import { PlotData } from 'plotly.js-dist-min';
import { Selection } from './ngrx-create-api-plot.models';

@Injectable()
export class NgrxCreateApiPlotSelector {


    getPlotFeatureSelector(): MemoizedSelector<object, PlotModel> {
        const feature: MemoizedSelector<object, PlotModel> = createFeatureSelector("plot");
        return feature;
    }

    getPlotDataState(): MemoizedSelector<PlotModel, Array<Partial<PlotData>>> {
        return createSelector(this.getPlotFeatureSelector(), (state: PlotModel) => state.data)
    }

    getPlotSelctedDataState(): MemoizedSelector<PlotModel, Selection> {
        return createSelector(this.getPlotFeatureSelector(), (state: PlotModel) => state.selected)
    }
    
    getPlotLayoutState(): MemoizedSelector<PlotModel, Partial<Axis>> {
        return createSelector(this.getPlotFeatureSelector(), (state: PlotModel) => state.layout)
    }

    getPlotArrayXY(): MemoizedSelector<PlotModel, Array<{ x: string; y: number; }>> {
        return createSelector(this.getPlotFeatureSelector(), (state: PlotModel) => {
            const x = <string[]>state.data[0].x;
            const y = <number[]>state.data[0].y;
            const values = x.map((key: string, index: number) => ({ x: key, y: y[index] }));
            return values;
        })
    }
}