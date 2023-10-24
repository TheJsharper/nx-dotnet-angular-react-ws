import { Component, Input, OnInit } from "@angular/core";
import { PlotMouseEvent, PlotlyHTMLElement } from "plotly.js";
import { NgrxCreateApiPlotSelector } from "../store/nrx-create-api-plot.selectors";
import { PlotModel } from "../store/ngrx-create-api-plot.models";
import { Store } from "@ngrx/store";
import { Observable, map, take } from "rxjs";
import { Selection } from '../store/ngrx-create-api-plot.models';
import { FormControl, FormGroup } from "@angular/forms";
import { SelectedPlotDataAction } from "../store/ngrx-create-api-plot.actions";

@Component({
    selector: 'ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit {

    @Input() plotInstance?: Promise<PlotlyHTMLElement>;
    selected: Observable<Selection>;
    formGroup: FormGroup;
    lastSelectedKey: string = "";


    constructor(private ngrxCreateApiPlotSelector: NgrxCreateApiPlotSelector,
        private store: Store<PlotModel>) {
        this.selected = this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState());
        this.formGroup = new FormGroup({
            key: new FormControl<string>(''),
            value: new FormControl<number>(-1)
        })
    }

    async ngOnInit(): Promise<void> {
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotArrayXY()).subscribe(console.log)
        this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState()).subscribe((value) => {

            //this.store.dispatch(SelectedPlotDataAction({ key: value.key }))
            this.lastSelectedKey = value.key;
        });

        this.selected.subscribe(value => {
            console.log("===>", value);
            this.formGroup.get("key")?.setValue(value.key);
            this.formGroup.get("value")?.setValue(value.value);
        });
        (await this.plotInstance)?.on('plotly_click', (event: PlotMouseEvent) => {
            const key = <string>event.points[0].x
            console.log("click====>", event, key);
            this.store.dispatch(SelectedPlotDataAction({ key }))
        });


    }
    incrementLeft(): void {
        /*    this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState()).pipe(take(2)).subscribe((value)=>{
   
               this.store.dispatch(SelectedPlotDataAction({ key: value.key }))
           }); */
        
           this.store.dispatch(SelectedPlotDataAction({ key: this.lastSelectedKey }))
    }
    incrementRight(): void {
        /*   this.store.select(this.ngrxCreateApiPlotSelector.getPlotSelctedDataState()).subscribe((value)=>{
  
              this.store.dispatch(SelectedPlotDataAction({ key: value.key }))
          }); */
    }
}