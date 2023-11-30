import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Layout, PlotlyHTMLElement, relayout } from 'plotly.js-dist-min';
import { Observable, filter, tap } from 'rxjs';
import { LoadedLayoutDataAction } from '../store/ngrx-create-api-plot.actions';
import { Axis, PlotModel } from '../store/ngrx-create-api-plot.models';
import { NgrxCreateApiPlotSelector } from '../store/nrx-create-api-plot.selectors';


@Injectable()
export class NgrxCreateApiPlotZoomService {
    constructor(private zone: NgZone, private store: Store<PlotModel>, private selector: NgrxCreateApiPlotSelector) { }


    public updateLayout(/*root: ElementRef*/ root: HTMLElement): Observable<Partial<Axis>> {
        return this.store.select(this.selector.getPlotLayoutState()).pipe(
            filter((value) => Object.keys(value).length > 0),
            tap((layout) => {

                this.zone.runOutsideAngular(() => {

                    if (layout.xaxis && layout.yaxis) {

                        const newData: Partial<Layout> = cloneDeep({
                            "xaxis.range[0]": layout.xaxis[0],
                            "xaxis.range[1]": layout.xaxis[1],
                            "yaxis.range[0]": layout.yaxis[0],
                            "yaxis.range[1]": layout.yaxis[1],
                        })
                        if (root)
                            relayout(root, newData)
                    }

                })
            })

        );
    }

    public async zoomX(operation: 'plus' | 'minus', plotInstance: Promise<PlotlyHTMLElement>): Promise<void> {

        const currentLayout = (await plotInstance)?.layout;
        if (currentLayout?.xaxis.range && currentLayout.yaxis.range) {
            let [currentX, currentY] = currentLayout.xaxis.range;

            currentX = Math.abs(currentX) * 0.01;

            currentY = Math.abs(currentY) * 0.01;

            if (currentX == 0) {
                currentX = 0.01;
            }
            if (currentY == 0) {
                currentY = 0.01;
            }

            let xaxis: [number, number] = [0, 0];

            const yaxis: [number, number] = [currentLayout.yaxis.range[0], currentLayout.yaxis.range[1]];

            if (operation === "plus") {
                xaxis = [currentLayout.xaxis.range[0] + currentX, currentLayout.xaxis.range[1] + currentY];
            }
            if (operation === "minus") {
                xaxis = [currentLayout.xaxis.range[0] - currentX, currentLayout.xaxis.range[1] - currentY];
            }

            this.store.dispatch(LoadedLayoutDataAction({ layout: { xaxis, yaxis } }))
        }
    }
    public async zoomY(operation: 'plus' | 'minus', plotInstance: Promise<PlotlyHTMLElement>): Promise<void> {

        const currentLayout = (await plotInstance).layout;
        if (currentLayout?.xaxis.range && currentLayout.yaxis.range) {
            let [currentX, currentY] = currentLayout.yaxis.range;

            currentX = Math.abs(currentX) * 0.01;

            currentY = Math.abs(currentY) * 0.01;

            if (currentX == 0) {
                currentX = 0.01;
            }
            if (currentY == 0) {
                currentY = 0.01;
            }

            let yaxis: [number, number] = [0, 0];

            const xaxis: [number, number] = [currentLayout.xaxis.range[0], currentLayout.xaxis.range[1]];

            if (operation === "plus") {
                yaxis = [currentLayout.yaxis.range[0] + currentX, currentLayout.yaxis.range[1] + currentY];
            }
            if (operation === "minus") {
                yaxis = [currentLayout.yaxis.range[0] - currentX, currentLayout.yaxis.range[1] - currentY];
            }

            this.store.dispatch(LoadedLayoutDataAction({ layout: { xaxis, yaxis } }))
        }
    }
}