import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { PlotRelayoutEvent, PlotlyHTMLElement } from "plotly.js-dist-min";
import { Subject, takeUntil } from "rxjs";
import { NgrxCreateApiPlotMainService } from "../../services/ngrx-create-api-plot-main.service";
import { NgrxCreateApiPlotZoomService } from "../services/ngrx-create-api-plot-zoom.service";

@Component({
    selector: 'app-ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit, OnDestroy {

    form: FormGroup;

    private plotInstance: Promise<PlotlyHTMLElement>;

    private signalDestroyer$: Subject<void>;

    constructor(
        private ngrxCreateApiPlotZoomService: NgrxCreateApiPlotZoomService,
        private fb: FormBuilder,
        private ngrxCreateApiPlotMainService: NgrxCreateApiPlotMainService,
    ) {

        this.signalDestroyer$ = new Subject<void>();
        this.plotInstance = this.ngrxCreateApiPlotMainService.plotInstance;


        this.form = this.fb.group({
            axe: new FormControl<'xaxe' | 'yaxe'>('xaxe', { nonNullable: true }),
        });
        this.form.valueChanges.subscribe(console.log)
        this.form.get('axe')?.valueChanges.subscribe(console.log)
    }


    async ngOnInit(): Promise<void> {


        const root = (await this.plotInstance).getRootNode() as HTMLElement;
        this.ngrxCreateApiPlotZoomService.updateLayout(root).pipe(takeUntil(this.signalDestroyer$)).subscribe();



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