import { Component, ElementRef, NgZone, OnInit } from "@angular/core";
import { PlotlyHTMLElement } from 'plotly.js-dist-min';
import { Observable } from "rxjs";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";

@Component({
    templateUrl: './ngrx-create-api-main.component.html'
})
export class NgrxCreateApiMainComponent implements OnInit {

    plot$?: Observable<Promise<PlotlyHTMLElement>>;

    root: ElementRef;
    constructor(private ngrxCreateApliPlotService: NgrxCreateApliPlotService, private el: ElementRef, private zone: NgZone) {
        this.root = this.el;
    }


    ngOnInit(): void {
        console.log("===>x", this.el);
        this.plot$ = this.ngrxCreateApliPlotService.getPlotInstance(this.el);
    }


}