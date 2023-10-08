import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'simple-counter',

    loadChildren: () =>
      import('./counter-simple/counter-simple.module').then(
        (m) => m.CounterSimpleModule
      ),
  },

  {
    path: 'simple-counter-2',

    loadChildren: () =>
      import('./counter-simple/counter-simple.module').then(
        (m) => m.CounterSimpleModule
      ),
  },
  {
    path: '**',
    redirectTo: 'simple-counter',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
