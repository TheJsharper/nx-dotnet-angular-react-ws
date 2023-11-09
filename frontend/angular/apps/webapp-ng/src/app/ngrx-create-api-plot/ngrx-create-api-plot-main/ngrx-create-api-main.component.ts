import { Component, ElementRef, OnInit } from "@angular/core";
import { PlotlyHTMLElement } from 'plotly.js-dist-min';
import { Observable } from "rxjs";
import { NgrxCreateApiPlotMainService } from "../../services/ngrx-create-api-plot-main.service";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";

@Component({
    selector: 'main',
    templateUrl: './ngrx-create-api-main.component.html',
    styleUrls: ['./ngrx-create-api-main.component.scss']
})
export class NgrxCreateApiMainComponent implements OnInit {

    plot$?: Observable<Promise<PlotlyHTMLElement>>;

    root: ElementRef;

    constructor(
        private ngrxCreateApliPlotService: NgrxCreateApliPlotService,
        private el: ElementRef, private ngrxCreateApiPlotMainService: NgrxCreateApiPlotMainService) {
        this.root = this.el;
    }


    async ngOnInit(): Promise<void> {
        this.plot$ = this.ngrxCreateApliPlotService.getPlotInstance(this.el);
        const el = await this.ngrxCreateApiPlotMainService.getPlotInstance();
        console.log("===>main service", el)
    }


}