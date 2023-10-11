import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxCreateApiCounterRoutingModule } from './ngrx-create-api-counter-routing.module';
import { NgrxCreateApiComponent } from './ngrx-create-api/ngrx-create-api.component';

@NgModule({
  declarations: [NgrxCreateApiComponent],
  imports: [CommonModule, NgrxCreateApiCounterRoutingModule],
})
export class NgrxCreateApiCounterModule {}
