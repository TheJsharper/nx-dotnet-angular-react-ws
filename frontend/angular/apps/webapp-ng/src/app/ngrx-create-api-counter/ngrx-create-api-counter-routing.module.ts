import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxCreateApiComponent } from './ngrx-create-api/ngrx-create-api.component';
import { NgrxCreateApiCounterReducer } from './store/ngrx-create-api-counter.reducers';
import { StoreModule } from '@ngrx/store';

export const routes: Routes = [
  {
    path: '',
    component: NgrxCreateApiComponent,
    providers:[
      importProvidersFrom(
      StoreModule.forFeature("counterCreateApi", NgrxCreateApiCounterReducer)
      )
    ]

  }
];
/*
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxCreateApiCounterRoutingModule { }
*/