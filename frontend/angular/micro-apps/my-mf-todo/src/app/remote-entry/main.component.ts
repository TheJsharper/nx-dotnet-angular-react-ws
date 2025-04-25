import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryComponent, DeliveryWithInputComponent } from './address/delivery.component';
import { JsonPipe, NgIf } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TwoWayDataBindingComponent, CustomTwoWayDataBindingUsingOwnBindingComponent } from "./advance-forms";
@Component({
  selector: 'app-main',
  imports: [ReactiveFormsModule, DeliveryComponent, FormsModule, NgIf, JsonPipe, MatTabsModule, TwoWayDataBindingComponent, CustomTwoWayDataBindingUsingOwnBindingComponent, DeliveryWithInputComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {

  counter = 15;
  counterBindingClass = 10
  formGroup = new FormGroup({

    display: new FormControl
  });
  formGroupInput = new FormGroup({

    display: new FormControl
  });

  counterBindingClassHandler(value: number) {
    this.counterBindingClass = value;   
  }

  submit() {
    console.log(this.formGroup.value);
  }
}
