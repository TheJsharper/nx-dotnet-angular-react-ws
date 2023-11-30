import { CommonModule } from "@angular/common";
import { Compiler, InjectionToken, Injector, ModuleWithProviders, NgModule, NgModuleFactory, NgModuleRef, Provider, StaticProvider, Type } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgrxCreateApiCanMatchGuard } from "./hooks/ngrx-create-api.plot.canMatch";
import { NgrxCreateApiMainComponent } from "./ngrx-create-api-plot-main/ngrx-create-api-main.component";
import { NgrxCreateApiMenubarModule } from './ngrx-create-api-plot-menu-bar/ngrx-create-api-plot-menu-bar.module';
import { NgrxCreateApiPlotNavComponent } from "./ngrx-create-api-plot-nav/ngrx-create-api-plot-nav.component";
import { NgrxCreateApiPlotValuesComponent } from "./ngrx-create-api-plot-values/ngrx-create-api-plot-values.component";
import { NgrxCreateApiPlotZoomService } from "./services/ngrx-create-api-plot-zoom.service";
import { NgrxCreateApliPlotService } from "./services/ngrx-create-api-plot.service";
import { NgrxCreateApiPlotEffects } from "./store/ngrx-create-api-plot.effects";
import { plotRedurcer } from "./store/ngrx-create-api-plot.reducers";
import { NgrxCreateApiPlotSelector } from "./store/nrx-create-api-plot.selectors";

const routes: Routes = [
    {
        path: '',
        component: NgrxCreateApiMainComponent,
        canMatch: [NgrxCreateApiCanMatchGuard]
    }
]
export const FOO = new InjectionToken<string>("FOO");

@NgModule({})
export class NgrxCreateApiPlotModuleForRoot {
    constructor() { }
}
@NgModule({
    declarations: [NgrxCreateApiMainComponent],
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
export class NgrxCreateApiPlotModule {

    static withOptions(foo = "foo", parameterProvides: Array<Provider>): ModuleWithProviders<NgrxCreateApiPlotModule> {
        return {
            ngModule: NgrxCreateApiPlotModule,
            providers: [
                {
                    provide: FOO,
                    useValue: foo
                }, ...parameterProvides
            ]
        };
    }
    static asChild(...params: FooOptions): NgModuleFactory<NgrxCreateApiPlotModule> {
        return new ChildModuleFactory(NgrxCreateApiPlotModule.withOptions(...params));
    }

}
type FooOptions = Parameters<typeof NgrxCreateApiPlotModule.withOptions>;

export class ChildModuleFactory<T> extends NgModuleFactory<T> {
    get moduleType(): Type<T> {
        return this.moduleWithProviders.ngModule;
    }

    constructor(private moduleWithProviders: ModuleWithProviders<T>) {
        super();
    }

    create(parentInjector: Injector): NgModuleRef<T> {
        const injector = Injector.create({
            parent: parentInjector,
            providers: this.moduleWithProviders.providers as StaticProvider[]
        });

        const compiler = injector.get(Compiler);
        const factory = compiler.compileModuleSync(this.moduleType);

        return factory.create(injector);
    }
}
