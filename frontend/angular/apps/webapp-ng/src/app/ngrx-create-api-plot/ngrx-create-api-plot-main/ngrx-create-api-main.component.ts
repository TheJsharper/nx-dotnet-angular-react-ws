import { Component, ElementRef, OnInit } from "@angular/core";
import { PlotlyHTMLElement } from 'plotly.js-dist-min';
import { Observable } from "rxjs";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";

@Component({
    selector: 'main',
    templateUrl: './ngrx-create-api-main.component.html',
    styleUrls:['./ngrx-create-api-main.component.scss']
})
export class NgrxCreateApiMainComponent implements OnInit {

    plot$?: Observable<Promise<PlotlyHTMLElement>>;

    root: ElementRef;
    
    constructor(
        private ngrxCreateApliPlotService: NgrxCreateApliPlotService,
        private el: ElementRef) {
        this.root = this.el;
    }


    ngOnInit(): void {
        this.plot$ = this.ngrxCreateApliPlotService.getPlotInstance(this.el);
    }


}