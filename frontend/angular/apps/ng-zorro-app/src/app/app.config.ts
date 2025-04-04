import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from "@ngrx/effects";
import { appRoutes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), RouterModule, 
    provideAnimations(),
    importProvidersFrom(
      StoreModule.forRoot({}),
      StoreDevtoolsModule.instrument({ maxAge: 20 }),
      EffectsModule.forRoot([])
  )
  ],
};
