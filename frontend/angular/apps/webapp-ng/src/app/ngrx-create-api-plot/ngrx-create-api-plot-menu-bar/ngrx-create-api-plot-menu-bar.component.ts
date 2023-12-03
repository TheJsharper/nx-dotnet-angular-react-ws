import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { PlotRelayoutEvent, PlotlyHTMLElement } from "plotly.js-dist-min";
import { Subject, fromEvent, takeUntil } from "rxjs";
import { map, mergeMap } from 'rxjs/operators';
import { NgrxCreateApiPlotMainService } from "../../services/ngrx-create-api-plot-main.service";
import { NgrxCreateApiPlotZoomService } from "../services/ngrx-create-api-plot-zoom.service";

@Component({
    selector: 'app-ngrx-create-api-plot-menu-bar',
    templateUrl: './ngrx-create-api-plot-menu-bar.component.html'
})
export class NgrxCreateApiMenubarComponent implements OnInit, OnDestroy, AfterViewInit {

    form: FormGroup;

    @ViewChild('zoomIn') zoomIn?: ElementRef;

    @ViewChild('zoomOut') zoomOut?: ElementRef;

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

        this.form.get('axe')?.valueChanges.subscribe(console.log)
    }
    ngAfterViewInit(): void {
        const control = this.form.get<string>('axe')?.valueChanges;
        const zIn =fromEvent<PointerEvent>(<HTMLButtonElement>this.zoomIn?.nativeElement, 'click').pipe(map((value:PointerEvent)=> value));

        control?.pipe(mergeMap((axe:'xaxe' | 'yaxe')=> zIn.pipe(map(( )=> axe)))).subscribe((value)=> console.log("Clicked", value));
        
        
      //  fromEvent(<HTMLButtonElement>this.zoomOut?.nativeElement, 'click').subscribe((value) => console.log("CLICKKKKK", value));

    }


    async ngOnInit(): Promise<void> {


        const root = await this.plotInstance;

        this.ngrxCreateApiPlotZoomService.updateLayout(root).pipe(takeUntil(this.signalDestroyer$)).subscribe();

        root.on("plotly_relayout", this.monitorRelayout);

        root.on("plotly_event", (data) => { console.log("DATA EVENT", data) });

        root.on("plotly_beforeplot", (data) => { console.log(" BEFORE PLOT DATA EVENT", data); return true; });

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