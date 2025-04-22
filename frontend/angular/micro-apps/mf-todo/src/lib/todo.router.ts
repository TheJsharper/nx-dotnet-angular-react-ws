import { importProvidersFrom } from "@angular/core";
import { Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./mf-todo/store/todo.reducer";
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';

export const route: Routes =[

    {
        path: '',
        loadComponent: ()=> import("./mf-todo/mf-todo.component").then( c => c.MfTodoComponent),
        providers:[
            importProvidersFrom(
                StoreModule.forFeature("todos", reducers),
                StoreDevtoolsModule.instrument({
                  maxAge: 25,
                  logOnly: true
                } as StoreDevtoolsOptions))
        ]
    }
]