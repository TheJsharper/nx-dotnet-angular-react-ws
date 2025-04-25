import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryComponent } from './address/delivery.component';
import { JsonPipe, NgIf } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-main',
  imports: [ReactiveFormsModule, DeliveryComponent, FormsModule, NgIf, JsonPipe, MatTabsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {

  formGroup = new FormGroup({

    display: new FormControl
  });

  submit() {
    console.log(this.formGroup.value);
  }
}
