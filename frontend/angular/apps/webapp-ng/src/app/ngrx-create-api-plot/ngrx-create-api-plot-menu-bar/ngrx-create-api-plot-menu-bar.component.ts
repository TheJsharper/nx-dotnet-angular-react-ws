import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { PlotRelayoutEvent, PlotlyHTMLElement } from "plotly.js-dist-min";
import { Subject, takeUntil } from "rxjs";
import { tap } from 'rxjs/operators';
import { NgrxCreateApiPlotMainService } from "../../services/ngrx-create-api-plot-main.service";
import { NgrxCreateApiPlotZoomService } from "../services/ngrx-create-api-plot-zoom.service";

@Component({
    selector: 'app-ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html',
    styleUrl: './ngrx-create-api-plot-menu-bar.component.scss'
})
export class NgrxCreateApiMenubarComponent implements OnInit, OnDestroy {

    form: FormGroup;
    formTake: FormGroup;



    private plotInstance: Promise<PlotlyHTMLElement>;

    private signalDestroyer$: Subject<void>;

    private curSelected: 'xaxe' | 'yaxe';




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
        this.curSelected = this.form.get('axe')?.value;

        this.formTake = this.fb.group({
            take: new FormControl<'include' | 'exclude' | 'default'>('default', { nonNullable: true }),
        });



    }



    async ngOnInit(): Promise<void> {


        const root = await this.plotInstance;

        this.ngrxCreateApiPlotZoomService.updateLayout(root).pipe(takeUntil(this.signalDestroyer$)).subscribe();

        root.on("plotly_relayout", this.monitorRelayout);

        root.on("plotly_event", (data) => { console.log("DATA EVENT", data) });

        root.on("plotly_beforeplot", (data) => { console.log(" BEFORE PLOT DATA EVENT", data); return true; });

        this.form.get('axe')?.valueChanges.pipe(takeUntil(this.signalDestroyer$), tap((value: 'xaxe' | 'yaxe') => this.curSelected = value))
            .subscribe()

    }

    async monitorRelayout(event: PlotRelayoutEvent): Promise<void> {
        console.log("===>", event);
    }


    async zoomIn(): Promise<void> {

        if (this.curSelected === "xaxe") {
            await this.ngrxCreateApiPlotZoomService.zoomX('minus', this.plotInstance);
        }
        if (this.curSelected === "yaxe") {
            await this.ngrxCreateApiPlotZoomService.zoomY('minus', this.plotInstance);
        }
    }
    async zoomOut(): Promise<void> {
        if (this.curSelected === "xaxe") {
            await this.ngrxCreateApiPlotZoomService.zoomX('plus', this.plotInstance);
        }
        if (this.curSelected === "yaxe") {
            await this.ngrxCreateApiPlotZoomService.zoomY('plus', this.plotInstance);
        }
    }



    async ngOnDestroy(): Promise<void> {
        const root = await this.plotInstance

        root.removeAllListeners("plotly_beforeplot");

        root.removeAllListeners("plotly_event");

        root.removeAllListeners("plotly_relayout");

        if (!this.signalDestroyer$.closed) {

            this.signalDestroyer$.next();

            this.signalDestroyer$.complete();

            this.signalDestroyer$.unsubscribe();
        }
    }
}