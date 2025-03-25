import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { NgrxCreateApiMenubarComponent } from "./ngrx-create-api-plot-menu-bar.component";

@NgModule({
    declarations: [],
    imports: [CommonModule, ReactiveFormsModule, NgrxCreateApiMenubarComponent],
    exports: [NgrxCreateApiMenubarComponent]
})
export class NgrxCreateApiMenubarModule {


}