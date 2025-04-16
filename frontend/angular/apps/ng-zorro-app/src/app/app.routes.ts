import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'my-mf-todo',
   // loadChildren: () => import('myMfTodo/Routes').then((m) => m.remoteRoutes),
   loadChildren: () => loadRemote<typeof import('myMfTodo/Routes')>('my-mf-todo/Routes').then((m) => m ? m.remoteRoutes : []),
  },

  {
    path: 'ng-zorro-table',
    /*   loadComponent: ()=> import('ng-zorro-table').then(m => m.NgZorroTableComponent ),*/
    loadComponent: () =>
      import('dashboard-table').then((m) => m.DashboardTableComponent),
  },
  {
    path: 'basics-list',
    loadComponent: () =>
      import('basics-list').then((m) => m.BasicsListComponent),
  },
  {
    path: 'dashboard-drag-and-dropable',
    loadComponent: () =>
      import('dashboard-drag-and-dropable').then(
        (m) => m.DashboardDragAndDropableComponent,
      ),
  },
  {
    path: 'svg-editor',
    loadComponent: () => import('svg-editor').then((m) => m.SvgEditorComponent),
  },
  {
    path: 'dashboard-stats',
    loadChildren: () => import('stats-view').then((m) => m.routes),
  },
  {
    path: 'micro-apps-todo-list',
    loadChildren: () => import('mf-todo').then((m) => m.route),
  },
  {
    path: 'lib-test',
   // loadComponent: () => import('test-lib').then((m) => m.TestLibComponent),
    loadChildren: () => import('test-lib').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'ng-zorro-table',
    pathMatch: 'full',
  },
];
