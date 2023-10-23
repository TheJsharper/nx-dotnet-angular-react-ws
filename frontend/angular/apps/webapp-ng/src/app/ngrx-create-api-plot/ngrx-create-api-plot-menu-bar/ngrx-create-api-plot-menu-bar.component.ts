import { Component, Input, OnInit } from "@angular/core";
import { PlotMouseEvent, PlotlyHTMLElement } from "plotly.js";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { Selection } from '../store/ngrx-create-api-plot.models';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit {

    selected: Observable<Selection>;
    formGroup: FormGroup;
    @Input() plotInstance?: Promise<PlotlyHTMLElement>;

    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector,
        private store: Store<PlotModel>) {
        this.selected = this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState());
        this.formGroup = new FormGroup({
            key: new FormControl<string>(''),
            value: new FormControl<number>(-1)
        })
    }

    async ngOnInit(): Promise<void> {
        this.selected.subscribe(value => {
            this.formGroup.get("key")?.setValue(value.key);
            this.formGroup.get("value")?.setValue(value.value);
        });
        (await this.plotInstance)?.on('plotly_click', (event:PlotMouseEvent)=>{
                console.log("click====>", event);
        });


    }
}