import { Component, ElementRef, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { PlotlyHTMLElement } from 'plotly.js-dist-min';
import { Observable, tap } from "rxjs";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";
import { LoadedLayoutDataAction } from "../store/ngrx-create-api-plot.actions";
import { PlotModel } from "../store/ngrx-create-api-plot.models";

@Component({
    selector: 'main',
    templateUrl: './ngrx-create-api-main.component.html',
    styleUrls:['./ngrx-create-api-main.component.scss']
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
                this.store.dispatch(LoadedLayoutDataAction({ layout }))
            }));
    }


}