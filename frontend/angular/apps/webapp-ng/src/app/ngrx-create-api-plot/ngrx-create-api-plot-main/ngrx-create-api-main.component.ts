import { Component, ElementRef, OnInit } from "@angular/core";
import { PlotlyHTMLElement } from 'plotly.js-dist-min';
import { Observable } from "rxjs";
import { NgrxCreateApliPlotService } from "../services/ngrx-create-api-plot.service";

@Component({
    templateUrl: './ngrx-create-api-main.component.html'
})
export class NgrxCreateApiMainComponent implements OnInit {

    plot$?: Observable<Promise<PlotlyHTMLElement>>;


    constructor(private ngrxCreateApliPlotService: NgrxCreateApliPlotService, private el: ElementRef) { }


    ngOnInit(): void {
        this.plot$ = this.ngrxCreateApliPlotService.getPlotlyElementInstance$(this.el);
    }

}