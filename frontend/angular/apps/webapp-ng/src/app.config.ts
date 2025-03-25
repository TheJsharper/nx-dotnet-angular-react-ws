import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { routes } from "./app/app.module";
import { provideRouter, RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes),
    importProvidersFrom(
        RouterModule.forRoot(routes),
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({ maxAge: 20 }),
        EffectsModule.forRoot([]),
    )

    ]
};