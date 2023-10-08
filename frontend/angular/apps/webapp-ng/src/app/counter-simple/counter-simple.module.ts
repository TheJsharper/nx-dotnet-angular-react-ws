import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterSimpleComponent } from './counter-simple.component';

import { RouterModule, Routes } from '@angular/router';
import { CounterSimpleChildComponent } from '../counter-simple-child/counter-simple-child.component';
import { CounterSimpleGrandchildComponent } from '../counter-simple-grandchild/counter-simple-grandchild.component';

export const routes: Routes = [{
  path: '',
  component: CounterSimpleComponent
}]

@NgModule({
  declarations: [CounterSimpleComponent, CounterSimpleChildComponent, CounterSimpleGrandchildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CounterSimpleModule { }
