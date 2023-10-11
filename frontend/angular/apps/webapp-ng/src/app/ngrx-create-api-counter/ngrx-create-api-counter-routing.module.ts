import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxCreateApiComponent } from './ngrx-create-api/ngrx-create-api.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxCreateApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxCreateApiCounterRoutingModule { }
