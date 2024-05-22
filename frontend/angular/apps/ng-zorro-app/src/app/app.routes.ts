import { Route } from '@angular/router';
//import { NgZorroTableComponent } from "ng-zorro-table";

export const appRoutes: Route[] = [

    {
        path:'ng-zorro-table', 
        loadComponent: ()=> import('ng-zorro-table').then(m => m.NgZorroTableComponent ),
    },
    {
        path: '',
        redirectTo: 'ng-zorro-table',
        pathMatch: 'full'
      }
];
