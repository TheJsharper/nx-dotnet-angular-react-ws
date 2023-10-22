import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { PlotlyHTMLElement } from "plotly.js";

@Directive({selector:'[ngrxCreateApiMain]'})
export class NgrxCreateApiMainDirective{
    constructor(private templateRef:TemplateRef<any>, private viewContainer: ViewContainerRef){

    }

    @Input() set ngrxCreateApiMain(plot:Promise<PlotlyHTMLElement>){
        plot.then((value:PlotlyHTMLElement)=>{
            this.viewContainer.createEmbeddedView(this.templateRef);
        })
    }
}