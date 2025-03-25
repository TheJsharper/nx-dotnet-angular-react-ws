
import { Routes } from '@angular/router';
import { NgrxCreateApiPlotMainService } from './services/ngrx-create-api-plot-main.service';




export const routes: Routes = [
  {
    path: 'simple-counter',

    loadChildren: () =>
      import('./counter-simple/counter-simple.routes').then(
        (m) => m.routes
      ),
  },

  {
    path: 'ngrx-simple-counter',

    loadChildren: () =>
      import('./ngrx-simple-counter/ngrx-simple-counter.module').then(
        (m) => m.routes
      ),
  },
  {
    path: 'ngrx-create-api-counter',

    loadChildren: () =>
      import('./ngrx-create-api-counter/ngrx-create-api-counter-routing.module').then(
        (m) => m.routes
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
    /*   loadChildren : ()=>{
        return new Observable((observer)=>{
          import('./ngrx-create-api-plot/ngrx-create-api-plot.module').then((m)=>{
            observer.next(m.NgrxCreateApiPlotModule);
            observer.complete();
          }, (error)=> observer.error(error))
        })
      } */

      loadChildren : ()=> import('./ngrx-create-api-plot/ngrx-create-api-plot.module').then(m=> m.NgrxCreateApiPlotModule.asChild("bar",[NgrxCreateApiPlotMainService]))
  },
  {
    path:'micro-frontend-todo',
    loadChildren: ()=> import('frontend/angular/micro-apps/mf-todo/src').then(c => c.route)
  },
  {
    path: '**',
    redirectTo: 'simple-counter',
  },
];

