import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

export const routes: Routes = [
  {
    path: 'simple-counter',

    loadChildren: () =>
      import('./counter-simple/counter-simple.module').then(
        (m) => m.CounterSimpleModule
      ),
  },

  {
    path: 'ngrx-simple-counter',

    loadChildren: () =>
      import('./ngrx-simple-counter/ngrx-simple-counter.module').then(
        (m) => m.NgrxSimpleCounterModule
      ),
  },
  {
    path: 'ngrx-create-api-counter',

    loadChildren: () =>
      import('./ngrx-create-api-counter/ngrx-create-api-counter.module').then(
        (m) => m.NgrxCreateApiCounterModule
      ),
  },
  {
    path: '**',
    redirectTo: 'simple-counter',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
