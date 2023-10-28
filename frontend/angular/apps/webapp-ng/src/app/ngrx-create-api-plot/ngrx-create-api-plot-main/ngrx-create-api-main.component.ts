import { Component, ElementRef, NgZone, OnInit } from "@angular/core";
import { PlotlyHTMLElement } from 'plotly.js-dist-min';
import { Observable, tap } from "rxjs";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";
import { Store } from "@ngrx/store";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { LoadedLayoutDataAction } from "../store/ngrx-create-api-plot.actions";

@Component({
    templateUrl: './ngrx-create-api-main.component.html'
})
export class NgrxCreateApiMainComponent implements OnInit {

    plot$?: Observable<Promise<PlotlyHTMLElement>>;

    root: ElementRef;
    constructor(private ngrxCreateApliPlotService: NgrxCreateApliPlotService,
        private el: ElementRef, private store: Store<PlotModel>) {
        this.root = this.el;
    }


    ngOnInit(): void {
        this.plot$ = this.ngrxCreateApliPlotService.getPlotInstance(this.el)
            .pipe(tap(async (plotlyEl: Promise<PlotlyHTMLElement>) => {
                const layout = (await plotlyEl).layout;
                console.log("LAYOUT", layout)
               // this.store.dispatch(LoadedLayoutDataAction({ layout }))
            }));
    }


}