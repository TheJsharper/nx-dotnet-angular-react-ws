import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgrxSimpleCounterGrandchildComponent } from './ngrx-simple-counter-grandchild/ngrx-simple-counter-grandchild.component';
import { NgrxSimpleCounterChildComponent } from './ngrx-simple-counter-child/ngrx-simple-counter-child.component';
import { NgrxSimpleCounterComponent } from './ngrx-simple-counter.component';
import { NgRxSimpleCounterReducer } from './store/ngrx-simple-counter.reducer';

const routes: Routes = [

  {
    path:'',
    component:NgrxSimpleCounterComponent
  }
]

@NgModule({
  declarations:[NgrxSimpleCounterComponent, NgrxSimpleCounterChildComponent, NgrxSimpleCounterGrandchildComponent],
  imports:[RouterModule.forChild(routes), StoreModule.forFeature('simpleCounter',NgRxSimpleCounterReducer), CommonModule],
  exports:[RouterModule]
})
export class NgrxSimpleCounterModule {}
