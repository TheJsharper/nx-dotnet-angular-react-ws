import { Compiler, ModuleWithProviders, NgModule, NgModuleFactory, OnInit } from "@angular/core";
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
import { NgrxCreateApiMenubarModule } from './ngrx-create-api-plot-menu-bar/ngrx-create-api-plot-menu-bar.module';
import { NgrxCreateApiPlotValuesComponent } from "./ngrx-create-api-plot-values/ngrx-create-api-plot-values.component";
import { NgrxCreateApiPlotNavComponent } from "./ngrx-create-api-plot-nav/ngrx-create-api-plot-nav.component";
import { NgrxCreateApiPlotZoomService } from "./services/ngrx-create-api-plot-zoom.service";

export function factory() {
    const platformModuleCreated = (factory as any)._platformModuleCreated || false;
    if (platformModuleCreated) {
        throw new Error('PlatformModule.forRoot imported to many times');
    }
    (factory as any)._platformModuleCreated = true;
}

const routes: Routes = [
    {
        path: '',
        component: NgrxCreateApiMainComponent,
        canMatch: [NgrxCreateApiCanMatchGuard]
    }
]


@NgModule({})
export class NgrxCreateApiPlotModuleForRoot {
    constructor() { }
}
@NgModule({
    declarations: [NgrxCreateApiMainComponent,
        NgrxCreateApiMainDirective],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature("plot", plotRedurcer),
        EffectsModule.forFeature([NgrxCreateApiPlotEffects]),
        NgrxCreateApiMenubarModule,
        NgrxCreateApiPlotValuesComponent,
        NgrxCreateApiPlotNavComponent
    ],
    exports: [],
    providers: [NgrxCreateApliPlotService, NgrxCreateApiPlotEffects, NgrxCreateApiPlotSelector, NgrxCreateApiPlotZoomService]
})
export class NgrxCreateApiPlotModule implements OnInit {
    constructor(private compiler: Compiler) { }
    ngOnInit(): void {

    }

    lazyloadModuleFactory!: NgModuleFactory<any>;
    lazyloadComponent!: any;
    static config(): ModuleWithProviders<NgrxCreateApiPlotModuleForRoot> {
        return {
            providers: [/*{
                provide: 'PlatformModuleInstance',
                useFactory: factory
            }*/],
            ngModule: NgrxCreateApiPlotModuleForRoot

        }
    }
    public loadModule(loadedModules: any, ModuleName: any): void {
        const _lazyloadModule = loadedModules[ModuleName];
        this.compiler.compileModuleAsync(_lazyloadModule).then(moduleFactory => {
            this.lazyloadModuleFactory = moduleFactory;
            this.lazyloadComponent = _lazyloadModule.EntryComponent;
        });
    }
}