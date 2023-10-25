
import { PlotData } from 'plotly.js-dist-min';

export interface PlotModel {
    data: Array<Partial<PlotData>>
    selected: Selection;
}
export interface Selection {
    key: string;
    value: number;
    index:number;
}

export const initialPlotModel: PlotModel = { data: [], selected: {key:"", value:0, index:0} }