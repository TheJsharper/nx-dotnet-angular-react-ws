import { Route } from '@angular/router';


export const appRoutes: Route[] = [

    {
        path:'ng-zorro-table', 
      /*   loadComponent: ()=> import('ng-zorro-table').then(m => m.NgZorroTableComponent ),*/
       loadComponent: ()=> import('dashboard-table').then(m => m.DashboardTableComponent)
    },
    {
        path:'basics-list', 
        loadComponent: ()=> import('basics-list').then(m => m.BasicsListComponent ),
    },
    {
        path: '',
        redirectTo: 'ng-zorro-table',
        pathMatch: 'full'
      }
];
