import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { StoreModule, } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { Observable } from 'rxjs';




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
    path: 'ngrx-create-api-plot',

    //LoadChildrenCallback = () => Type<any> | NgModuleFactory<any> | Routes | Observable<Type<any> | Routes | DefaultExport<Type<any>> | DefaultExport<Routes>> | Promise<NgModuleFactory<any> | Type<any> | Routes | DefaultExport<Type<any>> | DefaultExport<Routes>>;
    /* loadChildren: () =>
      import('./ngrx-create-api-plot/ngrx-create-api-plot.module').then(
        (m) =>{ 
         
          return  m.NgrxCreateApiPlotModule//.config();
          //return  m.NgrxCreateApiPlotModule.loadModule();
        }
      ), */
      loadChildren : ()=>{
        return new Observable((observer)=>{
          import('./ngrx-create-api-plot/ngrx-create-api-plot.module').then((m)=>{
            observer.next(m.NgrxCreateApiPlotModule);
            observer.complete();
          }, (error)=> observer.error(error))
        })
      }
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
    StoreDevtoolsModule.instrument({ maxAge: 20 }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
