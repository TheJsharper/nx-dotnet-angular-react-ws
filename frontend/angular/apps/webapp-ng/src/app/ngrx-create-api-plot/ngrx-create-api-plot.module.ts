import { NgModule } from "@angular/core";
import { NgrxCreateApiMainComponent } from "./ngrx-create-api-plot-main/ngrx-create-api-main.component";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes=[
    {
        path:'',
        component:NgrxCreateApiMainComponent
    }
]
@NgModule({
    declarations:[NgrxCreateApiMainComponent],
    imports:[RouterModule.forChild(routes)],
    exports:[]
})
export class NgrxCreateApiPlotModule{}