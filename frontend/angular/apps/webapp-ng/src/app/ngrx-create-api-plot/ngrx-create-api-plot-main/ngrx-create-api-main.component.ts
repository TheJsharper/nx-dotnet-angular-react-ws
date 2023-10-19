import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Data, PlotData, ViolinData, newPlot } from 'plotly.js-dist-min';

@Component({
    templateUrl: './ngrx-create-api-main.component.html'
})
export class NgrxCreateApiMainComponent implements AfterViewInit {


    private myDiv?:ElementRef;

    @ViewChild('myDiv') set content(content:ElementRef){
        this.myDiv = content;
    }
    ngAfterViewInit(): void {
        const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yArray = [55, 49, 44, 24, 15];

        const data: Array<Partial<Data>> = [{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "v",
            marker: { color: "rgba(0,0,255)" }
        }];

        const layout = {
            title: 'Responsive to window\'s size!',
            font: { size: 18 }
        };

        const config = { responsive: true }

        newPlot(this.myDiv?.nativeElement, data, layout, config);
    }
}