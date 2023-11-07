import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { PlotRelayoutEvent, PlotlyHTMLElement } from "plotly.js-dist-min";
import { Subject, takeUntil } from "rxjs";
import { NgrxCreateApiPlotZoomService } from "../services/ngrx-create-api-plot-zoom.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit, OnDestroy {


    @Input() plotInstance?: Promise<PlotlyHTMLElement>;

    @Input("root") root?: ElementRef;

    form: FormGroup;

    private signalDestroyer$: Subject<void>;

    constructor(
        private ngrxCreateApiPlotZoomService: NgrxCreateApiPlotZoomService,
        private fb: FormBuilder
    ) {

        this.signalDestroyer$ = new Subject<void>();

        this.form = this.fb.group({
            axe: new FormControl<'xaxe'| 'yaxe'>('xaxe', { nonNullable: true }),
        });
        this.form.valueChanges.subscribe(console.log)
        this.form.get('axe')?.valueChanges.subscribe(console.log)
    }


    async ngOnInit(): Promise<void> {

        if (this.root)
            this.ngrxCreateApiPlotZoomService.updateLayout(this.root).pipe(takeUntil(this.signalDestroyer$)).subscribe();


        (await this.plotInstance)?.on("plotly_relayout", this.monitorRelayout);
        (await this.plotInstance)?.on("plotly_event", (data) => { console.log("DATA EVENT", data) });
        (await this.plotInstance)?.on("plotly_beforeplot", (data) => { console.log(" BEFORE PLOT DATA EVENT", data); return true; });

    }

    async monitorRelayout(event: PlotRelayoutEvent): Promise<void> {
        console.log("===>", event);
    }



    async zoomMinusX(): Promise<void> {

        if (this.plotInstance)
            await this.ngrxCreateApiPlotZoomService.zoomX('minus', this.plotInstance);
    }

    async zoomPlusX(): Promise<void> {

        if (this.plotInstance)
            await this.ngrxCreateApiPlotZoomService.zoomX('plus', this.plotInstance);
    }

    async zoomMinusY(): Promise<void> {

        if (this.plotInstance)
            await this.ngrxCreateApiPlotZoomService.zoomY('minus', this.plotInstance);
    }

    async zoomPlusY(): Promise<void> {

        if (this.plotInstance)
            await this.ngrxCreateApiPlotZoomService.zoomY('plus', this.plotInstance);
    }


    ngOnDestroy(): void {
        if (!this.signalDestroyer$.closed) {
            this.signalDestroyer$.next();
            this.signalDestroyer$.complete();
            this.signalDestroyer$.unsubscribe();
        }
    }
}