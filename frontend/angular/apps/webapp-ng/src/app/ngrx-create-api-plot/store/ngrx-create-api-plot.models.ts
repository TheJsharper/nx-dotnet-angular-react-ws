
import { Data } from 'plotly.js-dist-min';

export interface PlotModel {
    data: Array<Partial<Data>>
    selected: Partial<Data>
}

export const initialPlotModel:PlotModel = { data:[], selected:{}}