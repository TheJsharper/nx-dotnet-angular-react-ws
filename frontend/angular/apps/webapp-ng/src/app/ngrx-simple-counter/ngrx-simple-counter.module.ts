import { CommonModule } from '@angular/common';
import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgrxSimpleCounterGrandchildComponent } from './ngrx-simple-counter-grandchild/ngrx-simple-counter-grandchild.component';
import { NgrxSimpleCounterChildComponent } from './ngrx-simple-counter-child/ngrx-simple-counter-child.component';
import { NgrxSimpleCounterComponent } from './ngrx-simple-counter.component';
import { NgRxSimpleCounterReducer } from './store/ngrx-simple-counter.reducer';

export const routes: Routes = [

  {
    path: '',
    component: NgrxSimpleCounterComponent,
    providers:[
      importProvidersFrom(
        StoreModule.forFeature('simpleCounter', NgRxSimpleCounterReducer)
      )
    ]
  }
]
/*
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),  CommonModule, NgrxSimpleCounterComponent, NgrxSimpleCounterChildComponent, NgrxSimpleCounterGrandchildComponent],
  exports: [RouterModule]
})
export class NgrxSimpleCounterModule { }*/
