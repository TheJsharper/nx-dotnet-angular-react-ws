import { NgModule } from "@angular/core";
import { NgrxCreateApiMainComponent } from "./ngrx-create-api-plot-main/ngrx-create-api-main.component";
import { RouterModule, Routes } from "@angular/router";
import { NgrxCreateApiCanMatchGuard } from "./hooks/ngrx-create-api.plot.canMatch";
import { NgrxCreateApliPlotService } from "./services/ngrx-create-api-plot.service";
import { NgrxCreateApiPlotEffects } from "./store/ngrx-create-api-plot.effects";
import { StoreModule } from "@ngrx/store";
import { plotRedurcer } from "./store/ngrx-create-api-plot.reducers";
import { EffectsModule } from "@ngrx/effects";
import { NgrxCreateApiPlotSelector } from "./store/nrx-create-api-plot.selectors";
import { NgrxCreateApiMainDirective } from "./ngrx-create-api-plot-main/ngrx-create-api-main.directive";
import { CommonModule } from "@angular/common";
import {NgrxCreateApiMenubarModule} from './ngrx-create-api-plot-menu-bar/ngrx-create-api-plot-menu-bar.module';
import { NgrxCreateApiPlotValuesComponent } from "./ngrx-create-api-plot-values/ngrx-create-api-plot-values.component";

const routes: Routes = [
    {
        path: '',
        component: NgrxCreateApiMainComponent,
        canMatch: [NgrxCreateApiCanMatchGuard]
    }
]
@NgModule({
    declarations: [NgrxCreateApiMainComponent,
        NgrxCreateApiMainDirective],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature("plot", plotRedurcer),
        EffectsModule.forFeature([NgrxCreateApiPlotEffects]),
        NgrxCreateApiMenubarModule,
        NgrxCreateApiPlotValuesComponent
    ],
    exports: [],
    providers: [NgrxCreateApliPlotService, NgrxCreateApiPlotEffects, NgrxCreateApiPlotSelector]
})
export class NgrxCreateApiPlotModule { }