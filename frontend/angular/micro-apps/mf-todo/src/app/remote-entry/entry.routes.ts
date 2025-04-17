import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { reducers } from '../../lib/mf-todo/store/todo.reducer';
//import { reducers } from "../../../mf-todo/store/todo.reducer";
export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent ,   providers:[
    importProvidersFrom(
        StoreModule.forFeature("todos", reducers),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: true
        } as StoreDevtoolsOptions))
]},
];
