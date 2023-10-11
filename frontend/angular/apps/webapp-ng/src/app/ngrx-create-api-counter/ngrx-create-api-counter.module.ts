import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxCreateApiCounterRoutingModule } from './ngrx-create-api-counter-routing.module';
import { NgrxCreateApiComponent } from './ngrx-create-api/ngrx-create-api.component';
import { NgrxCreateApiCounterChildComponent } from './ngrx-create-api-counter-child/ngrx-create-api-counter-child.component';
import { NgrxCreateApiCounterGrandchildComponent } from './ngrx-create-api-counter-grandchild/ngrx-create-api-counter-grandchild.component';

@NgModule({
  declarations: [
    NgrxCreateApiComponent,
    NgrxCreateApiCounterChildComponent,
    NgrxCreateApiCounterGrandchildComponent,
  ],
  imports: [CommonModule, NgrxCreateApiCounterRoutingModule],
})
export class NgrxCreateApiCounterModule {}
